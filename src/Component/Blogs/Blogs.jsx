import React, { useEffect, useState } from 'react';


const Blogs = () => {
    const [blogs,SetBlogs]=useState([])
    useEffect(()=>{
       fetch('blogs.json')
       .then(res=>res.json()) 
       .then(data=>SetBlogs(data))
    },[])
   
    return (
        <div>
              <h1 className='text-3xl'>Total : {blogs.length}</h1>
        </div>
    );
};

export default Blogs;