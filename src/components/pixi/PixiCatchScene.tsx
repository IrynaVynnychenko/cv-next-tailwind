'use client'

import { useEffect, useRef } from 'react'
import { Application, Container, Graphics } from 'pixi.js'

export type GameMode = 'calm' | 'arcade' | 'storm'

export const ROUND_SECONDS = 60

export type GameHud = {
  score: number
  lives: number
  combo: number
  over: boolean
  timeLeft: number
}

type PixiCatchSceneProps = {
  theme: 'light' | 'dark'
  mode: GameMode
  reducedMotion: boolean
  active: boolean
  runId: number
  onHud: (hud: GameHud) => void
  onError?: () => void
}

const MODE = {
  calm: { spawn: 1.05, gravity: 200, rotten: 0.16, cap: 10 },
  arcade: { spawn: 0.58, gravity: 300, rotten: 0.28, cap: 16 },
  storm: { spawn: 0.3, gravity: 430, rotten: 0.38, cap: 26 },
} as const

const FRUITS = ['apple', 'orange', 'lemon', 'pear', 'strawberry', 'cherry', 'grape', 'peach', 'banana', 'watermelon'] as const
type FruitKind = (typeof FRUITS)[number]
type DropKind = FruitKind | 'rotten'

const FRUIT_COLOR: Record<DropKind, number> = {
  apple: 0xdc2626,
  orange: 0xf97316,
  lemon: 0xfacc15,
  pear: 0x84cc16,
  strawberry: 0xe11d48,
  cherry: 0xbe123c,
  grape: 0xc084fc,
  peach: 0xfb7185,
  banana: 0xfde047,
  watermelon: 0xf43f5e,
  rotten: 0xa3a26a,
}

type Drop = {
  view: Graphics
  vx: number
  vy: number
  spin: number
  kind: DropKind
  r: number
}

type Spark = {
  view: Graphics
  vx: number
  vy: number
  life: number
  max: number
}

type Cloud = { view: Graphics; x: number; y: number; speed: number; scale: number }
type Leaf = { view: Graphics; x: number; y: number; vx: number; vy: number; spin: number; rot: number }

function mix(a: number, b: number, t: number) {
  const ar = (a >> 16) & 255
  const ag = (a >> 8) & 255
  const ab = a & 255
  const br = (b >> 16) & 255
  const bg = (b >> 8) & 255
  const bb = b & 255
  const r = Math.round(ar + (br - ar) * t)
  const g = Math.round(ag + (bg - ag) * t)
  const bl = Math.round(ab + (bb - ab) * t)
  return (r << 16) | (g << 8) | bl
}

function drawApple(g: Graphics, r: number) {
  g.circle(0, 2, r)
  g.fill(0xdc2626)
  g.ellipse(-r * 0.32, -r * 0.28, r * 0.28, r * 0.16)
  g.fill({ color: 0xffffff, alpha: 0.28 })
  g.roundRect(-1.1, -r - 5, 2.2, 7, 1)
  g.fill(0x3f6212)
  g.ellipse(5, -r - 2, 6.2, 2.8)
  g.fill(0x65a30d)
}

function drawOrange(g: Graphics, r: number) {
  g.circle(0, 0, r)
  g.fill(0xf97316)
  g.circle(0, 0, r * 0.62)
  g.stroke({ width: 1.2, color: 0xea580c, alpha: 0.45 })
  g.ellipse(-r * 0.28, -r * 0.3, r * 0.22, r * 0.14)
  g.fill({ color: 0xffffff, alpha: 0.22 })
  g.ellipse(4, -r - 1, 5.5, 2.6)
  g.fill(0x4d7c0f)
}

function drawLemon(g: Graphics, r: number) {
  g.ellipse(0, 0, r * 0.72, r)
  g.fill(0xfacc15)
  g.circle(0, -r + 2, 3.2)
  g.fill(0xfde047)
  g.circle(0, r - 2, 2.4)
  g.fill(0xeab308)
  g.ellipse(-r * 0.22, -r * 0.22, r * 0.18, r * 0.12)
  g.fill({ color: 0xffffff, alpha: 0.35 })
}

