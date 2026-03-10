import React from 'react'
import './index.css'

function Sidebar() {
  return (
    <div className='m-3 position-fixed'>
        <div className='d-flex flex-column gap-3 m-3'>
            <img className="logo-text"src="src\assets\logo-text.png" alt="" />
            <div><i className="bi bi-house-door"></i>Home</div>
            <div><i className="bi bi-play-circle"></i>Reels</div>
            <div><i className="bi bi-chat-left-dots"></i>Messages</div>
            <div><i className="bi bi-search"></i>Search</div>
            <div><i className="bi bi-compass"></i>Explore</div>
            <div><i className="bi bi-heart"></i>Notifications</div>
            <div><i className="bi bi-person"></i>Profile</div>
        </div>
        <div className='d-flex flex-column gap-3 position-fixed bottom-0 m-3'>
            <div><i className="bi bi-threads"></i>Threads</div>
            <div><i className="bi bi-three-dots"></i>More</div>
        </div>
    </div>
  )
}

export default Sidebar