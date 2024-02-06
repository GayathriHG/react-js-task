import { Link } from "react-router-dom";
const Navbar=()=>{
    return<>
    <div className="bg-black text-white  px-20 py-6 flex justify-between">Components
    <div className="px-20 space-x-6">
    <Link to={"/"}><span>Home</span></Link> 
    <Link to={"/info"}><span>Members</span></Link>
    <span>Github</span>
    </div>
    
    </div>

    
    </>
}

export default Navbar;