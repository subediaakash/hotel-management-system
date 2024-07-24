import axios from "axios";
import { useEffect, useState } from "react";

function GuestInfo() {
  const InfoStyle = "flex justify-between py-2 w-[25vw]";
  const TitleStyle = "font-medium";

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/guest/info",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data);

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="border p-4 bg-white">
      <p className="text-slate-400">Guest Info</p>
      <div>
        <p className={InfoStyle}>
          <span className={TitleStyle}>Date of Birth :</span>{" "}
          <span>
            {data.guestById?.dateOfBirth
              ? formatDate(data.guestById.dateOfBirth)
              : "N/A"}
          </span>
        </p>
        <p className={InfoStyle}>
          <span className={TitleStyle}>Phone Number :</span>{" "}
          <span>{data.guestById?.phoneNumber || "N/A"}</span>
        </p>
        <p className={InfoStyle}>
          <span className={TitleStyle}>Email :</span>{" "}
          <span>{data.guestById?.email || "N/A"}</span>
        </p>
        <p className={InfoStyle}>
          <span className={TitleStyle}>Language :</span>{" "}
          <span>{data.guestById?.language || "N/A"}</span>
        </p>
        <p className={InfoStyle}>
          <span className={TitleStyle}>Work :</span>{" "}
          <span>{data.guestById?.work || "N/A"}</span>
        </p>
      </div>
    </div>
  );
}

export default GuestInfo;
