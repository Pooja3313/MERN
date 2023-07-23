import React, { useEffect, useState } from 'react'
// import Armin from '../image/arminabout.jpg'
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();
const [userData, setUserData] = useState({});

const callAboutPage = async () => {
  try {
    const res = await fetch('https://pooja-backend.vercel.app/about', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"

    });

    console.log(res);

    const data = await res.json();
    console.log(data);




    // console.log(data);
    // setUserData(res);

    if (!data.status === 200) {
      const error = new Error(data.error);
      throw error;
    }

  }
  catch (err) {
    // console.log(err);
    navigate("/Login");
  }
}

useEffect(() => {
  callAboutPage();

}, []);
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const About = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const callAboutPage = async () => {
//       try {
//         const res = await fetch('/about', {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem('jwtoken')}`
//           }
//         });


//         if (res.status === 401) {
//           navigate("/Login");
//           return;
//         }

//         const data = await res.json();
//         console.log(data);

//         // Display the about page content using the data received from the server
//       } catch (err) {
//         console.log(err);
//         navigate("/Login");
//       }
//     }

//     callAboutPage();
//   }, [navigate]);


  return (
    <>
      <div className='container emp-profile'>
        <form methods='GET'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-img'>
                {/* <img src={ Armin} alt='pic' /> */}
              </div>
            </div>

            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>Armin Patel</h5>
                <h6>Web Developer</h6>
                <p className='profile-rating mt-3 mb-5'>RANKINGS:<span>1/10</span></p>


                <ul className="nav nav-tabs" role='tablist'>
                  <li className="nav-item">
                    <a className="nav-link active" id='home-tab' data-toggle="tab" href="#home" role='tab' aria-controls='home' aria-selected="true">About</a>
                  </li>
                </ul>
              </div>
            </div>


            <div className='col-md-2'>
              <input type='submit' className='profile-edit-button' name="btnAddMore" value="Edit profile" />
            </div>
          </div>

          <div className='row'>
            {/*left side url*/}
            <div className='col-md-4'>
              <div className='profile-work'>
                <p>WORK LINE</p>
                <a href='https://www.youtube.com/watch?v=Q9a77ztT1gQ&ab_channel=SDanceWorld%7BGajoldoba%7D' target='_patel'>You tube</a><br />
                <a href='https://www.youtube.com/watch?v=Q9a77ztT1gQ&ab_channel=SDanceWorld%7BGajoldoba%7D' target='_patel'>You tube1</a><br />
                <a href='https://www.youtube.com/watch?v=Q9a77ztT1gQ&ab_channel=SDanceWorld%7BGajoldoba%7D' target='_patel'>You tube2</a><br />
                <a href='https://www.youtube.com/watch?v=Q9a77ztT1gQ&ab_channel=SDanceWorld%7BGajoldoba%7D' target='_patel'>You tube3</a><br />
                <a href='https://www.youtube.com/watch?v=Q9a77ztT1gQ&ab_channel=SDanceWorld%7BGajoldoba%7D' target='_patel'>You tube4</a><br />
              </div>
            </div>

            {/*right side toggle button*/}

            <div className='col-md-8 pl-5 about-info'>
              <div className='tab-content profile-tab' id='myTabContent'>
                <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>

                  <div className='row'>
                    <div className='col-md-6'>
                      <p style={{ color: "black" }}>User Id</p>
                    </div>
                    <div className='col-md-6'>
                      <p>hjvsvchasvcsajhbashbd</p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p style={{ color: "black" }}>Name</p>
                    </div>
                    <div className='col-md-6'>
                      <p>Armin Patel</p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p style={{ color: "black" }}>Email</p>
                    </div>
                    <div className='col-md-6'>
                      <p>arminpatel19@gmail.com</p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p style={{ color: "black" }}>Phone</p>
                    </div>
                    <div className='col-md-6'>
                      <p>9313606769</p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p style={{ color: "black" }}>Profession</p>
                    </div>
                    <div className='col-md-6'>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default About;
