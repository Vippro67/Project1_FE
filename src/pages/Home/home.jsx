import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import ListDestination from '../../components/list-destination';
import ListTourUpComing from '../../components/list-tour-upcoming';
import SlideShow from '../../components/slide-show';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <SlideShow></SlideShow>
      <ListDestination></ListDestination>
     <ListTourUpComing></ListTourUpComing>
      <Footer></Footer>
    </div>
  );
};

export default Home;