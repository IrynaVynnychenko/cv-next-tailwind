'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'

export type SceneShape = 'knot' | 'crystal' | 'ring'
export type SceneFinish = 'glass' | 'chrome' | 'ember'

type ThreeKnotSceneProps = {
  theme: 'light' | 'dark'
  shape: SceneShape
  finish: SceneFinish
  reducedMotion: boolean
  active: boolean
  onError?: () => void
}

const BG = {
  dark: 0x09090b,
  light: 0xc4c4c8,
} as const

function makeGeometry(shape: SceneShape, mobile: boolean) {
  const tubular = mobile ? 96 : 160
  if (shape === 'crystal') return new THREE.IcosahedronGeometry(1.22, 0)
  if (shape === 'ring') return new THREE.TorusGeometry(1.02, 0.3, mobile ? 24 : 36, mobile ? 80 : 120)
  return new THREE.TorusKnotGeometry(0.92, 0.3, tubular, mobile ? 14 : 24, 2, 3)
}

function applyFinish(material: THREE.MeshPhysicalMaterial, finish: SceneFinish, dark: boolean) {
  material.transmission = 0
  material.emissive.set(0x000000)
  material.emissiveIntensity = 0
  material.iridescence = 0
  material.attenuationDistance = Infinity

  if (finish === 'glass') {
    material.color.set(dark ? 0xf0f9ff : 0x0c4a6e)
    material.metalness = 0.08
    material.roughness = dark ? 0.04 : 0.08
    material.transmission = dark ? 0.92 : 0.55
    material.thickness = 1.8
    material.ior = 1.5
    material.iridescence = 1
    material.iridescenceIOR = 1.28
    material.iridescenceThicknessRange = [120, 420]
    material.clearcoat = 1
    material.clearcoatRoughness = 0.04
    material.attenuationColor.set(dark ? 0x38bdf8 : 0x0369a1)
    material.attenuationDistance = dark ? 1.8 : 1.2
    material.envMapIntensity = dark ? 1.55 : 1.2
    return
  }

  if (finish === 'chrome') {
    material.color.set(dark ? 0xf4f4f5 : 0x3f3f46)
    material.metalness = 1
    material.roughness = dark ? 0.08 : 0.14
    material.clearcoat = 0.7
    material.clearcoatRoughness = 0.08
    material.envMapIntensity = 1.45
    return
  }

  material.color.set(dark ? 0x1c1917 : 0x1c1917)
  material.metalness = 0.72
  material.roughness = 0.18
  material.emissive.set(dark ? 0xf97316 : 0xea580c)
  material.emissiveIntensity = dark ? 1.2 : 1.05
  material.clearcoat = 0.4
  material.clearcoatRoughness = 0.22
  material.envMapIntensity = 1
}

function makeParticles(count: number, dark: boolean) {
  const positions = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  for (let i = 0; i < count; i += 1) {
    const radius = 2.15 + Math.random() * 1.55
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = radius * Math.cos(phi)
    sizes[i] = 1.2 + Math.random() * 3.4
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: dark ? THREE.AdditiveBlending : THREE.NormalBlending,
    uniforms: {
      uTime: { value: 0 },
      uMotion: { value: 1 },
      uColor: { value: new THREE.Color(dark ? 0x7dd3fc : 0x0e7490) },
    },
    vertexShader: `
      uniform float uTime;
      uniform float uMotion;
      attribute float aSize;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p += sin(uTime * 0.35 + position.x * 1.8) * 0.045 * uMotion * vec3(1.0, 0.55, 1.0);
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = aSize * (150.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
        vAlpha = 0.45 + 0.55 * abs(sin(uTime * 0.7 + position.y * 2.4));
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      varying float vAlpha;
      void main() {
        vec2 uv = gl_PointCoord - vec2(0.5);
        float d = length(uv);
        if (d > 0.5) discard;
        float glow = 1.0 - smoothstep(0.0, 0.5, d);
        gl_FragColor = vec4(uColor, glow * vAlpha);
      }
    `,
  })

  const points = new THREE.Points(geometry, material)
  points.frustumCulled = false
  return { points, material }
}

