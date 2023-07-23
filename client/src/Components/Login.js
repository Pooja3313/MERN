// import React, { useState } from 'react';
// import "../style.css";
// import { useNavigate,NavLink } from 'react-router-dom';


// function Login() {

//   const Navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const loginUser = async (e) => {
//     e.preventDefault();

//     const res = await fetch('/signin', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         email,
//         password
//       })
//     });
//     console.log(res);
//     const data = await res.json();
//     console.log(data);

//     if (res.status === 400 || !data) {
//       window.alert("Invalid Login");
//       console.log("Invalid Login");
//     }
//     else {
//       window.alert("Successfully Login");
//       console.log("Successfully Login");
//       Navigate("/Home");
//     }

//   }
import React, { useState } from 'react';
import "../style.css";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('https://pooja-backend.vercel.app/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Login");
      console.log("Invalid Login");
    } else {
      window.alert("Successfully Login");
      console.log("Successfully Login");
      navigate("/Home");
    }
  }
  return (
    <>
      <form method="POST">
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" name="signin"
            value="log In"
            onClick={loginUser}
          >
            Submit
          </button>
        </div>

      </form>
      

    </>
  )
}
export default Login;
