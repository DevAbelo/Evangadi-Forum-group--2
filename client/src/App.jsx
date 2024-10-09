



// import { useState } from "react";
import { useContext, useEffect, useState } from "react";
import Routing from "./Routing";
import { useNavigate } from "react-router-dom";
import { AppState } from "./Context/DataContext";
function App() {
 const {user,setUser}=useContext(AppState)
  const token=localStorage.getItem('token')
  const navigate =useNavigate()
  async function checkuser() {
    try {
      const {data} = await axios.get("/users/check",{
        headers:{
          authorization:"Bearer " + token,
        }
      });
      console.log(data)
      setUser(data);
      localStorage.setItem("userlogin",true);
    } catch (error) {
      console.log(error.response.data.msg);
      navigate("/")
    }
  }
useEffect(()=>{
 
     checkuser();
    
},[])
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
