import React from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";




const Contact = () => {
    const navigate = useNavigate();
    const accessKey = "2c4ed175-a2ef-40fa-8640-94022dbfba10";

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", accessKey);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success",
                text: "Message sent successfully!",
                icon: "success"
            });
            navigate('/admin/home');
        } else {
            Swal.fire({
                title: "NotSuccess!",
                text: "Message Don't Sent !",
                icon: "EROR"
            })
        }
    };



    return (

        <div>


            <section className="contact">
                <form onSubmit={onSubmit}>
                    <h2>Contact Us</h2>
                    <div className="input-box">
                        <label>Full Name</label>
                        <input type="text" className="field" placeholder="Enter your name" name="name" required />
                    </div>
                    <div className="input-box">
                        <label>Email Address</label>
                        <input type="email" className="field" placeholder="Enter your email" name="email" required />
                    </div>
                    <div className="input-box">
                        <label>Your Message</label>
                        <textarea name="message" className="field mess" placeholder="Enter your message" required></textarea>

                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </section>

        </div>
    )
}
export default Contact
