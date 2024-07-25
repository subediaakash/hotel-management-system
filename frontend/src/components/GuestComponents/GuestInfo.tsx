import { useQuery } from "@tanstack/react-query";
import { fetchGuestDetails } from "../../utils/fetchGuestDetails";

function GuestInfo() {
  const query = useQuery({
    queryKey: ["guestinfo"],
    queryFn: fetchGuestDetails,
    staleTime: 0,
  });

  const InfoStyle = "flex justify-between py-2 w-[25vw]";
  const TitleStyle = "font-medium";

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const { isLoading, error, data } = query;

  return (
    <div className="border p-4 bg-white">
      <p className="text-slate-400">Guest Info</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          <p className={InfoStyle}>
            <span className={TitleStyle}>Date of Birth :</span>{" "}
            <span>
              {data?.guestById?.dateOfBirth
                ? formatDate(data.guestById?.dateOfBirth)
                : "N/A"}
            </span>
          </p>
          <p className={InfoStyle}>
            <span className={TitleStyle}>Phone Number :</span>{" "}
            <span>{data?.guestById?.phoneNumber || "N/A"}</span>
          </p>
          <p className={InfoStyle}>
            <span className={TitleStyle}>Email :</span>{" "}
            <span>{data?.guestById?.email || "N/A"}</span>
          </p>
          <p className={InfoStyle}>
            <span className={TitleStyle}>Language :</span>{" "}
            <span>{data?.guestById?.language || "N/A"}</span>
          </p>
          <p className={InfoStyle}>
            <span className={TitleStyle}>Work :</span>{" "}
            <span>{data?.guestById?.work || "N/A"}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default GuestInfo;
