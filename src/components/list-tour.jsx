import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment/moment';
import { Card } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const ListTour = (props) => {
    const id = props.id;
    const [tours, setTour] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedTour, setSelectedTour] = useState({});
    useEffect(() => {
        fetchTour();
    }, [tours]);
    const openPopup = (tour) => {
        setSelectedTour(tour);
        setShowPopup(true);
    };

    const closePopup = () => {
        setSelectedTour({});
        setShowPopup(false);
    };
    const fetchTour = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/tours/destination/${id}`);
            setTour(response.data);

        } catch (error) {
            console.error('Error fetching destinations:', error);
        }
    };

    return (
        <div>
            <h2>Chọn chuyến đi ngay tại đây </h2>
            {tours.map(tour => {
                const tourDateFrom = moment(tour.dateFrom);
                const currentDate = moment();
                if (tourDateFrom.isAfter(currentDate)) {
                    return (
                        <Card key={tour._id} onClick={() => openPopup(tour)}>
                            <h5>{tour.tourName}</h5>
                            <p>Ngày bắt đầu: {tourDateFrom.format('MMMM Do YYYY')}</p>
                            <p>Ngày kết thúc: {moment(tour.dateTo).format('MMMM Do YYYY')}</p>
                            <p>Thành tiền: {tour.price}</p>
                        </Card>
                    );
                }

                return null;
            })}
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
                    <Button style={{backgroundColor:"green"}}>
                        Đặt tour ngay
                    </Button>
                    <Button variant="secondary" onClick={closePopup}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>) : null}
        </div>)
};

export default ListTour;
