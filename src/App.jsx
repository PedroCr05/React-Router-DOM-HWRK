import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import NavBar from "./components/NavBar";

const App = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getSelected = () => {};
    getSelected(setSelected);
  });

  return (
    <>
      <NavBar />
      <h1>Post Office</h1>
      <MailboxDetails />
      <MailboxForm />
      <MailboxList />
    </>
  );
};

export default App;
