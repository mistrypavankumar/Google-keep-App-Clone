import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import "../components/Note.css";

export default function Note() {
    return (
        <>
           <div className="note_container">
                 <div className="note_content">
          
                    <h1> Title</h1>
                    <br />
                    <p>This is the content</p>
                    <IconButton className = "deleteBtn">
                    <DeleteIcon  style ={{ color: "red"}}/>
                    </IconButton>
          
                 </div>
           </div> 
        </>
    )
}
