import React, { useEffect, useState } from 'react'
import "./index.css"

function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch("http://localhost:3001/posts").
      then((data) => data.json()).
      then((data) => setPosts(data)).
      catch((err) => console.log(err))

  }, []);



  return (
    <div className='d-flex justify-content-center my-3'>
      {posts.length > 0 ? (
        <div>
          {posts.map(post => (
            <><div key={post.id} className='d-flex'>
              <img className=' dp rounded-circle' src={post.user.profile_pic} alt="profile pic" />
              <h5>{post.user.username}</h5>
            </div>
              <img className='image' src={post.image} alt="post" />
              <div>
                <i className="bi bi-heart "></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
              </div>
              <div>
                {post.likes} likes
              </div>
              <p>{post.caption}</p>


            </>
          ))}
        </div>
      ) : (
        <div>
          No Posts
        </div>
      )}
    </div>
  )
}

export default Posts