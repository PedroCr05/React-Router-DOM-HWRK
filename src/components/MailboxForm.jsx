import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initState = {
  _id: 0,
  boxHolder: "",
  boxSize: "",
};

const MailboxForm = ({ addBox }) => {
  console.log(addBox);

  return (
    <>
      <form action="">
        <input type="text" />
        <select name="" id=""></select>
      </form>
    </>
  );
};

export default MailboxForm;
