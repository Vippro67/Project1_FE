import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import moment from 'moment/moment';
import { Container } from 'react-bootstrap';
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, [blogs]);

  const fetchBlogs = async () => {
    const response = await axios.get('http://localhost:8080/api/v1/blogs')
    setBlogs(response.data)
  }

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h1>All Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <Container>
        {blogs.map(blog => (
          <Card key={blog._id} className='card-body'>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>{blog.content}</Card.Text>
            <Card.Text> 
              {blog.tag}
              </Card.Text>
            <Card.Text>{moment(blog.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</Card.Text>
            <hr />
          </Card>
        ))}
      </Container>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Blog;