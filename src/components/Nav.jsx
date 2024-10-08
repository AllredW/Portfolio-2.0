// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={2} className="nav-link" to="/">
          About Me
        </Link>,
        <Link key={3} className="nav-link" to="/resume">
          Resume
        </Link>,
        <Link key={4} className="nav-link" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={5} className="nav-link" to="/contact">
          Contact Me
        </Link>,
      ]}
    />
  );
}


{location.pathname === "/" ? <Link to="/contact">Contact</Link> : <Link to="/">Back</Link>}<br/>