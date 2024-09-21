function GuestStay({
  image,
  cityName,
  country,
}: {
  image: string;
  cityName: string;
  country: string;
}) {
  return (
    <div className="flex flex-col items-start justify-center  rounded-lg border max-w-fit roun">
      <img
        src={image}
        className="max-w-60 max-h-56 rounded-lg "
        alt={`${cityName}, ${country}`}
      />
      <div className="p-2">
        <h2 className="text-gray-500 font-mono ">{cityName}</h2>
        <p>{country}</p>
      </div>
    </div>
  );
}

export default GuestStay;
