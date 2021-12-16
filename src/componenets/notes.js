import { useState } from "react";
import Modal from "./Modal";
import "./notes.css";
const Notes = (props) => {
  const { title, description, id, colorHex, setNotes, color } = props;
  const [modal, showModal] = useState(false);
  const deleteNote = () => {
    setNotes((prev) => {
      return prev.filter((element, index) => {
        return index !== id;
      });
    });
  };
  const updateColor = (hexCode) => {
    setNotes((prev) => {
      return prev.map((element, index) => {
        if (index === id) {
          return {
            ...element,
            color: hexCode,
          };
        }
        return element;
      });
    });
  };
  return (
    <div
      className="note-container"
      style={{ backgroundColor: color.toString() }}
    >
      <div className="notes">
        <h3>{title}</h3>
        <h5>{description}</h5>
      </div>
      <i
        className="fas fa-ellipsis-v pad"
        onClick={() => showModal((prev) => !modal)}
      >
        {modal && (
          <Modal
            colorHex={colorHex}
            deleteHandler={deleteNote}
            changeColor={updateColor}
          />
        )}
      </i>
    </div>
  );
};

export default Notes;
