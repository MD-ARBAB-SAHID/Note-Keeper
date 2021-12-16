import "./Modal";
const ColorPicker = (props) => {
  const { colorChangeHandler, id } = props;
  const css = {
    backgroundColor: id.toString(),
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        colorChangeHandler(id);
      }}
      style={css}
    />
  );
};

export default ColorPicker;