export default function ThreeKnotScene({
  theme,
  shape,
  finish,
  reducedMotion,
  active,
  onError,
}: ThreeKnotSceneProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const shapeRef = useRef(shape)
  const finishRef = useRef(finish)
  const themeRef = useRef(theme)
  const motionRef = useRef(reducedMotion)
  const activeRef = useRef(active)
  const onErrorRef = useRef(onError)

  shapeRef.current = shape
  finishRef.current = finish
  themeRef.current = theme
  motionRef.current = reducedMotion
  activeRef.current = active
  onErrorRef.current = onError

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const mobile = window.innerWidth < 768 || (navigator.hardwareConcurrency || 8) <= 4
    const dark = themeRef.current === 'dark'

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !mobile,
        alpha: false,
        powerPreference: 'high-performance',
      })
    } catch {
      onErrorRef.current?.()
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.35 : 1.7))
    renderer.setSize(host.clientWidth, host.clientHeight, false)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = dark ? 1.15 : 1.05
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.cursor = 'grab'
    renderer.domElement.setAttribute('aria-hidden', 'true')
    host.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(BG[themeRef.current])
    scene.fog = new THREE.Fog(BG[themeRef.current], 10, 20)

    const camera = new THREE.PerspectiveCamera(42, host.clientWidth / Math.max(host.clientHeight, 1), 0.1, 40)
    camera.position.set(2.55, 1.35, 3.35)

    const pmrem = new THREE.PMREMGenerator(renderer)
    const envScene = new RoomEnvironment()
    const envMap = pmrem.fromScene(envScene, 0.04).texture
    scene.environment = envMap
    envScene.dispose()

    const heroMaterial = new THREE.MeshPhysicalMaterial()
    applyFinish(heroMaterial, finishRef.current, dark)
    const hero = new THREE.Mesh(makeGeometry(shapeRef.current, mobile), heroMaterial)
    hero.castShadow = false
    scene.add(hero)

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.26, 32, 32),
      new THREE.MeshBasicMaterial({
        color: dark ? 0x38bdf8 : 0x0e7490,
        transparent: true,
        opacity: 0.9,
      })
    )
    scene.add(core)

    const particleCount = mobile ? 420 : 1100
    const { points, material: particleMaterial } = makeParticles(particleCount, dark)
    scene.add(points)

    const key = new THREE.PointLight(0x7dd3fc, dark ? 22 : 16, 12)
    key.position.set(2.4, 2.1, 2.2)
    const fill = new THREE.PointLight(0xf472b6, dark ? 10 : 8, 12)
    fill.position.set(-2.6, 0.4, 1.4)
    const rim = new THREE.PointLight(0xfbbf24, dark ? 12 : 9, 12)
    rim.position.set(0.2, -2.2, -1.8)
    scene.add(key, fill, rim)
    const ambient = new THREE.AmbientLight(0xffffff, dark ? 0.16 : 0.28)
    scene.add(ambient)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.06
    controls.enablePan = false
    controls.minDistance = 2.4
    controls.maxDistance = 6.2
    controls.autoRotate = !motionRef.current
    controls.autoRotateSpeed = 0.55
    controls.target.set(0, 0, 0)

    const composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(host.clientWidth, host.clientHeight),
      dark ? (mobile ? 0.38 : 0.55) : 0.22,
      0.55,
      0.22
    )
    composer.addPass(bloom)
    composer.addPass(new OutputPass())

    const clock = new THREE.Clock()
    let frame = 0
    let disposed = false
    let lastTheme = themeRef.current
    let lastFinish = finishRef.current
    let lastShape = shapeRef.current
    let lastMotion = motionRef.current

    const grab = () => {
      renderer.domElement.style.cursor = 'grabbing'
    }
    const ungrab = () => {
      renderer.domElement.style.cursor = 'grab'
    }
    renderer.domElement.addEventListener('pointerdown', grab)
    renderer.domElement.addEventListener('pointerup', ungrab)
    renderer.domElement.addEventListener('pointerleave', ungrab)

    const syncFromProps = () => {
      const nextDark = themeRef.current === 'dark'
      const themeChanged = themeRef.current !== lastTheme
      const finishChanged = finishRef.current !== lastFinish

      if (themeChanged) {
        scene.background = new THREE.Color(BG[themeRef.current])
        if (scene.fog instanceof THREE.Fog) scene.fog.color.set(BG[themeRef.current])
        renderer.toneMappingExposure = nextDark ? 1.15 : 1.05
        bloom.strength = nextDark ? (mobile ? 0.38 : 0.55) : 0.22
        particleMaterial.uniforms.uColor.value.set(nextDark ? 0x7dd3fc : 0x0e7490)
        particleMaterial.blending = nextDark ? THREE.AdditiveBlending : THREE.NormalBlending
        ;(core.material as THREE.MeshBasicMaterial).color.set(nextDark ? 0x38bdf8 : 0x0e7490)
        key.intensity = nextDark ? 22 : 16
        fill.intensity = nextDark ? 10 : 8
        rim.intensity = nextDark ? 12 : 9
        ambient.intensity = nextDark ? 0.16 : 0.28
        lastTheme = themeRef.current
      }
      if (finishChanged || themeChanged) {
        applyFinish(heroMaterial, finishRef.current, nextDark)
        core.visible = finishRef.current !== 'chrome'
        lastFinish = finishRef.current
      }
      if (motionRef.current !== lastMotion) {
        controls.autoRotate = !motionRef.current
        particleMaterial.uniforms.uMotion.value = motionRef.current ? 0 : 1
        lastMotion = motionRef.current
      }
      if (shapeRef.current !== lastShape) {
        hero.geometry.dispose()
        hero.geometry = makeGeometry(shapeRef.current, mobile)
        lastShape = shapeRef.current
      }
    }

    applyFinish(heroMaterial, finishRef.current, dark)
    core.visible = finishRef.current !== 'chrome'
    controls.autoRotate = !motionRef.current
    particleMaterial.uniforms.uMotion.value = motionRef.current ? 0 : 1

    const tick = () => {
      if (disposed) return
      frame = requestAnimationFrame(tick)

      const visible = activeRef.current && document.visibilityState === 'visible'
      if (!visible) return

      syncFromProps()
      const t = clock.getElapsedTime()
      particleMaterial.uniforms.uTime.value = t
      if (!motionRef.current) {
        hero.rotation.y = t * 0.12
        core.rotation.y = -t * 0.18
        points.rotation.y = t * 0.04
      }
      controls.update()
      composer.render()
    }
    frame = requestAnimationFrame(tick)

    const resize = () => {
      const width = host.clientWidth
      const height = Math.max(host.clientHeight, 1)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
      composer.setSize(width, height)
      bloom.setSize(width, height)
    }
    const ro = new ResizeObserver(resize)
    ro.observe(host)

    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      ro.disconnect()
      renderer.domElement.removeEventListener('pointerdown', grab)
      renderer.domElement.removeEventListener('pointerup', ungrab)
      renderer.domElement.removeEventListener('pointerleave', ungrab)
      controls.dispose()
      composer.dispose()
      pmrem.dispose()
      envMap.dispose()
      hero.geometry.dispose()
      heroMaterial.dispose()
      core.geometry.dispose()
      ;(core.material as THREE.MeshBasicMaterial).dispose()
      points.geometry.dispose()
      particleMaterial.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div ref={hostRef} className="absolute inset-0" />
}
