

import { Link, useNavigate } from 'react-router-dom';
import loginLogo from '../../assets/Login Image/login.png'
import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { FaEye } from 'react-icons/fa';
import { AuthContext } from '../Providers/AuthProvider';
import Social from '../shared/Social/Social';
import saveUser from '../../api/saveUser';
import Lottie from 'react-lottie';
import animationData from '../../../public/signup.json';


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const from = location.state?.from?.pathname || '/'


    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmit = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.photo, data.name)
                // const savedUser = { name: data.name, email: data.email }

                // fetch('https://likho-backend-himlaoy.vercel.app/users', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(savedUser)
                // })

                saveUser(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Signup Successfull',
                    text: 'Welcome to Likho',
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="bg-white">

            <form onSubmit={handleSubmit(onSubmit)} className="hero-content flex-col lg:flex-row md:gap-20 p-0">
                <div className="w-1/2">
                    {/* <img className='h-[300px] w-[400px]' src={loginLogo} alt="" /> */}

                    <Lottie 
                       options={defaultOptions}
                        md:height={400}
                        md:width={500}
                    />

                </div>

                <div className="card w-full max-w-sm border-2">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Please Signup!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("displayName", { required: true })} placeholder="Type your name" className="input input-bordered rounded-lg bg-white" />
                            {errors.name && <span className='text-red-500 mt-2'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Type your email" className="input input-bordered rounded-lg bg-white" />
                            {errors.email && <span className='text-red-500 mt-2'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{5,}$/
                            })} placeholder="Type your password" className="input input-bordered rounded-lg bg-white" />
                            <FaEye onClick={togglePassword} className='relative bottom-7 md:left-72 left-64'></FaEye>

                            {errors.password?.type === 'required' && <span className='text-red-500 mt-2'>This field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500 mt-2'>Password must be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-500 mt-2'>Password must be Less than 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-500 mt-2'>Password must be one uppercase, one special character</span>}
                        </div>

                        <div className="form-control ">
                            <button className="btn btn-primary rounded-lg bg-blue-500 text-white">Signup</button>
                        </div>
                        <p className='mt-2'>Already have an account? <Link to='/login' className='text-blue-600 font-semibold'>Login</Link></p>
                    </div>
                    <Social></Social>
                </div>
            </form>
        </div>
    );
};

export default SignUp;