import React, { useState } from 'react';
import '../component/AddBlog.css';
import axios from 'axios';

function AddBlog( { handlNewblog } ) {

  const [addblog,setAddblog]=useState();
  const [typeblog,setTypeBlog]=useState();

  const handleChange=(e)=>{
    setAddblog(e.target.value);
  }

  const handleType=(e)=>{
    setTypeBlog(e.target.value);
  }

  const handleClick=()=>{
    axios.post('http://localhost:4578/addblog',{
      blog:addblog,
      typeblog:typeblog,
      likes:5,
      share:3

    }).then(
      (res)=>{
        console.log(res.data);
      }
    ).catch(err=>{
      console.log(err);
    });

  }

  return (
    <div className='add--blog'>
      <textarea rows={10} cols={50} onChange={handleChange} value={addblog} />
      <input style={{ border:"1px solid black", }} value={typeblog} onChange={handleType} />
      <button className='btn' onClick={handleClick}>Add Blog</button>
    </div>
  )
}

export default AddBlog