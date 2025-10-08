import React, { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Auth = () => {
  const auth = useContext(AuthContext);
  const[checked,setChecked] = useState(false);
  console.log(auth);
  

  function handleChange(e){
    setChecked(e.target.checked);
    auth.setIsAuthenticated((prev)=>!prev);
  }
  return (
    <>
    <h1>Click on the checkbox to get authenticated</h1>
    <div >
      <h3>{(auth.isAuthenticated)?"You are now authenticated, you can proceed":"you are not authenticated"}</h3>
      <input type='checkbox'
      onChange={handleChange}/>
      <label>i am not robot</label>
    </div>
    </>
  )
}

export default Auth;