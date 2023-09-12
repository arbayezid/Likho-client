import  { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Button = () => {
 
  const {user , logOut } = useContext(AuthContext);
  console.log(user)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    
    // <Link to='/signup'><button className="text-lg font-poppins px-4 bg-purple-700 hover:bg-purple-500 text-center text-white p-2 rounded-lg">Get Started</button></Link>
    <div className="navbar-end ml-4 ">
            {user ? (
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
                        // <FaUserCircle className="w-[45px] h-[45px] rounded-[50%]" />
                        <p>hello</p>
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[30] py-8 px-4 shadow bg-white rounded-box w-52 space-y-4"
                  >
                    <Link
                      to="/profile"
                      className="font-normal hover:font-semibold"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/dashboard"
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
              <Link to="/signup" className="font-normal">
                SignUp
              </Link>
            )}
            {/* if user not login, then show Login btn */}
          </div>
  );
};

export default Button;
