import ContactInfo from './ContactInfo'

export default function Contact() {
  return (
    <section id="contact" className="pt-4">
      <div className="pb-12">
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Questions or project ideas? Let&apos;s chat! 💬
            </p>
          </div>
        </div>

        <ContactInfo />

        <div className="mt-8">
          <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
            Let&apos;s work together!
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            I&apos;m always interested in new opportunities and exciting projects. If you have any
            questions or just want to say hello, don&apos;t hesitate to reach out!
          </p>
        </div>
      </div>
    </section>
  )
}
