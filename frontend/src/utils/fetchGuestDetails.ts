import axios from "axios";
export const fetchGuestDetails = async () => {
  const response = await axios.get(`http://localhost:5000/api/guest/info`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  console.log(response.data);
  return response.data;
};
