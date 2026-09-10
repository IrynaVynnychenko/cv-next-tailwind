'use client'

import { useEffect, useRef } from 'react'
import {
  Chart,
  BubbleController,
  LineController,
  LinearScale,
  LogarithmicScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  type ChartConfiguration,
  type Plugin,
} from 'chart.js'
import type { Language } from '@/lib/i18n'

Chart.register(BubbleController, LineController, LinearScale, LogarithmicScale, CategoryScale, PointElement, LineElement, Tooltip)

type Copy = Record<Language, string>

const T: Record<
  | 'ecoTitle'
  | 'ecoCaption'
  | 'ecoX'
  | 'ecoY'
  | 'perfTitle'
  | 'perfCaption'
  | 'perfX'
  | 'perfY'
  | 'fast'
  | 'moderate'
  | 'slow'
  | 'growthTitle'
  | 'growthCaption'
  | 'growthY',
  Copy
> = {
  ecoTitle: {
    en: 'GitHub stars × weekly PyPI downloads',
    ua: 'Зірки GitHub × тижневі завантаження PyPI',
    de: 'GitHub-Sterne × wöchentliche PyPI-Downloads',
    fr: 'Étoiles GitHub × téléchargements PyPI hebdomadaires',
    es: 'Estrellas de GitHub × descargas semanales de PyPI',
    it: 'Stelle GitHub × download settimanali PyPI',
    tr: 'GitHub yıldızları × haftalık PyPI indirmeleri',
  },
  ecoCaption: {
    en: 'bubble size = contributors',
    ua: 'розмір бульбашки = контриб’ютори',
    de: 'Bubble-Größe = Contributors',
    fr: 'taille de la bulle = contributeurs',
    es: 'tamaño de burbuja = contribuidores',
    it: 'dimensione bolla = contributor',
    tr: 'baloncuk boyutu = katkıda bulunanlar',
  },
  ecoX: {
    en: 'GitHub stars (thousands)',
    ua: 'Зірки GitHub (тис.)',
    de: 'GitHub-Sterne (Tausend)',
    fr: 'Étoiles GitHub (milliers)',
    es: 'Estrellas de GitHub (miles)',
    it: 'Stelle GitHub (migliaia)',
    tr: 'GitHub yıldızları (bin)',
  },
  ecoY: {
    en: 'Downloads / week (millions)',
    ua: 'Завантажень / тиждень (млн)',
    de: 'Downloads / Woche (Mio.)',
    fr: 'Téléchargements / semaine (millions)',
    es: 'Descargas / semana (millones)',
    it: 'Download / settimana (milioni)',
    tr: 'İndirme / hafta (milyon)',
  },
  perfTitle: {
    en: 'groupby-aggregate runtime',
    ua: 'Час виконання groupby-агрегації',
    de: 'Laufzeit von Groupby-Aggregation',
    fr: 'Temps d’exécution groupby-agrégation',
    es: 'Tiempo de ejecución de groupby-agregación',
    it: 'Tempo di esecuzione groupby-aggregazione',
    tr: 'groupby-agregasyon çalışma süresi',
  },
  perfCaption: {
    en: 'bubble size = peak RAM · color = runtime tier',
    ua: 'розмір бульбашки = пік RAM · колір = клас часу',
    de: 'Bubble-Größe = Spitzen-RAM · Farbe = Laufzeit-Stufe',
    fr: 'taille de bulle = RAM max · couleur = palier de temps',
    es: 'tamaño de burbuja = RAM máxima · color = nivel de tiempo',
    it: 'dimensione bolla = RAM di picco · colore = livello di tempo',
    tr: 'baloncuk boyutu = tepe RAM · renk = süre katmanı',
  },
  perfX: {
    en: 'Dataset size, GB (log scale)',
    ua: 'Розмір датасету, ГБ (лог. шкала)',
    de: 'Datensatzgröße, GB (log. Skala)',
    fr: 'Taille du jeu de données, Go (échelle log)',
    es: 'Tamaño del dataset, GB (escala log)',
    it: 'Dimensione dataset, GB (scala log)',
    tr: 'Veri kümesi boyutu, GB (log ölçek)',
  },
  perfY: {
    en: 'Runtime, seconds',
    ua: 'Час виконання, с',
    de: 'Laufzeit, Sekunden',
    fr: 'Temps d’exécution, secondes',
    es: 'Tiempo de ejecución, segundos',
    it: 'Tempo di esecuzione, secondi',
    tr: 'Çalışma süresi, saniye',
  },
  fast: {
    en: 'fast · under 5s', ua: 'швидко · до 5с', de: 'schnell · unter 5s',
    fr: 'rapide · < 5 s', es: 'rápido · < 5 s', it: 'veloce · < 5 s', tr: 'hızlı · 5 sn altı',
  },
  moderate: {
    en: 'moderate · 5–20s', ua: 'помірно · 5–20с', de: 'mäßig · 5–20s',
    fr: 'modéré · 5–20 s', es: 'moderado · 5–20 s', it: 'moderato · 5–20 s', tr: 'orta · 5–20 sn',
  },
  slow: {
    en: 'slow · over 20s', ua: 'повільно · понад 20с', de: 'langsam · über 20s',
    fr: 'lent · > 20 s', es: 'lento · > 20 s', it: 'lento · > 20 s', tr: 'yavaş · 20 sn üstü',
  },
  growthTitle: {
    en: 'Weekly PyPI downloads, 2019–2026',
    ua: 'Тижневі завантаження PyPI, 2019–2026',
    de: 'Wöchentliche PyPI-Downloads, 2019–2026',
    fr: 'Téléchargements PyPI hebdomadaires, 2019–2026',
    es: 'Descargas semanales de PyPI, 2019–2026',
    it: 'Download settimanali PyPI, 2019–2026',
    tr: 'Haftalık PyPI indirmeleri, 2019–2026',
  },
  growthCaption: {
    en: 'millions / week, approximate', ua: 'млн / тиждень, орієнтовно', de: 'Mio. / Woche, ungefähr',
    fr: 'millions / semaine, approximatif', es: 'millones / semana, aproximado', it: 'milioni / settimana, approssimativo', tr: 'milyon / hafta, yaklaşık',
  },
  growthY: {
    en: 'millions / week', ua: 'млн / тиждень', de: 'Mio. / Woche',
    fr: 'millions / semaine', es: 'millones / semana', it: 'milioni / settimana', tr: 'milyon / hafta',
  },
}

