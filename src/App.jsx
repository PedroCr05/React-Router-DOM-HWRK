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
      <Routes>
        <Route
          path="/"
          element={<h2>Welcome to the homepage of the post office!</h2>}
        />
        <Route path="/mailbox-details" element={<MailboxDetails />} />
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
        <Route
          path="/*"
          element={<h2>404 Error | Please, return to the main page.</h2>}
        />
      </Routes>
    </>
  );
};

export default App;
