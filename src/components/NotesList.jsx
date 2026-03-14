import Notes from './Notes';
import AddNote from './AddNote';
const NotesList = ({notes}) =>{
    return (
        <div className='notes-list'>
            {
                notes.map((note)=>(
                    <Notes 
                    id={note.id} 
                    text={note.text} 
                    date={note.date} 
                    />
                ))
            }
            <AddNote/>
        </div>
    )
};
export default NotesList;