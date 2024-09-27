import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
  CardHeader,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { CalendarDays, Users, Bath, BadgeDollarSign } from "lucide-react";

interface DateRange {
  from?: Date;
  to?: Date;
}

interface BookingSummaryProps {
  numberOfAdults: number;
}

function BookingSummary({ numberOfAdults }: BookingSummaryProps) {
  return (
    <section className="w-full   lg:max-w-3xl">
      <div className="container px-4 md:px-6">
        <h2 className="text-xl lg:text-2xl font-bold tracking-tighter  mb-8 text-amber-800">
          Your Booking Summary
        </h2>
        <Card className="lg:text-xl">
          <CardHeader>
            <CardTitle className="text-amber-700">Booking Details</CardTitle>
            <CardDescription>
              Review your reservation information
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between flex-wrap gap-2">
            <div className="grid gap-4">
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                <span>Number of Adults: {numberOfAdults}</span>
              </div>
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-4 w-4" />
                <span>Date: </span>
              </div>
              <div className="flex items-center">
                <Bath className="mr-2 h-4 w-4" />
                <span>Rooms: </span>
              </div>
            </div>
            <div className="w-[50%] flex gap-2 items-center">
              <BadgeDollarSign className="mr-2 h-4 w-4" />
              <p>Price : </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Confirm Booking</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default BookingSummary;
