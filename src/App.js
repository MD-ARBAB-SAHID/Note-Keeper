import React, { useState } from "react";
import Form from "./componenets/form";
import NotesList from "./componenets/notesList";
import "./App.css";
const colorHex = [
  "#dac1c1",
  "#f5bdbd",
  "#b3eeee",
  "#f3e077",
  "#f89fae",
  "#e47789",
];

function App() {
  const [showForm, setForm] = useState(false);
  const [notes, setNotes] = useState([]);
  const formHandler = () => {
    setForm(true);
  };

  return (
    <>
      <header className="header">
        <h1>VM</h1>
        <button onClick={formHandler}>NEW NOTE</button>
      </header>

      <div className="container">
        <div className="formContainer">
          <NotesList notes={notes} colorHex={colorHex} setNotes={setNotes} />
          {showForm && (
            <Form setForm={setForm} setNotes={setNotes} colorHex={colorHex} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