function drawPear(g: Graphics, r: number) {
  g.circle(0, r * 0.28, r * 0.78)
  g.fill(0xa3e635)
  g.circle(0, -r * 0.22, r * 0.48)
  g.fill(0x84cc16)
  g.ellipse(-r * 0.18, -r * 0.38, r * 0.16, r * 0.12)
  g.fill({ color: 0xffffff, alpha: 0.28 })
  g.roundRect(-1, -r - 3, 2, 6, 1)
  g.fill(0x3f6212)
  g.ellipse(5, -r - 1, 5.5, 2.4)
  g.fill(0x4d7c0f)
}

function drawStrawberry(g: Graphics, r: number) {
  g.poly([0, r, -r * 0.88, r * 0.12, -r * 0.7, -r * 0.38, 0, -r * 0.52, r * 0.7, -r * 0.38, r * 0.88, r * 0.12])
  g.fill(0xe11d48)
  const seeds: Array<[number, number]> = [
    [-0.28, -0.02],
    [0.22, -0.12],
    [-0.08, 0.22],
    [0.3, 0.18],
    [-0.38, 0.32],
    [0.06, 0.48],
  ]
  for (const [sx, sy] of seeds) {
    g.ellipse(sx * r, sy * r, 1.15, 0.7)
    g.fill(0xfde047)
  }
  g.poly([0, -r * 0.28, -r * 0.5, -r * 0.92, -0.2, -r * 0.5, 0, -r * 0.7, 0.2, -r * 0.5, r * 0.5, -r * 0.92])
  g.fill(0x16a34a)
}

function drawCherry(g: Graphics, r: number) {
  g.moveTo(-r * 0.36, -r * 0.15)
  g.quadraticCurveTo(0, -r * 0.95, 2, -r * 1.05)
  g.stroke({ width: 1.7, color: 0x3f6212 })
  g.moveTo(r * 0.38, -r * 0.08)
  g.quadraticCurveTo(4, -r * 0.85, 2, -r * 1.05)
  g.stroke({ width: 1.7, color: 0x3f6212 })
  g.circle(-r * 0.38, r * 0.18, r * 0.5)
  g.fill(0xdc2626)
  g.circle(r * 0.4, r * 0.24, r * 0.46)
  g.fill(0xb91c1c)
  g.circle(-r * 0.52, r * 0.02, r * 0.12)
  g.fill({ color: 0xffffff, alpha: 0.3 })
}

function drawGrape(g: Graphics, r: number) {
  const dots: Array<[number, number, number]> = [
    [0, -0.42, 0xc084fc],
    [-0.42, -0.08, 0xa78bfa],
    [0.42, -0.08, 0xe879f9],
    [-0.58, 0.38, 0x8b5cf6],
    [0, 0.32, 0xd8b4fe],
    [0.58, 0.38, 0xa78bfa],
    [0, 0.78, 0xc084fc],
  ]
  for (const [x, y, color] of dots) {
    g.circle(x * r, y * r, r * 0.34)
    g.fill(color)
  }
  g.circle(-r * 0.12, -r * 0.5, r * 0.1)
  g.fill({ color: 0xffffff, alpha: 0.35 })
  g.ellipse(0, -r * 0.78, 5.5, 2.6)
  g.fill(0x4d7c0f)
}

function drawPeach(g: Graphics, r: number) {
  g.circle(0, 0, r)
  g.fill(0xfb923c)
  g.circle(r * 0.12, 0, r * 0.88)
  g.fill(0xfb7185)
  g.ellipse(-r * 0.28, -r * 0.28, r * 0.22, r * 0.14)
  g.fill({ color: 0xffffff, alpha: 0.28 })
  g.ellipse(5, -r - 1, 6, 2.6)
  g.fill(0x65a30d)
}

