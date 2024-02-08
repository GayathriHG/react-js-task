const FormButton = ({label}) => {
    return <>
     <div>
      <button
        className="bg-slate-600 px-4 py-2 rounded  w-full mt-6 hover:bg-slate-500 cursor-pointer"
      >
        {label}
      </button>
    </div>
    </>
}
 
export default FormButton;