import axios from "axios";
export const fetchPassportDetails = async () => {
  const response = await axios.get(`http://localhost:5000/api/guest/passport`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  console.log(response.data);
  return response.data;
};
