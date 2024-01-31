const Navbar = () => {
  return (
    <div>
      <div className="bg-gray-400 px-10 py-6 flex items-center justify-between ">
        <span className="text-4xl font-semibold font-Lora px-20">JSON-API</span>
        <div className="space-x-10 px-20 font-Lora text-xl ">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="hover:text-gray-700 cursor-pointer">
            <a
              href="https://github.com/GayathriHG/react-js-tasks/tree/main/03-API"
              target="blank"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
