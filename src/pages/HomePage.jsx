import { useEffect, useState } from "react"
import Post from "../components/Post";
import { fetchPosts } from "../services/api"

//styles
import s from './HomePage.module.css'

//React-bootstrap
import Spinner from 'react-bootstrap/Spinner';

export default function HomePage() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    setIsLoading(true);
    fetchPosts().then(res => {
      setPosts(res.data)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className={s.container}>
      
      {isLoading ?
        <Spinner animation="border" variant="info" style={{marginBlock:"2rem"}}/>
        : posts ?
            posts.map(post => <Post key={post.id} {...post}/>) 
           : null
      }

    </div>
  )
}
