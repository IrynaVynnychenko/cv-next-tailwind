'use client'

import { useEffect, useRef, useState, type ComponentType } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import type { GameHud, GameMode } from './PixiCatchScene'
import { ROUND_SECONDS } from './PixiCatchScene'

const copy = {
  kicker: {
    en: 'Live stage — move to catch',
    ua: 'Жива сцена — рухайте, щоб ловити',
    de: 'Live-Bühne — bewegen zum Fangen',
    fr: 'Scène live — déplacez pour attraper',
    es: 'Escenario en vivo — mueva para atrapar',
    it: 'Palco live — muovete per prendere',
    tr: 'Canlı sahne — yakalamak için hareket ettirin',
  },
  hint: {
    en: 'Catch fruit. Dodge the wormy ones. Pointer or ← →.',
    ua: 'Ловіть фрукти. Ухиляйтеся від червивих. Вказівник або ← →.',
    de: 'Obst fangen. Vor den wurmigen ausweichen. Zeiger oder ← →.',
    fr: 'Attrapez les fruits. Évitez ceux avec un ver. Pointeur ou ← →.',
    es: 'Atrape fruta. Evite las con gusano. Puntero o ← →.',
    it: 'Prendete la frutta. Schivate quelle con il verme. Puntatore o ← →.',
    tr: 'Meyve yakalayın. Kurtlulardan kaçın. İşaretçi veya ← →.',
  },
  loading: {
    en: 'Booting the 2D stage…',
    ua: 'Заводжу 2D-сцену…',
    de: '2D-Bühne startet…',
    fr: 'Démarrage de la scène 2D…',
    es: 'Arrancando el escenario 2D…',
    it: 'Avvio del palco 2D…',
    tr: '2D sahne açılıyor…',
  },
  fail: {
    en: 'WebGL did not init on this device. The article below still stands — the game is a product stage, not the only way to read it.',
    ua: 'WebGL на цьому пристрої не стартував. Текст нижче лишається — гра не єдиний спосіб її прочитати.',
    de: 'WebGL ist auf diesem Gerät nicht gestartet. Der Text darunter gilt trotzdem — das Spiel ist nicht der einzige Weg, ihn zu lesen.',
    fr: 'WebGL n’a pas démarré sur cet appareil. L’article dessous tient — le jeu n’est pas le seul moyen de le lire.',
    es: 'WebGL no arrancó en este dispositivo. El artículo debajo sigue — el juego no es la única forma de leerlo.',
    it: 'WebGL non è partito su questo dispositivo. L’articolo sotto resta — il gioco non è l’unico modo di leggerlo.',
    tr: 'WebGL bu cihazda başlamadı. Aşağıdaki yazı duruyor — oyun onu okumanın tek yolu değil.',
  },
  score: {
    en: 'Score',
    ua: 'Рахунок',
    de: 'Punkte',
    fr: 'Score',
    es: 'Puntos',
    it: 'Punteggio',
    tr: 'Skor',
  },
  combo: {
    en: 'Combo',
    ua: 'Комбо',
    de: 'Combo',
    fr: 'Combo',
    es: 'Combo',
    it: 'Combo',
    tr: 'Kombo',
  },
  lives: {
    en: 'Lives',
    ua: 'Життя',
    de: 'Leben',
    fr: 'Vies',
    es: 'Vidas',
    it: 'Vite',
    tr: 'Can',
  },
  time: {
    en: 'Time',
    ua: 'Час',
    de: 'Zeit',
    fr: 'Temps',
    es: 'Tiempo',
    it: 'Tempo',
    tr: 'Süre',
  },
  over: {
    en: 'Stage over',
    ua: 'Сцену закінчено',
    de: 'Bühne vorbei',
    fr: 'Scène terminée',
    es: 'Escenario terminado',
    it: 'Palco finito',
    tr: 'Sahne bitti',
  },
  again: {
    en: 'Play again',
    ua: 'Ще раз',
    de: 'Nochmal',
    fr: 'Rejouer',
    es: 'Otra vez',
    it: 'Di nuovo',
    tr: 'Yeniden',
  },
  intensity: {
    en: 'Pace',
    ua: 'Темп',
    de: 'Tempo',
    fr: 'Rythme',
    es: 'Ritmo',
    it: 'Ritmo',
    tr: 'Tempo',
  },
  modes: {
    calm: { en: 'Calm', ua: 'Спокій', de: 'Ruhig', fr: 'Calme', es: 'Calma', it: 'Calmo', tr: 'Sakin' },
    arcade: { en: 'Arcade', ua: 'Аркада', de: 'Arcade', fr: 'Arcade', es: 'Arcade', it: 'Arcade', tr: 'Arcade' },
    storm: { en: 'Storm', ua: 'Шторм', de: 'Sturm', fr: 'Tempête', es: 'Tormenta', it: 'Tempesta', tr: 'Fırtına' },
  },
  reduced: {
    en: 'Reduced motion is on — the ticker is slower. The stage still plays.',
    ua: 'Reduced motion увімкнено — ticker повільніший. Сцена все одно грається.',
    de: 'Reduced motion ist an — der Ticker ist langsamer. Die Bühne spielt trotzdem.',
    fr: 'Reduced motion est actif — le ticker est plus lent. La scène se joue encore.',
    es: 'Reduced motion está activo — el ticker va más lento. El escenario sigue jugándose.',
    it: 'Reduced motion è attivo — il ticker è più lento. Il palco si gioca comunque.',
    tr: 'Reduced motion açık — ticker daha yavaş. Sahne yine oynanır.',
  },
} as const

