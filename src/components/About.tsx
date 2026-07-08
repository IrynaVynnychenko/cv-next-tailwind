'use client'

import Image from 'next/image'
import { LocationIcon, EmailIcon, LinkIcon, LinkedInIcon } from './Icons'

const whyWorkWithMe = [
  'Full-cycle delivery — from design to live product',
  'Senior-level frontend architecture',
  'Clear communication, no agencies',
  'Fast response & NDA-ready',
  'Long-term collaboration mindset',
]

export default function About() {
  return (
    <section id="about" className="pt-32">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-12">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12">
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="w-full max-w-sm mx-auto lg:max-w-none lg:w-80 h-80 lg:h-[464px] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center relative">
              <Image
                src="images/profile-photo.jpg"
                alt="Iryna Vynnychenko"
                width={320}
                height={384}
                className="w-full h-full object-cover absolute inset-0"
                onError={() => {}}
              />
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-8xl font-bold">
                I
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
              Iryna Vynnychenko
            </h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-4 font-medium leading-snug">
              High-Performance React / Next.js Development & Product Engineering
            </h2>

            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
              4,200+ Upwork hours · 8+ years · 100+ launched projects
            </p>

            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-semibold text-green-800 dark:text-green-200 mb-3 !mt-0">
                  Why Work With Me
                </h3>
                <ul className="space-y-1.5 !mb-0">
                  {whyWorkWithMe.map((item) => (
                    <li key={item} className="text-green-700 dark:text-green-300 text-sm flex items-start !mb-0">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I believe successful projects need more than code — they need care, consistency, and a developer
                who thinks ahead. That&apos;s why I focus on long-term collaboration: maintaining, improving, and scaling
                your website with bug-free code, flawless mobile adaptation, and smooth UX. If you&apos;re looking for
                someone to stand by your side and support your project&apos;s growth — I&apos;m that person.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                Direct, reliable, and always available for video calls & fast communication — let&apos;s build something.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <LocationIcon className="w-4 h-4 mr-3 flex-shrink-0" />
                Kyiv, Ukraine
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <EmailIcon className="w-4 h-4 mr-3 flex-shrink-0" />
                i.vynnychenko@gmail.com
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <LinkIcon className="w-4 h-4 mr-3 flex-shrink-0" />
                <a href="https://www.upwork.com/freelancers/irynavynnychenko" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  Upwork Profile
                </a>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <LinkedInIcon className="w-4 h-4 mr-3 flex-shrink-0" />
                <a href="https://www.linkedin.com/in/iryna-vynnychenko-287202141/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
