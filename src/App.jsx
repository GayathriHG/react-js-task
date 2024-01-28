
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import Footer from "./components/Footer";


function App() {
  return (<div>

    <div>
      <Navbar />
    </div>



    <div>
      <img src="https://i.pinimg.com/originals/f0/98/b1/f098b1474bc51d35964b6faa032605dd.jpg" alt="banner img" className="px-8 w-full h-80 rounded " />
    </div>
    <div className="bg-slate-200 p-10 mx-8 my-4 rounded shadow-2xl">
      <HomePage />
      <AboutPage />
      <RecipePage />
      <ContactPage />
    </div>


    <div>
      <Footer />
    </div>
  </div>




  );
}

export default App;
