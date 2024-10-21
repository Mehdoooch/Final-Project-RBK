import React from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';

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
            <section className='heroo'>
                <div className='containerr'>

                    <form onSubmit={onSubmit} className='flexx'>
                        <div className='boxx'>
                            <span className='label'>Full Name</span>
                            <input type='text' placeholder='Enter your name...' required />
                        </div>
                        <div className='boxx'>
                            <span className='label'>Email Address</span>
                            <input type='text' placeholder='Enter your email...' required />
                        </div>
                        <div className='boxx'>
                            <span className='label'>Your Message</span>
                            <textarea type='text' cols="30" rows="5" placeholder='Enter your message...' required></textarea>
                        </div>

                        <button className='btn2'>
                            <SendIcon />
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Contact
