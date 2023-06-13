import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
const ListTour = () => {
    const [tours, setTour] = useState([]);

    useEffect(() => {
        fetchTour();
    }, [tours]);

    const fetchTour = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/tours');
            setTour(response.data);
        } catch (error) {
            console.error('Error fetching tour:', error);
        }
    };

    return (
        <div>{tours.map(tour => (
            <li key={tour._id}>
                <h2>{tour.tourName}</h2>
                <p>{tour.destination}</p>
                <p>{tour.dateFrom}</p>
                <p>{tour.price}</p>
            </li>
        ))}</div>)
};

export default ListTour;
