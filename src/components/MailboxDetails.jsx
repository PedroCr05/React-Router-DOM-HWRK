import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();

  console.log(mailboxes);
  console.log(mailboxes[1].boxHolder);
  console.log(mailboxes._id);

  const selectedMailbox = mailboxes.find(
    (mail) => mail._id === Number(mailboxId)
  );

  return (
    <>
      <h2>{selectedMailbox.boxHolder}</h2>
      <dl>
        <dt>Box Size:</dt>
        <dd>{selectedMailbox.boxSize}</dd>
      </dl>
    </>
  );
};

export default MailboxDetails;
