const Card = () => {
  return (
    <>
      <div className="bg-[#D95D39] m-4 rounded " key="iteration">
        <img
          src="https://avatars.githubusercontent.com/u/102051237?v=4"
          alt="GayathriHG"
          className="w-40 h-40 rounded-full mx-auto p-4 object-cover"
        />
        <div class="text-center text-white pb-4">
          <h1>Gayathri H G</h1>
          <h2>Intern</h2>
          <h3>Bangalore India</h3>
        </div>
       <div className="text-center">
       <button className="bg-black text-white px-4 py-2 rounded w-full hover:bg-slate-800 cursor-pointer"  >Add More</button>
       </div>
      </div>
    </>
  );
};

export default Card;
