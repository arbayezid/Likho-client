import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
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
        <div className='bg-gray-100 py-20'>
            <div className='text-center space-y-2'>
                <h2 className='text-5xl font-bold mb-5'>GET IN TOUCH</h2>
                <p className='flex justify-center items-center gap-1 font-semibold'> <FaPhoneAlt className='text-xs'></FaPhoneAlt> Phone: <span className='text-purple-500 font-medium'>+8801980005000</span></p>
                <p className='flex justify-center items-center gap-1 font-semibold'> <FaEnvelope></FaEnvelope> Email: <span className='text-purple-500 font-medium'>likhodoc@gmail.com</span></p>
                <p className='flex justify-center items-center gap-1 font-semibold'> <FaMapMarkerAlt></FaMapMarkerAlt> Address: <span className='text-purple-500 font-medium'> Mirpur-1, Dhaka, Bangladesh</span></p>
                <div className='flex justify-center gap-5 text-2xl'>
                    <FaFacebook></FaFacebook>
                    <FaInstagram></FaInstagram>
                    <FaLinkedin></FaLinkedin>
                </div>
            </div>

            <div className='mt-16' id='contact'>
                <form ref={form} onSubmit={sendEmail} className='w-full'>
                    <div className='flex justify-center md:gap-10 gap-5 mx-10'>
                        <div className='space-y-2'>
                            <div>
                                <label className='font-medium text-sm'>Name</label><br />
                                <input className='md:w-[500px] px-2 py-3 rounded-lg mt-1' type="text" name="user_name" placeholder='Your Name *' required />
                            </div>
                            <div>
                                <label className='font-medium text-sm'>Email</label><br />
                                <input className='md:w-[500px] px-2 py-3 rounded-lg mt-1' type="email" name="user_email" placeholder='Your Email *' required />
                            </div>
                            <div>
                                <label className='font-medium text-sm'>Phone</label><br />
                                <input className='md:w-[500px] px-2 py-3 rounded-lg mt-1' type="email" name="user_phone" placeholder='Your Phone' />
                            </div>
                        </div>
                        <div>
                            <label className='font-medium text-sm'>Message</label><br />
                            <textarea className='md:w-[500px] h-[218px] p-3 rounded-lg mt-1' name="user_message " placeholder='Your Message *' required />
                        </div>
                    </div>
                    <div className='text-center mt-3'>
                        <input className='btn bg-purple-600 rounded-lg text-white hover:bg-purple-300' type="submit" value="Send Message" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;