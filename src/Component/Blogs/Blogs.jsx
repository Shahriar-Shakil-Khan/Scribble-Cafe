import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';


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
              <div className="all-blogs grid grid-cols-2">
                {
                   blogs.map((blog=><Blog blog={blog}></Blog>)) 
                }
              </div>
        </div>
    );
};

export default Blogs;