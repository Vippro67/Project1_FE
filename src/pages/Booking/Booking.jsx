import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';
const Booking = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(() => null);
    const [name, setName] = useState(() => '');
    const [email, setEmail] = useState(() => '');
    const [phone, setPhone] = useState(() => '');
    const [voucher, setVoucher] = useState(() => null);
    const fetchTour = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/tours/${id}`);
            setTour(response.data);

        } catch (error) {
            console.error('Error fetching tours:', error);
        }
    };
    useEffect(() => {
        fetchTour();
    }, [id]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(email.length == 0 || name.length == 0 || phone.length == 0){
            alert("Vui lòng nhập đầy đủ thông tin");
            return;
        }
        const postuser = {
            email: email,
            fullName: name,
            phoneNumber: phone,
        };
        await axios.post('http://localhost:8080/api/v1/user', postuser)
            .then((res) => {
                axios.post(`http://localhost:8080/api/v1/bookings`, { userId: res.data._id, tourId: id, voucherId: voucher })
                    .then((res) => {
                        if (res.data._id != null) {
                            alert("Đặt tour thành công. Trong vòng 24 giờ bạn sẽ nhận được email, điện thoại xác nhận từ chúng tôi về việc thanh toán");
                            window.location.href = "/";
                        }
                        else {
                            alert("Đặt tour thất bại. Vui lòng kiểm tra lại thông tin hoặc liên hệ với chúng tôi để được hỗ trợ");
                        }
                    });
            });

    };
    return (
        <div style={{ backgroundColor: "#999" }}>
            <Header></Header>
            <Navbar></Navbar>
            <Container style={{ backgroundColor: "#FFF" }}>
                <h1>Đặt tour</h1>

                {tour != undefined ? <Container style={{ textAlign: 'left' }}>
                    <h4>Tour bạn đã chọn</h4>
                    <h5>{tour.tourName}</h5>
                    <p>Ngày bắt đầu: {moment(tour.dateFrom).format('MMMM Do YYYY')}</p>
                    <p>Ngày kết thúc: {moment(tour.dateTo).format('MMMM Do YYYY')}</p>
                    <p>Địa điểm: {tour.destination}</p>
                    <h6>Lịch trình dự kiến:</h6>
                    <ul>
                        {tour.schedule.split('\n').map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>Thành tiền: {tour.price}</p>
                </Container> : null}
                <div>
                    <h4>Thông tin của bạn</h4>
                    <form>
                        <Container className="form-group" style={{ textAlign: "left" }}>
                            <label htmlFor="name">Họ và tên</label>
                            <input type="text" className="form-control" id="name" placeholder="Nhập họ và tên" onChange={e => setName(e.target.value)} required />

                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Nhập email"
                                onChange={e => setEmail(e.target.value)}
                                required
                                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            />

                            <label htmlFor="phone">Số điện thoại</label>
                            <input type="text" className="form-control" id="phone" placeholder="Nhập số điện thoại" onChange={e => setPhone(e.target.value)} required />

                            <label htmlFor="number">Mã giảm giá nếu có</label>
                            <input type="text" className="form-control" id="number" placeholder="Nhập mã giảm giá" onChange={e => setVoucher(e.target.value)} />

                            <input type="submit" className="btn btn-primary" value="Đặt tour" onClick={e => handleSubmit(e)} />
                        </Container>
                    </form>

                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Booking;