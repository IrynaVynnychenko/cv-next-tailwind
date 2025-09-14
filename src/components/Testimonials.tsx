export default function Testimonials() {
  const testimonials = [
    {
      text: "Iryna made a great job transforming design from Figma to the real landing page. We definitely will work with her again.",
      author: "Upwork Client",
      rating: 5,
      project: "Landing Page Development"
    },
    {
      text: "Great communication. Was proactive about asking questions. By being interactive, asking questions, and making suggestions, it made the project better than if they just literally followed the instructions. Worked very quickly and finished ahead of schedule.",
      author: "Upwork Client",
      rating: 5,
      project: "E-commerce Website"
    },
    {
      text: "Iryna was able to handle all of our change requests and keep projects moving forward. She worked great with our team. I wish she was able to be a full-time team member.",
      author: "Upwork Client",
      rating: 5,
      project: "Long-term Collaboration"
    },
    {
      text: "Excellent collaboration experience. Iryna understands client needs and offers better solutions. The responsive design works perfectly on all devices.",
      author: "Upwork Client",
      rating: 5,
      project: "Responsive Web Design"
    }
  ]

  return (
    <section id="testimonials" className="pt-4">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Client Testimonials</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">{testimonial.author}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-md">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <a 
              href="https://www.upwork.com/freelancers/irynavynnychenko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              100% Job Success Rate on Upwork
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">Over 3750 hours of work with satisfied clients</p>
        </div>
      </div>
    </section>
  )
}

