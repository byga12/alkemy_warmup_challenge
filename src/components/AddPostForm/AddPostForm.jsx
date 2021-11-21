import React from 'react'
import  Form from 'react-bootstrap/Form'

export default function AddPostForm({addPost}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.postTitle.value;
    const body = e.target.postBody.value;
    addPost(title, body);
    e.target.postTitle.value = "";
    e.target.postBody.value = "";
  }


  return (
    <Form onSubmit={(e) => handleSubmit(e)} style={{width:"100%", padding:"2rem"}} className="border">

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="h3">Add Post</Form.Label>
        <Form.Control placeholder="Type your post title here..." name="postTitle"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control as="textarea" placeholder="Type your body here..." name="postBody" rows={3} />
      </Form.Group>

      <button className="btn btn-primary">Done</button>
    </Form>
  )
}
