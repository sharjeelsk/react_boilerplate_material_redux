import React from 'react';
import "./SignUp.css"
import {Link} from 'react-router-dom'
import axios from 'axios'

function SignUp(props) {
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")
    const [confirmPassword,setConfirmPassword]=React.useState("")
    const [name,setName]=React.useState("")

    const handleSubmit = (event)=>{
        event.preventDefault()
        axios.post(`${process.env.REACT_APP_DEVELOPMENT}/signup`,{email,password,name})
        .then(res=>{
            console.log(res);
            props.history.push("/landing")
        })
        .catch(err=>{
            console.log(err);
        })
    }

  return <div>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <label>name:</label>
        <input placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <label>email:</label>
        <input placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <input placeholder='Confirm password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
        <button type="submit">Submit</button>
        <Link to="/login">Already a user, logIn instead</Link>
        </form>

  </div>;
}

export default SignUp;
