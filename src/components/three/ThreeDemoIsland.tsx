'use client'

import { useEffect, useRef, useState, type ComponentType } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import type { SceneFinish, SceneShape } from './ThreeKnotScene'

const copy = {
  kicker: {
    en: 'Live scene — drag to orbit',
    ua: 'Жива сцена — тягніть, щоб облетіти',
    de: 'Live-Szene — ziehen zum Orbit',
    fr: 'Scène live — glissez pour orbiter',
    es: 'Escena en vivo — arrastre para orbitar',
    it: 'Scena live — trascinare per orbitare',
    tr: 'Canlı sahne — yörünge için sürükleyin',
  },
  loading: {
    en: 'Booting the GPU island…',
    ua: 'Заводжу GPU-острів…',
    de: 'GPU-Insel startet…',
    fr: 'Démarrage de l’île GPU…',
    es: 'Arrancando la isla GPU…',
    it: 'Avvio dell’isola GPU…',
    tr: 'GPU adası açılıyor…',
  },
  fail: {
    en: 'WebGL did not init on this device. The article below still stands — the object is a product scene, not the only way to read it.',
    ua: 'WebGL на цьому пристрої не стартував. Текст нижче лишається — сцена не єдиний спосіб її прочитати.',
    de: 'WebGL ist auf diesem Gerät nicht gestartet. Der Text darunter gilt trotzdem — die Szene ist nicht der einzige Weg, sie zu lesen.',
    fr: 'WebGL n’a pas démarré sur cet appareil. L’article dessous tient — la scène n’est pas le seul moyen de la lire.',
    es: 'WebGL no arrancó en este dispositivo. El artículo debajo sigue — la escena no es la única forma de leerlo.',
    it: 'WebGL non è partito su questo dispositivo. L’articolo sotto resta — la scena non è l’unico modo di leggerlo.',
    tr: 'WebGL bu cihazda başlamadı. Aşağıdaki yazı duruyor — sahne onu okumanın tek yolu değil.',
  },
  shape: {
    en: 'Shape',
    ua: 'Форма',
    de: 'Form',
    fr: 'Forme',
    es: 'Forma',
    it: 'Forma',
    tr: 'Şekil',
  },
  finish: {
    en: 'Finish',
    ua: 'Матеріал',
    de: 'Finish',
    fr: 'Finition',
    es: 'Acabado',
    it: 'Finitura',
    tr: 'Yüzey',
  },
  shapes: {
    knot: { en: 'Knot', ua: 'Вузол', de: 'Knoten', fr: 'Nœud', es: 'Nudo', it: 'Nodo', tr: 'Düğüm' },
    crystal: { en: 'Crystal', ua: 'Кристал', de: 'Kristall', fr: 'Cristal', es: 'Cristal', it: 'Cristallo', tr: 'Kristal' },
    ring: { en: 'Ring', ua: 'Каблучка', de: 'Ring', fr: 'Anneau', es: 'Anillo', it: 'Anello', tr: 'Yüzük' },
  },
  finishes: {
    glass: { en: 'Glass', ua: 'Скло', de: 'Glas', fr: 'Verre', es: 'Vidrio', it: 'Vetro', tr: 'Cam' },
    chrome: { en: 'Chrome', ua: 'Хром', de: 'Chrom', fr: 'Chrome', es: 'Cromo', it: 'Cromo', tr: 'Krom' },
    ember: { en: 'Ember', ua: 'Жар', de: 'Glut', fr: 'Braise', es: 'Brasa', it: 'Brace', tr: 'Kor' },
  },
  reduced: {
    en: 'Reduced motion is on — the loop is still. Drag if you want to inspect.',
    ua: 'Reduced motion увімкнено — цикл стоїть. Тягніть, якщо хочете роздивитися.',
    de: 'Reduced motion ist an — die Schleife steht. Ziehen Sie, wenn Sie inspizieren wollen.',
    fr: 'Reduced motion est actif — la boucle est arrêtée. Glissez pour inspecter.',
    es: 'Reduced motion está activo — el bucle está quieto. Arrastre si quiere inspeccionar.',
    it: 'Reduced motion è attivo — il loop è fermo. Trascinate per ispezionare.',
    tr: 'Reduced motion açık — döngü duruyor. İncelemek için sürükleyin.',
  },
} as const

const SHAPES: SceneShape[] = ['knot', 'crystal', 'ring']
const FINISHES: SceneFinish[] = ['glass', 'chrome', 'ember']

type SceneProps = {
  theme: 'light' | 'dark'
  shape: SceneShape
  finish: SceneFinish
  reducedMotion: boolean
  active: boolean
  onError?: () => void
}

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean
  children: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex h-7 items-center rounded-md px-2.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        active
          ? 'bg-foreground text-background'
          : 'bg-muted text-muted-foreground hover:text-foreground'
      }`}
      aria-pressed={active}
    >
      {children}
    </button>
  )
}

export default function ThreeDemoIsland() {
  const hostRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const { theme } = useTheme()
  const [near, setNear] = useState(false)
  const [active, setActive] = useState(false)
  const [failed, setFailed] = useState(false)
  const [shape, setShape] = useState<SceneShape>('knot')
  const [finish, setFinish] = useState<SceneFinish>('glass')
  const [reducedMotion, setReducedMotion] = useState(false)
  const [Scene, setScene] = useState<ComponentType<SceneProps> | null>(null)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const el = hostRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setNear(true)
        setActive(entry.isIntersecting)
      },
      { rootMargin: '180px 0px', threshold: 0.05 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!near || Scene) return
    let cancelled = false
    import('./ThreeKnotScene')
      .then((mod) => {
        if (!cancelled) setScene(() => mod.default)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [near, Scene])

  const label = copy.kicker[language]

  return (
    <figure
      ref={hostRef}
      className="my-8 overflow-hidden border border-edge bg-muted/40"
      aria-label={label}
    >
      <div className="relative aspect-[5/4] w-full sm:aspect-[16/10]">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--primary)_28%,transparent),transparent_58%)]"
          aria-hidden="true"
        />
        {failed ? (
          <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-muted-foreground">
            {copy.fail[language]}
          </p>
        ) : Scene ? (
          <Scene
            theme={theme}
            shape={shape}
            finish={finish}
            reducedMotion={reducedMotion}
            active={active}
            onError={() => setFailed(true)}
          />
        ) : near ? (
          <p className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-xs text-muted-foreground">
            {copy.loading[language]}
          </p>
        ) : null}
      </div>

      <figcaption className="space-y-3 border-t border-edge px-4 py-3">
        <p className="font-mono text-[11px] text-muted-foreground">{label}</p>
        {reducedMotion && (
          <p className="text-xs text-muted-foreground">{copy.reduced[language]}</p>
        )}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-xs text-muted-foreground">{copy.shape[language]}</span>
            {SHAPES.map((id) => (
              <Chip key={id} active={shape === id} onClick={() => setShape(id)}>
                {copy.shapes[id][language]}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-xs text-muted-foreground">{copy.finish[language]}</span>
            {FINISHES.map((id) => (
              <Chip key={id} active={finish === id} onClick={() => setFinish(id)}>
                {copy.finishes[id][language]}
              </Chip>
            ))}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
