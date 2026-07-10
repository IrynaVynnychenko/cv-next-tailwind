import type { BlogSection } from '@/data/blog-posts'

type BlogPostContentProps = {
  sections: BlogSection[]
}

export default function BlogPostContent({ sections }: BlogPostContentProps) {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {sections.map((section, index) => (
        <div key={index} className="mb-8 last:mb-0">
          {section.heading && (
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              {section.heading}
            </h2>
          )}
          {section.paragraphs.map((paragraph, pIndex) => (
            <p
              key={pIndex}
              className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
          {section.list && (
            <ul className="space-y-2 mt-4">
              {section.list.map((item) => (
                <li
                  key={item}
                  className="text-gray-700 dark:text-gray-300 text-sm flex items-start"
                >
                  <span className="mr-2 text-green-600 dark:text-green-400">•</span>
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
