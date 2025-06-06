// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Navber from './Component/Navber/Navber'

function App() {

  const [bookmarked,setBookMarked] =useState([])
  const handleBookMark=(blog)=>{
    setBookMarked([...bookmarked,blog])
  }
  

  return (
    <>
       <Navber></Navber>
      

      <div className="main-container flex text-center">
            
            <div className="left-container w-[70%]">
                 <Blogs handleBookMark={handleBookMark}></Blogs>
            </div>

            <div className="right-container w-[30%]">
              <h1>reading time : 0</h1>
              <h1>Bookmarked count : 0</h1>
              {
                bookmarked.map((marked)=> <p>{marked.title}</p>)
              }
            </div>

      </div>
     
    </>
  )
}

export default App
