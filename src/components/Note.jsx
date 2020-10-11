import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import "../components/Note.css";

export default function Note(props) {

    const deleteNote = () =>{
        props.deleteItem(props.id);
        // alert("you clicked to delete");
        console.log(props.id);
    }


    return (
        <>
           <div className="note_container ">
                 <div className="note_content">
          
                    <h1> {props.title}</h1>
                    <br />
                    <p>{props.content}</p>
                    <IconButton className = "deleteBtn" onClick = {deleteNote}>
                    <DeleteIcon  style ={{ color: "red"}}/>
                    </IconButton>
          
                 </div>
           </div> 
        </>
    )
}
