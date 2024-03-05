import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import parse from 'html-react-parser'

function PostCard({$id, title, featuredImage,name,date,content}) {
  
const trimmedTitle = title.split(' ').slice(0, 5).join(' ');
const displayTitle = title.split(' ').length > 5 ? trimmedTitle + '...' : title;
const trimmedContent = content.split(' ').slice(0, 10).join(' ');
const displayContent = content.split(' ').length > 10 ? trimmedContent + '...' : content;

console.log(displayTitle)
  return (
    // <Link to={`/post/${$id}`}>
    //     <div className='w-full bg-gray-100 rounded-xl p-4'>
    //         <div className='w-full justify-center mb-4'>
    //             <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
    //             className='rounded-xl' />

    //         </div>
    //         <h2
    //         className='text-xl font-bold'
    //         >{title}</h2>
    //         <p>{parse(content)}</p>
    //         <p>Posted by {name} </p>
    //         <span>{date}</span>
    //     </div>
    //     </Link>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  <Link to={`/post/${$id}`}>
    <img class="rounded-t-lg w-full h-80 object-cover" src={appwriteService.getFilePreview(featuredImage)} alt={title} />
  </Link>

  <div class="p-5">
    <Link to={`/post/${$id}`}>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{displayTitle}</h5>
    </Link>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{parse(displayContent)}</p>
    
    <Link to={`/post/${$id}`} class='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
      Read more
      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </Link>
    
    <p class="text-xs text-gray-600 mt-3">Posted by {name}</p>
    <span class="text-xs text-gray-500 pb-0">{date}</span>
  </div>
</div>



 
  )
}


export default PostCard