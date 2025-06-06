
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Navber from './Component/Navber/Navber'

function App() {

  const [bookmarked,setBookMarked] =useState([])
  const [readingCount,setReadingCount] =useState(0)
  
  const handleBookMark=(blog)=>{
    setBookMarked([...bookmarked,blog])
  }
  
  const handleMarkRead=(time,id)=>{
    const newTime =readingCount+time;
      
      setReadingCount(newTime);
      handleRemoveFromBookMark(id);
  }

  const handleRemoveFromBookMark=(id)=>{
     const remainingBookMark= bookmarked.filter((mark)=>mark.id!==id)
     setBookMarked(remainingBookMark)
  }

  return (
    <>
       <Navber></Navber>
      

      <div className="main-container flex text-center">
            
            <div className="left-container w-[70%]">
                 <Blogs handleBookMark={handleBookMark} handleMarkRead={handleMarkRead} ></Blogs>
            </div>

            <div className="right-container w-[30%]">
              <h1>Reading time : {readingCount}</h1>
              <h1>Bookmarked count : {bookmarked.length}</h1>
              {
                bookmarked.map((marked)=> <p key={marked.id} className='bg-amber-800 p-4 mb-4 shadow-sm'>{marked.title}</p>)
              }
            </div>

      </div>
     
    </>
  )
}

export default App
