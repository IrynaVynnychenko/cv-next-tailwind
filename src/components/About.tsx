'use client'

import Image from 'next/image'
import { LocationIcon, EmailIcon, LinkIcon, LinkedInIcon } from './Icons'

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
                onError={() => {
                  // Handle error if needed
                }}
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
            <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-6 font-medium">
              Frontend Web Developer
            </h2>
            
            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                Experienced Frontend Web Developer with 7+ years of experience creating promo sites, high-converting & SEO-optimized landing pages, 
                templates, e-commerce stores, portals, business & corporate websites.
              </p>
              
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4 text-lg">
                <p className="text-green-700 dark:text-green-300 !mb-2">
                  ✅ 30+ hours available
                </p>
                <p className="text-green-700 dark:text-green-300 !mb-2">✅ Long-term & Full-time work schedule</p>
                <p className="text-green-700 dark:text-green-300 !mb-0">✅ Flexible collaboration</p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe successful projects need more than code — they need care, consistency, and a developer who thinks ahead. 
                I focus on long-term collaboration: maintaining, improving, and scaling your website with bug-free code, 
                flawless mobile adaptation, and smooth UX.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <LocationIcon className="w-4 h-4 mr-3 flex-shrink-0" />
                Ukraine
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