function drawBanana(g: Graphics, r: number) {
  g.poly([
    -r * 0.95,
    r * 0.15,
    -r * 0.55,
    -r * 0.5,
    r * 0.15,
    -r * 0.72,
    r * 0.92,
    -r * 0.18,
    r * 0.72,
    r * 0.22,
    r * 0.08,
    -r * 0.18,
    -r * 0.5,
    r * 0.08,
  ])
  g.fill(0xfacc15)
  g.poly([-r * 0.92, r * 0.08, -r * 0.78, -0.02, -r * 0.7, r * 0.18])
  g.fill(0xca8a04)
  g.ellipse(-r * 0.2, -r * 0.38, r * 0.18, r * 0.08)
  g.fill({ color: 0xffffff, alpha: 0.28 })
}

function drawWatermelon(g: Graphics, r: number) {
  g.moveTo(-r * 0.95, r * 0.2)
  g.arc(0, r * 0.15, r, Math.PI * 0.95, Math.PI * 0.05, true)
  g.closePath()
  g.fill(0x16a34a)
  g.moveTo(-r * 0.78, r * 0.12)
  g.arc(0, r * 0.15, r * 0.82, Math.PI * 0.92, Math.PI * 0.08, true)
  g.closePath()
  g.fill(0xf43f5e)
  const seeds: Array<[number, number]> = [
    [-0.22, 0.02],
    [0.18, 0.0],
    [-0.02, 0.28],
    [0.32, 0.22],
    [-0.38, 0.22],
  ]
  for (const [sx, sy] of seeds) {
    g.ellipse(sx * r, sy * r, 1.4, 0.7)
    g.fill(0x1c1917)
  }
}

function drawRotten(g: Graphics, r: number) {
  g.circle(0, 2, r)
  g.fill(0xc4b454)
  g.circle(-r * 0.22, -r * 0.12, r * 0.55)
  g.fill(0xa3a26a)
  g.circle(r * 0.28, r * 0.18, r * 0.32)
  g.fill(0x65a30d)
  g.circle(-r * 0.3, r * 0.32, r * 0.2)
  g.fill(0x4d7c0f)
  g.circle(r * 0.08, -r * 0.05, r * 0.22)
  g.fill(0x78716c)
  g.circle(r * 0.08, -r * 0.05, r * 0.12)
  g.fill(0x57534e)
  g.moveTo(r * 0.08, -r * 0.05)
  g.quadraticCurveTo(r * 0.55, r * 0.05, r * 0.7, r * 0.35)
  g.stroke({ width: 2.2, color: 0xf9a8d4 })
  g.circle(r * 0.72, r * 0.38, 2.4)
  g.fill(0xf9a8d4)
  g.roundRect(-1.1, -r - 4, 2.2, 6, 1)
  g.fill(0x3f6212)
  g.ellipse(5, -r - 1, 5.5, 2.2)
  g.fill(0x365314)
}

function drawFruit(g: Graphics, kind: DropKind, r: number) {
  g.clear()
  if (kind === 'apple') drawApple(g, r)
  else if (kind === 'orange') drawOrange(g, r)
  else if (kind === 'lemon') drawLemon(g, r)
  else if (kind === 'pear') drawPear(g, r)
  else if (kind === 'strawberry') drawStrawberry(g, r)
  else if (kind === 'cherry') drawCherry(g, r)
  else if (kind === 'grape') drawGrape(g, r)
  else if (kind === 'peach') drawPeach(g, r)
  else if (kind === 'banana') drawBanana(g, r)
  else if (kind === 'watermelon') drawWatermelon(g, r)
  else drawRotten(g, r)
}

function drawBasket(g: Graphics, w: number, hurt: boolean, dark: boolean) {
  g.clear()
  const wood = hurt ? 0x7f1d1d : dark ? 0xb45309 : 0xc2410c
  const rim = hurt ? 0x9f1239 : dark ? 0xfbbf24 : 0x78350f
  const inner = dark ? 0x44403c : 0xfef3c7
  g.ellipse(0, -10, w * 0.42, 16)
  g.stroke({ width: 3.4, color: wood })
  g.roundRect(-w / 2, -4, w, 44, 12)
  g.fill(wood)
  for (let i = 0; i < 8; i += 1) {
    g.moveTo(-w / 2 + 6, 4 + i * 4.2)
    g.lineTo(w / 2 - 6, 4 + i * 4.2)
    g.stroke({ width: 1.1, color: rim, alpha: 0.35 })
  }
  g.ellipse(0, -2, w / 2 - 3, 12)
  g.fill(inner)
  g.ellipse(0, -2, w / 2 - 3, 12)
  g.stroke({ width: 2.2, color: rim })
}

