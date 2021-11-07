import { DetailsLayout } from "../styles/detailsPageStyles";
import { useData } from "../helpers/dataHandler";
import Form, { openForm } from "../components/form";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useBookings from "../helpers/formHandler";

export default function Details() {
  const API_URL = "https://api.tvmaze.com/search/shows?q=all";
  const { isBooked } = useBookings();
  const params = useParams();

  const { data: allData, isLoading } = useData(API_URL);
  const [showData, setShowData] = useState({});

  useEffect(() => {
    allData.forEach((item) => {
      const itemId = item.show.id;
      if (itemId === parseInt(params.id)) {
        setShowData(item.show);
        return;
      }
    });
  }, [allData, params]);

  return (
    <DetailsLayout>
      {isLoading ? (
        <p className="data_status">Loading...</p>
      ) : !showData.id ? (
        <p className="data_status">No Data Found, Try Refreshing!😕</p>
      ) : (
        <>
          <img src={showData.image.original} alt="poster" />
          <section>
            <div id="show_details">
              <div className="name">
                {showData.name}{" "}
                <strong>
                  ({showData.language}) - {showData.rating.average || 0}⭐
                </strong>
              </div>
              <div className="schedule">
                <strong>
                  <u>Schedule</u>⌚
                </strong>{" "}
                -{" "}
                {`${showData.schedule.days[0] || "Monday"}s at ${
                  showData.schedule.time || "00:00"
                } (${showData.runtime || 0} min)`}
              </div>
              <div className="show_type">
                <u>
                  <strong>Show Type</strong>
                </u>{" "}
                - {showData.type}
              </div>
              <div className="status">
                <u>
                  <strong>Status</strong>
                </u>{" "}
                - {showData.status}
              </div>
              <div className="genres">
                <p>
                  <u>
                    <strong>Genres</strong>
                  </u>{" "}
                  -
                </p>
                {showData.genres.map((item, index) => {
                  const uniqueKey = `${Date.now()}-${Math.random()}-${index}-${
                    showData.id
                  }`;
                  return <span key={uniqueKey}>{item}</span>;
                })}
              </div>
            </div>
            <div
              className="summary"
              dangerouslySetInnerHTML={{
                __html: `<h3>Summary -</h3>` + showData.summary,
              }}
            ></div>
            <button
              className={isBooked(showData.id) ? `booked` : "not_booked"}
              onClick={!isBooked(showData.id) ? openForm : null}
            >
              {isBooked(showData.id) ? `Already Booked` : `Book Movie Ticket`}
            </button>
          </section>
          <Form showData={showData} />
        </>
      )}
    </DetailsLayout>
  );
}
