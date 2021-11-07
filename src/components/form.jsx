import { FormLayout, FormOverlay } from "../styles/formStyles";
import useBookings from "../helpers/formHandler";

export default function Form({ showData }) {
  const { bookMovie } = useBookings();
  return (
    <FormOverlay id="form_overlay">
      <FormLayout id="form">
        <div className="icon">
          <span onClick={closeForm} className="material-icons">
            disabled_by_default
          </span>
        </div>
        <div>
          <strong>Show Name - </strong> {showData.name}
        </div>
        <div>
          <strong>Ratings -</strong> {showData.rating.average}⭐
        </div>
        <div>
          <strong>Schedule⌚</strong> -{" "}
          {`${showData.schedule.days[0] || "Monday"} at ${
            showData.schedule.time || "00:00"
          }`}
        </div>
        <div>
          <strong>Show Type</strong> - {showData.type}
        </div>
        <div>
          <strong>Runtime - </strong>({showData.runtime || 0} min)
        </div>
        <button onClick={(e) => bookMovie(e, showData.id)}>
          Confirm Your Booking
        </button>
      </FormLayout>
    </FormOverlay>
  );
}
export function openForm() {
  const overlay = document.getElementById("form_overlay");
  const form = document.getElementById("form");

  overlay.classList.add("active");
  form.classList.add("active");
}

export function closeForm() {
  const overlay = document.getElementById("form_overlay");
  const form = document.getElementById("form");

  overlay.classList.remove("active");
  form.classList.remove("active");
}
