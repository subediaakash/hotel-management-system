function GuestInfo() {
  const InfoStyle = "flex justify-between  py-2 w-[25vw]";
  const TitleStyle = "font-medium";
  return (
    <div className="border p-4 bg-white">
      <p className="text-slate-400">Guest Info</p>
      <div>
        <p className={InfoStyle}>
          <span className={TitleStyle}>Date of Birth :</span>{" "}
          <span>17/08/2004</span>{" "}
        </p>
        <p className={InfoStyle}>
          {" "}
          <span className={TitleStyle}>Phone Number : </span>{" "}
          <span>89562310</span>
        </p>
        <p className={InfoStyle}>
          {" "}
          <span className={TitleStyle}>Email : </span>{" "}
          <span>7007966033abc@gmail.com</span>
        </p>
        <p className={InfoStyle}>
          {" "}
          <span className={TitleStyle}>Language :</span> <span>German</span>{" "}
        </p>
        <p className={InfoStyle}>
          <span className={TitleStyle}>Work :</span> <span>Politician</span>
        </p>
      </div>
    </div>
  );
}

export default GuestInfo;
