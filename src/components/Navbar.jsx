import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-pink-800 py-10 px-10  flex items-center justify-between fixed right-0 left-0 top-0    mb-2 rounded text-white shadow-2xl max-w-7xl mx-auto ">
      <h4 className="font-Handlee text-6xl">Simple Foods</h4>

      <ul className="flex items-center space-x-6 text-xl font-Handlee">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/recipes"}>Recipes</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
