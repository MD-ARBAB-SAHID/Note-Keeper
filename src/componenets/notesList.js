import Notes from "./notes";

const NotesList = (props) => {
  const { notes, colorHex, setNotes } = props;

  return notes.map((note, index) => {
    return (
      <Notes
        title={note.title}
        description={note.description}
        id={index}
        key={index}
        colorHex={colorHex}
        setNotes={setNotes}
        color={note.color}
      />
    );
  });
};

export default NotesList;