function drawCloud(g: Graphics, scale: number, dark: boolean) {
  g.clear()
  const color = dark ? 0xcbd5e1 : 0xffffff
  const alpha = dark ? 0.2 : 0.78
  g.ellipse(0, 0, 30 * scale, 14 * scale)
  g.fill({ color, alpha })
  g.ellipse(-20 * scale, 4 * scale, 16 * scale, 10 * scale)
  g.fill({ color, alpha })
  g.ellipse(18 * scale, 3 * scale, 18 * scale, 11 * scale)
  g.fill({ color, alpha })
  g.ellipse(4 * scale, -8 * scale, 14 * scale, 10 * scale)
  g.fill({ color, alpha })
}

function drawWorld(g: Graphics, width: number, height: number, dark: boolean) {
  g.clear()
  const top = dark ? 0x0b1220 : 0x38bdf8
  const mid = dark ? 0x1e1b4b : 0xbae6fd
  const bot = dark ? 0x312e81 : 0xfef9c3
  const bands = 14
  for (let i = 0; i < bands; i += 1) {
    const t = i / (bands - 1)
    const color = t < 0.5 ? mix(top, mid, t * 2) : mix(mid, bot, (t - 0.5) * 2)
    g.rect(0, (height * i) / bands - 1, width, height / bands + 2)
    g.fill(color)
  }

  if (dark) {
    for (let i = 0; i < 36; i += 1) {
      const seed = i * 19.17
      const x = (Math.sin(seed) * 0.5 + 0.5) * width
      const y = (Math.cos(seed * 1.3) * 0.5 + 0.5) * height * 0.48
      g.circle(x, y, i % 7 === 0 ? 1.5 : 0.7)
      g.fill({ color: 0xe2e8f0, alpha: 0.35 + (i % 5) * 0.08 })
    }
    const mx = width * 0.82
    const my = height * 0.16
    g.circle(mx, my, 42)
    g.fill({ color: 0xf8fafc, alpha: 0.08 })
    g.circle(mx, my, 22)
    g.fill(0xf1f5f9)
    g.circle(mx - 6, my - 5, 3.5)
    g.fill({ color: 0xcbd5e1, alpha: 0.7 })
    g.circle(mx + 7, my + 4, 2.4)
    g.fill({ color: 0xcbd5e1, alpha: 0.55 })
  } else {
    const sx = width * 0.84
    const sy = height * 0.16
    g.circle(sx, sy, 70)
    g.fill({ color: 0xfde047, alpha: 0.12 })
    g.circle(sx, sy, 42)
    g.fill({ color: 0xfacc15, alpha: 0.22 })
    g.circle(sx, sy, 22)
    g.fill(0xfde047)
  }

  const hillY = height * 0.62
  g.ellipse(width * 0.18, hillY + 36, width * 0.42, height * 0.28)
  g.fill(dark ? 0x14532d : 0x4d7c0f)
  g.ellipse(width * 0.72, hillY + 48, width * 0.5, height * 0.3)
  g.fill(dark ? 0x166534 : 0x65a30d)
  g.ellipse(width * 0.48, hillY + 70, width * 0.55, height * 0.26)
  g.fill(dark ? 0x15803d : 0x84cc16)

  g.rect(0, height * 0.78, width, height * 0.22)
  g.fill(dark ? 0x3f6212 : 0xa3e635)
  g.rect(0, height * 0.88, width, height * 0.12)
  g.fill(dark ? 0x1a2e05 : 0x4d7c0f)

  for (let i = 0; i < 18; i += 1) {
    const x = ((i + 0.35) / 18) * width
    g.moveTo(x, height * 0.78)
    g.quadraticCurveTo(x + 4, height * 0.74, x + 2, height * 0.7)
    g.stroke({ width: 1.2, color: dark ? 0x4d7c0f : 0x22c55e, alpha: 0.7 })
  }

  drawTree(g, width * 0.1, height * 0.82, 1.05, dark)
  drawTree(g, width * 0.22, height * 0.84, 0.78, dark)
  drawTree(g, width * 0.88, height * 0.83, 1.12, dark)
  drawTree(g, width * 0.76, height * 0.85, 0.72, dark)
}

