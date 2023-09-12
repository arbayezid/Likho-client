import axios from 'axios';

const saveUser = (user) => {
    console.log(user)
    const currentUser = {
        email: user.email,
        // name:user.name,
        role: "user",
        name: user.displayName
    }

    axios.put(`https://likho-backend.vercel.app/users/${user?.email}`, currentUser)
        .then(data => {
            console.log(data)
        })
        .catch(error => { console.log(error.message) })
};

export default saveUser;