import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Navbar/navbar';
import ListTour from '../../components/list-tour';

const Home = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
      Home
      <ListTour></ListTour>
      <Footer></Footer>
    </div>
  );
};

export default Home;