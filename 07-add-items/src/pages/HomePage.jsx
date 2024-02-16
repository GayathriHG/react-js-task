import { useState } from "react";



const HomePage = () => {
const [todo,setTodo]=useState([]);
const[value,setValue]=useState("")
function handleChange(e){
    setValue(e.target.value)
}

function handleSubmit(e){
e.preventDefault()
setTodo([...todo,value])
setValue("")
}
    
    return<>
    
    <form className="bg-[#ffdab9] mt-20 max-w-4xl mx-auto rounded p-10 font-Fredoka">
        <label htmlFor="text" className="flex my-1">Things to do</label>
       <input type="text" placeholder="Enter your wish " 
       value={value}
       onChange={handleChange}
       className="py-1 px-4 rounded outline-none" />
       <button 
       onClick={handleSubmit}
       className="bg-[#977390] px-3 py-1 mx-4 rounded">Add</button>
    </form>
    <ul className="bg-[#ffdab9]  max-w-4xl mx-auto rounded-b p-10 font-Fredoka text-xl ">
        {todo.map((todo)=>(
            <li key={todo} className="flex items-center justify-between">
                {todo}
                
                <button><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-[#977390]"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"/></svg></button>
            </li>
        ))}
    </ul>

     
    </>
}
 
export default HomePage ; 