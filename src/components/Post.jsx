import React from 'react'

//React-Bootstrap
import Card from 'react-bootstrap/Card';


export default function Post({body, id, title, userId}) {
  return (
    <Card className="p-3 border-bottom" style={{borderRadius:"0px",border:"none"}}>
      
      <Card.Title>{title}</Card.Title>
      <Card.Text>{body}</Card.Text>
    </Card>
  )
}
