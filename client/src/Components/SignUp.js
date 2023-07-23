import React, { useState } from 'react'
import "../style.css";
import { Navigate, useNavigate } from 'react-router-dom';

// import User from '../../Server/model/userSchema';

function SignUp() {
  const Navigate = useNavigate();
  const [user,setUser] = useState({
    name: " " , email:"", phone:"", work:"", password:"", cpassword:""
  });
  let name, value;
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }
  const PostData = async (e) =>{
    e.preventDefault();
    const { name, email, phone, work, password, cpassword} = user;
    const res = await fetch("https://pooja-backend.vercel.app/register", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword

      })
    });
    const data = await res.json();
    if(res.status === 422 || !data){
    window.alert("Invalid Registration");
    console.log("Invalid Registration");
  }
  else {
    window.alert("Successfully Registration");
    console.log("Successfully Registration");

    Navigate("/Login");
  }

  } 
    return (
      <form methods="POST">
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="name"
            name ="name"
            className="form-control"
            placeholder="First name"
            value={user.name}
            onChange={handleInputs}
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" name ="email" className="form-control" placeholder="Email"
          value={user.email}
          onChange={handleInputs} />
        </div>

        <div className="mb-3">
          <label>Phone_No</label>
          <input
            type="phone"
            name ="phone"
            className="form-control"
            placeholder="Enter phone_no"
            value={user.phone}
            onChange={handleInputs}
          />
        </div>

        <div className="mb-3">
          <label>Work</label>
          <input
            type="work"
            name ="work"
            className="form-control"
            placeholder="Enter Work"
            value={user.work}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name ="password"
            className="form-control"
            placeholder="Enter password"
            value={user.password}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-3">
          <label>Repeat Password</label>
          <input
            type="cpassword"
            name ="cpassword"
            className="form-control"
            placeholder="Repeat password"
            value={user.cpassword}
            onChange={handleInputs}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" 
          value = "register" onClick ={PostData}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/Login">sign in?</a>
        </p>
      </form>
    )
  }
export default SignUp;
