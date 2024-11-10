import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          {/* Just the landing page for our site */}
        </li>
        <li>
          <Link to="/mailboxes">Mailboxes</Link>
          {/* List of Mailboxes */}
        </li>
        <li>
          <Link to="/mailboxes/new">New Mailbox</Link>{" "}
          {/* The form for mailboxes */}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