const PALETTE = {
  light: { pandas: '#2a78d6', polars: '#eb6834', dask: '#1baf7a', good: '#0ca30c', warning: '#fab219', critical: '#d03b3b', ink: '#18181b', ink2: '#52514e', muted: '#71717a', grid: '#e4e4e7' },
  dark: { pandas: '#3987e5', polars: '#d95926', dask: '#199e70', good: '#0ca30c', warning: '#fab219', critical: '#e66767', ink: '#fafafa', ink2: '#c3c2b7', muted: '#a1a1aa', grid: '#27272a' },
}

const ECO_DATA = {
  pandas: { x: 45, y: 18.5, contributors: 3700 },
  polars: { x: 32, y: 2.8, contributors: 650 },
  dask: { x: 12, y: 1.0, contributors: 600 },
}
const radiusFrom = (contrib: number) => 6 + Math.sqrt(contrib) / 1.8

type PerfPoint = { x: number; y: number; ram: number; lib: string }
const PERF_POINTS: PerfPoint[] = [
  { x: 2, y: 5.8, ram: 3.5, lib: 'pandas' },
  { x: 20, y: 64.0, ram: 31, lib: 'pandas' },
  { x: 2, y: 0.6, ram: 1.6, lib: 'polars' },
  { x: 20, y: 7.4, ram: 13, lib: 'polars' },
  { x: 2, y: 3.9, ram: 2.1, lib: 'dask' },
  { x: 20, y: 14.2, ram: 9, lib: 'dask' },
]

const YEARS = ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026']
const GROWTH = {
  pandas: [5.0, 7.2, 9.8, 12.5, 14.9, 16.7, 17.8, 18.5],
  polars: [0, 0.02, 0.08, 0.25, 0.6, 1.3, 2.1, 2.8],
  dask: [0.35, 0.42, 0.5, 0.6, 0.72, 0.85, 0.95, 1.0],
}

