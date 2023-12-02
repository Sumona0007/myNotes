// import React, { Component } from "react";
// import "./note.css";
// import CreatePage from "./createpage.components";
// class Note extends Component {
//   state = {
//     users: [
//       {
//         id: 1,
//         create: false,
//       },
//       {
//         id: 2,
//         create: false,
//       },
//       {
//         id: 3,
//         create: false,
//       },
//       {
//         id: 4,
//         create: false,
//       },
//     ],
//   };

//   // handlecreate = (id) => {
//   //   const createe = this.state.users.filter((creat) => {
//   //     if (creat.create === false){
//   //       return{create:creat.create=true};
//   //     }
//   //     else if(creat.create===true){
//   //       return {create:creat.create=false}
//   //     }
//   //     return{create:creat.create}
//   //   });

//   //   this.setState({users:createe})
//   // };

//   handlenewCreate =()=>{
//     this.state.users.forEach(
//       newcreate=>{
//         if(newcreate.create===false || newcreate===true){
//           return<Note />
//         }
//       }
//     )
//   }
//   render() {
    
//     return (
//       <div class="container notepad-container">
//         <div class="notepad-header">
//           {/* <CreatePage handlecreate={this.handlecreate} /> */}
//           {/* <button class="btn btn-Delete">Delete</button> */}
//         </div>
//         <div class="notepad-body" contenteditable="true"></div>
//         <div className="btn-group">
//           <button
//             onClick={this.handlecreate}
//             className="btn btn-createpage"
//           >
//             Create Page
//           </button>
//           <button class="btn btn-save">Save</button>
//           <button class="btn btn-delete">Delete</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Note;
// App.js
import React, { useState } from 'react';
import NewPage from './createpage.components';

const App = () => {
  const [showNewPage, setShowNewPage] = useState(false);

  const createNewPage = () => {
    setShowNewPage(true);
  };

  return (
    <div>
      
      
    </div>
  );
};

export default App;
