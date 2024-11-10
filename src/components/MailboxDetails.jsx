import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();

  const singularMailbox = mailboxes.boxholder.find(
    (mail) => mail._id === Number(mailboxId)
  );
  return (
    <>
      <h2>{singularMailbox.boxholder}</h2>
      <dl>
        <dt>Box Size:</dt>
        <dd>{singularMailbox.boxSize}</dd>
      </dl>
    </>
  );
};

export default MailboxDetails;
