import { useRef, useState } from "react";
import Modal from "./Modal";
import "./form.css";
const Form = (props) => {
  const { setForm, setNotes, colorHex } = props;
  const [modal, showModal] = useState(false);
  const [bg, setBg] = useState("#FFFFFF");
  const title = useRef();
  const description = useRef();
  const deleteForm = () => {
    setForm(false);
  };
  const submitForm = (event) => {
    event.preventDefault();

    const newObj = {
      title: title.current.value,
      description: description.current.value,
      color: bg,
    };
    setNotes((prevNotes) => [...prevNotes, newObj]);
    setForm(false);
  };
  const changeBgColor = (hexCode) => {
    setBg(hexCode);
  };

  return (
    <div className="formContent" style={{ backgroundColor: bg }}>
      <form>
        <input
          type="text"
          placeholder="Enter Title"
          ref={title}
          className="title"
          style={{ backgroundColor: bg }}
        />
        <textarea
          name=""
          id=""
          cols="5"
          rows="5"
          placeholder="Enter Note"
          style={{ backgroundColor: bg }}
          ref={description}
        />
        <input type="submit" value="SAVE" onClick={submitForm} />
      </form>

      <i
        className="fas fa-ellipsis-v pad"
        onClick={() => showModal((prev) => !modal)}
      >
        {modal && (
          <Modal
            deleteHandler={deleteForm}
            colorHex={colorHex}
            changeColor={changeBgColor}
          />
        )}
      </i>
    </div>
  );
};

export default Form;