function directLabelPlugin(getLabel: (datasetIndex: number, index: number, raw: unknown) => string | null): Plugin<'bubble' | 'line'> {
  return {
    id: 'directLabels',
    afterDatasetsDraw(chart) {
      const width = chart.width
      if (width < 260) return // too narrow for any label to help – legend/tooltip carry identity instead

      const ctx = chart.ctx
      ctx.save()
      const fontSize = width < 420 ? 10 : 11
      ctx.font = `600 ${fontSize}px ui-monospace, "SFMono-Regular", Menlo, monospace`
      ctx.textBaseline = 'middle'

      const placed: { left: number; right: number; top: number; bottom: number }[] = []
      const overlaps = (a: { left: number; right: number; top: number; bottom: number }, b: typeof a) =>
        a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top

      chart.data.datasets.forEach((ds, di) => {
        const meta = chart.getDatasetMeta(di)
        if (meta.hidden) return
        meta.data.forEach((el, i) => {
          const raw = (ds.data as unknown[])[i]
          const text = getLabel(di, i, raw)
          if (!text) return
          const elXY = el as unknown as { x: number; y: number }
          const pos = 'tooltipPosition' in el ? (el as unknown as { tooltipPosition: () => { x: number; y: number } }).tooltipPosition() : { x: elXY.x, y: elXY.y }
          const opts = (el as unknown as { options?: { radius?: number } }).options
          const r = opts?.radius ?? 6
          const textWidth = ctx.measureText(text).width
          const gap = 6
          const h = fontSize + 4

          let x = pos.x + r + gap
          if (x + textWidth > width - 4) {
            const leftX = pos.x - r - gap - textWidth
            x = leftX >= 4 ? leftX : Math.max(4, width - 4 - textWidth)
          }
          let y = pos.y

          let box = { left: x, right: x + textWidth, top: y - h / 2, bottom: y + h / 2 }
          let attempts = 0
          while (placed.some((p) => overlaps(p, box)) && attempts < 6) {
            y += h + 2
            box = { left: x, right: x + textWidth, top: y - h / 2, bottom: y + h / 2 }
            attempts += 1
          }
          placed.push(box)

          ctx.fillStyle = (ds as { borderColor?: string }).borderColor || '#71717a'
          ctx.textAlign = 'left'
          ctx.fillText(text, x, y)
        })
      })
      ctx.restore()
    },
  }
}

type Props = {
  theme: 'light' | 'dark'
  language: Language
}

