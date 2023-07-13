import React, { useState } from 'react';
import '../component/AddBlog.css';

function AddBlog( { handlNewblog } ) {

  const [addblog,setAddblog]=useState();

  const handleChange=(e)=>{
    setAddblog(e.target.value);
  }

  console.log(addblog);

  return (
    <div className='add--blog'>
      <textarea rows={10} cols={50} onChange={handleChange} value={addblog} />
      <button className='btn'>Add Blog</button>
    </div>
  )
}

export default AddBlog