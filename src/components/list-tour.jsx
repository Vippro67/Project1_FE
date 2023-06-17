import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment/moment';
import { Card } from 'react-bootstrap';
const ListTour = (props) => {
    const id = props.id;
    const [tours, setTour] = useState([]);

    useEffect(() => {
        fetchTour();
    }, [tours]);

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
                        <Card key={tour._id}>
                            <h5>{tour.tourName}</h5>
                            <p>Ngày bắt đầu: {tourDateFrom.format('MMMM Do YYYY')}</p>
                            <p>Ngày kết thúc: {moment(tour.dateTo).format('MMMM Do YYYY')}</p>
                            <p>Thành tiền: {tour.price}</p>
                        </Card>
                    );
                }

                return null;
            })}
        </div>)
};

export default ListTour;
