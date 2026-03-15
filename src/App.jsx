import { useState } from 'react';
import {nanoid } from 'nanoid';
import NotesList from './components/NotesList'
import Search from './components/Search';
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

    const [searchText , setSearchText] = useState('');

    const addNote = (text)=>{
        const date = new Date();
        const newNote = {
            id : nanoid(),
            text : text,
            date : date.toLocaleDateString(),

        }
        const newNotes = [...notes,newNote];
        setNotes(newNotes);
    };

    const deleteNote = (id)=>{
        const newNotes = notes.filter((note)=> note.id !== id);
        setNotes(newNotes);
    }
    return(
        <div className='container'>
            <Search handleSearchNote = {setSearchText} />
            <NotesList 
                notes = {notes.filter((note)=>{
                    return note.text.toLowerCase().includes(searchText.toLowerCase());
                })}  
                handleAddNote={addNote} 
                handleDeleteNote = {deleteNote} 
            /> 
            {/* when final call will come the handleaddNote will come with a value which will be = to addNote so it will passed inside the addNote text  */}
            {/* prop name = value which is passed in NotesList and propname can be anything , value is the value of the variable of parent which is here the same name notes   */}
        </div>
    );
}
export default App;
