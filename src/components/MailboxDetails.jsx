import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();

  const selectedMailbox = mailboxes.find(
    (mail) => mail._id === Number(mailboxId)
  );
  console.log(selectedMailbox);
  return (
    <>
      {/* <h2>{selectedMailbox.boxHolder}</h2> */}
      <dl>
        <dt>Box Size:</dt>
        {/* <dd>{selectedMailbox.boxSize}</dd> */}
      </dl>
    </>
  );
};

export default MailboxDetails;
