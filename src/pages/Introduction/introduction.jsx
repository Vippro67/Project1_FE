import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Navbar/navbar';

const Introduction = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Container>
      <h1>Welcome to Our Travel Website!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet,
        purus et consectetur vulputate, nisi erat accumsan metus, id luctus sem
        mi nec neque. In ut gravida lectus. Vivamus congue odio a dignissim
        sagittis. Suspendisse potenti. Aliquam vel placerat turpis, ac tempus
        nulla. Proin non odio tortor.
      </p>
      <img src="https://example.com/image1.jpg" alt="Image 1" />
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Phasellus in sollicitudin justo. Integer feugiat, urna ac
        ullamcorper lacinia, nunc magna congue dolor, a tristique nisi mi vitae
        mauris. Nulla id neque ullamcorper, aliquet est eget, interdum odio. Cras
        dignissim, eros vitae lacinia eleifend, urna elit commodo est, eget
        iaculis nisl ex in massa.
      </p>
      <img src="https://example.com/image2.jpg" alt="Image 2" />
      <p>
        Donec efficitur semper tellus, non malesuada purus venenatis eget. Sed
        rutrum purus sed est tincidunt eleifend. Aliquam ultricies erat non
        venenatis mollis. In hac habitasse platea dictumst. Etiam luctus ligula
        eget quam volutpat, nec volutpat tellus tincidunt.
      </p>
    </Container>
      <Footer></Footer>
    </div>
  );
};

export default Introduction;