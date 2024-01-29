import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="flex justify-evenly ">
      <div>
      <Link to={"/about"}>
        <div className="font-Handlee text-xl flex bg-slate-200 shadow-2xl mb-10 p-6 rounded max-w-2xl mx-40 mt-44 w-full">
          <div>
            <img
              src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="img"
              className="rounded-2xl "
            />
          </div>
          <div className="px-10 w-100 ">
            <h4 className="text-2xl font-bold mb-4">About</h4>
            <p>At Flavorful Journeys, we believe that food is more than just
          sustenance it's an experience. It's about savoring every bite,
          exploring new flavors, and creating memories around the table.</p>
          </div>
        </div>
      </Link>
      <Link to={"/recipes"}><div className="font-Handlee text-xl flex bg-slate-200 shadow-2xl  mb-10 p-6   max-w-2xl mx-40 rounded w-full">
        <div>
          <img
            src="https://images.pexels.com/photos/6529789/pexels-photo-6529789.jpeg?cs=srgb&dl=pexels-rdne-stock-project-6529789.jpg&fm=jpg"
            alt="img"
            className="rounded-2xl w-44 h-44"
          />
        </div>
        <div className="px-10 w-100">
          <h4 className="text-2xl font-bold mb-4">Recipes</h4>
          <p >Simple Garden Salad</p>
          <p >Chicken and Vegetable Stir-Fry</p>
          <p >Quinoa Salad</p>
        </div>
      </div>
      </Link>
      <Link to={"/contact"}><div className="font-Handlee text-xl flex bg-slate-200 shadow-2xl  mb-2 p-6 rounded mx-40  max-w-2xl w-full  ">
        <div>
          <img
            src="https://media.istockphoto.com/id/1156304531/photo/hands-with-the-phone-close-up-pictures-of-food.webp?b=1&s=170667a&w=0&k=20&c=DxLGBEmQcreDwNkZYbj-FwetOpEMefWBOnKXxWqWXuA="
            alt="img"
            className="rounded-2xl  w-44 h-44"
          />
        </div>
        <div className="px-10">
          <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
          <p>Get your Cook Book now !!</p>
        </div>
      </div>
      </Link>
      </div>
      <div className="mt-44 rounded font-Handlee bg-slate-200 p-6 mx-40 mb-40">
        <h4 className="text-center text-xl mb-1">What is Cooking ?</h4>
        <img src="https://i.pinimg.com/originals/58/a6/59/58a6590300bcdebcaa97a93f742d516a.gif" alt="gif" className="w-80 h-80" />
        <p className="w-56 mt-2 text-xl p-2">
        Cooking is an art form that delights the palate, captivates the eye, and nourishes the soul, making every kitchen a gallery of gastronomic delights waiting to be discovered.

        <p className="pt-10 underline"><Link to={"/recipes"}>Recipes</Link><br></br>
        <Link to={"/contact"}>Contact Us</Link></p>
        








        </p>
      </div>
      </div>
     
  );
};

export default HomePage;
