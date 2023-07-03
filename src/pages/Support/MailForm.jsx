import { Button, Container } from "react-bootstrap";

function MailForm() {
    return (
        <Container>
            <div style={{ textAlign: 'left' }}>
                <div>
                    <h2>Some office addresses </h2>
                    <p><a href="">Bờ Y, Ngọc Hồi, Kon Tum</a> </p>
                    <p>SDT: 0123456789  Email:</p>
                    <p>123123@gmail.com </p>

                    <p><a href="">Trung Kính, Cầu Giấy, Hà Nội</a></p> <p>SDT: 0123456789  Email:</p>
                    <p>123123@gmail.com </p>

                    <p><a href="">Linh Trung, Thủ Đức, Hồ Chí Minh</a></p>
                    <p>SDT: 0123456789 Email:</p>
                    <p>   123123@gmail.com </p>
                </div>
                <form>
                    <h3>Please leave your information, we will respond as soon as possible.</h3>
                    <input type="text" name="your-name" value="" size="40" aria-required="true" aria-invalid="false"
                        placeholder="Full Name*" style={{ display: 'block', margin: '10px auto', width: '500px' }}></input>
                    <input type="text" name="your-email" value="" size="40" aria-required="true" aria-invalid="false"
                        placeholder="Email*" style={{ display: 'block', margin: '10px auto', width: '500px' }}></input>
                    <input type="text" name="title" value="" size="40" aria-required="true" aria-invalid="false"
                        placeholder="Title*" style={{ display: 'block', margin: '10px auto', width: '500px' }}></input>
                    <textarea id="message" rows="4" cols="50" style={{ display: 'block', margin: '10px auto', width: '500px' }} placeholder="Enter content here"></textarea>
                    <Button id="submit" style={{ display: 'block', margin: '10px auto' }}>Submit</Button>
                </form>
            </div>

        </Container>
    )
}
export default MailForm;