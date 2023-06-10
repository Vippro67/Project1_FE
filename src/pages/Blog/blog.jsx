import React, { useState, useEffect } from 'react';
import BlogDataService from "../../service/blog"
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Navbar/navbar';
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, [blogs]);

  const fetchBlogs = async () => {
    try {
      const response = await BlogDataService.getAll();
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h1>All Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
              <p>Author: {blog.author}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Blog;