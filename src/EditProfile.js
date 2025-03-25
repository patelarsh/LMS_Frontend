import { Switch } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Link, Route, Routes, useNavigate, useResolvedPath } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function EditProfile() {

const Usertoken = JSON.parse(localStorage.getItem("Usertoken"));

  

    return (
        <div className=' border-bottom pb-5'>

            <section className='pb-3 d-flex flex-wrap container col-12 col-lg-8 mt-4'>

                <div className='col-12 col-lg-3 px-lg-3'>

                    <div className='border'>
                        <div className=' text-center my-4'>

                            <img src="../image/profile.png" className='img-fuild editprofileimg' width={"120px"} alt="" />
                            <h4 className='fw-bold my-2' style={{ fontSize: "18px" }}>{Usertoken.user.name}</h4>

                        </div>

                        <div style={{ fontSize: "20px" }} className='ps-lg-3'>

                            <Link to={"/EditProfile/"} className='d-flex justify-content-between align-items-center  text-decoration-none'>

                                <i class="ri-edit-line d-none d-lg-block"></i>
                                <h6 className='col-12 col-lg-10 border-bottom py-3 text-dark text-center text-lg-start' >Edit Profile</h6>

                            </Link>

                            <Link to={"/EditProfile/Payment"} className='d-flex justify-content-between align-items-center  text-decoration-none'>

                                <i class="ri-bank-card-line d-none d-lg-block"></i>
                                <h6 className='col-12 col-lg-10 border-bottom py-3 text-dark text-center text-lg-start'>Payment Option</h6>

                            </Link>

                            <Link to={"/EditProfile/Booking"} className='d-flex justify-content-between align-items-center  text-decoration-none'>

                                <i class="ri-inbox-line d-none d-lg-block"></i>
                                <h6 className='col-12 col-lg-10 border-bottom py-3 text-dark text-center text-lg-start' >My Bookings</h6>

                            </Link>

                            <Link to={"/EditProfile/Post"} className='d-flex justify-content-between align-items-center  text-decoration-none'>

                                <i class="ri-profile-line d-none d-lg-block"></i>
                                <h6 className='col-12 col-lg-10 border-bottom py-3 text-dark text-center text-lg-start'>My posts</h6>

                            </Link>

                            <Link to={"/EditProfile/Messages"} className='d-flex justify-content-between align-items-center  text-decoration-none'>

                                <i class="ri-chat-3-line d-none d-lg-block"></i>
                                <h6 className='col-12 col-lg-10 border-bottom py-3 text-dark text-center text-lg-start' >Messages</h6>

                            </Link>

                            <a data-bs-toggle="modal" href="#exampleModalToggleChangePaa" role="button" className='d-flex justify-content-between align-items-center  text-decoration-none'>

                                <i class="ri-lock-2-line d-none d-lg-block "></i>
                                <h6 className='col-12 col-lg-10 border-bottom py-3 text-dark text-center text-lg-start'>Change Password</h6>

                            </a>

                            <Link to={"/EditProfile/Settings"} className='d-flex justify-content-between align-items-center  text-decoration-none'>

                                <i class="ri-settings-4-line d-none d-lg-block"></i>
                                <h6 className='col-12 col-lg-10 pt-3 pb-1 text-dark text-center text-lg-start'>Settings</h6>

                            </Link>
                        </div>
                    </div>

                    {/* modal change Pass */}

                    <div class="modal fade" id="exampleModalToggleChangePaa" aria-hidden="true" aria-labelledby="exampleModalToggleLabelChangePaa" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered  d-flex justify-content-center pt-5">
                            <div class="modal-content CheckAvailability">

                                <div className=' text-end m-3 '>
                                    <button style={{ fontSize: "13px" }} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class="modal-body px-5 ">

                                    <h3 className='text-center mb-3'>Change Password</h3>

                                    <div>
                                        {/* <!-- Password input --> */}
                                        <div data-mdb-input-init
                                            className="form-outline mb-4">
                                            <input type="password" id="form3Example4"
                                                className="form-control"
                                                placeholder="Password" />
                                            <i class="ri-lock-2-line fontleftsilde fs-4"></i>
                                            <i class="ri-eye-line fontrightsilde fs-4"></i>
                                        </div>

                                        {/* <!-- Password input --> */}
                                        <div data-mdb-input-init
                                            className="form-outline mb-4">
                                            <input type="password" id="form3Example4"
                                                className="form-control"
                                                placeholder="Password" />
                                            <i class="ri-lock-2-line fontleftsilde fs-4"></i>
                                            <i class="ri-eye-close-line fontrightsilde fs-4"></i>
                                        </div>

                                        {/* <!-- Password input --> */}
                                        <div data-mdb-input-init
                                            className="form-outline mb-4">
                                            <input type="password" id="form3Example4"
                                                className="form-control"
                                                placeholder="Password" />
                                            <i class="ri-lock-2-line fontleftsilde fs-4"></i>
                                            <i class="ri-eye-close-line fontrightsilde fs-4"></i>
                                        </div>

                                        {/* <!-- Submit button --> */}
                                        <button type="submit" data-mdb-button-init
                                            data-mdb-ripple-init
                                            data-bs-target="#exampleModalToggleChangePaa" data-bs-toggle="modal" data-bs-dismiss="modal"
                                            className="btn btn-lg btn-block mb-4 w-100 text-white" style={{ background: "#006ebd" }}>
                                            Register
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* output */}

                <div className='col-12 mt-4 mt-lg-0 col-lg-9 px-2 px-lg-4'>

                    <div>

                        <Routes>

                            <Route path='/' element={<Edit />}></Route>
                            <Route path='Payment' element={<Payment />}></Route>
                            <Route path='Booking*' element={<Booking />}></Route>
                            <Route path='Post' element={<Post />}></Route>
                            <Route path='Messages' element={<Messages />}></Route>
                            {/* <Route path='ChangePassword' element={<ChangePassword />}></Route> */}
                            <Route path='Settings' element={<Settings />}></Route>

                        </Routes>
                    </div>


                </div>

            </section>
        </div>
    )
}


