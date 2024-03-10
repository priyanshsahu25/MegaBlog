import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import parse from 'html-react-parser'

function PostCard({$id, title, featuredImage,name,date,content}) {
  
const trimmedTitle = title.split(' ').slice(0, 5).join(' ');
const displayTitle = title.split(' ').length > 5 ? trimmedTitle + '...' : title;

const trimmedContent = content.split(' ').slice(0, 10).join(' ');
const displayContent = content.split(' ').length > 10 ? trimmedContent + '...' : content;


  return (
<>



<div className=" rounded-md border shadow-md  ">
  
      <img
      src={appwriteService.getFilePreview(featuredImage)}
        alt="Laptop"
        className=""
        style={{ width: '24.5rem', height: '18rem' }}
      />
      <div className="p-2">
        <h1 className="flex justify-center text-lg font-semibold ">
        {displayTitle}&nbsp; 
        </h1>
        <p className="mt-3 text-sm text-gray-600 ">
        {parse(displayContent)}
        </p>
        
        <Link to={`/post/${$id}`}>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
        </Link>
        <span className="mt-4 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
       ~{name}
          </span>
      </div>
      <span class="pl-6  text-xs text-gray-500 flex align-top ">{date}</span>
          
    </div>



</>



 
  )
}


export default PostCard