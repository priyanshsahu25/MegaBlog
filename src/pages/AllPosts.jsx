import React, { useState, useEffect } from "react";
import { Container, Footer, Header, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import Loader from "../components/Loader";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
        setTimeout(()=>{
            setLoading(false);
        },1900)
      
    });
  }, []);

  if (loading) {
    return (
        <>
       
        <div className="flex justify-center items-center h-screen"><Loader/></div>
        </>
    )
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
