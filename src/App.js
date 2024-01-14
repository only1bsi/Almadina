// import NotePage from "./component/pages/NotePage";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import LoginPage from "./component/pages/LoginPage";
// import RequireAuth from "./component/RequireAuth";
// import './App.css';




// function App() {

// return (
//   <div className="App">
//   <BrowserRouter>
//   <ul>
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <Link to="/Login">Login</Link>
//     </li>
//   </ul>
//   <Routes>
//     <Route path="/Login" element={<LoginPage />}/>  
//     <Route index element={<RequireAuth><NotePage /></RequireAuth>}/>
//   </Routes>
//   </BrowserRouter>
//   </div>
// )
// }

// export default App;




import React from "react";
import Sidebar from "./component/sidebar/Sidebar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected import statements
import CreateForm from "./component/pages/createForm/CreateForm";
// import Settings from  "./component/pages/Settings/Settings"
// import Notes from "./component/Notes"
// import UpdateForm from "./component/pages/updateForm/UpdateForm"
import Dashboard from "./component/pages/dashboard/dashboard";
// import { CakeView } from "./features/cake/CakeView"
import { NotesView } from './features/note/NotesView';
import UpdateNote from "./features/note/UpdateNote";
import UpdateNoteForm from "./component/pages/updateNoteForm/updateNoteForm";


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register-record" element={<CreateForm />} />
          <Route path="/all-records" element={<NotesView />} />
          <Route path="/update-record" element={<UpdateNote />} />
          <Route path="/update-note/:id" element={<UpdateNoteForm />} />
        </Routes>
      </Router>
    </div>
  );
}
 

export default App;