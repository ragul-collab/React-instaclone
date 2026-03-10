import React, { useEffect, useState } from 'react'
import "./index.css"

function Suggestions() {
  const [profile,setProfile]= useState([null])
  const [suggestions,setSuggestions]= useState([])
  useEffect(()=>{
    fetch("http://localhost:3001/profile").
    then(data => data.json()).
    then(data => setProfile(data)).
    catch(err => console.log(err))

    fetch("http://localhost:3001/suggestions").
    then(data => data.json()).
    then(data => setSuggestions(data)).
    catch(err => console.log(err))
  },[])
  return (
    <div>
      <div className="suggestions m-4 w-75">
        {profile ?
      <div className='d-flex'>
              <img className=' dp rounded-circle' src={profile.profile_pic} alt="profile pic" />
              <h5 className='profilename'>{profile.username}</h5>
              <p className='ms-auto text-primary '>switch</p>
            </div>
            : <small className='text-primary'>Loading...</small>}
      </div>
      <div className='d-flex w-75 m-4'>
        <p>Suggested for you</p>
        <b className='ms-auto'>See all</b>
      </div>

      <div>
        {suggestions.length > 0 ? (
          <div>
            {suggestions.map(suggestion =>(
              <div key={suggestion.id} className='d-flex w-75 m-4'>
                <img className=' dp rounded-circle' src={suggestion.profile_pic} alt="profile pic" />
                <h5 className='profilename'>{suggestion.username}</h5>
                <button className='ms-auto btn btn-primary'>Follow</button>
              </div>
            ))}
          </div>
        ):(
          <small className='text-primary'>No suggestions</small>
        )}
      </div>
    </div>
  )
}

export default Suggestions