import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();

  const selectedMailbox = mailboxes.find(
    (mail) => mail._id === Number(mailboxId)
  );

  if (!selectedMailbox) {
    return (
      <>
        <div>
          <h1>No mail box here!</h1>
        </div>
      </>
    );
  }

  return (
    <article>
      <h2>{selectedMailbox.boxHolder}'s Mailbox</h2>
      <h3>Details</h3>
      <p>Box Number: {selectedMailbox._id}</p>
      <p>Box Size: {selectedMailbox.boxSize}</p>
    </article>
  );
};

export default MailboxDetails;
