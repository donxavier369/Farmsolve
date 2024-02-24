import React from 'react'; 
import "./Home.css"

const Home = () => {
  const findAndSolve = require("../../images/find and solve.jpg") 
  const community = require("../../images/community.png")
  const expert = require("../../images/expert.jpg")
  const  blog = require("../../images/blog.jpg")
  return(
    <div>
      <div className='banner_odd'>
      <img id='bannerimg' src={findAndSolve} alt="find and solve" />
      <p>Identify and address challenges affecting your crops with effective solutions</p>
      </div>
      <a className='button1' href="#">Find And Solve</a>

<br />
      <div className='banner_even'>
      <img id='bannerimg' src={community} alt="find and solve" />
      <p>Share your ideas, connect with others, and be part of our community.</p>
      </div>
      <a className='button2' href="#">community</a>

<br />
      <div className='banner_odd'>
      <img style={{height: "18.3rem"}} id='bannerimg' src={expert} alt="find and solve" />
      <p>Link with seasoned experts for in depth analysis and effective solutions to address crop-related challenges.</p>
      </div>
      <a className='button3' href="#">Connect Expert</a>

<br />
      <div className='banner_even'>
      <img style={{height: "18.1rem"}} id='bannerimg' src={blog} alt="find and solve" />
      <p>Contribute your expertise to address challenges and raise awareness among farmers about the latest agricultural technologies</p>
      </div>
      <a className='button4' href="/blogpost">Add Blog</a>

      

      
    </div>
  ); 
  
};

export default Home;
