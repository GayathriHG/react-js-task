import { Link } from "react-router-dom"
const Navbar = () => {
    return <div className="bg-pink-800 py-10 px-10  flex items-center justify-between mx-6 mt-6 mb-2 rounded text-white shadow-2xl">
        <h4 className="font-Sacramento text-6xl" >Yummy Tummy</h4>


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


}


export default Navbar