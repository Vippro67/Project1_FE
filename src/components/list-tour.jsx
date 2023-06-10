import React from 'react';
import { useEffect, useState } from 'react';
import TourDataService from "../service/tour.js"
const ListTour = () => {
    const [tours, setTour] = useState([]);

    useEffect(() => {
        fetchTour();
    }, [tours]);

    const fetchTour = async () => {
        try {
            const response = await TourDataService.getAll();
            setTour(response.data);
        } catch (error) {
            console.error('Error fetching tour:', error);
        }
    };

    return (
        <div>{tours.map(tour => (
            <li key={tour.id}>

            </li>
        ))}</div>)
};

export default ListTour;
