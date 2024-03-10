import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import LandingPage from '../components/LandingPage';
function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    // if (posts.length === 0) {
        return (
            
                            
    <LandingPage/>                    
                     
        )
    // }
    // return (
    //     <div className='w-full py-8'>
    //         <Container>
    //             <div className='flex flex-wrap'>
    //                 {posts.map((post) => (
    //                     <div key={post.$id} className='p-2 w-1/4'>
    //                         <PostCard {...post} />
    //                     </div>
    //                 ))}
    //             </div>
    //         </Container>
    //     </div>
    // )
}

export default Home