const MODES: GameMode[] = ['calm', 'arcade', 'storm']

function formatClock(seconds: number) {
  const safe = Math.max(0, Math.floor(seconds))
  const mins = Math.floor(safe / 60)
  const secs = safe % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

type SceneProps = {
  theme: 'light' | 'dark'
  mode: GameMode
  reducedMotion: boolean
  active: boolean
  runId: number
  onHud: (hud: GameHud) => void
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
      className={`inline-flex h-7 items-center rounded-md border px-2.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        active
          ? 'border-foreground bg-foreground text-background'
          : 'border-foreground/35 bg-background text-foreground hover:bg-accent'
      }`}
      aria-pressed={active}
    >
      {children}
    </button>
  )
}

export default function PixiDemoIsland() {
  const hostRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const { theme } = useTheme()
  const [near, setNear] = useState(false)
  const [active, setActive] = useState(false)
  const [failed, setFailed] = useState(false)
  const [mode, setMode] = useState<GameMode>('arcade')
  const [runId, setRunId] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [Scene, setScene] = useState<ComponentType<SceneProps> | null>(null)
  const [hud, setHud] = useState<GameHud>({
    score: 0,
    lives: 3,
    combo: 0,
    over: false,
    timeLeft: ROUND_SECONDS,
  })

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
    import('./PixiCatchScene')
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
      className="my-8 overflow-hidden border border-foreground/20 bg-background"
      aria-label={label}
    >
      <div className="relative aspect-[5/4] w-full sm:aspect-[16/10]">
        {failed ? (
          <p className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm text-foreground">
            {copy.fail[language]}
          </p>
        ) : Scene ? (
          <Scene
            theme={theme}
            mode={mode}
            reducedMotion={reducedMotion}
            active={active}
            runId={runId}
            onHud={setHud}
            onError={() => setFailed(true)}
          />
        ) : near ? (
          <p className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-xs text-foreground">
            {copy.loading[language]}
          </p>
        ) : null}

        {Scene && !failed && (
          <div className="pointer-events-none absolute inset-x-3 top-3 z-10 flex items-start justify-between gap-2">
            <span className="rounded-md border border-foreground/15 bg-background/85 px-2.5 py-1 font-mono text-sm font-semibold tabular-nums text-foreground shadow-sm">
              {copy.score[language]} {hud.score}
            </span>
            <span
              className={`rounded-md border px-2.5 py-1 font-mono text-sm font-semibold tabular-nums shadow-sm ${
                hud.timeLeft <= 10 && !hud.over
                  ? 'border-red-500/40 bg-red-500 text-white'
                  : 'border-foreground/15 bg-background/85 text-foreground'
              }`}
            >
              {copy.time[language]} {formatClock(hud.timeLeft)}
            </span>
          </div>
        )}

        {hud.over && !failed && (
          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-background/55 px-6 text-center">
            <p className="text-sm font-semibold text-foreground">{copy.over[language]}</p>
            <p className="font-mono text-xs text-foreground">
              {copy.score[language]} {hud.score}
              {' · '}
              {copy.time[language]} {formatClock(hud.timeLeft)}
            </p>
            <button
              type="button"
              className="pointer-events-auto inline-flex h-8 items-center rounded-md border border-foreground bg-foreground px-3 text-xs font-medium text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setRunId((id) => id + 1)}
            >
              {copy.again[language]}
            </button>
          </div>
        )}
      </div>

      <figcaption className="space-y-3 border-t border-foreground/20 px-4 py-3">
        <p className="font-mono text-xs text-foreground">{label}</p>
        <p className="text-xs text-foreground/80">{copy.hint[language]}</p>
        {reducedMotion && (
          <p className="text-xs text-foreground/80">{copy.reduced[language]}</p>
        )}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-foreground">
            <span>
              {copy.score[language]} {hud.score}
            </span>
            <span>
              {copy.time[language]} {formatClock(hud.timeLeft)}
            </span>
            <span>
              {copy.combo[language]} ×{Math.max(1, hud.combo)}
            </span>
            <span aria-label={`${copy.lives[language]} ${hud.lives}`}>
              {copy.lives[language]}{' '}
              {Array.from({ length: 3 }, (_, i) => (i < hud.lives ? '●' : '○')).join('')}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-xs font-medium text-foreground">{copy.intensity[language]}</span>
            {MODES.map((id) => (
              <Chip key={id} active={mode === id} onClick={() => setMode(id)}>
                {copy.modes[id][language]}
              </Chip>
            ))}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
