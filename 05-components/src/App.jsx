
import {Outlet} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";

const App=() =>{
  return (
    <>
    <Navbar/>
    <div>
      {/* <HomePage/>
      <InfoPage/> */}
      <Outlet/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
