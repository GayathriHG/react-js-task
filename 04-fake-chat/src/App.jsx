import { useState } from "react"


const App=()=>{
    const [name,setname]=useState("Name");
    const handleName=(e)=>{
        setname(e.target.value);
    };
    const[Message,setMessage]=useState("Message");
    const handleMessage=(e)=>{
        setMessage(e.target.value);
    };
    const [network,setNetwork]=useState("4G");
    const handleNetwork=(e)=>{
        (e.target.value);

    };
    const [charge,setCharge]=useState(20);
    const handleCharge=(e)=>{
        setCharge(e.target.value);

    };
    const [time,setTime]=useState("00.00 AM");
    const handleTime=(e)=>{
        setTime(e.target.value);
    };

    return<>
           
           
            <div className="bg-blue-400 py-2 text-center font-Poppins text-3xl ">Fake Chat App
            </div> 
            <div className="bg-blue-600 p-4  mt-6 grid grid-cols-2 gap-40 mx-10 rounded px-40 ">
<div>
    <h4 className="font-Poppins text-lg mb-4 text-center">Fill in the feilds</h4>
    <div className="bg-slate-200 rounded p-4 font-Poppins">
        <div>
            <lable className="block">Select a Network</lable>
            <select className="mt-1 outline-none font-Poppins text-slate-600 py-1 rounded w-full" onChange={handleNetwork}
            >
<option>--Select--</option>
<option value={"4G/LTE"}>4G/LTE</option>
<option value={"3G"}>3G</option>
<option value={"2G"}>2G</option>
            </select>
        </div>
        
    </div>
    <div className="bg-slate-200 rounded p-4 font-Poppins mt-2">
        <label>
            Battery Percentage
        </label>
        <input type="range"
        onChange={handleCharge}
        min={0}
        max={100}
        value={charge}
        step={1}
        className="w-full py-1" />
    </div>
    <div className="bg-slate-200 rounded p-4 font-Poppins mt-2">
        <label className="block">Time</label>
        <input type="text" placeholder="Time" onChange={handleTime} className="mt-1 outline-none font-Poppins text-slate-600 py-1 rounded w-full p-2"/>
    </div>
    <div className="bg-slate-200 rounded p-4 font-Poppins mt-2">
        <label className="block">Name</label>
        <input type="text" placeholder="Name" onChange={handleName} className="mt-1 outline-none font-Poppins text-slate-600 py-1 rounded w-full p-2" />
    </div>
    <div className="bg-slate-200 rounded p-4 font-Poppins mt-2">
        <label className="block">Message</label>
        <textarea name="text" placeholder="Message" onChange={handleMessage} className="mt-1 outline-none font-Poppins text-slate-600 py-1 rounded w-full p-2" />
    </div>
</div>
{/* right side */}
<div className="rounded max-w-md font-Poppins mt-11">
          <div className="bg-blue-400  rounded-t p-1 pl-4 pr-4 flex items-center justify-between">
            <h4 className="font-semibold text-xs text-white">{time}</h4>
            <div className="flex justify-between items-center space-x-4 hover:cursor-pointer">
              <div className='flex text-xs text-white justify-center items-center'>
                <p>{network}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-white  fill-current w-4"><path d="M6.5 20q-.625 0-1.062-.437T5 18.5v-3q0-.625.438-1.062T6.5 14q.625 0 1.063.438T8 15.5v3q0 .625-.437 1.063T6.5 20m6 0q-.625 0-1.062-.437T11 18.5v-8q0-.625.438-1.062T12.5 9q.625 0 1.063.438T14 10.5v8q0 .625-.437 1.063T12.5 20m6 0q-.625 0-1.062-.437T17 18.5v-13q0-.625.438-1.062T18.5 4q.625 0 1.063.438T20 5.5v13q0 .625-.437 1.063T18.5 20" /></svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-white  fill-current w-4"><path d="M12 21L0 9q2.375-2.425 5.488-3.713T12 4q3.425 0 6.525 1.275T24 9zM4.35 10.5q1.675-1.2 3.625-1.85T12 8q2.075 0 4.025.65t3.625 1.85l1.45-1.45q-1.975-1.5-4.3-2.275T12 6q-2.475 0-4.8.775T2.9 9.05z" /></svg>
              <div className='flex text-xs text-white justify-center items-center space-x-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14" className="text-white fill-current w-4"><path stroke="#888888" stroke-linecap="round" stroke-linejoin="round" d="M13.5 5.5A.5.5 0 0 0 13 5h-1V4a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V9h1a.5.5 0 0 0 .5-.5Zm-10.25 0v3m3-3v3m3-3v3" /></svg>
                <p>{charge}%</p>
              </div>
            </div>
          </div>
          <ul className="bg-blue-400 p-1 pl-4 pr-4 text-white flex justify-between items-center space-x-4">
            <li className=" flex items-center justify-center space-x-2 pb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-white fill-current w-5"><path d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13z" /></svg>
              
              <img className="rounded-full w-10" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile-pic" />
              <h4 className="">{name ? name : "Name"}</h4>
              
            </li>
            
            <li className="flex items-center justify-center space-x-2">
              
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-white fill-current w-5"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" className="text-white fill-current w-5"><path d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-28-52a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0 104a28 28 0 1 0 28 28a28 28 0 0 0-28-28" /></svg>
            </li>
            
          </ul>
          
          <section className="bg-cover bg-slate-200 rounded-b p-2">
            <div className=''>
              <div className="flex justify-  p-3 pr-10 bg-blue-400 rounded-r-2xl rounded-t-2xl mr-20 shadow-lg mb-72 ">{Message ? Message : "Hello, how are you ?"}</div>
              <div className="flex items-center justify-start space-x-2 pt-4" >
                <div className="py-2 px-2 w-full rounded-t bg-white flex items-center justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" className=" fill-current w-6 text-slate-400"><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-1.07 48c-10.29 17.79-27.4 28-46.93 28s-36.63-10.2-46.92-28a8 8 0 1 1 13.84-8c7.47 12.91 19.21 20 33.08 20s25.61-7.1 33.07-20a8 8 0 0 1 13.86 8" /></svg>
                  <div className="flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className=" fill-current w-6 text-slate-400"><path d="M14 1a5 5 0 0 0-5 5v10a3 3 0 0 0 3 3a2.991 2.991 0 0 0 2.99-3V6H13v10a1 1 0 1 1-2 0V6a3 3 0 1 1 6 0v10.125C17 18.887 14.762 21 12 21a5 5 0 0 1-5-5v-5H5v5a7 7 0 0 0 7 7a6.991 6.991 0 0 0 6.99-7V6c0-2.762-2.228-5-4.99-5" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className=" fill-current w-6 text-slate-400"><circle cx="12" cy="12" r="3.2" /><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5" /></svg>

                  </div>
                </div>
                
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-blue-400 fixed left-0 right-0 bottom-0 py-2 text-center font-Poppins">
        Designed by Gayathri H G as an Internship task given by CyberDude Networks Pvt. Ltd.
      </div>
      
            

            
           
            
           
           
           
        </>
    
    
}

export default App