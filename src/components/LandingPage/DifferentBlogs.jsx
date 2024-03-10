import React from 'react'
import {Link} from 'react-router-dom'

function DifferentBlogs() {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">Diverse blog mosaic</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-350">Explore a tapestry of diverse blogs, each offering a unique lens into the world. From personal reflections to expert analyses, these varied perspectives enrich our understanding and ignite curiosity.</p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/13_Famous_Business_Leaders_You_Must_Follow_in_2022.jpg"/>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">Priyansh</h2>
              <h3 className="text-gray-500 mb-3">Business Revelations</h3>
              <p className="mb-4">Unlock the Treasury: Entrepreneurial Insights Unleashed</p>
              <span className="inline-flex">
              <Link to='/Login' className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg"/>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">Shivam</h2>
              <h3 className="text-gray-500 mb-3">Foodie Chronicles</h3>
              <p className="mb-4">Embark on sumptuous culinary adventures that tantalize the taste </p>
              <span className="inline-flex">
               <Link to='/Login' className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg"/>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
              <h3 className="text-gray-500 mb-3">Innovation Insights</h3>
              <p className="mb-4">Innovation Chronicles: Unraveling the Untold Narratives of Technology.</p>
              <span className="inline-flex">
               <Link to='/Login' className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://images.moneycontrol.com/static-mcnews/2023/06/Health-insurance-770x433.png?impolicy=website&width=770&height=431"/>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
              <h3 className="text-gray-500 mb-3">Health Heroics</h3>
              <p className="mb-4">Health Heroes Chronicles: Unveiling Vital Insights in the Pursuit.</p>
              <span className="inline-flex">
               <Link to='/Login' className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
  )
}

export default DifferentBlogs