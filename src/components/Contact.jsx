import { useState } from "react";
const initialValue = {
  username: "",
  email: "",
  phoneNumber: "",

  password: "",
};
const Contact = () => {
  const [formData, setFormData] = useState(initialValue);
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("userdata", formData);
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
            placeholder="Enter your name"
            name="username"
            onChange={handlerChange}
            value={formData.username}
          />
          <input
            type="email"
            placeholder="Enter your mail"
            name="email"
            onChange={handlerChange}
            value={formData.email}
          />
          <input
            type="text"
            placeholder="Enter your number"
            name="phoneNumber"
            onChange={handlerChange}
            value={formData.phoneNumber}
          />

          <input
            type="text"
            placeholder="Enter your password"
            name="password"
            onChange={handlerChange}
            value={formData.password}
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

export default Contact;
