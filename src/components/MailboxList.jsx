import "../index.css";
import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h2>Mailboxes</h2>
      <ul>
        {mailboxes.map((currentMailbox) => (
          <li className="mail-box" key={currentMailbox.boxHolder}>
            <Link to={`/mailboxes/${currentMailbox._id}`}>
              Mailbox #{currentMailbox._id}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