export default function PythonLibsCharts({ theme, language }: Props) {
  const ecoRef = useRef<HTMLCanvasElement>(null)
  const perfRef = useRef<HTMLCanvasElement>(null)
  const growthRef = useRef<HTMLCanvasElement>(null)
  const chartsRef = useRef<Chart[]>([])
  const reducedMotionRef = useRef(false)

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    const c = PALETTE[theme]
    const tr = (key: keyof typeof T) => T[key][language] || T[key].en
    const reduceMotion = reducedMotionRef.current
    const tooltipBase = {
      backgroundColor: '#0b0b0b',
      titleColor: '#ffffff',
      bodyColor: '#e7e6e2',
      padding: 10,
      cornerRadius: 8,
      displayColors: false,
    }
    const font = { family: 'ui-sans-serif, system-ui, sans-serif', size: 12 }

    const charts: Chart[] = []

    if (ecoRef.current) {
      const cfg: ChartConfiguration<'bubble'> = {
        type: 'bubble',
        data: {
          datasets: [
            { label: 'pandas', data: [{ x: ECO_DATA.pandas.x, y: ECO_DATA.pandas.y, r: radiusFrom(ECO_DATA.pandas.contributors) }], backgroundColor: c.pandas + 'cc', borderColor: c.pandas, borderWidth: 1.5 },
            { label: 'polars', data: [{ x: ECO_DATA.polars.x, y: ECO_DATA.polars.y, r: radiusFrom(ECO_DATA.polars.contributors) }], backgroundColor: c.polars + 'cc', borderColor: c.polars, borderWidth: 1.5 },
            { label: 'dask', data: [{ x: ECO_DATA.dask.x, y: ECO_DATA.dask.y, r: radiusFrom(ECO_DATA.dask.contributors) }], backgroundColor: c.dask + 'cc', borderColor: c.dask, borderWidth: 1.5 },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: reduceMotion ? false : { duration: 700, easing: 'easeOutQuart' },
          layout: { padding: { right: 12, top: 10 } },
          scales: {
            x: { title: { display: true, text: tr('ecoX'), color: c.ink2, font }, min: 0, max: 55, grid: { color: c.grid }, ticks: { color: c.muted, font } },
            y: { title: { display: true, text: tr('ecoY'), color: c.ink2, font }, min: 0, max: 21, grid: { color: c.grid }, ticks: { color: c.muted, font } },
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              ...tooltipBase,
              callbacks: {
                title: (items) => items[0].dataset.label ?? '',
                label: (item) => {
                  const d = item.raw as { x: number; y: number }
                  return [`${d.x} × 1000 ★`, `${d.y}M / wk`]
                },
              },
            },
          },
        },
        plugins: [directLabelPlugin((di) => cfg.data.datasets[di]?.label ?? null)],
      }
      charts.push(new Chart(ecoRef.current, cfg))
    }

    if (perfRef.current) {
      const statusColor = (seconds: number) => (seconds < 5 ? c.good : seconds <= 20 ? c.warning : c.critical)
      const cfg: ChartConfiguration<'bubble'> = {
        type: 'bubble',
        data: { datasets: [{ label: 'perf', data: PERF_POINTS as unknown as { x: number; y: number; r: number }[] }] },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: reduceMotion ? false : { duration: 700, easing: 'easeOutQuart' },
          layout: { padding: { right: 12, top: 10 } },
          scales: {
            x: {
              type: 'logarithmic',
              title: { display: true, text: tr('perfX'), color: c.ink2, font },
              min: 1,
              max: 30,
              grid: { color: c.grid },
              ticks: {
                color: c.muted,
                font,
                callback: (v) => {
                  const s = String(v)
                  return s === '1' || s === '2' || s === '5' || s === '10' || s === '20' ? `${v} GB` : ''
                },
              },
            },
            y: { title: { display: true, text: tr('perfY'), color: c.ink2, font }, min: 0, max: 72, grid: { color: c.grid }, ticks: { color: c.muted, font } },
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              ...tooltipBase,
              callbacks: {
                title: (items) => (items[0].raw as PerfPoint).lib,
                label: (item) => {
                  const d = item.raw as PerfPoint
                  return [`${d.x} GB · ${d.y}s`, `RAM: ${d.ram} GB`]
                },
              },
            },
          },
          elements: {
            point: {
              radius: (ctx) => {
                const d = ctx.raw as PerfPoint | undefined
                return d ? 8 + Math.sqrt(d.ram) * 5 : 8
              },
              backgroundColor: (ctx) => {
                const d = ctx.raw as PerfPoint | undefined
                return d ? statusColor(d.y) + 'cc' : c.muted
              },
              borderColor: (ctx) => {
                const d = ctx.raw as PerfPoint | undefined
                return d ? statusColor(d.y) : c.muted
              },
              borderWidth: 1.5,
              hoverBorderWidth: 2.5,
            },
          },
        },
        plugins: [directLabelPlugin((_di, i) => {
          const p = PERF_POINTS[i]
          return p ? `${p.lib} · ${p.x}GB` : null
        })],
      }
      charts.push(new Chart(perfRef.current, cfg))
    }

    if (growthRef.current) {
      const totalDuration = reduceMotion ? 0 : 2600
      const perPointDelay = totalDuration / YEARS.length
      const delayCtx = (actx: { type: string; mode: string; dataIndex: number; datasetIndex: number }) => {
        if (actx.type !== 'data' || actx.mode !== 'default') return 0
        return actx.dataIndex * perPointDelay + actx.datasetIndex * 80
      }
      const mkLine = (label: string, color: string, data: number[]) => ({
        label,
        data,
        borderColor: color,
        backgroundColor: color,
        pointBackgroundColor: color,
        pointBorderColor: theme === 'dark' ? '#201f1d' : '#ffffff',
        borderWidth: 2.5,
        pointRadius: 3,
        pointHoverRadius: 5,
        tension: 0.25,
        fill: false,
      })
      const growthAnimation = reduceMotion
        ? false
        : {
            x: { type: 'number', easing: 'linear', duration: perPointDelay, from: NaN, delay: delayCtx },
            y: {
              type: 'number',
              easing: 'linear',
              duration: perPointDelay,
              from: (actx: { index: number; chart: Chart; datasetIndex: number }) => {
                if (actx.index === 0) return actx.chart.scales.y.getPixelForValue(0)
                const meta = actx.chart.getDatasetMeta(actx.datasetIndex)
                const prev = meta.data[actx.index - 1] as unknown as { getProps: (p: string[], f: boolean) => { y: number } } | undefined
                return prev ? prev.getProps(['y'], true).y : undefined
              },
              delay: delayCtx,
            },
          }

      const growthOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: growthAnimation,
        interaction: { intersect: false, mode: 'index' },
        layout: { padding: { right: 12, top: 10 } },
        scales: {
          x: { grid: { color: c.grid }, ticks: { color: c.muted, font } },
          y: { title: { display: true, text: tr('growthY'), color: c.ink2, font }, min: 0, max: 20, grid: { color: c.grid }, ticks: { color: c.muted, font } },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            ...tooltipBase,
            callbacks: {
              title: (items: { label: string }[]) => items[0].label,
              label: (item: { dataset: { label?: string }; formattedValue: string }) => `${item.dataset.label}: ${item.formattedValue}M/wk`,
            },
          },
        },
      } as unknown as ChartConfiguration<'line'>['options']

      const cfg: ChartConfiguration<'line'> = {
        type: 'line',
        data: { labels: YEARS, datasets: [mkLine('pandas', c.pandas, GROWTH.pandas), mkLine('polars', c.polars, GROWTH.polars), mkLine('dask', c.dask, GROWTH.dask)] },
        options: growthOptions,
        plugins: [directLabelPlugin((di, i) => (i === YEARS.length - 1 ? cfg.data.datasets[di]?.label ?? null : null))],
      }
      charts.push(new Chart(growthRef.current, cfg))
    }

    chartsRef.current = charts
    return () => {
      charts.forEach((ch) => ch.destroy())
      chartsRef.current = []
    }
  }, [theme, language])

  const t = (key: keyof typeof T) => T[key][language] || T[key].en

  return (
    <div className="space-y-6">
      <div className="border border-foreground/20 bg-background p-4">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-sm font-semibold text-foreground">{t('ecoTitle')}</span>
          <span className="font-mono text-xs text-muted-foreground">{t('ecoCaption')}</span>
        </div>
        <div className="relative h-[320px] w-full">
          <canvas ref={ecoRef} />
        </div>
      </div>

      <div className="border border-foreground/20 bg-background p-4">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-sm font-semibold text-foreground">{t('perfTitle')}</span>
          <span className="font-mono text-xs text-muted-foreground">{t('perfCaption')}</span>
        </div>
        <div className="relative h-[320px] w-full">
          <canvas ref={perfRef} />
        </div>
        <div className="mt-3 flex flex-wrap gap-4 border-t border-foreground/10 pt-3 font-mono text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: PALETTE[theme].good }} />{t('fast')}</span>
          <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: PALETTE[theme].warning }} />{t('moderate')}</span>
          <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: PALETTE[theme].critical }} />{t('slow')}</span>
        </div>
      </div>

      <div className="border border-foreground/20 bg-background p-4">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-sm font-semibold text-foreground">{t('growthTitle')}</span>
          <span className="font-mono text-xs text-muted-foreground">{t('growthCaption')}</span>
        </div>
        <div className="relative h-[320px] w-full">
          <canvas ref={growthRef} />
        </div>
      </div>
    </div>
  )
}
