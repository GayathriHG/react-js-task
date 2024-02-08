import { useState } from "react";
import FormInputs from "./FormInputs";
import FormButton from "./FormButton";

const Form = () => {
  const [form, setForm] = useState({ fullName: "" });
  const [formValues, setFormValues] = useState([]);
  const [formError, setFormError] = useState({
    fullName: null,
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;

    // Validation starts here
    if (name === "fullName") {
      if (value.length < 4) {
        setFormError({
          fullName: "Enter a valid name",
        });
      } else {
        setFormError((prev) => ({
          ...prev,
          fullName: "",
        }));
      }
    }

    if (name === "emailAddress") {
      if (value.length < 10) {
        setFormError({ emailAddress: "Enter a valid email" });
      } else {
        setFormError((prev) => ({
          ...prev,
          mailAddress: "",
        }));
      }
    }

    setForm({ ...form, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Thank you for registering `);
    setFormValues([...formValues, form]);
    setForm({ fullName: "", emailAddress: "",contactNumber:"" });
  };

//   console.log(form);
  console.log(formValues);

  const mapFormValues = formValues.map((value) => {
    return (
      <div>
        <div className="flex gap-x-2 items-center">
          <span className="font-semibold">Full Name:</span>
          <span className="font-regular">{value.fullName}</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <span className="font-semibold">emailAddress:</span>
          <span className="font-regular">{value.emailAddress}</span>
          
        </div>
        <div className="flex gap-x-2 items-center">
          <span className="font-semibold">contactNumber:</span>
          <span className="font-regular">{value.contactNumber}</span>
          
        </div>
      </div>
    );
  });

  return (
    <div className="bg-slate-700 max-w-2xl mx-auto p-6 text-white font-medium mt-20 rounded">
      <form onSubmit={submitForm}>
        
          <FormInputs
            name={"fullName"}
            id={"fullName"}
            type={"text"}
            placeholder={"Enter your Full name"}
            value={form.fullName}
            label={"Full Name"}
            handleOnChange={handleInputs}
            required
          />
          {formError.fullName ? (
            <small >
              {formError.fullName}
            </small>
          ) : (
            ""
          )}
          <FormInputs
            name={"emailAddress"}
            id={"emailAddress"}
            type={"text"}
            placeholder={"Enter your Email address"}
            value={form.emailAddress}
            label={"Email address"}
            handleOnChange={handleInputs}
            required
          />
          {formError.Emailaddress ? (
            <small >
              {formError.Emailaddress}
            </small>
          ) : (
            ""
          )}
          <FormInputs
            name={"contactNumber"}
            id={"contactNumber"}
            type={"number"}
            placeholder={"Enter your contact number"}
            value={form.contactNumber}
            label={"Contact number"}
            handleOnChange={handleInputs}
            required
          />
          {formError.contactNumber ? (
            <small >
              {formError.contactNumber}
            </small>
          ) : (
            ""
          )}
          <FormButton label={"Register"}/>
        
      </form>
      
    </div>
  );
};

export default Form;