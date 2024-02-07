
const Button = () => {
  return <>
  <div className="font-NotoSansJP grid grid-cols-5 ">
  
        <button className="bg-blue-400 px-10 py-2 m-10 rounded hover:bg-blue-500 cursor-pointer">Primary Button</button>
        
        
        
        <button className="bg-gray-400 px-6 py-2 m-10 rounded hover:bg-gray-500 cursor-pointer">Secondary Button</button>
        
        
        <button className="bg-green-500 px-6 py-2 m-10 rounded hover:bg-green-600 cursor-pointer">Success Button</button>
        
       
       <button className="bg-red-500 px-6 py-2 m-10 rounded hover:bg-red-600 cursor-pointer">Danger Button</button>
       
        
        <button className="bg-yellow-400 px-6 py-2 m-10 rounded hover:bg-yellow-500 cursor-pointer">Warning Button</button>
        
        
        <button className="bg-blue-600 px-6 py-2 m-10 rounded hover:bg-blue-700 cursor-pointer">Info Button</button>
        
        
        <button className="bg-slate-100 px-6 py-2 m-10 rounded hover:bg-slate-200 cursor-pointer">Light Button</button>
        
       
       <button className="bg-gray-800 px-6 py-2 m-10 rounded text-white hover:bg-gray-900  cursor-pointer">Dark Button</button>
       
  </div>
  
  </>;
};

export default Button;
