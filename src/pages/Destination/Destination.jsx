import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ListTours from '../../components/list-tour';
const Destination = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/destinations/${id}`);
      setDestination(response.data);
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  };

  if (!destination) {
    return <div>Not found destination</div>;
  }

  const { name, description, location, main_img, img } = destination;

  return (
    <Container>
      <Header></Header>
      <Navbar>
      </Navbar>      
      <Row>
        <Col>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{location}</p>
          <Image src={main_img} alt="Main Image" fluid />
        </Col>
      </Row>
      <ListTours id={id}  ></ListTours>
      <Row>
        <Col>
          <h3>Image Gallery</h3>
          <Carousel>
            {img.map(imageUrl => (
              <Carousel.Item key={imageUrl}>
                <LazyLoadImage height={800} src={imageUrl} alt="Additional Image" fluid />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Footer></Footer>
    </Container>
  );
};

export default Destination;