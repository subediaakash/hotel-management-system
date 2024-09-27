import { useState } from "react";
import { CreditCard, Lock } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";
import { Toaster, toast } from "sonner";

interface OrderSummary {
  roomType: string;
  nights: number;
  pricePerNight: number;
  taxes: number;
}

export default function PaymentPortal({ nights, pricePerNight }: any) {
  const [cardNumber, setCardNumber] = useState("");
  const [error, setError] = useState("");

  const orderSummary: OrderSummary = {
    roomType: "Deluxe Suite",
    nights: nights,
    pricePerNight: pricePerNight,
    taxes: 45,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateCardNumber(cardNumber)) {
      toast.success("Payment processed successfully!", {
        description: `Your payment of $${calculateTotal().toFixed(
          2
        )} has been received.`,
      });
    } else {
      setError("Invalid card number. Please check and try again.");
      toast.error("Payment failed", {
        description: "Invalid card number. Please check and try again.",
      });
    }
  };

  const validateCardNumber = (number: string) => {
    const regex = /^[0-9]{16}$/;
    return regex.test(number.replace(/\s/g, ""));
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "");
    const formatted = input.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formatted);
    setError("");
  };

  const calculateTotal = () => {
    return (
      orderSummary.nights * orderSummary.pricePerNight + orderSummary.taxes
    );
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <Toaster />
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl">Hotel Payment</CardTitle>
          <CardDescription>
            Enter your card details to complete your booking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input
                    id="card-number"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={19}
                    required
                  />
                  {error && <p className="text-sm text-red-500">{error}</p>}
                </div>
                <Button type="submit" className="w-full">
                  <Lock className="mr-2 h-4 w-4" /> Pay $
                  {calculateTotal().toFixed(2)}
                </Button>
              </form>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between gap-5">
                      <span>Room Type:</span>
                      <span>{orderSummary.roomType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Number of Nights:</span>
                      <span>{orderSummary.nights}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price per Night:</span>
                      <span>${orderSummary.pricePerNight.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>
                        $
                        {(
                          orderSummary.nights * orderSummary.pricePerNight
                        ).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & Fees:</span>
                      <span>${orderSummary.taxes.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Lock className="h-4 w-4" />
            <span>Your payment is secured by 256-bit encryption</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <CreditCard className="h-4 w-4" />
            <span>We accept Visa, Mastercard, and American Express</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