function drawTree(g: Graphics, x: number, y: number, scale: number, dark: boolean) {
  const trunk = dark ? 0x44403c : 0x7c2d12
  const leafA = dark ? 0x166534 : 0x16a34a
  const leafB = dark ? 0x15803d : 0x22c55e
  g.roundRect(x - 6 * scale, y - 52 * scale, 12 * scale, 54 * scale, 3)
  g.fill(trunk)
  g.circle(x, y - 70 * scale, 28 * scale)
  g.fill(leafA)
  g.circle(x - 22 * scale, y - 52 * scale, 20 * scale)
  g.fill(leafB)
  g.circle(x + 22 * scale, y - 54 * scale, 21 * scale)
  g.fill(leafA)
  g.circle(x + 4 * scale, y - 42 * scale, 18 * scale)
  g.fill(leafB)
  const fruits: Array<[number, number, number]> = [
    [-10, -62, 0xdc2626],
    [12, -58, 0xf97316],
    [-4, -78, 0xfacc15],
    [18, -44, 0xe11d48],
  ]
  for (const [fx, fy, color] of fruits) {
    g.circle(x + fx * scale, y + fy * scale, 4.2 * scale)
    g.fill(color)
  }
}

export default function PixiCatchScene({
  theme,
  mode,
  reducedMotion,
  active,
  runId,
  onHud,
  onError,
}: PixiCatchSceneProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const themeRef = useRef(theme)
  const modeRef = useRef(mode)
  const motionRef = useRef(reducedMotion)
  const activeRef = useRef(active)
  const runRef = useRef(runId)
  const hudRef = useRef(onHud)
  const errorRef = useRef(onError)

  themeRef.current = theme
  modeRef.current = mode
  motionRef.current = reducedMotion
  activeRef.current = active
  runRef.current = runId
  hudRef.current = onHud
  errorRef.current = onError

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let cancelled = false
    let app: Application | null = null
    let tickerFn: ((ticker: { deltaMS: number }) => void) | null = null
    let onKey: ((event: KeyboardEvent) => void) | null = null
    let onPointer: (event: PointerEvent) => void = () => {}
    let onLeave = () => {}

    const boot = async () => {
      const next = new Application()
      const mobile = host.clientWidth < 640 || window.matchMedia('(pointer: coarse)').matches
      try {
        await next.init({
          width: Math.max(host.clientWidth, 1),
          height: Math.max(host.clientHeight, 1),
          background: themeRef.current === 'dark' ? 0x0b1220 : 0x38bdf8,
          antialias: true,
          autoDensity: true,
          resolution: Math.min(window.devicePixelRatio || 1, mobile ? 1.35 : 1.75),
          preference: 'webgl',
          hello: false,
          resizeTo: host,
        })
      } catch {
        if (!cancelled) errorRef.current?.()
        return
      }

      if (cancelled) {
        next.destroy(true, true)
        return
      }

      app = next
      const canvas = app.canvas as HTMLCanvasElement
      canvas.style.position = 'absolute'
      canvas.style.inset = '0'
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      canvas.style.touchAction = 'none'
      canvas.style.cursor = 'ew-resize'
      host.appendChild(canvas)

      const world = new Graphics()
      const cloudLayer = new Container()
      const leafLayer = new Container()
      const dropsLayer = new Container()
      const sparksLayer = new Container()
      const basket = new Graphics()
      app.stage.addChild(world, cloudLayer, leafLayer, dropsLayer, sparksLayer, basket)

      const clouds: Cloud[] = []
      const leaves: Leaf[] = []
      const drops: Drop[] = []
      const sparks: Spark[] = []
      const sparkCap = mobile ? 28 : 52
      const keys = { left: false, right: false }
      const basketW = mobile ? 108 : 128
      let targetX = app.screen.width / 2
      let paddleX = targetX
      let spawnAcc = 0
      let comboAge = 0
      let hurt = 0
      let lastTheme = themeRef.current
      let lastRun = runRef.current
      let lastW = 0
      let lastH = 0
      let lastHud: GameHud = { score: 0, lives: 3, combo: 0, over: false, timeLeft: ROUND_SECONDS }
      let hud: GameHud = { ...lastHud }
      let lastHurtOn = false
      let timeAcc = 0

      const emitHud = () => {
        if (
          hud.score === lastHud.score &&
          hud.lives === lastHud.lives &&
          hud.combo === lastHud.combo &&
          hud.over === lastHud.over &&
          hud.timeLeft === lastHud.timeLeft
        ) {
          return
        }
        lastHud = { ...hud }
        hudRef.current(lastHud)
      }

      const layoutAtmosphere = (width: number, height: number, dark: boolean) => {
        cloudLayer.removeChildren()
        for (const cloud of clouds) cloud.view.destroy()
        clouds.length = 0
        leafLayer.removeChildren()
        for (const leaf of leaves) leaf.view.destroy()
        leaves.length = 0

        const cloudCount = mobile ? 3 : 5
        for (let i = 0; i < cloudCount; i += 1) {
          const view = new Graphics()
          const scale = 0.7 + Math.random() * 0.7
          drawCloud(view, scale, dark)
          const x = (width * (i + 0.2)) / cloudCount
          const y = height * (0.08 + Math.random() * 0.22)
          view.position.set(x, y)
          cloudLayer.addChild(view)
          clouds.push({ view, x, y, speed: 8 + Math.random() * 14, scale })
        }

        const leafCount = mobile ? 8 : 16
        for (let i = 0; i < leafCount; i += 1) {
          const view = new Graphics()
          const color = i % 3 === 0 ? 0xf59e0b : i % 3 === 1 ? 0x65a30d : 0x16a34a
          view.ellipse(0, 0, 5, 2.4)
          view.fill({ color, alpha: dark ? 0.55 : 0.8 })
          const x = Math.random() * width
          const y = Math.random() * height
          view.position.set(x, y)
          leafLayer.addChild(view)
          leaves.push({
            view,
            x,
            y,
            vx: 12 + Math.random() * 22,
            vy: 8 + Math.random() * 16,
            spin: (Math.random() - 0.5) * 2.4,
            rot: Math.random() * Math.PI,
          })
        }
      }

      const paintWorld = () => {
        if (!app) return
        const width = app.screen.width
        const height = app.screen.height
        const dark = themeRef.current === 'dark'
        app.renderer.background.color = dark ? 0x0b1220 : 0x38bdf8
        drawWorld(world, width, height, dark)
        layoutAtmosphere(width, height, dark)
        lastW = width
        lastH = height
        lastTheme = themeRef.current
      }

      const reset = () => {
        for (const drop of drops) drop.view.destroy()
        drops.length = 0
        dropsLayer.removeChildren()
        for (const spark of sparks) spark.view.destroy()
        sparks.length = 0
        sparksLayer.removeChildren()
        hud = { score: 0, lives: 3, combo: 0, over: false, timeLeft: ROUND_SECONDS }
        spawnAcc = 0
        comboAge = 0
        timeAcc = 0
        hurt = 0
        paddleX = app!.screen.width / 2
        targetX = paddleX
        emitHud()
      }

      const burst = (x: number, y: number, color: number, good: boolean) => {
        const reduced = motionRef.current
        const count = reduced ? 4 : good ? 16 : 10
        for (let i = 0; i < count; i += 1) {
          if (sparks.length >= sparkCap) {
            const old = sparks.shift()
            if (old) {
              old.view.destroy()
              sparksLayer.removeChild(old.view)
            }
          }
          const view = new Graphics()
          view.circle(0, 0, 1.3 + Math.random() * 1.8)
          view.fill({ color, alpha: 0.95 })
          view.position.set(x, y)
          sparksLayer.addChild(view)
          const angle = Math.random() * Math.PI * 2
          const speed = 50 + Math.random() * (good ? 190 : 120)
          sparks.push({
            view,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: reduced ? 0.2 : 0.5 + Math.random() * 0.25,
            max: 0.75,
          })
        }
      }

      const spawnDrop = () => {
        if (!app || hud.over) return
        const cfg = MODE[modeRef.current]
        if (drops.length >= cfg.cap) return
        const kind: DropKind = Math.random() < cfg.rotten ? 'rotten' : FRUITS[Math.floor(Math.random() * FRUITS.length)]
        const r = kind === 'watermelon' || kind === 'grape' ? 18 + Math.random() * 4 : 15 + Math.random() * 5
        const view = new Graphics()
        drawFruit(view, kind, r)
        view.position.set(28 + Math.random() * Math.max(app.screen.width - 56, 56), -28)
        dropsLayer.addChild(view)
        drops.push({
          view,
          vx: (Math.random() - 0.5) * 36,
          vy: 32 + Math.random() * 44,
          spin: (Math.random() - 0.5) * 2.6,
          kind,
          r,
        })
      }

      paintWorld()
      drawBasket(basket, basketW, false, themeRef.current === 'dark')
      basket.position.set(paddleX, app.screen.height - 58)
      hudRef.current(hud)

      if (cancelled) {
        next.destroy(true, true)
        app = null
        return
      }

      onPointer = (event: PointerEvent) => {
        const bounds = host.getBoundingClientRect()
        targetX = ((event.clientX - bounds.left) / bounds.width) * app!.screen.width
      }
      onLeave = () => {
        keys.left = false
        keys.right = false
      }
      onKey = (event: KeyboardEvent) => {
        if (!activeRef.current) return
        const left = event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A'
        const right = event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D'
        if (!left && !right) return
        event.preventDefault()
        keys.left = left ? event.type === 'keydown' : keys.left
        if (left && event.type === 'keyup') keys.left = false
        keys.right = right ? event.type === 'keydown' : keys.right
        if (right && event.type === 'keyup') keys.right = false
      }

      host.addEventListener('pointermove', onPointer)
      host.addEventListener('pointerdown', onPointer)
      host.addEventListener('pointerleave', onLeave)
      window.addEventListener('keydown', onKey)
      window.addEventListener('keyup', onKey)

      tickerFn = (ticker) => {
        if (!app) return
        const visible = activeRef.current && document.visibilityState === 'visible'
        if (!visible) return

        const dt = Math.min(ticker.deltaMS / 1000, 0.05)
        const motion = !motionRef.current
        const themeNow = themeRef.current
        const dark = themeNow === 'dark'
        const cfg = MODE[modeRef.current]
        const width = app.screen.width
        const height = app.screen.height

        if (runRef.current !== lastRun) {
          lastRun = runRef.current
          reset()
        }

        if (width !== lastW || height !== lastH || themeNow !== lastTheme) {
          paintWorld()
          drawBasket(basket, basketW, lastHurtOn, dark)
        }

        if (keys.left) targetX -= (motion ? 430 : 280) * dt
        if (keys.right) targetX += (motion ? 430 : 280) * dt
        targetX = Math.max(basketW / 2, Math.min(width - basketW / 2, targetX))
        const follow = motion ? 14 : 9
        paddleX += (targetX - paddleX) * (1 - Math.exp(-follow * dt))
        basket.position.set(paddleX, height - 58)
        if (hurt > 0) hurt = Math.max(0, hurt - dt)
        const hurtOn = hurt > 0
        if (hurtOn !== lastHurtOn || themeNow !== lastTheme) {
          drawBasket(basket, basketW, hurtOn, dark)
          lastHurtOn = hurtOn
        }

        if (motion) {
          for (const cloud of clouds) {
            cloud.x += cloud.speed * dt
            if (cloud.x > width + 80) cloud.x = -80
            cloud.view.position.set(cloud.x, cloud.y)
          }
          for (const leaf of leaves) {
            leaf.x += leaf.vx * dt
            leaf.y += leaf.vy * dt
            leaf.rot += leaf.spin * dt
            if (leaf.x > width + 12) leaf.x = -12
            if (leaf.y > height + 12) leaf.y = -12
            leaf.view.position.set(leaf.x, leaf.y)
            leaf.view.rotation = leaf.rot
          }
        }

        if (!hud.over) {
          timeAcc += dt
          if (timeAcc >= 1) {
            const passed = Math.floor(timeAcc)
            timeAcc -= passed
            hud.timeLeft = Math.max(0, hud.timeLeft - passed)
            if (hud.timeLeft <= 0) {
              hud.timeLeft = 0
              hud.over = true
            }
            emitHud()
          }
          spawnAcc += dt
          const interval = motion ? cfg.spawn : cfg.spawn * 1.45
          while (spawnAcc >= interval) {
            spawnAcc -= interval
            spawnDrop()
          }
        }

        if (hud.combo > 0) {
          comboAge += dt
          if (comboAge > 1.6) {
            hud.combo = 0
            comboAge = 0
            emitHud()
          }
        }

        const gravity = (motion ? cfg.gravity : cfg.gravity * 0.55) * (hud.over ? 0 : 1)
        for (let i = drops.length - 1; i >= 0; i -= 1) {
          const drop = drops[i]
          drop.vy += gravity * dt
          drop.view.x += drop.vx * dt
          drop.view.y += drop.vy * dt
          if (motion) drop.view.rotation += drop.spin * dt

          const half = basketW / 2 - 8
          const caught =
            drop.view.y > basket.y - 28 &&
            drop.view.y < basket.y + 36 &&
            Math.abs(drop.view.x - paddleX) < half + drop.r * 0.25

          if (caught && !hud.over) {
            const good = drop.kind !== 'rotten'
            burst(drop.view.x, drop.view.y, FRUIT_COLOR[drop.kind], good)
            drop.view.destroy()
            dropsLayer.removeChild(drop.view)
            drops.splice(i, 1)
            if (good) {
              hud.combo = Math.min(8, hud.combo + 1)
              hud.score += 10 * Math.max(1, hud.combo)
              comboAge = 0
            } else {
              hud.combo = 0
              comboAge = 0
              hud.lives -= 1
              hurt = 0.55
              if (hud.lives <= 0) {
                hud.lives = 0
                hud.over = true
              }
            }
            emitHud()
            continue
          }

          if (drop.view.y > height + 36) {
            if (drop.kind !== 'rotten' && !hud.over) {
              hud.combo = 0
              comboAge = 0
              emitHud()
            }
            drop.view.destroy()
            dropsLayer.removeChild(drop.view)
            drops.splice(i, 1)
          }
        }

        for (let i = sparks.length - 1; i >= 0; i -= 1) {
          const spark = sparks[i]
          spark.life -= dt
          spark.view.x += spark.vx * dt
          spark.view.y += spark.vy * dt
          spark.vy += 90 * dt
          spark.view.alpha = Math.max(0, spark.life / spark.max)
          if (spark.life <= 0) {
            spark.view.destroy()
            sparksLayer.removeChild(spark.view)
            sparks.splice(i, 1)
          }
        }
      }

      app.ticker.add(tickerFn)
    }

    boot().catch(() => {
      if (!cancelled) errorRef.current?.()
    })

    return () => {
      cancelled = true
      if (app && tickerFn) app.ticker.remove(tickerFn)
      host.removeEventListener('pointermove', onPointer)
      host.removeEventListener('pointerdown', onPointer)
      host.removeEventListener('pointerleave', onLeave)
      if (onKey) {
        window.removeEventListener('keydown', onKey)
        window.removeEventListener('keyup', onKey)
      }
      app?.destroy(true, true)
      app = null
    }
  }, [])

  return <div ref={hostRef} className="absolute inset-0" />
}
