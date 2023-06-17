import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../acssets/img/co-han-quoc.png';
import Image2 from '../acssets/img/co-my.png';
import Image3 from '../acssets/img/co-nga.png';
import Image4 from '../acssets/img/co-phap.png';
import Image5 from '../acssets/img/co-uc.png';
import Image6 from '../acssets/img/co-y.png';
import { Container } from 'react-bootstrap';
const SlideShow = () => {
  // Use require.context to get all the images in the folder
  const photos =[Image1,Image2,Image3,Image4,Image5,Image6]
   
  
  return (
    <Container className="d-flex justify-content-center align-items-center vw-50">
      <Carousel className="w-lg-50 w-100">
        {photos.map((photo, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={photo} alt={`Slide ${index + 1}`} />
            <Carousel.Caption>
              <h3>Slide {index + 1} label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default SlideShow;