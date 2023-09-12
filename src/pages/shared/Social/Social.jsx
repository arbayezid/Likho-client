import { useContext } from "react";
import { FaGithub, FaGithubAlt, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import saveUser from "../../../api/saveUser";

const Social = () => {
    const { googleSignin } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleSignin = () => {
        googleSignin()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                // const savedUser = { name: data.name, email: data.email }
                // fetch('https://likho-backend.vercel.app/users', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(savedUser)
                // })
                Swal.fire({
                    icon: 'success',
                    title: 'Signup Successfull',
                    text: 'Welcome to Likho',
                })
                saveUser(result.user)
                navigate('/')
            })

            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="flex justify-evenly mb-5">
                <button onClick={handleGoogleSignin} className="btn btn-outline rounded-lg">
                    <FaGoogle></FaGoogle> Google
                </button>

                <button className="btn btn-outline rounded-lg">
                    <FaGithub></FaGithub> Github
                </button>
            </div>
        </div>
    );
};

export default Social;