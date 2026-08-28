import type { BlogSection } from '@/data/blog-posts'

type BlogPostContentProps = {
  sections: BlogSection[]
  className?: string
}

export default function BlogPostContent({ sections, className }: BlogPostContentProps) {
  const body = className ?? 'text-muted-foreground'

  return (
    <div className="max-w-none">
      {sections.map((section, index) => (
        <div key={index} className="mb-8 last:mb-0">
          {section.heading && (
            <h2 className="mb-4 text-xl font-semibold tracking-tight">{section.heading}</h2>
          )}
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex} className={`mb-4 leading-relaxed last:mb-0 ${body}`}>
              {paragraph}
            </p>
          ))}
          {section.list && (
            <ul className="mt-4 space-y-2">
              {section.list.map((item) => (
                <li key={item} className={`flex items-start gap-2 text-sm ${body}`}>
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-current" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}