const Edit = () => {


    const UsertokenId = JSON.parse(localStorage.getItem("Usertoken"));


    const [name, setname] = useState("")
    const navi = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();

        const config = {
            headers: {
                Authorization: `done ${UsertokenId.token}`,
            },
        };

        axios.patch(`https://lawyer-management-system-api.onrender.com/user/edit-user/${UsertokenId.user._id}`,

            { name: name },
            config
        )

            .then((res) => {

                console.log(res)

                alert(res.data.message + " Re Login..?")

                if (res.data.message == "User Edit SuccessFully") {
                    localStorage.removeItem("Usertoken")

                    navi("/Login")
                }

            })

            .catch((error) => {
                console.error("data Not Found..?", error)
            })
    }

    return (<>

        <div>

            <h4 className='fw-bold text-center text-lg-start'>Edit Profile</h4>

            <div className='row my-5'>

                <div className='col-12 col-lg-3 d-flex justify-content-center justify-content-lg-start'>

                    <div className='rounded-pill position-relative' style={{ background: "#e0f2ff", width: "140px", height: "140px" }}>

                        <i class="fa-solid fa-user  position-absolute top-50 start-50 translate-middle fs-1 text-secondary"></i>

                        <div className='bg-primary position-absolute bottom-0 end-0 rounded-pill me-1 mb-1'>
                            <i class="fa-solid fa-camera text-white" style={{ fontSize: "13px", padding: "13px" }}></i>
                        </div>


                    </div>

                </div>

                <div className='col-12 col-lg-7'>
                    <form onSubmit={handleSubmit}>
                        <div class="d-flex flex-wrap justify-content-between">

                            <div class="form-group col-12 col-md-6 p-2">
                                <label for="inputEmail4" className='fw-bold mb-2' style={{ fontSize: "16px" }}>Full Name</label>
                                <input type="text" class="form-control form-control-lg" id="inputEmail4" placeholder="Enter the name"

                                    value={name}
                                    onChange={(e) => { setname(e.target.value) }}

                                />
                            </div>
                            <div class="form-group  col-12 col-md-6  p-2">
                                <label for="inputPassword4" className='fw-bold mb-2' style={{ fontSize: "16px" }}>Mobile Number</label>
                                <input type="text" class="form-control form-control-lg" id="inputPassword4" placeholder="Enter the number" />
                            </div>
                        </div>

                        <div class="form-group col-12  p-2">
                            <label for="inputAddress" className='fw-bold mb-2' style={{ fontSize: "16px" }}>Email</label>
                            <input type="email" class="form-control form-control-lg" id="inputAddress" placeholder="Enter the email" />
                        </div>

                        <div className='col-6 p-2'>
                            <button type='submit' className='w-100 btn btn-lg text-white' style={{ background: "#006ebd" }}>Save</button>
                        </div>

                    </form>

                </div>

            </div>

        </div>

    </>)
}

const Payment = () => {
    return (<>

        <div>

            <div className='d-flex flex-wrap  justify-content-between'>

                <h2 className='fw-bold'>Payment Option</h2>

                <a href="" className=' text-decoration-none fw-bold' style={{ fontSize: "16px" }}>  <img className='mb-1 me-1' width={"18px"} src="../image/payment4.png" alt="" /> Add New Card</a>

            </div>

            <div className='d-flex gap-2 gap-lg-0 flex-wrap justify-content-center my-3'>

                <div className='col-12 col-lg-6 pe-lg-3'>
                    <div className='border d-flex justify-content-between align-items-center' style={{ padding: "16px" }}>

                        <div>
                            <img width={"60px"} className=' payment1' src="../image/payment1.png" alt="" />
                            <b className='ms-2' style={{ fontSize: "16px" }}>XXXX XXXX XXXX 3243</b>
                        </div>

                        <div>
                            <img className='mx-2 mb-1' width={"18px"} src="../image/payment3.png" alt="" />
                            <i class="ri-more-2-line fs-4"></i>
                        </div>

                    </div>
                </div>

                <div className='col-12 col-lg-6 ps-lg-3'>
                    <div className='border d-flex justify-content-between align-items-center' style={{ padding: "16px" }}>

                        <div>
                            <img width={"50px"} className=' payment1' src="../image/payment2.png" alt="" />
                            <b className='ms-2' style={{ fontSize: "16px" }}>XXXX XXXX XXXX 3243</b>
                        </div>

                        <div>
                            {/* <img className='mx-2 mb-1' width={16} src="../image/payment3.png" alt="" /> */}
                            <i class="ri-more-2-line fs-4"></i>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </>)
}

