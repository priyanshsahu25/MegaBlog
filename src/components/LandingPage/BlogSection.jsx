import React from 'react'
import {Link} from 'react-router-dom'

function BlogSection() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-gray-350 tracking-widest font-medium title-font mb-1">The Bloggers Hub</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Unique Perspectives Endless Stories</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Embark on a journey through a tapestry of blogs, where each thread weaves a unique tale waiting to be discovered. From personal reflections to insightful analyses, our platform offers a vibrant array of voices and perspectives. </p>
    </div>
    <div className="flex flex-wrap">
      <div className="sm:w-1/2 md:w-1/2 xl:w-1/4 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Entrepreneurial Insights Unleashed</h2>
        <p className="leading-relaxed text-base mb-4 text-gray-400">Navigate the intricacies of entrepreneurship and unlock the secrets of success with our dynamic business blog, brimming with valuable insights.</p>
        <Link to='/Login' className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
      <div className="sm:w-1/2 md:w-1/2 xl:w-1/4  px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Gourmet Gastronomy Gazette</h2>
        <p className="leading-relaxed text-base mb-4 text-gray-400">Indulge in a culinary journey of delectable delights with our mouthwatering food blog, where every recipe tells a story of flavor and passion.</p>
        <Link to='/Login' className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
      <div className="sm:w-1/2 md:w-1/2 xl:w-1/4 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 ">Tech Tales Unveiled: Innovation Unleashed</h2>
        <p className="leading-relaxed text-base mb-4 text-gray-400">Uncover the latest in tech innovations and digital trends with our illuminating tech blog, where every post sparks curiosity and expands technological.</p>
        <Link to='/Login' className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
      <div className="sm:w-1/2 md:w-1/2 xl:w-1/4 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Vitality Vanguard Chronicles</h2>
        <p className="leading-relaxed text-base mb-4 text-gray-400">Empower your well-being with our comprehensive health blog, where expert insights and practical tips pave the path to a healthier lifestyle.</p>
        <Link to='/Login' className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default BlogSection