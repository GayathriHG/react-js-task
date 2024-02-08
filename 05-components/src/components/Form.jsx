const Form = (props) => {
    console.log(props);
    return<>
   <div className="bg-slate-700  max-w-xl mx-auto mt-10 font-Raleway text-white rounded">
<h4 className="text-center mb-5 pt-2 text-2xl">Contact Us</h4>
<form className="px-9 pb-4">
    <div className="flex items-center space-x-20">
    <div>
       <div>
       <label htmlFor="Fullname">Full name</label>
       </div>
        <div>
        <input type="text" 
        id="fullname" placeholder="Enter full name" className="px-4 py-2 rounded mt-2 text-black outline-none"/>
        </div>
    </div>
    <div>
    <div>
       <label htmlFor="Contact number">Contact number</label>
       </div>
        <div>
        <input type="number" placeholder="Enter your contact  " className="px-4 py-2 rounded mt-2 text-black outline-none" />
        </div>
    </div>
    </div>
    <div className="flex items-center space-x-20 mt-5">
    <div>
       <div>
       <label htmlFor="Email address">Email address</label>
       </div>
        <div>
        <input type="text" placeholder="Enter your email" className="px-4 py-2 rounded mt-2 text-black outline-none" />
        </div>
    </div>
    <div>
    <div>
       <label htmlFor="Subject">Subject</label>
       </div>
        <div>
        <input type="text" placeholder="Enter your Subject" className="px-4 py-2 rounded mt-2 text-black outline-none" />
        </div>
    </div>
    </div>
    <div>
    <div className="mt-5">
       <label htmlFor="Message">Message</label>
       </div>
        <div>
            <textarea name="message" id="message" placeholder="Enter your message" cols="56" rows="4" className="px-4 py-2 rounded mt-2 text-black outline-none"/>
        
        </div>
    </div>
    <div className="text-center">
        <button className="bg-slate-400 px-4 py-2 rounded mt-2 w-full hover:bg-slate-500 cuursor-pointer">Submit</button>
        
    </div>
    
</form>
    </div>
    </>
}

 
export default Form;