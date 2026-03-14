import { MdDeleteForever } from 'react-icons/md';

const Notes = () => {
  return (
    <div className="note">
      <span>This the first Note!</span>

      <div className="note-footer">
        <small>14/03/2026</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Notes;