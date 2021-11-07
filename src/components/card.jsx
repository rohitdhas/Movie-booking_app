import { CardLayout } from "../styles/HomePageStyles";
import { Link } from "react-router-dom";

export default function Card({ showData }) {
  const imageURL = showData.image.original;
  const name = showData.name;
  const genres = showData.genres;
  const lang = showData.language;
  const ratings = showData.rating.average;
  const schedule = showData.schedule;
  const runtime = showData.runtime;

  return (
    <CardLayout>
      <img src={imageURL} alt="poster" />
      <div className="movie_details">
        <div className="name">
          {name}{" "}
          <strong>
            ({lang}) - {ratings || 0}⭐
          </strong>
        </div>
        <div className="genres">
          <p>Genres -</p>
          {genres.map((item, index) => {
            const uniqueKey = `${Date.now()}-${Math.random()}-${index}-${
              showData.id
            }`;
            return <span key={uniqueKey}>{item}</span>;
          })}
        </div>
        <div className="schedule">
          <strong>Schedule ⌚</strong> -{" "}
          {`${schedule.days[0] || "Monday"}s at ${schedule.time || "00:00"} (${
            runtime || 0
          } min)`}
        </div>
        <Link to={`/details/${showData.id}`}>
          <button>More Details</button>
        </Link>
      </div>
    </CardLayout>
  );
}
