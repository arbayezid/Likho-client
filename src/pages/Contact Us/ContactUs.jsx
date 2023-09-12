import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Swal from 'sweetalert2';


const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gmbzcxp', 'template_42jcc07', form.current, 'Yvj-yZcOnNWvfN5kG')
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Message Send Successfully',
                  })
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='my-20'>
            <h2 className='text-3xl font-bold mb-5 text-center'>Contact Me</h2>
            <div className='md:flex w-full px-16 justify-evenly'>
                <div className='md:w-1/2 space-y-2' id='about'>
                    <h2 className='text-2xl font-semibold'>Abdur Rahman Bayezid</h2>
                    <p>Front-End Developer</p>
                    <p>I am a Front-End developer with some project experiences.<br /> Contact with me for any queries.</p>
                    <p>Email: <span className='text-red-500 font-medium'>arbayezid0@gmail.com</span></p>
                    <p>Phone: <span className='text-red-500 font-medium'>01980626023</span></p>
                    <div>
                        <h2 className='text-2xl font-semibold'>Find Me:</h2>
                        <div className='flex gap-5 mt-4 text-2xl'>
                            <FaFacebook />
                            <FaInstagram />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2' id='contact'>
                    <form ref={form} onSubmit={sendEmail} className='space-y-3'>
                        <div>
                            <label className='font-medium'>Name</label><br />
                            <input className='w-3/4 p-2 rounded-lg' type="text" name="user_name" required/>
                        </div>
                        <div>
                            <label className='font-medium'>Email</label><br />
                            <input className='w-3/4 p-2 rounded-lg' type="email" name="user_email" required/>
                        </div>
                        <div>
                            <label className='font-medium '>Message</label><br />
                            <textarea className='w-3/4 p-3 rounded-lg' name="user_message" required/>
                        </div>
                        <input className='btn bg-red-500 rounded-lg text-white hover:bg-red-300' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;