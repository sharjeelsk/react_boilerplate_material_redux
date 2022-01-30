import React from 'react';
import axios from 'axios'
import "./LogIn.css"

function LogIn(props) {
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")
    const handleSubmit = (event)=>{
        event.preventDefault()
        axios.post(`${process.env.REACT_APP_DEVELOPMENT}/login`,{email,password})
        .then(res=>{
            console.log(res);
            props.history.push("/landing")
        })
        .catch(err=>{
            console.log(err.response);
        })
    }
  return <div>
      <h1>LogIn</h1>

        <form onSubmit = {handleSubmit}>
        <label>Email:</label>
        <input placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Submit</button>
        </form>

  </div>;
}

export default LogIn;
