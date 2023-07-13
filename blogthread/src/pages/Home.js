import React, { useState } from 'react';
import '../component/Home.css';

function Home() {

  const [likes,setLikes]=useState({});

  const data=[
    { blog:"0There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    ,likes:likes[0]},
    { blog:"1There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    ,likes:likes[1]},
    { blog:"2There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    ,likes:likes[2]},
    { blog:"3There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    ,likes:likes[3]}
  ]

  const topblogs=[
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  ]

  const skills=['Science','Python','C++','Javascript','Java','Cloud'];

  //console.log(data);

  const handleClick=(e)=>{
       setLikes(prevState => ({
         ...prevState,
        [e.target.id]: (prevState[e.target.id] || 0) + 1
       }));

       console.log(data[e.target.id]);

      data[e.target.id].likes+=1;
  }


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