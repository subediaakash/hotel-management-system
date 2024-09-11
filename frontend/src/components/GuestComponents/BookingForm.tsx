import React, { useState, CSSProperties } from "react";
import { Input } from "../ui/input";
import { CalendarIcon } from "@radix-ui/react-icons";
import { MdOutlineKingBed } from "react-icons/md";
import { Calendar } from "../ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { format } from "date-fns";

function BookingForm() {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();
  const [members, setMembers] = useState<number>(0);
  const [display, setDisplay] = useState<boolean>(false);
  const [rooms, setRooms] = useState<number>(0);

  const handleCheckInDateSelect = (selectedDate: Date | undefined) => {
    setCheckInDate(selectedDate);
    if (checkOutDate && selectedDate && checkOutDate < selectedDate) {
      setCheckOutDate(undefined);
    }
  };

  const handleCheckOutDateSelect = (selectedDate: Date | undefined) => {
    setCheckOutDate(selectedDate);
  };

  return (
    <div>
      <div className="con">
        <form action="">
          <div className="flex lg:flex-row items-center justify-center border border-solid gap-2 md:flex-col flex-col p-2">
            <div className="flex gap-1 items-center">
              <MdOutlineKingBed
                size="1.5em"
                className="font-light"
                strokeWidth={0.1}
              />
              <Input
                type="text"
                placeholder="Search for the location"
                className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                style={
                  {
                    "--tw-ring-offset-width": "0px",
                  } as CSSProperties & { "--tw-ring-offset-width": string }
                }
              />
            </div>
            <div className="z-20">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-[240px] pl-3 text-left font-normal ${
                      !checkInDate && "text-muted-foreground"
                    }`}
                  >
                    {checkInDate ? (
                      format(checkInDate, "PPP")
                    ) : (
                      <span>Check In Date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    className="bg-white z-20"
                    mode="single"
                    selected={checkInDate}
                    onSelect={handleCheckInDateSelect}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="z-20">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-[240px] pl-3 text-left font-normal ${
                      !checkOutDate && "text-muted-foreground"
                    }`}
                  >
                    {checkOutDate ? (
                      format(checkOutDate, "PPP")
                    ) : (
                      <span>Check Out Date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    className="bg-white z-10"
                    mode="single"
                    selected={checkOutDate}
                    onSelect={handleCheckOutDateSelect}
                    disabled={(date) =>
                      date < new Date() ||
                      (checkInDate ? date <= checkInDate : false)
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="members">
              <div className="button relative">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setDisplay(!display);
                  }}
                >
                  <p>
                    members : {members} room : {rooms}
                  </p>
                </button>

                {display && (
                  <div className="cardCompo absolute top-full left-0 mt-2 p-4 bg-gray-100 shadow-lg -z-20">
                    <div className="flex gap-5">
                      <p>Members</p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setMembers(members + 1);
                        }}
                      >
                        +
                      </button>
                      <p>{members}</p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setMembers(Math.max(0, members - 1));
                        }}
                      >
                        -
                      </button>
                    </div>
                    <div className="flex gap-2">
                      <p>Rooms</p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setRooms(rooms + 1);
                        }}
                      >
                        +
                      </button>
                      <p>{rooms}</p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setRooms(Math.max(0, rooms - 1));
                        }}
                      >
                        -
                      </button>
                    </div>
                    <div>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          setDisplay(false);
                        }}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="searchButton">
              <Button>Search</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
