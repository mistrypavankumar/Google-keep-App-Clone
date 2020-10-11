import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateNode from './components/CreateNode';
import Note from './components/Note';
import  './components/Note.css';


function App() {
  //empty array is created using useState
  const [addItem, setaddItem] = useState([]);
  
  const addNote = (note) =>{
      if(note.title == "" || note.content == ""){
        alert("Please fill the details...!");
      }else{
        setaddItem((prevDate) => {
          return [...prevDate, note];
        });
      }
   
  };

  const onDelete = (id) =>{
    setaddItem((oldDate) => {
      oldDate.filter((currentData, _index) =>{
        return _index != id;
      })
    })
    console.log(addItem);
  }

  return (
    <>
    <Header />
    <CreateNode passNote ={addNote} />
    
    <div className = "row">
      {addItem.map((val, index) =>{
        return (
          
            <div className="col">
              <Note 
                key = {index}
                id = {index}
                title = {val.title}
                content = {val.content}
                deleteItem = {onDelete}
              />
            </div>
          
        );
      })}
      </div>
  
     <Footer />
    </>
  );
}

export default App;