export const Booking = () => {

    return (<>

        <div>

            <h2 className='fw-bold text-center text-lg-start px-3'>My Bookings</h2>



            <Routes>
                <Route path='/' element={<Upcoming />}></Route>
                <Route path='Complate/:id' element={<Complate />}></Route>

            </Routes>

        </div>

    </>)
}


// Booking Child  start

const Upcoming = () => {
    const [timeSlots, setTimeSlots] = useState([]);

    const [timerS, setTimerS] = useState(30); // Start at 60 seconds
    const [timerM, setTimerM] = useState(5);  // Start at 5 minutes


    const navi = useNavigate();

    useEffect(() => {
        const fetchTimeSlots = async () => {
            try {
                const tokenData = JSON.parse(localStorage.getItem("Usertoken"));
                const token = tokenData ? tokenData.token : "";

                const response = await axios.get(
                    "https://lawyer-management-system-api.onrender.com/booking/get-booking",
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                setTimeSlots(response.data);
            } catch (error) {
                console.error("Failed to fetch time slots", error);
            }
        };

        fetchTimeSlots();



        // Run the countdown timer every second
        const timer = setInterval(() => {
            setTimerS((prevS) => {
                if (prevS === 0) {
                    if (timerM === 0) {
                        clearInterval(timer); // Stop the timer when it reaches 0
                        return 0;
                    }
                    // Reset seconds and decrement minutes
                    setTimerM((prevM) => prevM - 1);
                    return 59; // Reset seconds to 59
                }
                return prevS - 1;
            });
        }, 1000);

        return () => clearInterval(timer);


    }, [timerS, timerM]);

    if (timerS == 0 && timerM == 0) {
        alert("ok done...?")
    }


    const handlebook = (id) => {
        navi(`/EditProfile/Booking/Complate/${id}`)
    }


    return (<>

        <div className='d-flex justify-content-center justify-content-lg-start my-4 px-3'>
            <Link to={"/EditProfile/Booking/"} style={{ background: "#006ebd" }} className='btn col-6 text-white py-2'>Upcoming</Link>
            <Link to={"/EditProfile/Booking/Complate"} style={{ background: "#e6f2fa" }} className='btn col-6  py-2'>Completed</Link>
        </div>

        <div className='my-3 d-flex flex-wrap gap-2 gap-lg-0 '>

            {
                timeSlots.map((v) => (

                    <div className='col-12 col-xl-6 p-lg-3'>
                        <div className='border  position-relative  p-3'>

                            <div className='d-flex gap-3'>

                                <img width={75} height={75} src="/image/booking3.png" alt="" />

                                {/* <img  width={75} height={75} src={v.image ? v.lawyer.image : "not img"} alt="" /> */}


                                <div>

                                    <h5 className='fw-bold p-0  m-0'>{v.lawyer ? v.lawyer.fullName : "No Lawyer"}</h5>

                                    <div className=''>
                                        <img width={70} src="/image/booking5.png" alt="" />

                                        <b className='ms-2 fs-6'>(233 Reviews)</b>
                                    </div>

                                    <div className='mt-2 d-flex justify-content-between'>
                                        <h6 style={{ color: "#006ebd" }} className='fw-bold'>$ {v.lawyer ? v.lawyer.rate : "No rate"} / <span className=' text-secondary fs-6'> per hour</span></h6>
                                    </div>

                                </div>

                            </div>

                            <div className='d-flex gap-3 mt-2'>

                                <div>

                                    <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Date</h6>
                                    <h6 className='fw-bold' style={{ fontSize: "16px" }}>5 Jan 2023</h6>

                                </div>

                                <div>
                                    <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Time</h6>
                                    <h6 className='fw-bold' style={{ fontSize: "16px" }}>2:00 pm to 3:00 pm</h6>
                                </div>
                            </div>

                            <button onClick={() => { handlebook(v._id) }} className='btn w-100  py-2 fw-bolder' style={{ fontSize: "14px", background: "#e6f2fa", color: "#006ebd" }}>Metting Start in {String(timerM).padStart(2, "0")} : {String(timerS).padStart(2, "0")} Mins </button>

                            < i class="ri-chat-3-line top-0 end-0 position-absolute m-3 fs-4" style={{ color: "#006ebd" }}></i>
                            <button style={{ background: "#006ebd", top: "35%", right: "0", fontSize: "12px" }} className='position-absolute btn text-white p-0 px-lg-2 me-3'>Upcoming</button>
                        </div>


                    </div>
                ))
            }
            {/* 
            <div className='col-12 col-xl-6 p-lg-3'>
                <div className='border  position-relative  p-3'>

                    <div className='d-flex gap-3'>

                        <img width={75} height={75} src="/image/booking3.png" alt="" />

                        <div>

                            <h5 className='fw-bold p-0  m-0'>Jenny Wilson</h5>

                            <div className=''>
                                <img width={70} src="/image/booking5.png" alt="" />
                                <b className='ms-2 fs-6'>(233 Reviews)</b>
                            </div>

                            <div className='mt-2 d-flex justify-content-between'>
                                <h6 style={{ color: "#006ebd" }} className='fw-bold'>$ 200 / <span className=' text-secondary fs-6'> per hour</span></h6>
                            </div>

                        </div>

                    </div>

                    <div className='d-flex gap-3 mt-2'>

                        <div>

                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Date</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>5 Jan 2023</h6>

                        </div>

                        <div>
                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Time</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>2:00 pm to 3:00 pm</h6>
                        </div>
                    </div>

                    <button className='btn w-100  py-2 fw-bolder' style={{ fontSize: "14px", background: "#e6f2fa", color: "#006ebd" }}>Metting Start in 5:30 Mins</button>

                    < i class="ri-chat-3-line top-0 end-0 position-absolute m-3 fs-4" style={{ color: "#006ebd" }}></i>
                    <button style={{ background: "#006ebd", top: "35%", right: "0", fontSize: "12px" }} className='position-absolute btn text-white p-0 px-lg-2 me-3'>Upcoming</button>
                </div>


            </div>

            <div className='col-12 col-xl-6  p-lg-3'>
                <div className='border  position-relative  p-3'>

                    <div className='d-flex gap-3'>

                        <img width={75} height={75} src="/image/booking3.png" alt="" />

                        <div>

                            <h5 className='fw-bold p-0  m-0'>Jocob Jones</h5>

                            <div className=''>
                                <img width={70} src="/image/booking5.png" alt="" />
                                <b className='ms-2 fs-6'>(233 Reviews)</b>
                            </div>

                            <div className='mt-2 d-flex justify-content-between'>
                                <h6 style={{ color: "#006ebd" }} className='fw-bold'>$ 200 / <span className=' text-secondary fs-6'> per hour</span></h6>
                            </div>

                        </div>

                    </div>

                    <div className='d-flex gap-3 mt-2'>

                        <div>

                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Date</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>5 Jan 2023</h6>

                        </div>

                        <div>
                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Time</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>2:00 pm to 3:00 pm</h6>
                        </div>
                    </div>

                    <button className='btn w-100  py-2 fw-bolder' style={{ fontSize: "14px", background: "#006ebd", color: "#e6f2fa" }}>Start Call</button>

                    < i class="ri-chat-3-line top-0 end-0 position-absolute m-3 fs-4" style={{ color: "#006ebd" }}></i>
                    <button style={{ background: "#006ebd", top: "35%", right: "0", fontSize: "12px" }} className='position-absolute btn text-white p-0  px-lg-2 me-3'>Upcoming</button>
                </div>


            </div>

            <div className='col-12 col-xl-6 p-lg-3'>
                <div className='border  position-relative  p-3'>

                    <div className='d-flex gap-3'>

                        <img width={75} height={75} src="/image/booking3.png" alt="" />

                        <div>

                            <h5 className='fw-bold p-0  m-0'>Dianne Russell</h5>

                            <div className=''>
                                <img width={70} src="/image/booking5.png" alt="" />
                                <b className='ms-2 fs-6'>(233 Reviews)</b>
                            </div>

                            <div className='mt-2 d-flex justify-content-between'>
                                <h6 style={{ color: "#006ebd" }} className='fw-bold'>$ 200 / <span className=' text-secondary fs-6'> per hour</span></h6>
                            </div>

                        </div>

                    </div>

                    <div className='d-flex gap-3 mt-2'>

                        <div>

                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Date</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>5 Jan 2023</h6>

                        </div>

                        <div>
                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Time</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>2:00 pm to 3:00 pm</h6>
                        </div>
                    </div>

                    <button className='btn w-100  py-2 fw-bolder' style={{ fontSize: "14px", background: "#e6f2fa", color: "#006ebd" }}>Cancel Booking</button>

                    < i class="ri-chat-3-line top-0 end-0 position-absolute m-3 fs-4" style={{ color: "#006ebd" }}></i>
                    <button style={{ background: "#006ebd", top: "35%", right: "0", fontSize: "12px" }} className='position-absolute btn text-white p-0  px-lg-2 me-3'>Upcoming</button>
                </div>


            </div>

            <div className='col-12 col-xl-6 p-lg-3'>
                <div className='border  position-relative  p-3'>

                    <div className='d-flex gap-3'>

                        <img width={75} height={75} src="/image/booking3.png" alt="" />

                        <div>

                            <h5 className='fw-bold p-0  m-0'>Marvin McKinney</h5>

                            <div className=''>
                                <img width={70} src="/image/booking5.png" alt="" />
                                <b className='ms-2 fs-6'>(233 Reviews)</b>
                            </div>

                            <div className='mt-2 d-flex justify-content-between'>
                                <h6 style={{ color: "#006ebd" }} className='fw-bold'>$ 200 / <span className=' text-secondary fs-6'> per hour</span></h6>
                            </div>

                        </div>

                    </div>

                    <div className='d-flex gap-3 mt-2'>

                        <div>

                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Date</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>5 Jan 2023</h6>

                        </div>

                        <div>
                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Time</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>2:00 pm to 3:00 pm</h6>
                        </div>
                    </div>

                    <button className='btn w-100  py-2 fw-bolder' style={{ fontSize: "14px", background: "#e6f2fa", color: "#006ebd" }}>Cancel Booking</button>

                    < i class="ri-chat-3-line top-0 end-0 position-absolute m-3 fs-4" style={{ color: "#006ebd" }}></i>
                    <button style={{ background: "#006ebd", top: "35%", right: "0", fontSize: "12px" }} className='position-absolute btn text-white p-0  px-lg-2 me-3'>Upcoming</button>
                </div>


            </div> */}




        </div>

    </>)

}

const Complate = () => {
    const [timeSlots, setTimeSlots] = useState([]);

    const [lawyer, setlawyer] = React.useState("");
    const [ratting, setratting] = React.useState(2);
    const [review, setreview] = React.useState("");



    const fetchTimeSlots = async () => {
        try {
            const tokenData = JSON.parse(localStorage.getItem("Usertoken"));
            const token = tokenData ? tokenData.token : "";

            const response = await axios.get(
                "https://lawyer-management-system-api.onrender.com/booking/get-booking",
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setTimeSlots(response.data);
        } catch (error) {
            console.error("Failed to fetch time slots", error);
        }
    };

    fetchTimeSlots();


    const postRating = async () => {
        try {
            const token = JSON.parse(localStorage.getItem("Usertoken"));

            const data = { lawyer, ratting, review }
            await axios.post(
                "https://lawyer-management-system-api.onrender.com/user/post-ratting",
                data,
                { headers: { Authorization: `Bearer ${token.token}` } }
            );
            alert("Rating posted successfully!");
        } catch (error) {
            console.error("Failed to post rating", error);
            alert("Rating posted not successfully...?")
        }
    };

    console.log(lawyer)

    const postRatings = (id) => {
        setlawyer(id)
    }


    return (<>

        <div className='d-flex justify-content-center justify-content-lg-start my-4 px-3'>
            <Link to={"/EditProfile/Booking/"} style={{ background: "#e6f2fa" }} className='btn col-6  py-2'>Upcoming</Link>
            <Link to={"/EditProfile/Booking/Complate"} style={{ background: "#006ebd" }} className='btn col-6 text-white  py-2'>Completed</Link>
        </div>

        <div className='my-3 d-flex flex-wrap gap-2 gap-lg-0'>

            {
                timeSlots.map((v) => (

                    <div className='col-12 col-xl-6  p-lg-3'>
                        <div className='border  position-relative  p-3'>

                            <div className='d-flex gap-3'>

                                <img width={75} height={75} src="/image/booking3.png" alt="" />

                                <div>

                                    <h5 className='fw-bold p-0  m-0'>{v.lawyer ? v.lawyer.fullName : "no name"}</h5>

                                    <div className=''>
                                        <img width={70} src="/image/booking5.png" alt="" />
                                        <b className='ms-2 fs-6'>(233 Reviews)</b>
                                    </div>

                                    <div className='mt-2 d-flex justify-content-between'>
                                        <h6 style={{ color: "#006ebd" }} className='fw-bold'>$ 200 / <span className=' text-secondary fs-6'> per hour</span></h6>
                                    </div>

                                </div>

                            </div>

                            <div className='d-flex gap-3 mt-2'>

                                <div>

                                    <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Date</h6>
                                    <h6 className='fw-bold' style={{ fontSize: "16px" }}>5 Jan 2023</h6>

                                </div>

                                <div>
                                    <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Time</h6>
                                    <h6 className='fw-bold' style={{ fontSize: "16px" }}>2:00 pm to 3:00 pm</h6>
                                </div>
                            </div>

                            <button onClick={() => { postRatings(v.lawyer._id) }} className='btn btn-outline-primary w-100  py-2 fw-bolder' style={{ fontSize: "14px" }} data-bs-toggle="modal" href="#exampleModalToggle" role="button">Rate This Advocate</button>

                            < i class="ri-chat-3-line top-0 end-0 position-absolute m-3 fs-4" style={{ color: "#006ebd" }}></i>
                            <button style={{ background: "#2ea63a", top: "35%", right: "0", fontSize: "12px" }} className='position-absolute btn text-white p-0  px-lg-2 me-3'>Compalte</button>
                        </div>

                    </div>
                ))
            }


            {/* <div className='col-12 col-xl-6  p-lg-3'>
                <div className='border  position-relative  p-3'>

                    <div className='d-flex gap-3'>

                        <img width={75} height={75} src="/image/booking3.png" alt="" />

                        <div>

                            <h5 className='fw-bold p-0  m-0'>Jenny Wilson ravi</h5>

                            <div className=''>
                                <img width={70} src="/image/booking5.png" alt="" />
                                <b className='ms-2 fs-6'>(233 Reviews)</b>
                            </div>

                            <div className='mt-2 d-flex justify-content-between'>
                                <h6 style={{ color: "#006ebd" }} className='fw-bold'>$ 200 / <span className=' text-secondary fs-6'> per hour</span></h6>
                            </div>

                        </div>

                    </div>

                    <div className='d-flex gap-3 mt-2'>

                        <div>

                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Date</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>5 Jan 2023</h6>

                        </div>

                        <div>
                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Time</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>2:00 pm to 3:00 pm</h6>
                        </div>
                    </div>

                    <button className='btn btn-outline-primary w-100  py-2 fw-bolder' style={{ fontSize: "14px" }} data-bs-toggle="modal" href="#exampleModalToggle" role="button">Rate This Advocate</button>

                    < i class="ri-chat-3-line top-0 end-0 position-absolute m-3 fs-4" style={{ color: "#006ebd" }}></i>
                    <button style={{ background: "#2ea63a", top: "35%", right: "0", fontSize: "12px" }} className='position-absolute btn text-white p-0  px-lg-2 me-3'>Compalte</button>
                </div>


            </div>

            <div className='col-12 col-xl-6  p-lg-3'>
                <div className='border  position-relative  p-3'>

                    <div className='d-flex gap-3'>

                        <img width={75} height={75} src="/image/booking3.png" alt="" />

                        <div>

                            <h5 className='fw-bold p-0  m-0'>Jocob Jones</h5>

                            <div className=''>
                                <img width={70} src="/image/booking5.png" alt="" />
                                <b className='ms-2 fs-6'>(233 Reviews)</b>
                            </div>

                            <div className='mt-2 d-flex justify-content-between'>
                                <h6 style={{ color: "#006ebd" }} className='fw-bold'>$ 200 / <span className=' text-secondary fs-6'> per hour</span></h6>
                            </div>

                        </div>

                    </div>

                    <div className='d-flex gap-3 mt-2'>

                        <div>

                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Date</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>5 Jan 2023</h6>

                        </div>

                        <div>
                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Time</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>2:00 pm to 3:00 pm</h6>
                        </div>
                    </div>

                    <button className='btn w-100  py-2 fw-bolder' style={{ fontSize: "14px", background: "#f2f2f2" }}>Rated   <img className="mb-1" width="15px" src="/image/bookingstar.png" alt="" /> 4.0</button>

                    < i class="ri-chat-3-line top-0 end-0 position-absolute m-3 fs-4" style={{ color: "#006ebd" }}></i>
                    <button style={{ background: "#2ea63a", top: "35%", right: "0", fontSize: "12px" }} className='position-absolute btn text-white p-0  px-lg-2 me-3'>Complate</button>
                </div>


            </div>

            <div className='col-12 col-xl-6  p-lg-3'>
                <div className='border  position-relative  p-3'>

                    <div className='d-flex gap-3'>

                        <img width={75} height={75} src="/image/booking3.png" alt="" />

                        <div>

                            <h5 className='fw-bold p-0  m-0'>Dianne Russell</h5>

                            <div className=''>
                                <img width={70} src="/image/booking5.png" alt="" />
                                <b className='ms-2 fs-6'>(233 Reviews)</b>
                            </div>

                            <div className='mt-2 d-flex justify-content-between'>
                                <h6 style={{ color: "#006ebd" }} className='fw-bold'>$ 200 / <span className=' text-secondary fs-6'> per hour</span></h6>
                            </div>

                        </div>

                    </div>

                    <div className='d-flex gap-3 mt-2'>

                        <div>

                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Date</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>5 Jan 2023</h6>

                        </div>

                        <div>
                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Time</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>2:00 pm to 3:00 pm</h6>
                        </div>
                    </div>

                    <button className='btn w-100  py-2 fw-bolder' style={{ fontSize: "14px", background: "#f2f2f2" }}>Rated   <img className="mb-1" width="15px" src="/image/bookingstar.png" alt="" /> 4.0</button>

                    < i class="ri-chat-3-line top-0 end-0 position-absolute m-3 fs-4" style={{ color: "#006ebd" }}></i>
                    <button style={{ background: "#2ea63a", top: "35%", right: "0", fontSize: "12px" }} className='position-absolute btn text-white p-0  px-lg-2 me-3'>Complate</button>
                </div>


            </div>

            <div className='col-12 col-xl-6  p-lg-3'>
                <div className='border  position-relative  p-3'>

                    <div className='d-flex gap-3'>

                        <img width={75} height={75} src="/image/booking3.png" alt="" />

                        <div>

                            <h5 className='fw-bold p-0  m-0'>Marvin McKinney</h5>

                            <div className=''>
                                <img width={70} src="/image/booking5.png" alt="" />
                                <b className='ms-2 fs-6'>(233 Reviews)</b>
                            </div>

                            <div className='mt-2 d-flex justify-content-between'>
                                <h6 style={{ color: "#006ebd" }} className='fw-bold'>$ 200 / <span className=' text-secondary fs-6'> per hour</span></h6>
                            </div>

                        </div>

                    </div>

                    <div className='d-flex gap-3 mt-2'>

                        <div>

                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Date</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>5 Jan 2023</h6>

                        </div>

                        <div>
                            <h6 className=' text-secondary' style={{ fontSize: "14px" }}>Time</h6>
                            <h6 className='fw-bold' style={{ fontSize: "16px" }}>2:00 pm to 3:00 pm</h6>
                        </div>
                    </div>

                    <button className='btn w-100  py-2 fw-bolder' style={{ fontSize: "14px", background: "#f2f2f2", }}>Rated   <img className="mb-1" width="15px" src="/image/bookingstar.png" alt="" /> 4.0</button>

                    < i class="ri-chat-3-line top-0 end-0 position-absolute m-3 fs-4" style={{ color: "#006ebd" }}></i>
                    <button style={{ background: "#2ea63a", top: "35%", right: "0", fontSize: "12px" }} className='position-absolute btn text-white p-0  px-lg-2 me-3'>Complate</button>
                </div>


            </div> */}

            {/* modal 1*/}

            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered  d-flex justify-content-center pt-5">
                    <div class="modal-content CheckAvailability">

                        <div className=' text-end m-3 '>
                            <button style={{ fontSize: "13px" }} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body px-5 ">

                            <h4 className='text-center fw-bold mb-4'>Rate This Advocate</h4>

                            <div className='text-center'>
                                <img className="" width={80} height={80} src="/image/booking3.png" alt="" />
                                <h5 className='my-2'>Jocob Jones</h5>
                            </div>


                            <div className=' d-flex justify-content-center gap-3'>

                                <Box sx={{ '& > legend': { mt: 2 } }}>
                                    <Rating className='fs-1 gap-2'
                                        name="size-large"
                                        size="large"
                                        value={ratting}
                                        onChange={(event, newValue) => {
                                            setratting(newValue);
                                        }}
                                    />

                                </Box>

                            </div>

                            <div>

                                {/* <!-- Message input --> */}
                                <div data-mdb-input-init className="form-outline">
                                    <label className="form-label" htmlFor="form6Example7">Write a Review</label>
                                    <textarea
                                        value={review}

                                        onChange={(e) => { setreview(e.target.value) }}
                                        className="form-control" id="form6Example7" rows="6" placeholder="Write here"></textarea>

                                </div>

                                <button style={{ background: "#006ebd" }} class="btn text-white w-100 fs-5 mt-3" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={postRating}>Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* modal 2*/}

            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered  d-flex justify-content-center pt-5">
                    <div class="modal-content CheckAvailability">

                        <div className=' text-end m-3 '>
                            <button style={{ fontSize: "13px" }} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body px-5 ">

                            <h4 className='text-center fw-bold mb-4'>Rate This Call</h4>

                            <div className='text-center'>
                                <img className="border" width={80} height={80} src="/image/booking3.png" alt="" />
                                <h5 className='my-2'>Jocob Jones</h5>
                            </div>

                            <div className='my-4'>
                                <h6 className='mb-0'>Do You Happy With This Call?</h6>
                                <div className=' d-flex justify-content-center gap-3'>
                                    <button style={{ background: "#006ebd" }} class="btn text-white w-100 fs-5 mt-3" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">No</button>
                                    <button style={{ background: "#e0f2ff", color: "#006ebd" }} class="btn w-100 fs-5 mt-3" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Yes</button>
                                </div>

                            </div>

                            <div>

                                {/* <!-- Message input --> */}
                                <div data-mdb-input-init className="form-outline">
                                    <label className="form-label" htmlFor="form6Example7">Reason</label>
                                    <textarea className="form-control" id="form6Example7" rows="6" placeholder="Write here"></textarea>

                                </div>

                                <button style={{ background: "#006ebd" }} class="btn text-white w-100 fs-5 mt-3" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>

    </>)

}


// Booking Child  End


const Post = () => {
    const Usertoken = JSON.parse(localStorage.getItem("Usertoken"));
    const [jobs, setJobs] = useState([]);


    const [expirence, setexpirence] = useState("");


    const fetchJobs = async () => {
        try {
            const response = await fetch(
                "https://lawyer-management-system-api.onrender.com/user/get-job",
                {
                    method: "GET",
                }
            )
                .then((res) => {

                    return res.json()
                })

                .then((data) => {

                    const ArrData = data.filter((v) => {
                        return v.user._id == Usertoken.user._id
                    })
                    setJobs(ArrData)
                })

        }

        catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };

    fetchJobs();

    const handledleletepost = async (id) => {

        try {

            const response = await axios.delete(`https://lawyer-management-system-api.onrender.com/user/delete-job/${id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${Usertoken.token}`, // Use Bearer Token
                    },
                }
            )

            alert("data deleted successfully..? ")
            console.log(response)


        }

        catch (error) {
            console.error("Error Delete jobs:", error);
            alert("data no deleted..?")
        }
    }


    const handleEditpost = async (id) => {


        try {

            const response = await axios.patch(`https://lawyer-management-system-api.onrender.com/user/update-job/${id}`,
                { expirence: expirence },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${Usertoken.token}`, // Use Bearer Token
                    },
                }
            )

            alert("data Edit successfully..? ")
            console.log(response)


        }

        catch (error) {
            console.error("Error Edit jobs:", error);
            // alert("data no Edit..?")
        }
    }


    return (<>

        <div>
            <h3 className='fw-bold ms-lg-3'>My Posts</h3>

            <div className='d-flex flex-wrap my-3'>

                {
                    jobs.map((v) => (
                        <div className='col-12 col-lg-6 p-lg-3'>
                            <div className=' border p-4'>

                                <h6>I need someone to view my legal work like Misleading advertising and Contract disputes.</h6>

                                <div className='d-flex justify-content-between'>

                                    <p style={{ fontSize: "12px", color: "grey" }}>Hourly $40-50</p>
                                    <p style={{ fontSize: "12px", color: "grey" }}>posted 4 hour ago</p>

                                </div>

                                <div className='row row-cols-2'>

                                    <div>

                                        <h6>Less than 30 hrs/week</h6>
                                        <p style={{ fontSize: "12px", color: "grey" }}>Hours needed</p>

                                    </div>

                                    <div>

                                        <h6>Duration</h6>
                                        <p style={{ fontSize: "12px", color: "grey" }}>2 Weeks</p>

                                    </div>

                                    <div>

                                        <h6>Experience In</h6>
                                        <p style={{ fontSize: "12px", color: "grey" }}>{v.expirence}</p>

                                    </div>

                                    <div>

                                        <h6>Location</h6>
                                        <p style={{ fontSize: "12px", color: "grey" }}>Dallas, TX</p>

                                    </div>

                                </div>

                                <div className="text-secondary">
                                    We need someone with larger-scale legal experience.

                                    {/* Dynamic collapse ID */}
                                    <span className="collapse" id={`collapseExample-${v._id}`}>
                                        {v.aboutYou}
                                    </span>

                                    {/* Toggle Collapse */}
                                    <a
                                        style={{ color: "#006ebd" }}
                                        className="text-decoration-none fw-bold"
                                        data-bs-toggle="collapse"
                                        href={`#collapseExample-${v._id}`}
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls={`collapseExample-${v._id}`}
                                    >
                                        ...More
                                    </a>
                                </div>


                                <div className='d-flex align-items-center gap-2 my-3'>
                                    <img width={20} height={20} src="../image/payment3.png" alt="" />
                                    <h6>  payment Verified</h6>
                                </div>

                                <div className="d-flex gap-2">

                                    <div data-bs-toggle="modal" data-bs-target={`#exampleModal-${v._id}`} className=' position-relative rounded-pill' style={{ background: "#f5f7fa", padding: "23px" }}>
                                        <i className="ri-edit-line position-absolute top-50 start-50 translate-middle fs-4"></i>
                                    </div>

                                    {/* modal */}

                                    <div class="modal fade" id={`exampleModal-${v._id}`} tabindex="-1" aria-labelledby={`exampleModalLabel-${v._id}`} aria-hidden="true">

                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id={`exampleModalLabel-${v._id}`}>Modal title</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">

                                                    <div className="col-12">
                                                        <div data-mdb-input-init className="form-outline">
                                                            <label className="form-label" htmlFor="form6Example2">Experience In</label>
                                                            <select className="form-select" aria-label="Default select example" value={expirence}
                                                                onChange={(e) => { setexpirence(e.target.value) }}>
                                                                <option selected hidden>Select</option>
                                                                <option value="auto">auto</option>
                                                                <option value="legal">legal</option>
                                                                <option value="criminal">criminal</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button onClick={() => { handleEditpost(v._id) }} type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div onClick={() => { handledleletepost(v._id) }} className=' position-relative rounded-pill' style={{ background: "#f5f7fa", padding: "23px" }}>
                                        <i className="ri-delete-bin-6-line position-absolute top-50 start-50 translate-middle fs-4"></i>
                                    </div>

                                </div>

                            </div>
                        </div>

                    ))
                }

            </div>
        </div>



        {/* <!-- Modal --> */}


    </>)
}


