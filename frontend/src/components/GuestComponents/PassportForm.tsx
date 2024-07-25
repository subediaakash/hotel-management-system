import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PassportForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    passportNumber: "",
    passportIssueDate: "",
    passportExpiryDate: "",
    dateOfBirth: "",
    placeOfBirth: "",
    passportCountry: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/guest/passportDetails",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
      <div className="mb-4">
        <label
          htmlFor="passportNumber"
          className="block text-gray-700 font-bold mb-2"
        >
          Passport Number
        </label>
        <input
          type="text"
          id="passportNumber"
          name="passportNumber"
          value={formData.passportNumber}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="passportIssueDate"
          className="block text-gray-700 font-bold mb-2"
        >
          Passport Issue Date
        </label>
        <input
          type="date"
          id="passportIssueDate"
          name="passportIssueDate"
          value={formData.passportIssueDate}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="passportExpiryDate"
          className="block text-gray-700 font-bold mb-2"
        >
          Passport Expiry Date
        </label>
        <input
          type="date"
          id="passportExpiryDate"
          name="passportExpiryDate"
          value={formData.passportExpiryDate}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="dateOfBirth"
          className="block text-gray-700 font-bold mb-2"
        >
          Date of Birth
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="placeOfBirth"
          className="block text-gray-700 font-bold mb-2"
        >
          Place of Birth
        </label>
        <input
          type="text"
          id="placeOfBirth"
          name="placeOfBirth"
          value={formData.placeOfBirth}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="passportCountry"
          className="block text-gray-700 font-bold mb-2"
        >
          Passport Country
        </label>
        <input
          type="text"
          id="passportCountry"
          name="passportCountry"
          value={formData.passportCountry}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
}

export default PassportForm;
