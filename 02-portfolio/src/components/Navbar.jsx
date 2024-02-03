import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-[#95A3B3] text-[#2D2E2E]  px-10 p-4 font-Poppins  flex justify-between items-center  mx-1  fixed right-0 left-0">
      <div className="text-3xl">Hy there! I'm Gayathri H G</div>
      <div className="space-x-10 px-10">
        <span className="hover:text-[#393D3F] cursor-pointer">About</span>
        <span className="hover:text-[#393D3F] cursor-pointer">Projects</span>
        <span className="hover:text-[#393D3F] cursor-pointer">
          Certificates
        </span>
      </div>
    </div>
  );
};
export default Navbar;
