import { Link } from "react-router-dom";
import Container from "../pages/shared/Container";
import { useContext } from "react";
import { AuthContext } from "../pages/Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";





const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  }
  return (
    <div className="w-full bg-violet-300 ">
      <Container>
        <div className="navbar  z-10 bg-opacity-30 bg-violet-300 font-bold  w-full">
          <div className="navbar-start">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className=" z-[30] menu menu-sm dropdown-content mt-3 p-2 shadow bg-violet-200 rounded-box w-52">
                <li><Link>Home</Link></li>
                <li><Link>Template</Link></li>

                <li>

                  <a>Convert</a>
                  <ul className="p-2 ">
                    <li><Link>Text to pdf</Link></li>
                    <li><Link>Word to pdf</Link></li>
                    <li><Link>Docs to pdf</Link></li>
                  </ul>
                </li>

                <li><Link>About</Link></li>

              </ul>

            </div>

            <Link to={'/'} className="text-3xl"><span className="bg-blue-400 p-1  rounded">L</span>ikho</Link>

          </div>
          <div className="navbar-center hidden lg:flex ">

            <ul className="menu menu-horizontal px-1">

              <li><Link className=" font-normal">Home</Link></li>
              <li> <Link className=" font-normal">Template</Link></li>
              <li tabIndex={0} className="z-[30]" >
                <details>
                  <summary className=" font-normal">Convert</summary>
                  <ul className="p-2 bg-violet-200 w-32">
                    <li><Link className=" font-normal">Text to pdf</Link></li>
                    <li><Link className=" font-normal">Word to pdf</Link></li>
                    <li><Link className=" font-normal">Docs to pdf</Link></li>
                  </ul>
                </details>
              </li>

              <li><Link className=" font-normal">About</Link></li>
            </ul>

          </div>
          <div className="navbar-end ml-4 ">

            {
              user ?
                <>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div >
                        {
                          user.photoURL ? <img className='w-[50px] h-[50px]  rounded-[50%]' src={user.photoURL} alt="" /> : <FaUserCircle className='w-[45px] h-[45px] rounded-[50%]' />
                        }
                      </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[30] p-2 shadow bg-violet-200 rounded-box w-52 space-y-1">

                      <Link to="/profile" className="font-normal hover:font-semibold">Profile </Link>
                      <Link to="/dashboard" className="font-normal hover:font-semibold">Dashboard</Link>
                      <Link onClick={handleLogOut} className="font-normal hover:font-semibold">Logout</Link>
                    </ul>
                  </div>
                </>
                :
                <Link to="/signup" className="font-normal">SignUp</Link>


            }
            {/* if user not login, then show Login btn */}

          </div>
        </div>
      </Container>
    </div>

  );
};
