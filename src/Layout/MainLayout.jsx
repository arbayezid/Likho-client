import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/Navbar/Navbar";


const MainLayout = () => {


    const noHeaderFooter = location.pathname.includes('dashboard') || location.pathname.includes('editor') || location.pathname.includes('updateProfile') || location.pathname.includes('room/:roomID') || location.pathname.includes('doc')
    
    const noFooter = location.pathname.includes('dashboard')||location.pathname.includes('editor')||location.pathname.includes('updateProfile') || location.pathname.includes('room/:roomID') || location.pathname.includes('doc')

    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* {noFooter || <Footer></Footer>} */}
        </div>
    );
};

export default MainLayout;