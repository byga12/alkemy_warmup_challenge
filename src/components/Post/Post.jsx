import {useState} from 'react'
import { useLocation } from 'wouter';

//Styles
import s from './Post.module.css'

//React-Bootstrap
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

//redux
import { useSelector } from 'react-redux';

export default function Post({body, id, title, userId, handleDelete, handleEdit, isDetailed}) {
  
  const setLocation = useLocation()[1];
  
  //primero que nada, me fijo, si en el sidebar está habilitada la opción que me permite editar posts
  const mode = useSelector(state => state.mode.mode)
  //un estado para ver si el post está en modo editable
  const [isEditable, setIsEditable] = useState(false);
  //una función que establece al post en modo editable
  const makeEditable = () => {
    setIsEditable(true)
  }
  //esta función actualiza los datos, y al final hace que el post vuelva a su estado no-editable
  const handleSubmitChanges = (e) => {
    e.preventDefault();
    const title = e.target.postTitle.value;
    const body = e.target.postBody.value;
    handleEdit(id,title,body)
    setIsEditable(false);
  }


  //este componente devuelve dos cosas muy distintas dependiendo de si es editable o no
  if (isEditable) {
    return (
      <Form onSubmit={(e) => handleSubmitChanges(e)} style={{width:"100%", padding:"2rem"}} className="border">

      <Form.Group className="mb-3">
        <Form.Label className="h3">Title</Form.Label>
        <Form.Control defaultValue={title} name="postTitle"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="h3">Body</Form.Label>
        <Form.Control defaultValue={body} as="textarea" name="postBody" rows={3} />
      </Form.Group>

      <button className="btn btn-primary">Save changes</button>
    </Form>

    )

  } else return (
    <Card onClick={()=> setLocation(`/post/${id}`)} className={`p-3 border-bottom ${s.card}`} style={{borderRadius:"0px",border:"none", width:"100%"}}>

      
      <Card.Title style={{textAlign:"center", padding: "2rem"}}>{title}</Card.Title>

      {/* si se esta viendo el post en detalle, además del titulo muestro el cuerpo */}
      {isDetailed ?
        <Card.Text>{body}</Card.Text>
        : 
          null
      }




      {/* si se esta viendo el post en detalle, no muestro las opciones para editar/borrar */}
      {isDetailed ? 
        null 
        :
          <div className={s.footer}>
            <div className={s.deleteButton} onClick={(e) => {handleDelete(id);e.stopPropagation()}}>
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
            </div>

            { mode === "EDIT" ?
              <div className={s.editButton} onClick={(e) => {makeEditable();e.stopPropagation()}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>
              </div> 
              :
                null
            }

          </div>
      }


    </Card>
  )
}
