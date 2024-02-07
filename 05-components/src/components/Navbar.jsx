import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="bg-[#0E1428] font-NotoSansJP text-2xl text-white  px-20 py-6 flex items-center justify-between">
        Components
        <div className="px-20 space-x-6 text-sm ">
          <Link to={"/"}>
            <span className="hover:text-[#D95D39] cursor-pointer">Home</span>
          </Link>
          <Link to={"/card"}>
            <span className="hover:text-[#D95D39] cursor-pointer">Cards</span>
          </Link>
          <Link to={"/button"}>
            <span className="hover:text-[#D95D39] cursor-pointer">Buttons</span>
          </Link>
          <Link to={"/alert"}>
            <span className="hover:text-[#D95D39] cursor-pointer">Alerts</span>
          </Link>
          <span><a href="https://github.com/GayathriHG/react-js-tasks/tree/main/05-components" target="blank" className="hover:text-[#D95D39] cursor-pointer">Github</a></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
