import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";

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
    </>
  );
};

export default App;
