import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogIndex from '@/components/BlogIndex'
import { SetLanguageClient } from '@/components/SetLanguageClient'

export default function UaBlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <SetLanguageClient lang="ua" />
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full">
        <BlogIndex currentPage={1} />
      </main>
      <Footer />
    </div>
  )
}
