import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar/Navbar";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const MainLayout = () => {
    return (
        <div className="font-bodyFont">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;