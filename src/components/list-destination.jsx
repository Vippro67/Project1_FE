import axios from 'axios';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./list-destination.css"
import { Pagination } from 'react-bootstrap';
const ListDestination = () => {
    const [destinations, setDestinations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    if (page !== null && page!==currentPage)  setCurrentPage(page);

    useEffect(() => {
        fetchDestinations();
    }, [currentPage]);

    const fetchDestinations = async () => {
        try {
            if (currentPage != null) { const response = await axios.get(`http://localhost:8080/api/v1/destinations?page=${currentPage}`); setDestinations(response.data);}
            else { const response = await axios.get(`http://localhost:8080/api/v1/destinations`); setDestinations(response.data);}

            
        } catch (error) {
            console.error('Error fetching destinations:', error);
        }
    };
    const handleNextPage = () => {
        setCurrentPage(page);
    };

    const handlePrevPage = () => {
        setCurrentPage(page);
    };
    return (
        <Container style={{ display: "flex", flexWrap: 'wrap', gap: '30px', padding: '30px auto', backgroundColor: '#fbd8fd' }}>
            {destinations.length === 0 ? (
                <h1>No destinations found.</h1>
            ) : (
                destinations.map(destination => (
                    <Card key={destination._id} className="destination-card" style={{ width: '400px', minWidth: '320px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.195)', margin: 'auto' }}>
                        <LazyLoadImage
                            effect="blur"
                            src={destination.main_img}
                            alt={destination.name}
                            height={320}
                            width={395}
                            style={{ margin: 'auto' }}
                        />
                        <Card.Body style={{ flex: '1 1 auto' }}>
                            <Card.Title>
                                <a href={'/destination/' + destination._id} style={{ textDecoration: 'none' }}>
                                    {destination.name}
                                </a>
                            </Card.Title>
                            <Card.Text>{destination.description}</Card.Text>
                            <Card.Text style={{ backgroundColor: '#004997', color: 'white' }}>
                                <FontAwesomeIcon icon={faLocationDot} /> {destination.location}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            )}
            <Container style={{ width: {} }}>
                <Pagination style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Pagination.Prev onClick={handlePrevPage} href={`/?page=${currentPage - 1}`} />
                    <Pagination.Next onClick={handleNextPage} href={`/?page=${currentPage === null ?(2):(currentPage-(-1))}`} />
                </Pagination>
            </Container>
        </Container>
    );
};
export default ListDestination;
