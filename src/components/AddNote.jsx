import { useState } from "react";
const AddNote = ({handleAddNote})=>{
    const [noteText , SetNoteText] = useState('');
    
    const characlimit = 200;

    const handleChange = (event)=>{
        if(characlimit - event.target.value.length >=0){
            SetNoteText(event.target.value);
        }
            
    }
    const handleSaveClick = () =>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);  
            SetNoteText('');  
        }
        else{
            console.log("Please add text");
        }
        
    }   

    return(
        <div className='note-new'>
            <textarea 
                rows="8" 
                cols='20' 
                placeholder='Type to add a note'
                value = {noteText}
                onChange={handleChange}
            ></textarea>
        <div className='note-footer'>
            <small>{200-noteText.length} remaining</small>
            <button className='save' onClick={handleSaveClick}>Save</button> 
        </div>
        </div>
        
    );
};
 export default AddNote;