import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import ListDestination from '../../components/list-destination';
import SlideShow from '../../components/slide-show';

const Home = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <SlideShow></SlideShow>
      Home
      <ListDestination></ListDestination>
      <Footer></Footer>
    </div>
  );
};

export default Home;