 
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Faq from './Faq';
import Login from './Login';
import Welcome from './Welcome';
import Routes1 from './Routes1';
import { useState } from 'react';
import UCard from './UCard';
 
function App() {
 
 
  
 
 
  return (
    <div>
 
 
    {
 
   
     

    }
 
 
 
 
 
 
<table border="2"> <tr>
  <Link to="/"> <td> Home</td></Link>
   <Link to="/faq">    <td>FAQ</td></Link>
 
   <Link to="/contact"> <td>Contact</td></Link>
 
   
      <Link to="/login"> <td>Login</td></Link>
 
   </tr></table>
 
   
   <Routes1/>
   
 
 
 
   
    </div>
  );
}
 
export default App;
 
 


// import { Routes, Route, Link } from 'react-router-dom';
// import Home from './Home';
// import Contact from './Contact';
// import Faq from './Faq';
// import Login from './Login';
// import Welcome from './Welcome';
// import './App.css';


// function App() {
//   return (
//     <div>

//       <table border = "2">
//         <tr>
//          <Link to="/"> <td> Home   </td> </Link>
//          <Link to="/faq"><td> FAQ </td> </Link>
//          <Link to="/Contact"><td> Contact </td> </Link>
//          <Link to="/Login"><td>Login </td> </Link>

//         </tr>
//       </table>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/faq" element={<Faq />} />
//         <Route path="/Login" element={<Login/>} />

// <Route path="/Welcome" element={<Welcome/>} />

//       </Routes>

      
//     </div>
//   );
// }
// export default App;