import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import ListDestination from '../../components/list-destination';
import ListTourUpComing from '../../components/list-tour-upcoming';
import SlideShow from '../../components/slide-show';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div style={{ backgroundColor: "#999" }}>
      <Header></Header>
      <Navbar></Navbar>
      <Container style={{ backgroundColor: "#FFF" }}>
        <SlideShow></SlideShow>
        <ListDestination></ListDestination>
        <ListTourUpComing></ListTourUpComing>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Home;