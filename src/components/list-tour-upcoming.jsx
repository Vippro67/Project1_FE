import axios from 'axios';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Pagination } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import moment from 'moment/moment';
const ListTourUpComing = () => {

    const [tours, setTours] = useState([]);
    const [selectedTour, setSelectedTour] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const fetchTours = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/tours`);
            setTours(response.data);
        } catch (error) {
            console.error('Error fetching tours:', error);
        }
    };
    const openPopup = (tour) => {
        setSelectedTour(tour);
        setShowPopup(true);
    };

    const closePopup = () => {
        setSelectedTour({});
        setShowPopup(false);
    };
    useEffect(() => {
        fetchTours();
    }, []);
    return (
        <div>
            <h1>Danh sách tour sắp khởi hành</h1>
            <Container
                style={{
                    display: "flex",
                    flexWrap: 'wrap',
                    gap: '30px',
                    padding: '50px auto',
                    backgroundColor: '#fbd8fd'
                }}
            >
                {tours.length === 0 ? (
                    <h1>No tours found.</h1>
                ) : (
                    tours
                        .filter(tour => moment(tour.dateFrom).isAfter(moment(), 'day'))
                        .slice(0, 6)
                        .map(tour => (
                            <Card
                                key={tour._id}
                                className="destination-card"
                                style={{
                                    width: '400px',
                                    minWidth: '320px',
                                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.195)',
                                    margin: 'auto'
                                }}
                                onClick={() => openPopup(tour)}

                            >
                                <Card.Body style={{ flex: '1 1 auto' }}>
                                    <Card.Title>
                                        <a style={{ textDecoration: 'none', color: '#0d6efd' }}>
                                            {tour.tourName}
                                        </a>
                                    </Card.Title>
                                    <Card.Text>
                                        Địa điểm chuyến đi: {tour.destination}
                                    </Card.Text>
                                    <Card.Text>
                                        Ngày khởi hành: {moment(tour.dateFrom).format('DD/MM/YYYY')}
                                    </Card.Text>
                                    <Card.Text>
                                        Ngày kết thúc: {moment(tour.dateTo).format('DD/MM/YYYY')}
                                    </Card.Text>
                                    <Card.Text>
                                        Giá cả chuyến đi: {tour.price} VNĐ
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                )}
            </Container>
            {selectedTour._id ? (<Modal show={showPopup} onHide={closePopup}>
                <Modal.Header closeButton>
                    <Modal.Title>Chi tiết tour</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>{selectedTour.tourName}</h5>
                    <p>Ngày bắt đầu: {moment(selectedTour.dateFrom).format('MMMM Do YYYY')}</p>
                    <p>Ngày kết thúc: {moment(selectedTour.dateTo).format('MMMM Do YYYY')}</p>
                    <p>Địa điểm: {selectedTour.destination}</p>
                    <h6>Lịch trình dự kiến:</h6>
                    <ul>
                        {selectedTour.schedule.split('\n').map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>Thành tiền: {selectedTour.price}</p>
                    {/* Add more details about the tour here */}
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ backgroundColor: "green" }} href={`booking/${selectedTour._id}`}>
                        Đặt tour ngay
                    </Button>
                    <Button variant="secondary" onClick={closePopup}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>) : null}
        </div>
    );


};
export default ListTourUpComing;
