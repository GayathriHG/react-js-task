import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const GuestLayout = () => {
  return (<>


    <Navbar />





    {/* <img src="https://i.pinimg.com/originals/f0/98/b1/f098b1474bc51d35964b6faa032605dd.jpg" alt="banner img" className="px-8 w-full h-80 rounded " /> */}

    <div className="bg-slate-200 p-10 mx-8 my-4 rounded shadow-2xl">
      {/* <HomePage />
          <AboutPage />
          <RecipePage />
          <ContactPage /> */}
      <Outlet />

    </div>



    <Footer />

  </>




  );
}

export default GuestLayout;
