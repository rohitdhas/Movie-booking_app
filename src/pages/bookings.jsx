import BookingsPageLayout from "../styles/bookingsPageStyles";
import useBookings from "../helpers/formHandler";
import { useEffect } from "react";

export default function Bookings() {
  const { removeBooking, bookedShowData, updateBookings } = useBookings();

  useEffect(() => {
    updateBookings();
  }, []);

  return (
    <BookingsPageLayout>
      <h1>Your Bookings!🎈</h1>

      {bookedShowData.length > 0 ? (
        bookedShowData.map((item, index) => {
          return (
            <p className="card" key={index}>
              {item.show.name}
              <span
                onClick={() => removeBooking(item.show.id)}
                className="material-icons"
              >
                delete_outline
              </span>
            </p>
          );
        })
      ) : (
        <p id="msg">Nothing to show here!😕</p>
      )}
    </BookingsPageLayout>
  );
}
