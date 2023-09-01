import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../pages/shared/Footer";


const MainLayout = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
