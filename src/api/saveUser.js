import axios from 'axios';
import React from 'react';

const saveUser = (user) => {
    console.log(user)
    const currentUser = {
        email: user.email,
        // name:user.name,
        role: "user",
    }

    axios.put(`http://localhost:5000/users/${user?.email}`, currentUser)
        .then(data => {
            console.log(data)
        })
        .catch(error => { console.log(error.message) })
};

export default saveUser;