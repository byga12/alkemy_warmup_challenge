import { useEffect, useState } from "react"
import Post from "../../components/Post/Post";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import { fetchPosts } from "../../services/api"

//styles
import s from './HomePage.module.css'

//React-bootstrap
import Spinner from 'react-bootstrap/Spinner';

//API
import { deletePostById, editPostById } from '../../services/api'

//redux
import { useSelector } from "react-redux";



export default function HomePage() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const mode = useSelector(state => state.mode.mode)

  useEffect(()=> {
    setIsLoading(true);
    fetchPosts().then(res => {
      setPosts(res.data)
      setIsLoading(false)
    })
    
  }, [])


  const handleAdd = (title, body) => {
    const newPost = {
      id : Math.round(Math.random()*800+400),
      userId : Math.round(Math.random()*800+400),
      title,
      body
    }
    setPosts([newPost, ...posts]);
  }

  const handleDelete = id => {
    deletePostById(id).then(()=> {
      const newPosts = posts.filter(post => post.id !== id);
      setPosts(newPosts);
    })
  }
  
  //una funcion que busca a un post existente mediante su id, y actualiza el valor de sus datos.
  const handleEdit = (id,title,body) => {
    const data = {title,body}
    editPostById(id, data).then(res => {
      const updatedPost = res.data;
      console.log(updatedPost);
      const newPosts = posts.map(post => {
        if(post.id === id) {
          return updatedPost;
        }
        return post;
      })
      setPosts(newPosts);
    })
  }



  return (
    <div className={s.container}>
      
      {mode === "ADD" ? <AddPostForm addPost={handleAdd}/> : null}

      {isLoading ? 
        <Spinner animation="border" variant="info" style={{marginBlock:"2rem"}}/>
        : 
          posts ?
            posts.map(post => <Post 
              key={post.id} 
              {...post} 
              handleDelete={handleDelete} 
              handleEdit={handleEdit} 
              isDetailed={false}
              />
            ) 
          : 
            null
      }
      
    </div>
  )
}
