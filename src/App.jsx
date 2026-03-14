import { useState } from 'react';
import {nanoid } from 'nanoid';
import NotesList from './components/NotesList'
const App= ()=>{
    const [notes,setNotes] = useState([{
        id:nanoid(),    
        text:"This is my first Note",
        date : "15/04/21"
    },
    {
        id:nanoid(),    
        text:"This is my second Note",
        date : "3/04/21"
    },
    {
        id:nanoid(),    
        text:"This is my third Note",
        date : "10/04/21"
    }

    ]) 
    return(
        <div className='container'>
            <NotesList notes = {notes} />
        </div>
    );
}
export default App;
