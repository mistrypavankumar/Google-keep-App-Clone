import React, {useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import "../components/CreateNode.css";

export default function CreateNode(props) {
    const [expand, setexpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (e) => {

        // object destructuring
        const {name,value} = e.target;
        setNote((prevData)=>{
            return {
                ...prevData,
                [name]:value,

            };
          
        });
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title : "",
            content: "",
        });
    };

    const EventAppear = () =>{
        setexpand(true);
    }

    const backToNormal = () =>{
  
        setexpand(false);
    
    }
    return (
        <>
           <div className="main_node" >
               <form >
               {expand ?
                   <input 
                        
                        type="text"
                        name = "title"
                        value = {note.title}
                        onChange ={InputEvent} 
                        placeholder = "Title" 
                        autoComplete = "off"
                        onDoubleClick = {backToNormal}
                       
                         />
                   :null
                   }
                   <br/>

                   
                   <textarea  
                         cols="" 
                         rows="" 
                         name = "content" 
                         value = {note.content} 
                         onChange ={InputEvent} 
                         onClick = {EventAppear}
                         placeholder ="Write a note ....." />
                   

                   {expand ?
                   <IconButton className = "icon_btn" onClick = {addEvent}>
                       <AddIcon  />
                   </IconButton>
                   :null}

               </form>
           </div> 
        </>
    )
}
