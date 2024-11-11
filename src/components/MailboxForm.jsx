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
      <form action="">
        <input type="text" />
      </form>
      <label htmlFor="boxSize">Mailbox Size: </label>
      <select name="boxSize" id="boxSize">
        <option value="">Please, select your mailbox size.</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
    </>
  );
};

export default MailboxForm;
