import { FormLayout, FormOverlay } from "../styles/formStyles";
import useBookings from "../helpers/formHandler";

export default function Form({ showData }) {
  const { bookMovie } = useBookings();
  return (
    <FormOverlay id="form_overlay">
      <FormLayout id="form" onSubmit={(e) => bookMovie(e, showData.id)}>
        <div className="icon">
          <span onClick={closeForm} className="material-icons">
            disabled_by_default
          </span>
        </div>
        <div>
          <strong>Show Name - </strong> {showData.name}
        </div>
        <div>
          <strong>Ratings -</strong> {showData.rating.average || 0}⭐
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
        <div className="name_input input">
          <label>
            <strong>Name</strong>
          </label>
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="email_input input">
          <label>
            <strong>Email</strong>
          </label>
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="phone_input input">
          <label>
            <strong>Phone</strong>
          </label>
          <input type="number" placeholder="Your Phone Number" required />
        </div>
        <button type="submit">Confirm Your Booking</button>
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
