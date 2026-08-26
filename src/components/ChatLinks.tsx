import { TelegramIcon, ViberIcon } from './Icons'
import { TELEGRAM_URL, VIBER_URL } from '@/lib/contact'

const iconBtn =
  'inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-edge bg-background/80 transition hover:bg-accent'

export default function ChatLinks({
  className = 'inline-flex items-center gap-2',
  onClick,
}: {
  className?: string
  onClick?: () => void
}) {
  return (
    <div className={className}>
      <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className={iconBtn} onClick={onClick}>
        <TelegramIcon className="size-4" />
      </a>
      <a href={VIBER_URL} target="_blank" rel="noopener noreferrer" aria-label="Viber" className={iconBtn} onClick={onClick}>
        <ViberIcon className="size-4" />
      </a>
    </div>
  )
}
