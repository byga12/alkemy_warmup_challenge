import React, {useEffect, useState} from 'react'
import Post from '../../components/Post/Post';
import { getPostById } from '../../services/api';

//Styles
import s from './DetailPage.module.css'

//React-bootstrap
import Spinner from 'react-bootstrap/Spinner';

export default function DetailPage({params}) {
  const {id} = params;

  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    setIsLoading(true);
    getPostById(id).then(res => {
      setPost(res.data);
      setIsLoading(false);
    })
  }, [id])

  return (
    <div className={s.container}>

      
      {isLoading ?
        <Spinner animation="border" variant="info" style={{marginBlock:"2rem"}}/>
        : post ?
          <Post key={post.id} {...post} isDetailed={true}/>
          : null
      }
    </div>
  )
}
