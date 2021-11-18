import React from 'react'

export default function Post({body, id, title, userId}) {
  return (
    <div style={{marign: "1rem"}}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}
