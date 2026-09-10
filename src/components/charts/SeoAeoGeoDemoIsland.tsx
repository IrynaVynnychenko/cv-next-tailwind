'use client'

import { useEffect, useRef, useState, type ComponentType } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import type { Language } from '@/lib/i18n'

const copy = {
  kicker: {
    en: 'Live charts – Chart.js, rendered in your browser',
    ua: 'Живі графіки – Chart.js, малює ваш браузер',
    de: 'Live-Diagramme – Chart.js, gerendert in Ihrem Browser',
    fr: 'Graphiques en direct – Chart.js, rendus dans votre navigateur',
    es: 'Gráficos en vivo – Chart.js, renderizados en su navegador',
    it: 'Grafici live – Chart.js, renderizzati nel vostro browser',
    tr: 'Canlı grafikler – Chart.js, tarayıcınızda çiziliyor',
  },
  loading: {
    en: 'Booting the charts…',
    ua: 'Заводжу графіки…',
    de: 'Diagramme starten…',
    fr: 'Démarrage des graphiques…',
    es: 'Arrancando los gráficos…',
    it: 'Avvio dei grafici…',
    tr: 'Grafikler açılıyor…',
  },
} as const

type Props = {
  theme: 'light' | 'dark'
  language: Language
}

export default function SeoAeoGeoDemoIsland() {
  const hostRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const { theme } = useTheme()
  const [near, setNear] = useState(false)
  const [Scene, setScene] = useState<ComponentType<Props> | null>(null)

  useEffect(() => {
    const el = hostRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setNear(true)
      },
      { rootMargin: '180px 0px', threshold: 0.05 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!near || Scene) return
    let cancelled = false
    import('./SeoAeoGeoCharts').then((mod) => {
      if (!cancelled) setScene(() => mod.default)
    })
    return () => {
      cancelled = true
    }
  }, [near, Scene])

  const label = copy.kicker[language]

  return (
    <figure ref={hostRef} className="my-8" aria-label={label}>
      {Scene ? (
        <Scene theme={theme} language={language} />
      ) : (
        <div className="flex h-[340px] items-center justify-center border border-foreground/20 bg-background">
          <p className="font-mono text-xs text-muted-foreground">{near ? copy.loading[language] : ''}</p>
        </div>
      )}
      <figcaption className="mt-3 font-mono text-xs text-muted-foreground">{label}</figcaption>
    </figure>
  )
}
