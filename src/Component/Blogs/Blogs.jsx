import React, { useEffect, useState } from 'react';


const Blogs = () => {
    const [blogs,SetBlogs]=useState([])
    useEffect(()=>{
       fetch('blogs.json')
       .then(res=>res.json()) 
       .then(data=>SetBlogs(data))
    },[])
    console.log(blogs)
    return (
        <div>
            
        </div>
    );
};

export default Blogs;