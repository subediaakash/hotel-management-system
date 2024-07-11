function GuestPassportDetails() {
  const InfoStyle = "flex justify-between  py-2 w-[25.5vw] ";
  const TitleStyle = "font-medium";
  return (
    <div>
      <div className="border p-4 bg-white">
        <p className="text-slate-400 ">Passport Details</p>
        <div>
          <p className={InfoStyle}>
            <span className={TitleStyle}>Passport Number :</span>{" "}
            <span>852fad85</span>
          </p>
          <p className={InfoStyle}>
            <span className={TitleStyle}>Passport Issue Date :</span>{" "}
            <span>18/12/2004</span>
          </p>
          <p className={InfoStyle}>
            <span className={TitleStyle}>Passport Expiry Date :</span>{" "}
            <span>12/12/2005</span>
          </p>
          <p className={InfoStyle}>
            <span className={TitleStyle}>Date Of Birth :</span>{" "}
            <span>18/05/2004</span>
          </p>
          <p className={InfoStyle}>
            <span className={TitleStyle}>Place of Birth :</span>{" "}
            <span>Jammu Kashmir</span>
          </p>
          <p className={InfoStyle}>
            <span className={TitleStyle}>Passport Country :</span>{" "}
            <span>Germany</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default GuestPassportDetails;
