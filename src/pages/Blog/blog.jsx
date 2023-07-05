import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import axios from 'axios';
import moment from 'moment/moment';
import { Container } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const tag = urlParams.get('tag');
  const [expandedBlogIds, setExpandedBlogIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const page = urlParams.get('page');
  if (page !== null && page !== currentPage) setCurrentPage(page);


  useEffect(() => {
    fetchBlogs();
  }, [currentPage, tag]);
  const handleNextPage = () => {
    setCurrentPage(page);
};

const handlePrevPage = () => {
    setCurrentPage(page);
};
  const fetchBlogs = async () => {
    if (tag === null || tag === '') {
      const response = await axios.get(`http://localhost:8080/api/v1/blogs?page=${currentPage}`);
      setBlogs(response.data);
    }
    else {
      const response = await axios.get(`http://localhost:8080/api/v1/blogs/tag/${tag}`);
      setBlogs(response.data);
    }
  };
  const toggleExpanded = (blogId) => {
    setExpandedBlogIds((prevExpandedIds) =>
      prevExpandedIds.includes(blogId)
        ? prevExpandedIds.filter((id) => id !== blogId)
        : [...prevExpandedIds, blogId]
    );
  };
  return (
    <div style={{backgroundColor:"#999"}}>
      <Header></Header>
      <Navbar></Navbar>
      <Container style={{backgroundColor:"#FFF"}}>
      <h1>All Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <Container >
          {blogs.map(blog => (
            <Container className="container d-flex mt-0 p-2 pb-0" style={{ width: '100%' }}>
              <div className="card mb-3" style={{ width: '100%' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blog.image}
                      className="img-fluid rounded-start" alt={blog.title} tyle={{ width: '100%' }}></img>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a >{blog.title}</a>
                      </h5>
                      <p className="card-text">
                        {expandedBlogIds.includes(blog._id) ? blog.detailContent : `${blog.content.slice(0, 2000)}...`}
                        {(
                          <button
                            style={{ textDecoration: 'none', color: '#0d6efd', border: 'none', background: 'none' }}
                            onClick={() => toggleExpanded(blog._id)}
                          >
                            {expandedBlogIds.includes(blog._id) ? 'less' : 'see more ...'}
                          </button>
                        )}
                      </p>
                      <p>
                        Xem thêm bài viết về :
                        <a href={`?tag=${blog.tag}`} style={{ textDecoration: 'none' }}>
                          {blog.tag}</a>
                      </p>
                      <p className="card-text">
                      <small className="text-muted">Created At : {moment(blog.createdAt).format("hh:mm DD/MM/YYYY")}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>)
          )}
        </Container>
      )}
     
      </Container>
 <Container style={{backgroundColor:'rgb(251, 216, 253)'}} >
                    <Pagination style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Pagination.Prev onClick={handlePrevPage} href={`/blogs/?page=${currentPage - 1}`} />
                        <Pagination.Next onClick={handleNextPage} href={`/blogs/?page=${currentPage === null ? (2) : (currentPage - (-1))}`} />
                    </Pagination>
                </Container>
      <Footer></Footer>
    </div>
  );
};
export default Blog;