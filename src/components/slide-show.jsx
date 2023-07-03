import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../acssets/img/giangsinh.jpg';
import Image2 from '../acssets/img/quockhanh.jpg';
import Image3 from '../acssets/img/summer-beach.jpg';
import Image4 from '../acssets/img/tet.jpg';
import Image5 from '../acssets/img/valentine.jpg';
import { Container } from 'react-bootstrap';
const SlideShow = () => {
  // Use require.context to get all the images in the folder
  const photos =[Image1,Image2,Image3,Image4,Image5]
   
  
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ width: "80vw", height: "auto" }}>
  <Carousel className="w-lg-50 w-100" style={{ height: "100%", width: "100%" }}>
    {photos.map((photo, index) => (
      <Carousel.Item key={index}>
        <img className="d-block w-100 h-100" src={photo} alt={`Slide ${index + 1}`} style={{ objectFit: "cover" }} />
      </Carousel.Item>
    ))}
  </Carousel>
</Container>

  );
};

export default SlideShow;