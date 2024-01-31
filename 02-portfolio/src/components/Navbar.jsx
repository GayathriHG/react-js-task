import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-purple-900 text-yellow-100 px-10 py-6 font-Poppins  flex justify-between items-center max-w-6xl mx-auto fixed right-0 left-0">
      <div className="text-3xl">Hy there! I'm Gayathri H G</div>
      <div className="space-x-10 px-10">
        <span className="hover:text-purple-600 cursor-pointer">About</span>
        <span className="hover:text-purple-600 cursor-pointer">Projects</span>
        <span className="hover:text-purple-600 cursor-pointer">
          Certificates
        </span>
      </div>
    </div>
  );
};
export default Navbar;
