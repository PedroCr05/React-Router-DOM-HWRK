import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h2>Mailboxes</h2>
      <ul>
        {mailboxes.map((currentMailbox) => (
          <li key={currentMailbox.boxHolder}>
            <Link to={`/mailboxes/${currentMailbox._id}`}>
              {currentMailbox.boxHolder}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
