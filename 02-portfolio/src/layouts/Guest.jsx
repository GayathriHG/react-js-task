import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const GuestLayout=()=>{
return(
    <div>
        <Navbar/>

        <div>
            <Outlet/>
        </div>
    <Footer/>
    </div>
);
};

export default GuestLayout