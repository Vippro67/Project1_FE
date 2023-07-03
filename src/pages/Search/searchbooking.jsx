import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import { Card, Container } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';
const Booking = () => {
    const [mailorphone, setMailorphone] = useState(() => '');
    const [userIdbyemail, setUserIdbyemail] = useState(() => '');
    const [userIdbyphone, setUserIdbyphone] = useState(() => '');
    const [bookingsbymail, setBookingsbymail] = useState(() => []);
    const [bookingsbyphone, setBookingsbyphone] = useState(() => []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.get(`http://localhost:8080/api/v1/user/email/${mailorphone}`)
                .then((res) => {
                    if (res.data !== null)
                        setUserIdbyemail(res.data._id);
                });
            await axios.get(`http://localhost:8080/api/v1/user/phone/${mailorphone}`)
                .then((res) => {
                    if (res.data !== null)
                        setUserIdbyphone(res.data._id);
                }
                );
            if (userIdbyemail == userIdbyphone) {
                if (userIdbyemail !== '') {
                    await axios.get(`http://localhost:8080/api/v1/bookings/user/${userIdbyemail}`)
                        .then((res) => {
                            setBookingsbymail(res.data);
                        }
                        );
                }
            }
            else {
                if (userIdbyemail !== '') {
                    await axios.get(`http://localhost:8080/api/v1/bookings/user/${userIdbyemail}`)
                        .then((res) => {
                            setBookingsbymail(res.data);
                        }
                        );
                }
                if (userIdbyphone !== '') {
                    await axios.get(`http://localhost:8080/api/v1/bookings/user/${userIdbyphone}`)
                        .then((res) => {
                            setBookingsbyphone(res.data);
                        }
                        );
                }
            }
        }
        catch (error) {
            console.error('Error fetching tours:', error);
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending':
                return 'orange';
            case 'Done':
                return 'green';
            case 'Cancelled':
                return 'red';
            default:
                return 'black';
        }
    };
    const loadSearchResult = () => {
        if (bookingsbymail.length == 0 && bookingsbyphone.length == 0) {
            return (
                <div>
                    <h3>Không tìm thấy thông tin đặt tour</h3>
                </div>
            );
        }
        else if (bookingsbymail.length > 0)
            return (
                bookingsbymail.map(booking => (
                    <Card style={{ width: '18rem' }} key={booking._id}>
                        <Card.Body>
                            <Card.Title>Mã đơn đặt tour: {booking._id}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Tên người đặt tour: {booking.fullName}</Card.Subtitle>
                            <Card.Text>Ngày khởi hành: {moment(booking.dateFrom).format('DD/MM/YYYY')}</Card.Text>
                            <Card.Text>Ngày kết thúc: {moment(booking.dateFrom).format('DD/MM/YYYY')}</Card.Text>
                            <Card.Text>Giá gốc : {booking.price}</Card.Text>
                            <Card.Text>Giá trị voucher: {booking.valueVoucher}</Card.Text>
                            <Card.Text>Giá sau khi giảm: {booking.price - booking.valueVoucher}</Card.Text>
                            <Card.Text > Trạng thái đơn đặt tour: <span style={{ color: getStatusColor(booking.status) }}>
                                {booking.status}
                            </span></Card.Text>
                        </Card.Body>
                    </Card>

                ))
            )
        else if (bookingsbyphone.length > 0)
            return (
                bookingsbyphone.map(booking => (
                    <Card style={{ width: '18rem' }} key={booking._id}>
                        <Card.Body>
                            <Card.Title>Mã đơn đặt tour: {booking._id}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Tên người đặt tour: {booking.fullName}</Card.Subtitle>
                            <Card.Text>Ngày khởi hành: {moment(booking.dateFrom).format('DD/MM/YYYY')}</Card.Text>
                            <Card.Text>Ngày kết thúc: {moment(booking.dateFrom).format('DD/MM/YYYY')}</Card.Text>
                            <Card.Text>Giá gốc : {booking.price}</Card.Text>
                            <Card.Text>Giá trị voucher: {booking.valueVoucher}</Card.Text>
                            <Card.Text>Giá sau khi giảm: {booking.price - booking.valueVoucher}</Card.Text>
                            <Card.Text> Trạng thái đơn đặt tour: <span style={{ color: getStatusColor(booking.status) }}>
                                {booking.status}
                            </span></Card.Text>
                        </Card.Body>
                    </Card>
                ))
            )
    }
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Container style={{ height: "100vh" }}>
                <h1>Tìm kiếm thông tin về đơn đã đặt</h1>
                <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
                    <div className="form-group">
                        <label htmlFor="email">Email hoặc số điện thoại </label>
                        <input type="text" required className="form-control" id="email" placeholder="Nhập chính xác email hoặc số điện thoại đã đặt tour" value={mailorphone} onChange={(e) => setMailorphone(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Tìm kiếm</button>
                </form>
                {loadSearchResult()}
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Booking;