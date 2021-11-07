import { HomePageLayout } from "../styles/HomePageStyles";
import { useData } from "../helpers/dataHandler";
import useBookings from "../helpers/formHandler";
import Card from "../components/card";
import { Link } from "react-router-dom";

export default function Home() {
  const API_URL = "https://api.tvmaze.com/search/shows?q=all";
  const { data, isLoading } = useData(API_URL);
  const { bookedShowData } = useBookings();

  return (
    <HomePageLayout>
      <h1>Top Picks for you!🎬</h1>
      <Link to="/bookings">
        <div id="icon" data-booking-count={bookedShowData.length}>
          <span className="material-icons">slideshow</span>
        </div>
      </Link>
      {isLoading ? (
        <p className="status">Loading...</p>
      ) : data.length === 0 ? (
        <p className="status">No Data Found, Try Refreshing!😕</p>
      ) : (
        data.map((item) => {
          const id = item.show.id;
          const showData = item.show;
          return <Card key={id} showData={showData} />;
        })
      )}
    </HomePageLayout>
  );
}
