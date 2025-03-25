import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';


function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, `;
}


const Array = [1]

function Dashboard() {

  const [color, setcolor] = useState({ background: "#006ebd", color: "white", badgecolor: "#006ebd", badgebackground: "white" });
  
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
     
              const Lawyertoken = JSON.parse(localStorage.getItem("Lawyertoken"));


             axios.get(
                  "https://lawyer-management-system-api.onrender.com/lawyer/dashboard",
                  {
                      headers: {
                          "Authorization": `Bearer ${Lawyertoken.token}`, // Add Authorization token
                          "Content-Type": "application/json",
                      },
                  }
              )

              .then((res)=>{

                console.log(res)
              })

  }, []);


  return (

    
    <div className='border-bottom pb-5'>

      <div className='DashboardMain-width'>

        <div className='DashboardChild-width'>

          <div className='d-flex gap-4 align-items-center'>
            <h3 className='fw-bold'>Dashboard</h3>
            <h5>My Appointments </h5>
          </div>

          <div className='d-flex my-3'>

            <Link to={"/Dashboard/"} className='col btn btn-lg rounded-0 Dashboardcolor'

              onClick={() => { setcolor({ background: "#006ebd", color: "white", badgecolor: "#006ebd", badgebackground: "white" }) }}

              style={{ background: color.background, color: color.color }}>


              New <span style={{ background: color.badgebackground, color: color.badgecolor }} className=" badge rounded-pill py-1 px-2 ">{Array.length}</span></Link>


            <Link to={"/Dashboard/Upcoming"} className='col btn btn-lg  rounded-0 Dashboardcolor'
              onClick={() => { setcolor({ background: "#e4eff7", color: "black", badgecolor: "#fff", badgebackground: "#006ebd" }) }


              } >Upcoming</Link>


            <Link to={"/Dashboard/Complated"} className='col btn btn-lg rounded-0 Dashboardcolor' onClick={() => { setcolor({ background: "#e4eff7", color: "black", badgecolor: "#fff", badgebackground: "#006ebd" }) }}>Complated</Link>

          </div>

          <Routes>

            <Route path='/' element={<> <New /> </>}></Route>
            <Route path='Upcoming' element={<> <Upcoming /> </>}></Route>
            <Route path='Complated' element={<> <Complated /> </>}></Route>

          </Routes>

        </div>

      </div>


    </div>
  )
}


function New() {

  return (
    <div>
      <div>

        {
          (Array.length === 0) ? <div className=' d-flex justify-content-center my-5'>

            <div className=' text-center'>
              <img className="w-100" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLqeXQDdoJKPBQJlCiOf0xYXANlpBIBnY2L_YgqbUpkUU41XGB" alt="" />
              <h5 className='fw-bold'>You Don't Not have <br /> any client reqeust Yet</h5>
            </div>

          </div> :

            <div className='DashboardMain my-4'>

              <div className='DashboardChild position-relative'>

                <div className='d-flex gap-2'>

                  <div>
                    <img className="" width="55px" src="../image/profile.png" alt="" />
                  </div>

                  <div>

                    <h5 className='my-0 fw-bold'>Robert Fox</h5>
                    <img width="80px" src="../image/booking5.png" alt="" />
                    <span className="fw-bold"> (233 Reviews)</span>

                    <div className='d-flex gap-3 my-3'>

                      <div>
                        <h6 className='text-secondary'>Date</h6>
                        <h6 className='fw-bold'>5 Jan 2023</h6>
                      </div>

                      <div>
                        <h6 className='text-secondary'>Time</h6>
                        <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                      </div>

                    </div>



                  </div>


                </div>

                <div className='d-flex gap-2'>

                  <button className='col btn' style={{ border: "1px solid #006ebd", color: "#006ebd" }}>Reject</button>
                  <button className='col btn text-white' style={{ background: "#006ebd" }}>Accept</button>

                </div>

                <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


              </div>

              <div className='DashboardChild position-relative'>

                <div className='d-flex gap-2'>

                  <div>
                    <img className="" width="55px" src="../image/profile.png" alt="" />
                  </div>

                  <div>

                    <h5 className='my-0 fw-bold'>Robert Fox</h5>
                    <img width="80px" src="../image/booking5.png" alt="" />
                    <span className="fw-bold"> (233 Reviews)</span>

                    <div className='d-flex gap-3 my-3'>

                      <div>
                        <h6 className='text-secondary'>Date</h6>
                        <h6 className='fw-bold'>5 Jan 2023</h6>
                      </div>

                      <div>
                        <h6 className='text-secondary'>Time</h6>
                        <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                      </div>

                    </div>



                  </div>


                </div>

                <div className='d-flex gap-2'>

                  <button className='col btn' style={{ border: "1px solid #006ebd", color: "#006ebd" }}>Reject</button>
                  <button className='col btn text-white' style={{ background: "#006ebd" }}>Accept</button>

                </div>

                <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


              </div>

              <div className='DashboardChild position-relative'>

                <div className='d-flex gap-2'>

                  <div>
                    <img className="" width="55px" src="../image/profile.png" alt="" />
                  </div>

                  <div>

                    <h5 className='my-0 fw-bold'>Robert Fox</h5>
                    <img width="80px" src="../image/booking5.png" alt="" />
                    <span className="fw-bold"> (233 Reviews)</span>

                    <div className='d-flex gap-3 my-3'>

                      <div>
                        <h6 className='text-secondary'>Date</h6>
                        <h6 className='fw-bold'>5 Jan 2023</h6>
                      </div>

                      <div>
                        <h6 className='text-secondary'>Time</h6>
                        <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                      </div>

                    </div>



                  </div>


                </div>

                <div className='d-flex gap-2'>

                  <button className='col btn' style={{ border: "1px solid #006ebd", color: "#006ebd" }}>Reject</button>
                  <button className='col btn text-white' style={{ background: "#006ebd" }}>Accept</button>

                </div>

                <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


              </div>

              <div className='DashboardChild position-relative'>

                <div className='d-flex gap-2'>

                  <div>
                    <img className="" width="55px" src="../image/profile.png" alt="" />
                  </div>

                  <div>

                    <h5 className='my-0 fw-bold'>Robert Fox</h5>
                    <img width="80px" src="../image/booking5.png" alt="" />
                    <span className="fw-bold"> (233 Reviews)</span>

                    <div className='d-flex gap-3 my-3'>

                      <div>
                        <h6 className='text-secondary'>Date</h6>
                        <h6 className='fw-bold'>5 Jan 2023</h6>
                      </div>

                      <div>
                        <h6 className='text-secondary'>Time</h6>
                        <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                      </div>

                    </div>



                  </div>


                </div>

                <div className='d-flex gap-2'>

                  <button className='col btn' style={{ border: "1px solid #006ebd", color: "#006ebd" }}>Reject</button>
                  <button className='col btn text-white' style={{ background: "#006ebd" }}>Accept</button>

                </div>

                <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


              </div>

              <div className='DashboardChild position-relative'>

                <div className='d-flex gap-2'>

                  <div>
                    <img className="" width="55px" src="../image/profile.png" alt="" />
                  </div>

                  <div>

                    <h5 className='my-0 fw-bold'>Robert Fox</h5>
                    <img width="80px" src="../image/booking5.png" alt="" />
                    <span className="fw-bold"> (233 Reviews)</span>

                    <div className='d-flex gap-3 my-3'>

                      <div>
                        <h6 className='text-secondary'>Date</h6>
                        <h6 className='fw-bold'>5 Jan 2023</h6>
                      </div>

                      <div>
                        <h6 className='text-secondary'>Time</h6>
                        <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                      </div>

                    </div>



                  </div>


                </div>

                <div className='d-flex gap-2'>

                  <button className='col btn' style={{ border: "1px solid #006ebd", color: "#006ebd" }}>Reject</button>
                  <button className='col btn text-white' style={{ background: "#006ebd" }}>Accept</button>

                </div>

                <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


              </div>

              <div className='DashboardChild position-relative'>

                <div className='d-flex gap-2'>

                  <div>
                    <img className="" width="55px" src="../image/profile.png" alt="" />
                  </div>

                  <div>

                    <h5 className='my-0 fw-bold'>Robert Fox</h5>
                    <img width="80px" src="../image/booking5.png" alt="" />
                    <span className="fw-bold"> (233 Reviews)</span>

                    <div className='d-flex gap-3 my-3'>

                      <div>
                        <h6 className='text-secondary'>Date</h6>
                        <h6 className='fw-bold'>5 Jan 2023</h6>
                      </div>

                      <div>
                        <h6 className='text-secondary'>Time</h6>
                        <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                      </div>

                    </div>



                  </div>


                </div>

                <div className='d-flex gap-2'>

                  <button className='col btn' style={{ border: "1px solid #006ebd", color: "#006ebd" }}>Reject</button>
                  <button className='col btn text-white' style={{ background: "#006ebd" }}>Accept</button>

                </div>

                <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


              </div>

              <div className='DashboardChild position-relative'>

                <div className='d-flex gap-2'>

                  <div>
                    <img className="" width="55px" src="../image/profile.png" alt="" />
                  </div>

                  <div>

                    <h5 className='my-0 fw-bold'>Robert Fox</h5>
                    <img width="80px" src="../image/booking5.png" alt="" />
                    <span className="fw-bold"> (233 Reviews)</span>

                    <div className='d-flex gap-3 my-3'>

                      <div>
                        <h6 className='text-secondary'>Date</h6>
                        <h6 className='fw-bold'>5 Jan 2023</h6>
                      </div>

                      <div>
                        <h6 className='text-secondary'>Time</h6>
                        <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                      </div>

                    </div>



                  </div>


                </div>

                <div className='d-flex gap-2'>

                  <button className='col btn' style={{ border: "1px solid #006ebd", color: "#006ebd" }}>Reject</button>
                  <button className='col btn text-white' style={{ background: "#006ebd" }}>Accept</button>

                </div>

                <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


              </div>

              <div className='DashboardChild position-relative'>

                <div className='d-flex gap-2'>

                  <div>
                    <img className="" width="55px" src="../image/profile.png" alt="" />
                  </div>

                  <div>

                    <h5 className='my-0 fw-bold'>Robert Fox</h5>
                    <img width="80px" src="../image/booking5.png" alt="" />
                    <span className="fw-bold"> (233 Reviews)</span>

                    <div className='d-flex gap-3 my-3'>

                      <div>
                        <h6 className='text-secondary'>Date</h6>
                        <h6 className='fw-bold'>5 Jan 2023</h6>
                      </div>

                      <div>
                        <h6 className='text-secondary'>Time</h6>
                        <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                      </div>

                    </div>



                  </div>


                </div>

                <div className='d-flex gap-2'>

                  <button className='col btn' style={{ border: "1px solid #006ebd", color: "#006ebd" }}>Reject</button>
                  <button className='col btn text-white' style={{ background: "#006ebd" }}>Accept</button>

                </div>

                <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


              </div>

              <div className='DashboardChild position-relative'>

                <div className='d-flex gap-2'>

                  <div>
                    <img className="" width="55px" src="../image/profile.png" alt="" />
                  </div>

                  <div>

                    <h5 className='my-0 fw-bold'>Robert Fox</h5>
                    <img width="80px" src="../image/booking5.png" alt="" />
                    <span className="fw-bold"> (233 Reviews)</span>

                    <div className='d-flex gap-3 my-3'>

                      <div>
                        <h6 className='text-secondary'>Date</h6>
                        <h6 className='fw-bold'>5 Jan 2023</h6>
                      </div>

                      <div>
                        <h6 className='text-secondary'>Time</h6>
                        <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                      </div>

                    </div>



                  </div>


                </div>

                <div className='d-flex gap-2'>

                  <button className='col btn' style={{ border: "1px solid #006ebd", color: "#006ebd" }}>Reject</button>
                  <button className='col btn text-white' style={{ background: "#006ebd" }}>Accept</button>

                </div>

                <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


              </div>



            </div>
        }


      </div>

    </div>

  )
}


function Upcoming() {
  return (
    <div>
      <div className='DashboardMain my-4'>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="70px" src="../image/booking5.png" alt="" />
              <span className="fw-bold" style={{ fontSize: "13px" }}> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>



            </div>


          </div>

          <div className='d-flex gap-2'>

            <button className='col btn fw-bold' style={{ background: "#e0f2ff", color: "#006ebd" }}>Metting start in 5:30 min</button>

          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>

          <button className='btn text-white p-0 px-lg-2  position-absolute  m-3 end-0' style={{ background: "#006ebd", fontSize: "12px", top: "15%" }}>Upcoming</button>


        </div>


        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="70px" src="../image/booking5.png" alt="" />
              <span className="fw-bold" style={{ fontSize: "13px" }}> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>


            </div>


          </div>

          <div className='d-flex gap-2'>

            <button className='col btn fw-bold' style={{ background: "#006ebd", color: "#FFF" }}>Start Call</button>

          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>

          <button className='btn text-white p-0 px-lg-2  position-absolute  m-3 end-0' style={{ background: "#006ebd", fontSize: "12px", top: "15%" }}>Upcoming</button>


        </div>


        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="70px" src="../image/booking5.png" alt="" />
              <span className="fw-bold" style={{ fontSize: "13px" }}> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>



            </div>


          </div>

          <div className='d-flex gap-2'>

            <button className='col btn fw-bold' style={{ background: "#e0f2ff", color: "#006ebd" }}>Cancle Booking</button>

          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>

          <button className='btn text-white p-0 px-lg-2  position-absolute  m-3 end-0' style={{ background: "#006ebd", fontSize: "12px", top: "15%" }}>Upcoming</button>


        </div>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="70px" src="../image/booking5.png" alt="" />
              <span className="fw-bold" style={{ fontSize: "13px" }}> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>



            </div>


          </div>

          <div className='d-flex gap-2'>

            <button className='col btn fw-bold' style={{ background: "#e0f2ff", color: "#006ebd" }}>Cancle Booking</button>

          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>

          <button className='btn text-white p-0 px-lg-2  position-absolute  m-3 end-0' style={{ background: "#006ebd", fontSize: "12px", top: "15%" }}>Upcoming</button>


        </div>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="70px" src="../image/booking5.png" alt="" />
              <span className="fw-bold" style={{ fontSize: "13px" }}> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>



            </div>


          </div>

          <div className='d-flex gap-2'>

            <button className='col btn fw-bold' style={{ background: "#e0f2ff", color: "#006ebd" }}>Cancle Booking</button>

          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>

          <button className='btn text-white p-0 px-lg-2  position-absolute  m-3 end-0' style={{ background: "#006ebd", fontSize: "12px", top: "15%" }}>Upcoming</button>


        </div>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="70px" src="../image/booking5.png" alt="" />
              <span className="fw-bold" style={{ fontSize: "13px" }}> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>



            </div>


          </div>

          <div className='d-flex gap-2'>

            <button className='col btn fw-bold' style={{ background: "#e0f2ff", color: "#006ebd" }}>Cancle Booking</button>

          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>

          <button className='btn text-white p-0 px-lg-2  position-absolute  m-3 end-0' style={{ background: "#006ebd", fontSize: "12px", top: "15%" }}>Upcoming</button>


        </div>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="70px" src="../image/booking5.png" alt="" />
              <span className="fw-bold" style={{ fontSize: "13px" }}> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>



            </div>


          </div>

          <div className='d-flex gap-2'>

            <button className='col btn fw-bold' style={{ background: "#e0f2ff", color: "#006ebd" }}>Cancle Booking</button>

          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>

          <button className='btn text-white p-0 px-lg-2  position-absolute  m-3 end-0' style={{ background: "#006ebd", fontSize: "12px", top: "15%" }}>Upcoming</button>


        </div>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="70px" src="../image/booking5.png" alt="" />
              <span className="fw-bold" style={{ fontSize: "13px" }}> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>



            </div>


          </div>

          <div className='d-flex gap-2'>

            <button className='col btn fw-bold' style={{ background: "#e0f2ff", color: "#006ebd" }}>Cancle Booking</button>

          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>

          <button className='btn text-white p-0 px-lg-2  position-absolute  m-3 end-0' style={{ background: "#006ebd", fontSize: "12px", top: "15%" }}>Upcoming</button>


        </div>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="70px" src="../image/booking5.png" alt="" />
              <span className="fw-bold" style={{ fontSize: "13px" }}> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>



            </div>


          </div>

          <div className='d-flex gap-2'>

            <button className='col btn fw-bold' style={{ background: "#e0f2ff", color: "#006ebd" }}>Cancle Booking</button>

          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>

          <button className='btn text-white p-0 px-lg-2  position-absolute  m-3 end-0' style={{ background: "#006ebd", fontSize: "12px", top: "15%" }}>Upcoming</button>


        </div>


      </div>
    </div>
  )
}

function Complated() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <div>
      <div className='DashboardMain my-4'>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="80px" src="../image/booking5.png" alt="" />
              <span className="fw-bold"> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>

            </div>


          </div>

          <div className='d-flex justify-content-between align-items-end gap-2 p-0'>

            <b className='fw-bold' style={{ color: "#006ebd", fontSize: "15px" }} data-bs-toggle="modal" href="#exampleModalToggle" role="button">Rate this Client</b>
            <button className='btn text-white badge px-2 pt-1' style={{ background: "#2ea63a" }}>complated</button>


          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


        </div>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="80px" src="../image/booking5.png" alt="" />
              <span className="fw-bold"> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>

            </div>


          </div>

          <div className='d-flex justify-content-between align-items-end gap-2 p-0'>

            <b className='fw-bold' style={{ fontSize: "15px" }}>Rated  <img width="15px" src="../image/bookingstar.png" alt="" /> 4.0</b>
            <button className='btn text-white badge px-2 pt-1' style={{ background: "#2ea63a" }}>complated</button>


          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


        </div>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="80px" src="../image/booking5.png" alt="" />
              <span className="fw-bold"> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>

            </div>


          </div>

          <div className='d-flex justify-content-between align-items-end gap-2 p-0'>

            <b className='fw-bold' style={{ fontSize: "15px" }}>Rated  <img width="15px" src="../image/bookingstar.png" alt="" /> 4.0</b>
            <button className='btn text-white badge px-2 pt-1' style={{ background: "#2ea63a" }}>complated</button>


          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


        </div>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="80px" src="../image/booking5.png" alt="" />
              <span className="fw-bold"> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>

            </div>


          </div>

          <div className='d-flex justify-content-between align-items-end gap-2 p-0'>

            <b className='fw-bold' style={{ fontSize: "15px" }}>Rated  <img width="15px" src="../image/bookingstar.png" alt="" /> 4.0</b>
            <button className='btn text-white badge px-2 pt-1' style={{ background: "#2ea63a" }}>complated</button>


          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


        </div>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="80px" src="../image/booking5.png" alt="" />
              <span className="fw-bold"> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>

            </div>


          </div>

          <div className='d-flex justify-content-between align-items-end gap-2 p-0'>

            <b className='fw-bold' style={{ fontSize: "15px" }}>Rated  <img width="15px" src="../image/bookingstar.png" alt="" /> 4.0</b>
            <button className='btn text-white badge px-2 pt-1' style={{ background: "#2ea63a" }}>complated</button>


          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


        </div>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="80px" src="../image/booking5.png" alt="" />
              <span className="fw-bold"> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>

            </div>


          </div>

          <div className='d-flex justify-content-between align-items-end gap-2 p-0'>

            <b className='fw-bold' style={{ fontSize: "15px" }}>Rated  <img width="15px" src="../image/bookingstar.png" alt="" /> 4.0</b>
            <button className='btn text-white badge px-2 pt-1' style={{ background: "#2ea63a" }}>complated</button>


          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


        </div>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="80px" src="../image/booking5.png" alt="" />
              <span className="fw-bold"> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>

            </div>


          </div>

          <div className='d-flex justify-content-between align-items-end gap-2 p-0'>

            <b className='fw-bold' style={{ fontSize: "15px" }}>Rated  <img width="15px" src="../image/bookingstar.png" alt="" /> 4.0</b>
            <button className='btn text-white badge px-2 pt-1' style={{ background: "#2ea63a" }}>complated</button>


          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


        </div>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="80px" src="../image/booking5.png" alt="" />
              <span className="fw-bold"> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>

            </div>


          </div>

          <div className='d-flex justify-content-between align-items-end gap-2 p-0'>

            <b className='fw-bold' style={{ fontSize: "15px" }}>Rated  <img width="15px" src="../image/bookingstar.png" alt="" /> 4.0</b>
            <button className='btn text-white badge px-2 pt-1' style={{ background: "#2ea63a" }}>complated</button>


          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


        </div>

        <div className='DashboardChild position-relative'>

          <div className='d-flex gap-2'>

            <div>
              <img className="" width="55px" src="../image/profile.png" alt="" />
            </div>

            <div>

              <h5 className='my-0 fw-bold'>Robert Fox</h5>
              <img width="80px" src="../image/booking5.png" alt="" />
              <span className="fw-bold"> (233 Reviews)</span>

              <div className='d-flex gap-3 my-3'>

                <div>
                  <h6 className='text-secondary'>Date</h6>
                  <h6 className='fw-bold'>5 Jan 2023</h6>
                </div>

                <div>
                  <h6 className='text-secondary'>Time</h6>
                  <h6 className='fw-bold'>2:00 pm to 3:00 pm</h6>
                </div>

              </div>

            </div>


          </div>

          <div className='d-flex justify-content-between align-items-end gap-2 p-0'>

            <b className='fw-bold' style={{ fontSize: "15px" }}>Rated  <img width="15px" src="../image/bookingstar.png" alt="" /> 4.0</b>
            <button className='btn text-white badge px-2 pt-1' style={{ background: "#2ea63a" }}>complated</button>


          </div>

          <i className="ri-chat-3-line position-absolute top-0 end-0 fs-4 m-3" style={{ color: "#006ebd" }}></i>


        </div>
      </div>

      <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-dialog-width ms-0 ms-lg-auto">
          <div class="modal-content py-4 px-5" style={{borderRadius:"10px"}}>

            <div className='text-end '>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>

            <div className='text-center'>

              <h4 className='fw-bold mb-4'>Rate This Customer</h4>

              <img className="" width="100px" src="../image/profile.png" alt="" />

              <h5>Jocob Jones</h5>
              <div className=' d-flex justify-content-center py-3'>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Rating
                    style={{ fontSize: "50px" }}
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                </Box>
              </div>

              <button className='btn w-100 text-white' style={{ background: "#006ebd" }}>Submit</button>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}


export default Dashboard
