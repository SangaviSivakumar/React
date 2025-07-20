import { useNavigate } from "react-router-dom"
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
 
import Faq from './Faq';
import Login from './Login';
import Welcome from './Welcome';
import Routes1 from './Routes1';
import { useState } from 'react';
import UCard from './UCard';
const Contact=()=>
{
 
 
    let [users,setUsers]=useState([{UserId:"101",Name:"asha",Salary:200},
    {UserId:"102",Name:"ajay",Salary:400},
    {UserId:"103",Name:"jatin",Salary:800}
    ,{UserId:"104",Name:"komal",Salary:700}]
  )
 
const nav = useNavigate()
 
    const openSignIn=()=>
    {
        nav("/login")
 
    }
    return(<>
 
 
 
 
     {
 
   
     users.map((temp)=>
   
      <Link to={`/ucard/${temp.UserId}/${temp.Name}/${temp.Salary}`}> <UCard UserId={temp.UserId} Name={temp.Name} Salary={temp.Salary}/> </Link>
 
   
    )
 
    }
 
    <h1> Contact </h1>
    <h2> Ajay@Gmsil.com</h2>
    <h2> 98765433</h2>
 
 
 
 
 
 
  <button onClick={openSignIn}> Sign In </button>
 
 
 
   
    </>)
}
 
export default Contact