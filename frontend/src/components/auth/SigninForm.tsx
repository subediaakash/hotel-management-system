import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SigninForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/guest/signin",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);

      const { token } = response.data;
      localStorage.setItem("token", token);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6 h-screen flex flex-col items-center justify-center"
      >
        <h2 className="font-bold text-2xl">SIGN IN</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className=" bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Sign In
        </button>
        <div className="p-4">
          Don't have an account ?{" "}
          <button
            onClick={(e) => {
              navigate("/signup");
            }}
            className="text-blue-600 underline"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SigninForm;
