// import { useState } from "react";
import { useContext, useEffect, useState } from "react";
import Routing from "./Routing";
import SignUp from "./Components/SignUp/SignUp"
function App() {
 const {user,setUser}=useContext(AppState)
  // const [logedin,setlogedin]=useState("SIGNIN") //on context
  localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJla2FsdSIsInVzZXJpZCI6MiwiaWF0IjoxNzI4NDQzMTU1LCJleHAiOjE3Mjg1Mjk1NTV9.bUm7KUrHkzmpMm9E_OJ_B29SvfCuH4rzOJiGetCxS7I")
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
      {/* <SignUp/> */}
    </>
  );
}

export default App;
