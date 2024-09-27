export default function HotelPage() {
  return (
    <div className="p-2">
      <div className="mainContainer max-w-3xl">
        <div className="header my-2">
          <div className="flex justify-between items-center px-4">
            <p className="lg:text-2xl text-xl  font-bold text-amber-800">
              Hotel Nepathya
            </p>
            <p>Ratings : ⭐⭐⭐</p>
          </div>
          <p className="text-gray-700 px-4">Kathmandu</p>
        </div>
        <div className="hotel-main ">
          <img src="./Bali.jpg" alt="" className="w-96 rounded-md" />
        </div>
        <div className="my-2">
          <p className="lg:text-2xl text-xl font-bold py-1">
            Why to book this property ?{" "}
          </p>
          <div className="flex  flex-col w-full lg:text-xl">
            <p className="font-semibold">Features </p>{" "}
            <p className=" px-2">Swimming , full Refund</p>
          </div>
          <div className="max-w-2xl flex flex-col ">
            <p className="font-semibold lg:text-xl">Description </p>{" "}
            <p className=" px-2 lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              natus quia ea veniam harum veritatis exercitationem fugit eos.
              Corrupti recusandae placeat veritatis nemo dolorum explicabo
              tempora, cupiditate fugit labore minima?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
