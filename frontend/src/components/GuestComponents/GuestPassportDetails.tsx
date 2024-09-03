import { useQuery } from "@tanstack/react-query";
import { fetchPassportDetails } from "../../utils/fetchPassportDetails";

function GuestPassportDetails() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["passportdetails"],
    queryFn: fetchPassportDetails,
    staleTime: 0,
  });

  const InfoStyle = "flex justify-between py-2 w-[25.5vw]";
  const TitleStyle = "font-medium";

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="border p-4 bg-white">
      <p className="text-slate-400">Passport Details</p>
      <div>
        <p className={InfoStyle}>
          <span className={TitleStyle}>Passport Number :</span>
          <span>{data.passportDetails.passportNumber || "N/A"}</span>
        </p>
        <p className={InfoStyle}>
          <span className={TitleStyle}>Passport Issue Date :</span>
          <span>
            {formatDate(data.passportDetails.passportIssueDate) || "N/A"}
          </span>
        </p>
        <p className={InfoStyle}>
          <span className={TitleStyle}>Passport Expiry Date :</span>
          <span>
            {formatDate(data.passportDetails.passportExpiryDate) || "N/A"}
          </span>
        </p>
        <p className={InfoStyle}>
          <span className={TitleStyle}>Date Of Birth :</span>
          <span>{formatDate(data.passportDetails.dateOfBirth) || "N/A"}</span>
        </p>
        <p className={InfoStyle}>
          <span className={TitleStyle}>Place of Birth :</span>
          <span>{data.passportDetails.placeOfBirth || "N/A"}</span>
        </p>
        <p className={InfoStyle}>
          <span className={TitleStyle}>Passport Country :</span>
          <span>{data.passportDetails.passportCountry || "N/A"}</span>
        </p>
      </div>
    </div>
  );
}

export default GuestPassportDetails;
