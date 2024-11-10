import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mailboxes">Mailboxes</Link>
          {/* List of Mailboxes */}
        </li>
        <li>
          <Link to="/new-mailbox">New Mailbox</Link>{" "}
          {/* The form for mailboxes */}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
