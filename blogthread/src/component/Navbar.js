import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const navbarSection=['Home','AddBlog','Contact','Register'];

  const [search,setSearch]=useState();

  const handleChange=(e)=>{
      setSearch(e.target.value);
  }

  console.log(search);
  
  return (
    <div className='navbar'>
      <div className='navbar--link'>
        <ul>
          {
            navbarSection.map((x,ind)=>(
                <li key={ind}>
                  <Link to={ x!== 'Home' ? `/${x.toLowerCase()}` : '/'}>{x}</Link>
                </li>
            ))
          }
        </ul>
      </div>

      <div className='search--blog'>
        <input style={{ border:"1px solid black "}} type="text" onChange={handleChange} value={search}/>
      </div>

      <div className='profile--logo'>Profile</div>

    </div>
  )
}

export default Navbar