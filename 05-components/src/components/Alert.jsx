const Alert = () => {
  return <>
  <div className="mt-10 font-NotoSansJP text-xl mb-20">
    <div className="bg-[#090446] text-blue-200 py-4 rounded px-4 mx-20 border-2 border-blue-400 my-4">Primary alert</div>
    <div className="bg-gray-900 text-gray-400 py-4 rounded px-4 mx-20 border-2 border-gray-500 my-4">Secondary alert</div>
    <div className="bg-green-950 text-green-700 py-4 rounded px-4 mx-20 border-2 border-green-500 my-4">Secondary alert</div>
    <div className="bg-red-800 text-red-300 py-4 rounded px-4 mx-20 border-2 border-red-500 my-4">Danger alert</div>
    <div className="bg-yellow-600 text-yellow-300 py-4 rounded px-4 mx-20 border-2 border-yellow-500 my-4">Warning alert</div>
    <div className="bg-blue-900 text-blue-300 py-4 rounded px-4 mx-20 border-2 border-blue-500 my-4">Info alert</div>
    <div className="bg-slate-500 text-white py-4 rounded px-4 mx-20 border-2 border-slate-400 my-4">Lite alert</div>
    <div className="bg-slate-800 text-white py-4 rounded px-4 mx-20 border-2 border-slate-400 my-4 ">Dark alert</div>
  </div>
  </>;
};

export default Alert;