const Messages = () => {
    return (<>

        <div>
            <h2 className='fw-bold mb-4 text-center text-lg-start'>Messages</h2>

            <div style={{ height: "63vh", overflowY: "scroll" }} className='MessagesScroll'>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>

                <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap' >

                    <div className=' col-2 col-lg-1  text-center'>
                        <img src="../image/available2.png" alt="" width={60} />
                    </div>

                    <div className=' col-12 col-lg-10'>
                        <div className='d-flex justify-content-between '>

                            <div>
                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                            </div>

                            <div className='text-secondary'>
                                11:23 pm

                            </div>
                        </div>

                        <p style={{ fontSize: "14px" }} className=" text-secondary">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                </div>



            </div>
        </div>

    </>)
}



// const ChangePassword = () => {
//     return (<>

//         <div>



//         </div>

//     </>)
// }


const Settings = () => {
    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: '#006ebd',
                    opacity: 1,
                    border: 0,
                    ...theme.applyStyles('dark', {
                        backgroundColor: '#2ECA45',
                    }),
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color: theme.palette.grey[100],
                ...theme.applyStyles('dark', {
                    color: theme.palette.grey[600],
                }),
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.7,
                ...theme.applyStyles('dark', {
                    opacity: 0.3,
                }),
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: '#E9E9EA',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
            ...theme.applyStyles('dark', {
                backgroundColor: '#39393D',
            }),
        },
    }));
    return (<>

        <div>

            <h3 className='fw-bold'>Settings</h3>

            <div className='d-flex flex-wrap gap-5 my-4'>

                <div className='col-12 col-lg-5 border-bottom d-flex justify-content-between align-items-center pb-2'>

                    <b className='fs-6'>Email Notification</b>
                    <FormGroup>
                        <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                        />
                    </FormGroup>

                </div>

                <div className='col-12 col-lg-5 border-bottom d-flex justify-content-between align-items-center pb-2'>

                    <b className='fs-6'>SMS Notification</b>
                    <FormGroup>
                        <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                        />
                    </FormGroup>

                </div>

            </div>
        </div>

    </>)
}


export default EditProfile;
