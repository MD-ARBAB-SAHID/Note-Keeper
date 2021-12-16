import ColorPicker from "./colorPicker";
import "./Modal.css";
const Modal = (props) => {
  const { deleteHandler, colorHex, changeColor } = props;

  const colorChangeHandler = (hexCode) => {
    changeColor(hexCode);
  };
  return (
    <div className="modal-container">
      <div className="Modal">
        <p>Change Background</p>
        <div className="color-picker">
          {colorHex.map((element) => {
            return (
              <ColorPicker
                id={element}
                key={element}
                colorChangeHandler={colorChangeHandler}
              />
            );
          })}
        </div>
        <button
          onClick={() => {
            deleteHandler();
          }}
          className="del"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Modal;
