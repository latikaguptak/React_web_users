import axios from "axios";
import { useState } from "react";
const initialValue = {
  firstName: "",
  lastName: "",
  age:"",
  email: "",
  
};
const Userform = () => {
  
  const [formData, setFormData] = useState(initialValue);
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlerSubmit = async(e) => {
    e.preventDefault();
    console.log("userdata", formData);
    try {
    const response = await axios.post("http://localhost:3000/users",formData)
    console.log(response.data);
    setFormData(initialValue)
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handlerSubmit}
        className="bg-white p-3 m-3 text-slate-900 rounded-2xl"
      >
        <div className="grid grid-cols-1  [&_input]:rounded-md [&_input]:m-4 [&_input]:p-3 [&_input]:bg-indigo-950 [&_input]:text-white">
          <input
            type="text"
            placeholder="Enter your First name"
            name="firstName"
            required
            onChange={handlerChange}
            value={formData.firstName}
          />
          <input
            type="text"
            placeholder="Enter your Lastname"
            name="lastName"
            required
            onChange={handlerChange}
            value={formData.lastName}
          />
          <input
            type="email"
            placeholder="Enter your mail"
            name="email"
            required
            onChange={handlerChange}
            value={formData.email}
          />
          
          <input
            type="number"
            placeholder="Enter your Age"
            name="age"
            required
            onChange={handlerChange}
            value={formData.age}
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-950 text-white m-4 p-2 rounded-2xl hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Userform;
