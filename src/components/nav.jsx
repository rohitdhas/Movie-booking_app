import NavLayout from "../styles/navStyles";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <NavLayout>
      <Link to="/">Home</Link>
      <Link to="/bookings">Bookings</Link>
    </NavLayout>
  );
}
