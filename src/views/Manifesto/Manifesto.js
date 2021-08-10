import React from 'react'
import image1 from "assets/img/simbiosis-fotos/AcademiaSimbiosis1.jpg";

import MainFeaturedPost from "views/Manifesto/MainFeaturedPost.js";



const mainFeaturedPost = {
  title: 'Manifesto',
  image: image1,
  imgText: 'main image description',
};


const Manifesto = () => {

      return (    
        <div>
        <MainFeaturedPost post={mainFeaturedPost} />
        </div>      
      )
  }

export default Manifesto