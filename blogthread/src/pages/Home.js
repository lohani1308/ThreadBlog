import React, { useEffect, useState } from 'react';
import '../component/Home.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { increment} from '../Redux/likesCounterSlice'

function Home() {

  const [likes,setLikes]=useState({});
  const [data,setData]=useState([]);


  const topblogs=[
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  ]

  const skills=['Science','Python','C++','Javascript','Java','Cloud'];
  const dispatch=useDispatch();

  //console.log(data);

  const handleClick=(e)=>{
      dispatch(increment());
  }

  useEffect(()=>{
    axios.get('http://localhost:4578/getblog').then((res)=>{
      setData(res.data);
    }).catch((err)=>{
      console.log(err);
    });
  },[]);

  console.log(data);

  return (
    <div className='home--page'>
      <div className='blogs--section'>
        {
          data.map((blog,ind)=>(
            <div>
              {blog.blog}
              <button id={ind} style={{ padding:"0.5rem", border:"1px solid black"}} onClick={handleClick}>Like</button>
              <h1>{blog.likes}</h1>
            </div>
          ))
        }
        
      </div>

      <div className='aside--section'>
        <div className='top--blogs-section'>
          {
              topblogs.map((blog)=>(
                <div>{blog}</div>
              ))
          }
        </div>
        <div className='skills--section'>
            {
              skills.map((skill)=>(
                <h1>{skill}</h1>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Home;