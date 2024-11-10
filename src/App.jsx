import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";

const App = () => {
  return (
    <>
      <NavBar />
      <h1>Post Office</h1>
      <MailboxForm />
    </>
  );
};

export default App;
