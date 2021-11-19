import React from 'react'
import { useLocation } from 'wouter';
//Styles
import s from './Post.module.css'

//React-Bootstrap
import Card from 'react-bootstrap/Card';



export default function Post({body, id, title, userId, handleDelete, handleEdit, isDetailed}) {
  const setLocation = useLocation()[1];


 
  return (
    <Card onClick={()=> setLocation(`/post/${id}`)} className={`p-3 border-bottom ${s.card}`} style={{borderRadius:"0px",border:"none", width:"100%"}}>
      
      <Card.Title style={{textAlign:"center", padding: "2rem"}}>{title}</Card.Title>

      {isDetailed ?
        <Card.Text>{body}</Card.Text>
        : null
      }

      <div className={s.footer}>
        <div className={s.deleteButton} onClick={(e) => {handleDelete(id);e.stopPropagation()}}>
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
        </div>

        <div className={s.editButton} onClick={(e) => {handleEdit(id);e.stopPropagation()}}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>
        </div>
      </div>

    </Card>
  )
}
