
// NewPage.js
import React, { useState } from 'react';
import './note.css';

const NewPage = () => {
  const keyName = 'noteData'
  let getData = (keyname) =>
  {

    return localStorage.getItem(keyname);
  }
  
  let setData = (keyname, data) =>
  {
    return localStorage.setItem(keyname, JSON.stringify(data));
  }

  let removeData = (keyname) =>
  {
    return localStorage.removeItem(keyname);
  }

  let allData = JSON.parse(getData(keyName))
  console.log((allData))
  
  const [showNewPage, setShowNewPage] = useState(false);
  

  
 

  // const handleget = () =>{
  //   let get=localStorage.getItem(handlesave());
  // }

  // const handleDelete=()=>{
  //   let delte=localStorage.removeItem();
  // }
  
  const createNewPage = () => {
    setShowNewPage((prevshowNewPage) => !prevshowNewPage);
  
  }

  return (
    <>
    <div>
       <div class="container notepad-container">
         <div class="notepad-header">
           {/* <CreatePage handlecreate={this.handlecreate} /> */}
           {/* <button class="btn btn-Delete">Delete</button> */}
         </div>
         <div class="notepad-body" contenteditable="true">
        

         </div>
        <div className="btn-group">
       
          <button
           onClick={createNewPage}
           
            className="btn btn-createpage"
          >
            Create Page
          </button>
         
          <button  class="btn btn-save">Save</button>
          {/* <button class="btn btn-delete">Delete</button> */}
        </div>
        {allData.map(data=>(
            <div>{data.id}{data.des}</div>
          ))}
        
      </div>
      
     
    </div>
    <div>
       {showNewPage && <NewPage />}
    </div>
    </>

  );
}
export default NewPage;
