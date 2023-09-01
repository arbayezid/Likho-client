import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../pages/shared/Footer";


const MainLayout = () => {


    const noHeaderFooter = location.pathname.includes('dashboard') || location.pathname.includes('editor')
    ||location.pathname.includes('rich')  ||location.pathname.includes('updateProfile') 
    
    const noFooter = location.pathname.includes('dashboard')||location.pathname.includes('rich')||location.pathname.includes('updateProfile') 

    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            {noFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;
