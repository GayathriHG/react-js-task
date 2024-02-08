const Card = () => {
  return (
    <>
      <div className="bg-[#D95D39] m-4 rounded " key="iteration">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg"
          alt="Cat"
          className="w-full h-60  mx-auto p-1 object-cover"
        />
        <div class="text-center text-white pb-4">
          <h1>Cat</h1>
          
        </div>
       <div className="text-center">
       <button className="bg-black text-white px-4 py-2 rounded w-full hover:bg-slate-800 cursor-pointer"  >Add More</button>
       </div>
      </div>
    </>
  );
};

export default Card;
