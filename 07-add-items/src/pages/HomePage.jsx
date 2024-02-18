import { useState } from "react";

const HomePage = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodo([...todo, value]);
    setValue("");
  }
  function handleDelete(index) {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  }

  return (
    <>
      <form className="bg-[#ffdab9] mt-20 max-w-3xl mx-auto rounded px-10 py-4 font-Fredoka text-xl">
        <label htmlFor="text" className="flex my-1 ">
          Things to do
        </label>
        <input
          type="text"
          placeholder="Enter your wish "
          value={value}
          onChange={handleChange}
          className="py-2 mb-4 px-4 rounded outline-none w-3/4 "
        />
        <button
          onClick={handleSubmit}
          className="bg-[#977390]  mx-4 px-4 py-2 rounded hover:bg-[#ffdab9] cursor-pointer"
        >
          Add
        </button>
      </form>
      <ul className="   rounded-b  font-Fredoka text-xl ">
        {todo.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-[#ffdab9] px-10 max-w-3xl mx-auto mt-2 py-4 mb-2 rounded"
          >
            {todo}

            <button onClick={() => handleDelete(index)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="text-[#977390] hover:animate-pulse cursor-pointer"
              >
                <path
                  fill="currentColor"
                  d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
