import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Button = () => {
  const { user, logOut } = useContext(AuthContext);

  const [dbUser, setDbUser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then(res => res.json())
      .then(data => setDbUser(data)

      )
  }, [user])
  console.log(dbUser);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div>
      
      {
        user ? (
          <>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
              >
                <div>
                  {user.photoURL ? (
                    <img
                      className="w-[50px] h-[50px]  rounded-[50%]"
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    <FaUserCircle className="w-[45px] h-[45px] rounded-[50%]" />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[30] p-2 shadow bg-gray-200 rounded-box w-52 space-y-1"
              >
                <Link
                  to="/profile"
                  className="font-normal hover:font-semibold"
                >
                  Profile
                </Link>
                <Link
                  to="/dashboard/newDoc"
                  className="font-normal hover:font-semibold"
                >
                  Dashboard
                </Link>



                <Link
                  onClick={handleLogOut}
                  className="font-normal hover:font-semibold"
                >
                  Logout
                </Link>
              </ul>
            </div>
          </>
        ) : (
          <Link to='/signup'><button className="text-lg font-poppins px-4 bg-purple-700 hover:bg-purple-500 text-center text-white p-2 rounded-lg">Get Started</button></Link>
        )
      }
    </div>

  );
};

export default Button;
