import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <Link to={"/about"}>
        <div className="font-Handlee text-xl flex bg-slate-200 shadow-2xl mb-10 p-6 rounded max-w-6xl mx-auto mt-60 ">
          <div>
            <img
              src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="img"
              className="rounded-full px-2 w-44 h-44 "
            />
          </div>
          <div className="px-10">
            <h4 className="text-2xl">About</h4>
          </div>
        </div>
      </Link>
      <div className="font-Handlee text-xl flex bg-slate-200 shadow-2xl  mb-10 p-6   max-w-6xl mx-auto rounded">
        <div>
          <img
            src="https://images.pexels.com/photos/6072378/pexels-photo-6072378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="img"
            className="rounded-full px-2 w-44 h-44"
          />
        </div>
        <div className="px-10">
          <h4 className="text-2xl">Recipes</h4>
        </div>
      </div>
      <div className="font-Handlee text-xl flex bg-slate-200 shadow-2xl  mb-10 p-6 rounded   max-w-6xl mx-auto  ">
        <div>
          <img
            src="https://images.pexels.com/photos/6072378/pexels-photo-6072378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="img"
            className="rounded-full px-2 w-44 h-44"
          />
        </div>
        <div className="px-10">
          <h4 className="text-2xl">Contact Us</h4>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
