import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import "./index.css"

function Feed() {
  return (
    <div>
       <div><Stories/></div>
       <div><Posts/></div>
    </div>
  )
}

export default Feed