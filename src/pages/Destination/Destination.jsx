import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import ListTours from '../../components/list-tour';
import './Destination.css';

const Destination = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(() => null);
  const [reviews, setReviews] = useState(() => null);
  const [displayedImage, setDisplayedImage] = useState(() => null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [destinationResponse, reviewsResponse] = await Promise.all([
          axios.get(`http://localhost:8080/api/v1/destinations/${id}`),
          axios.get(`http://localhost:8080/api/v1/reviews/destination/${id}`)
        ]);
        setDestination(destinationResponse.data);
        setReviews(reviewsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!destination) {
    return <div>Not found destination</div>;
  }

  const handleImageClick = (image) => {
    setDisplayedImage(image);
  };

  const star = (number) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const starColor = i < number ? 'red' : undefined;
      stars.push(
        <FontAwesomeIcon icon={faStar} color={starColor} key={i} />
      );
    }

    return <div>{stars}</div>;
  };

  return (
   <div  style={{backgroundColor:"#999"}}>
     <Container  style={{backgroundColor:"#FFF"}}>
      <Header></Header>
      <Navbar></Navbar>
      <Row>

        <Col>
          <h1>{destination.name}</h1>
          <p>{destination.description}</p>
          <p>{destination.location}</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-none d-md-block">
          <h1>Một số hình ảnh về địa điểm này</h1>
          <div className="full-img">
            {displayedImage ? null : <img className="displayed-img" src={destination.main_img} alt={displayedImage} />}
            <img className="displayed-img" src={displayedImage} alt={displayedImage} />
          </div>
          <div className="thumb-bar">
            {destination.img.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={image}
                className={displayedImage === image ? 'active' : ''}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </Col>
        <Carousel className="d-md-none">
          {destination.img.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image} alt={image} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
      <ListTours id={id}></ListTours>
<h1>Một số review về địa điểm này</h1>
      {reviews && (
        <table style={{width:'100%'}}>
          
          <tbody>
          {reviews.map((review) => (
            <tr key={review._id} >
              <td style={{ width:'20%', border: '1px black solid' }}>
                <h5>{review.fullName}</h5>
                {star(review.rating)}
              </td>
              <td style={{ border: '1px black solid', width: 'auto' }}>
                <p>{review.comment}</p>
                <p style={{ textAlign: 'right' }}>{moment(review.createdAt).format('hh:mm MM/DD/YYYY')}</p>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      )}
      <Footer></Footer>
    </Container>
   </div>
  );
};

export default Destination;
