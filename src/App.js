import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateNode from './components/CreateNode';
import Note from './components/Note';
import  './components/Note.css';


function App() {
  return (
    <>
    <Header />
          <CreateNode />
    <div className = "row">
        <div className = "col">
           <Note />
        </div>
        <div className = "col">
            <Note />
        </div>
          <div className = "col">
            <Note />
           </div>
           <div className = "col">
            <Note />
           </div>
           <div className = "col">
            <Note />
           </div>
           <div className = "col">
            <Note />
           </div>
           <div className = "col">
           <Note />
        </div>
        <div className = "col">
            <Note />
        </div>
          <div className = "col">
            <Note />
           </div>
           <div className = "col">
            <Note />
           </div>
           <div className = "col">
            <Note />
           </div>
           <div className = "col">
            <Note />
           </div>
          
     </div>
    
     <Footer />
    </>
  );
}

export default App;
