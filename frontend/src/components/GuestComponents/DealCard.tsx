import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

function DealCard({ hotelImage }: any) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardDescription>
            <div>
              <img src={hotelImage} alt="Hotel" className="min-h-64" />
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <div className="left">
              <div className="address-container">
                <h1>Hotel something</h1>
                <h2>Address something</h2>
              </div>
              <div className="ratings">
                <p>1234 ratings</p>
              </div>
            </div>
            <div className="right">
              <div className="prices">
                <p>
                  <del>$2379</del>
                </p>
                <p>$1200</p>
                <p>1 Room per Night</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default DealCard;
