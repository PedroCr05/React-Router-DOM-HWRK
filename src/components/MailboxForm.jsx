import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initState = {
  _id: 0,
  boxHolder: "",
  boxSize: "",
};

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState(initState);
  const nav = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData(initState);
    nav(`/mailboxes`);
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.boxHolder]: target.value });
  };

  return (
    <>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSumbit}>
        <input type="text" />
        <select name="" id=""></select>
      </form>
    </>
  );
};

export default MailboxForm;
