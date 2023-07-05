import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import FQA from './FQA';
import MailForm from './MailForm';
const Support = () => {
  return (
    <div  style={{backgroundColor:"#999"}}>
      <Header></Header>
      <Navbar></Navbar>
      <FQA></FQA>
      <MailForm></MailForm>
      <Footer></Footer>
    </div>
  );
};

export default Support;