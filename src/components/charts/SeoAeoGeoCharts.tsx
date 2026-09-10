'use client'

import { useEffect, useRef } from 'react'
import {
  Chart,
  RadarController,
  RadialLinearScale,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  type ChartConfiguration,
  type Plugin,
} from 'chart.js'
import type { Language } from '@/lib/i18n'

Chart.register(RadarController, RadialLinearScale, BarController, BarElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

type Copy = Record<Language, string>

const T: Record<
  | 'radarTitle'
  | 'radarCaption'
  | 'axisBacklinks'
  | 'axisSchema'
  | 'axisAnswerFirst'
  | 'axisFreshness'
  | 'axisBrandMentions'
  | 'axisLongForm'
  | 'barTitle'
  | 'barCaption'
  | 'barY'
  | 'barCatClassic'
  | 'barCatOverview'
  | 'barCatChat',
  Copy
> = {
  radarTitle: {
    en: 'What each discipline rewards, 0–10',
    ua: 'Що винагороджує кожен підхід, 0–10',
    de: 'Was jede Disziplin belohnt, 0–10',
    fr: 'Ce que récompense chaque discipline, 0–10',
    es: 'Qué premia cada disciplina, 0–10',
    it: 'Cosa premia ogni disciplina, 0–10',
    tr: 'Her disiplin neyi ödüllendirir, 0–10',
  },
  radarCaption: {
    en: 'my scoring, not a published benchmark',
    ua: 'моя оцінка, не публічний бенчмарк',
    de: 'meine Bewertung, kein veröffentlichter Benchmark',
    fr: 'ma notation, pas un benchmark publié',
    es: 'mi puntuación, no un benchmark publicado',
    it: 'una mia valutazione, non un benchmark pubblicato',
    tr: 'kendi puanlamam, yayımlanmış bir benchmark değil',
  },
  axisBacklinks: {
    en: 'Backlinks & Authority',
    ua: 'Беклінки й авторитет',
    de: 'Backlinks & Autorität',
    fr: 'Backlinks & autorité',
    es: 'Backlinks y autoridad',
    it: 'Backlink e autorità',
    tr: 'Backlink ve otorite',
  },
  axisSchema: {
    en: 'Structured Data',
    ua: 'Структуровані дані',
    de: 'Strukturierte Daten',
    fr: 'Données structurées',
    es: 'Datos estructurados',
    it: 'Dati strutturati',
    tr: 'Yapılandırılmış veri',
  },
  axisAnswerFirst: {
    en: 'Answer-First Copy',
    ua: 'Текст із відповіддю спочатку',
    de: 'Antwort-zuerst-Text',
    fr: 'Texte réponse-d’abord',
    es: 'Texto respuesta-primero',
    it: 'Testo risposta-prima',
    tr: 'Önce-cevap metni',
  },
  axisFreshness: {
    en: 'Freshness',
    ua: 'Свіжість',
    de: 'Aktualität',
    fr: 'Fraîcheur',
    es: 'Actualidad',
    it: 'Freschezza',
    tr: 'Güncellik',
  },
  axisBrandMentions: {
    en: 'Brand Mentions Web-Wide',
    ua: 'Згадки бренду по всьому вебу',
    de: 'Markenerwähnungen im ganzen Web',
    fr: 'Mentions de marque sur tout le web',
    es: 'Menciones de marca en toda la web',
    it: 'Menzioni del brand su tutto il web',
    tr: 'Web genelinde marka anımı',
  },
  axisLongForm: {
    en: 'Long-Form Depth',
    ua: 'Глибина довгого тексту',
    de: 'Long-Form-Tiefe',
    fr: 'Profondeur long-format',
    es: 'Profundidad long-form',
    it: 'Profondità long-form',
    tr: 'Uzun içerik derinliği',
  },
  barTitle: {
    en: 'Share of searches that end with zero clicks',
    ua: 'Частка пошуків без жодного кліку',
    de: 'Anteil der Suchen ohne jeden Klick',
    fr: 'Part des recherches sans aucun clic',
    es: 'Parte de las búsquedas sin ningún clic',
    it: 'Quota di ricerche senza alcun clic',
    tr: 'Hiç tıklamayla sonuçlanmayan aramaların payı',
  },
  barCaption: {
    en: '2026 estimates, rounded',
    ua: 'оцінки 2026, округлено',
    de: 'Schätzungen 2026, gerundet',
    fr: 'estimations 2026, arrondies',
    es: 'estimaciones 2026, redondeadas',
    it: 'stime 2026, arrotondate',
    tr: '2026 tahminleri, yuvarlanmış',
  },
  barY: {
    en: '% of searches, zero clicks',
    ua: '% пошуків без кліків',
    de: '% der Suchen, null Klicks',
    fr: '% des recherches, zéro clic',
    es: '% de búsquedas, cero clics',
    it: '% di ricerche, zero clic',
    tr: '% arama, sıfır tıklama',
  },
  barCatClassic: {
    en: 'Classic result, no AI box',
    ua: 'Класичний результат, без AI-блоку',
    de: 'Klassisches Ergebnis, keine KI-Box',
    fr: 'Résultat classique, sans encart IA',
    es: 'Resultado clásico, sin caja de IA',
    it: 'Risultato classico, senza box IA',
    tr: 'Klasik sonuç, yapay zekâ kutusu yok',
  },
  barCatOverview: {
    en: 'AI Overview appears',
    ua: 'З’являється AI Overview',
    de: 'KI-Übersicht erscheint',
    fr: 'Un aperçu IA apparaît',
    es: 'Aparece un resumen de IA',
    it: 'Compare un riepilogo IA',
    tr: 'Yapay zekâ özeti görünüyor',
  },
  barCatChat: {
    en: 'AI chat answer',
    ua: 'Відповідь в AI-чаті',
    de: 'KI-Chat-Antwort',
    fr: 'Réponse dans un chat IA',
    es: 'Respuesta en un chat de IA',
    it: 'Risposta in una chat IA',
    tr: 'Yapay zekâ sohbet yanıtı',
  },
}

const PALETTE = {
  light: { seo: '#2a78d6', aeo: '#eb6834', geo: '#1baf7a', ink: '#18181b', ink2: '#52514e', muted: '#71717a', grid: '#e4e4e7' },
  dark: { seo: '#3987e5', aeo: '#d95926', geo: '#199e70', ink: '#fafafa', ink2: '#c3c2b7', muted: '#a1a1aa', grid: '#27272a' },
}

const RADAR_AXIS_KEYS = ['axisBacklinks', 'axisSchema', 'axisAnswerFirst', 'axisFreshness', 'axisBrandMentions', 'axisLongForm'] as const

const RADAR_SCORES = {
  seo: [9, 6, 4, 4, 4, 8],
  aeo: [4, 9, 9, 5, 4, 3],
  geo: [3, 6, 8, 8, 9, 5],
}

const ZERO_CLICK = [60, 83, 95]

function barValuePlugin(muted: string): Plugin<'bar'> {
  return {
    id: 'barValues',
    afterDatasetsDraw(chart) {
      const meta = chart.getDatasetMeta(0)
      if (meta.hidden) return
      const ctx = chart.ctx
      ctx.save()
      ctx.font = `600 12px ui-monospace, "SFMono-Regular", Menlo, monospace`
      ctx.fillStyle = muted
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'
      meta.data.forEach((el, i) => {
        const pos = el as unknown as { x: number; y: number }
        const value = (chart.data.datasets[0].data as number[])[i]
        ctx.fillText(`${value}%`, pos.x, pos.y - 8)
      })
      ctx.restore()
    },
  }
}

type Props = {
  theme: 'light' | 'dark'
  language: Language
}

export default function SeoAeoGeoCharts({ theme, language }: Props) {
  const radarRef = useRef<HTMLCanvasElement>(null)
  const barRef = useRef<HTMLCanvasElement>(null)
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

    if (radarRef.current) {
      const axisLabels = RADAR_AXIS_KEYS.map((k) => tr(k))
      const cfg: ChartConfiguration<'radar'> = {
        type: 'radar',
        data: {
          labels: axisLabels,
          datasets: [
            { label: 'SEO', data: RADAR_SCORES.seo, borderColor: c.seo, backgroundColor: c.seo + '22', pointBackgroundColor: c.seo, borderWidth: 2, pointRadius: 3 },
            { label: 'AEO', data: RADAR_SCORES.aeo, borderColor: c.aeo, backgroundColor: c.aeo + '22', pointBackgroundColor: c.aeo, borderWidth: 2, pointRadius: 3 },
            { label: 'GEO', data: RADAR_SCORES.geo, borderColor: c.geo, backgroundColor: c.geo + '22', pointBackgroundColor: c.geo, borderWidth: 2, pointRadius: 3 },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: reduceMotion ? false : { duration: 700, easing: 'easeOutQuart' },
          scales: {
            r: {
              min: 0,
              max: 10,
              ticks: { stepSize: 2, color: c.muted, backdropColor: 'transparent', font: { ...font, size: 10 } },
              grid: { color: c.grid },
              angleLines: { color: c.grid },
              pointLabels: { color: c.ink2, font: { ...font, size: 11 } },
            },
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              ...tooltipBase,
              callbacks: {
                title: (items) => items[0].dataset.label ?? '',
                label: (item) => `${item.label}: ${item.formattedValue} / 10`,
              },
            },
          },
        },
      }
      charts.push(new Chart(radarRef.current, cfg))
    }

    if (barRef.current) {
      const labels = [tr('barCatClassic'), tr('barCatOverview'), tr('barCatChat')]
      const colors = [c.seo, c.aeo, c.geo]
      const cfg: ChartConfiguration<'bar'> = {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: tr('barY'),
              data: ZERO_CLICK,
              backgroundColor: colors.map((col) => col + 'cc'),
              borderColor: colors,
              borderWidth: 1.5,
              borderRadius: 4,
              maxBarThickness: 72,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: reduceMotion ? false : { duration: 700, easing: 'easeOutQuart' },
          layout: { padding: { top: 20 } },
          scales: {
            x: { grid: { display: false }, ticks: { color: c.muted, font } },
            y: { title: { display: true, text: tr('barY'), color: c.ink2, font }, min: 0, max: 100, grid: { color: c.grid }, ticks: { color: c.muted, font } },
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              ...tooltipBase,
              callbacks: {
                title: (items) => items[0].label,
                label: (item) => `${item.formattedValue}%`,
              },
            },
          },
        },
        plugins: [barValuePlugin(c.ink2)],
      }
      charts.push(new Chart(barRef.current, cfg))
    }

    chartsRef.current = charts
    return () => {
      charts.forEach((ch) => ch.destroy())
      chartsRef.current = []
    }
  }, [theme, language])

  const t = (key: keyof typeof T) => T[key][language] || T[key].en
  const c = PALETTE[theme]

  return (
    <div className="space-y-6">
      <div className="border border-foreground/20 bg-background p-4">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-sm font-semibold text-foreground">{t('radarTitle')}</span>
          <span className="font-mono text-xs text-muted-foreground">{t('radarCaption')}</span>
        </div>
        <div className="relative h-[340px] w-full">
          <canvas ref={radarRef} />
        </div>
        <div className="mt-3 flex flex-wrap gap-4 border-t border-foreground/10 pt-3 font-mono text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: c.seo }} />SEO</span>
          <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: c.aeo }} />AEO</span>
          <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: c.geo }} />GEO</span>
        </div>
      </div>

      <div className="border border-foreground/20 bg-background p-4">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-sm font-semibold text-foreground">{t('barTitle')}</span>
          <span className="font-mono text-xs text-muted-foreground">{t('barCaption')}</span>
        </div>
        <div className="relative h-[320px] w-full">
          <canvas ref={barRef} />
        </div>
      </div>
    </div>
  )
}
