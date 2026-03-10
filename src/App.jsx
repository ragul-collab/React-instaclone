import React from 'react' 
import Sidebar from './Sidebar'  
import './index.css'
import Feed from './Feed'
import Suggestions from './Suggestions'  

function App() {
  return (
    <div className="d-flex">
      <div className="sidebar"><Sidebar /></div>
      <div className="w-50"><Feed /></div>
      <div className="suggestions"><Suggestions /></div>
    </div>
  )
}

export default App

