import { useEffect, useState } from "react"
import Post from "../components/Post";
import { fetchPosts } from "../services/api"




export default function HomePage() {

  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    fetchPosts().then(res => setPosts(res.data))
  }, [])

  return (
    <div style={{marginTop:"4rem"}}>
    
      {posts ?
        posts.map(post => <Post key={post.id} {...post}/>) 
        : null
      }


    </div>
  )
}
