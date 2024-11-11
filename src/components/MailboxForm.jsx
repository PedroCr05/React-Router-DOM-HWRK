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

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData(initState);
    nav(`/mailboxes`);
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.boxHolder]: target.value });
  };

  return (
    <section>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxHolder">Your name for your mailbox: </label>
        <input
          type="text"
          id="boxHolder"
          name="boxHolder"
          value={formData.boxHolder}
          onChange={handleChange}
          required
        />
        <label htmlFor="boxSize">Mailbox Size: </label>
        <select name="boxSize" id="boxSize" required>
          <option value="">Please, select your mailbox size.</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default MailboxForm;
