import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import NavBar from "./components/NavBar";

const initState = [
  { _id: 1, boxHolder: "Jay", boxSize: "Medium" },
  { _id: 2, boxHolder: "Shonnairn", boxSize: "Large" },
  { _id: 3, boxHolder: "Miyuki", boxSize: "Medium" },
  { _id: 4, boxHolder: "Juno", boxSize: "Small" },
];

const App = () => {
  const [mailboxes, setMailboxes] = useState(initState);
  // const [selected, setSelected] = useState({});

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setSelected([...mailboxes, newMailboxData]);
  };

  return (
    <main>
      <NavBar />
      <h1>Post Office</h1>
      <Routes>
        <Route
          path="/"
          element={<h2>Welcome to the homepage of the post office!</h2>}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/new"
          element={<MailboxForm addBox={addBox} />}
        />
        <Route
          path="/*"
          element={<h2>404 Error | Please, return to the main page.</h2>}
        />
      </Routes>
    </main>
  );
};

export default App;
