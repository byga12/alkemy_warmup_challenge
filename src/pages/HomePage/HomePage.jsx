import { useEffect, useState } from "react"
import Post from "../../components/Post/Post";
import { fetchPosts } from "../../services/api"

//styles
import s from './HomePage.module.css'

//React-bootstrap
import Spinner from 'react-bootstrap/Spinner';

//API
import { deletePostById } from '../../services/api'


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


  const handleDelete = id => {
    console.log("delete",id);
    deletePostById(id).then(()=> {
      const newPosts = posts.filter(post => post.id !== id);
      setPosts(newPosts);
    })
  }

  const handleEdit = id => {
    console.log("edit",id);
  }





  return (
    <div className={s.container}>
      
      {isLoading ?
        <Spinner animation="border" variant="info" style={{marginBlock:"2rem"}}/>
        : posts ?
            posts.map(post => <Post 
              key={post.id} 
              {...post} 
              handleDelete={handleDelete} 
              handleEdit={handleEdit} 
              isDetailed={false}/>) 
              : null
      }

    </div>
  )
}
