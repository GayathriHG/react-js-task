const FormInputs = ({
    id,
    type,
    placeholder,
    value,
    label,
    handleOnChange,
    required
  }) => {
    return (
      <div >
        <div className="mb-2">
        <label className="font-medium tracking-wider " htmlFor={id}>{label}</label>
        </div>
        <div>
        <input
          name={id}
          id={id}
          type={type}
          placeholder={placeholder}
          className="rounded outline-none px-4 py-2 w-full bg-slate-200 text-black mb-6 "
          value={value}
          onChange={handleOnChange}
          required={required}
        />
        </div>
      </div>
    );
  };
export default FormInputs;