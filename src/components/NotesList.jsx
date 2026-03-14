import Notes from './Notes';
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
        </div>
    )
};
export default NotesList;