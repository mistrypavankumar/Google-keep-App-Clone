import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import "../components/CreateNode.css";

export default function CreateNode() {
    return (
        <>
           <div className="main_node">
               <form >
                   <input type="text"  placeholder = "Title" autoComplete = "off" /><br/>
                   <textarea   cols="" rows="" placeholder ="Write a note ....." />
                   <IconButton className = "icon_btn">
                       <AddIcon  />
                   </IconButton>
               </form>
           </div> 
        </>
    )
}
