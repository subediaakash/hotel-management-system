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
    <div className="flex flex-col items-start justify-center  border max-w-fit rounded-lg">
      <img src={image} className="max-w-56 " alt={`${cityName}, ${country}`} />
      <div className="p-2">
        <h2 className="text-gray-500 font-mono ">{cityName}</h2>
        <p>{country}</p>
      </div>
    </div>
  );
}

export default GuestStay;
