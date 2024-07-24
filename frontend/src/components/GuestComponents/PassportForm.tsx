import React, { useState } from "react";

function PassportForm() {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);

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
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    );
  };
}
export default PassportForm;
