import React from "react";

function AdvertisementCard() {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="free-cancelation border w-full md:w-auto">
        <img
          src="./scenic-image.webp"
          className="object-cover w-full h-auto aspect-video object-center md:min-h-[227px] md:max-h-[227px] md:min-w-[718px]"
          alt="Scenic view"
        />
        <div>
          <p>Free cancellation on most hotels</p>
          <p>Because Flexibility Matters</p>
        </div>
      </div>
      <div className="containers">
        <div className="lastminDeals flex items-center">
          <img
            src="group-people.avif"
            className="max-h-40"
            alt="Group of people"
          />
          <div>
            <p>Last Minute Deals Available</p>
            <p>Find your next getaway</p>
          </div>
        </div>
        <div className="ideasInspiration flex items-center">
          <img
            src="group-people.avif"
            className="max-h-40"
            alt="Group of people"
          />
          <div>
            <p>When you are ready to get away we'll be ready to inspire you</p>
            <p>Trip ideas and inspiration</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertisementCard;
