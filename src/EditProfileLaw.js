import { Switch } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Calendar } from 'primereact/calendar';
import axios from 'axios';


function EditProfileLaw() {

    const LawtokenId = JSON.parse(localStorage.getItem("Lawyertoken"));

    const [date, setDate] = useState(null);

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


    return (
        <div className=' border-bottom pb-5'>

            <section className='pb-3 d-flex flex-wrap container col-12 col-lg-8 mt-4'>

                <div className='col-12 col-lg-3 px-lg-3'>

                    <div className='border'>
                        <div className=' text-center my-4'>

                            <img src="../image/profile.png" className='img-fuild editprofileimg' width={"120px"} alt="" />
                            <h4 className='fw-bold my-2' style={{ fontSize: "18px" }}>{LawtokenId.lawyer.fullName}</h4>

                        </div>

                        <div style={{ fontSize: "20px" }} className='ps-lg-3'>

                            <Link to={"/EditProfileLaw/"} className='d-flex justify-content-between align-items-center  text-decoration-none'>

                                <i class="ri-edit-line d-none d-lg-block"></i>
                                <h6 className='col-12 col-lg-10 border-bottom py-3 text-dark text-center text-lg-start' >Edit Profile</h6>

                            </Link>

                            <Link to={"/EditProfileLaw/Payment"} className='d-flex justify-content-between align-items-center  text-decoration-none'>

                                <i class="ri-wallet-line d-none d-lg-block"></i>
                                <h6 className='col-12 col-lg-10 border-bottom py-3 text-dark text-center text-lg-start'>My Wallet</h6>

                            </Link>


                            <a data-bs-toggle="modal" href="#exampleModalToggleAvailability" role="button" className='d-flex justify-content-between align-items-center  text-decoration-none'>

                                <i class="ri-profile-line d-none d-lg-block"></i>
                                <h6 className='col-12 col-lg-10 border-bottom py-3 text-dark text-center text-lg-start'>Set Availability</h6>

                            </a>

                            <Link to={"/EditProfileLaw/Messages"} className='d-flex justify-content-between align-items-center  text-decoration-none'>

                                <i class="ri-chat-3-line d-none d-lg-block"></i>
                                <h6 className='col-12 col-lg-10 border-bottom py-3 text-dark text-center text-lg-start' >Messages</h6>

                            </Link>

                            <a data-bs-toggle="modal" href="#exampleModalToggleChangePaa" role="button" className='d-flex justify-content-between align-items-center  text-decoration-none'>

                                <i class="ri-lock-2-line d-none d-lg-block "></i>
                                <h6 className='col-12 col-lg-10 border-bottom py-3 text-dark text-center text-lg-start'>Change Password</h6>

                            </a>

                            <Link to={"/EditProfileLaw/Settings"} className='d-flex justify-content-between align-items-center  text-decoration-none'>

                                <i class="ri-settings-4-line d-none d-lg-block"></i>
                                <h6 className='col-12 col-lg-10 pt-3 pb-1 text-dark text-center text-lg-start'>Settings</h6>

                            </Link>
                        </div>
                    </div>

                    {/* modal Set Availability */}

                    <div class="modal fade" id="exampleModalToggleAvailability" aria-hidden="true" aria-labelledby="exampleModalToggleAvailability" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered  d-flex justify-content-center pt-5">
                            <div class="modal-content CheckAvailability">

                                <div className=' text-end m-3 '>
                                    <button style={{ fontSize: "13px" }} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class="modal-body px-lg-5 ">

                                    <h3 className='text-center mb-3'>Set Availability</h3>

                                    <div className="card flex justify-content-center">
                                        <Calendar id='p-datepicker' value={date} onChange={(e) => setDate(e.value)} inline showWeek />
                                    </div>

                                    <div className=' d-flex justify-content-between align-items-center my-4 border-top border-bottom'>
                                        <h6 className=' fw-bold'>Whole Month Unavailable</h6>

                                        <FormGroup>
                                            <FormControlLabel
                                                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                            />
                                        </FormGroup>

                                    </div>

                                    <div>
                                        <h6 className='fw-bold'>Select Time</h6>

                                        <div className='mb-4 mt-3'>
                                            <label for="" className=" form-label">Select Time</label>

                                            <div className='d-flex align-items-center gap-2'>
                                                <select className={"form-control"}>
                                                    <option value="" hidden>Time</option>
                                                    <option value="">8:00 AM</option>
                                                    <option value="">9:00 AM</option>
                                                    <option value="">10:00 AM</option>
                                                    <option value="">11:00 AM</option>

                                                </select>

                                                to

                                                <select className={"form-control"}>
                                                    <option value="" hidden>Time</option>
                                                    <option value="">8:00 AM</option>
                                                    <option value="">9:00 AM</option>
                                                    <option value="">10:00 AM</option>
                                                    <option value="">11:00 AM</option>


                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Submit button --> */}

                                    <div className=' d-flex justify-content-between'>

                                        <div className='col-6'>
                                            <button className="btn btn-block text-white col-11" style={{ background: "#006ebd" }}>Available</button>
                                        </div>

                                        <div className='col-6 text-end'>
                                            <button className="btn  col-11" style={{ border: "1px solid #006ebd", color: "#006ebd" }}>Unavailable</button>
                                        </div>
                                    </div>


                                </div>
                            </div>
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
                            {/* <Route path='Availability' element={<Availability />}></Route> */}
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

    const LawtokenId = JSON.parse(localStorage.getItem("Lawyertoken"));

    const [fullName, setfullName] = useState("")
    const navi = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();

        const config = {
            headers: {
                Authorization: `done ${LawtokenId.token}`,
            },
        };

        axios.patch(`https://lawyer-management-system-api.onrender.com/lawyer/edit-lawyer/${LawtokenId.lawyer._id}`,

            { fullName: fullName },
            config
        )

            .then((res) => {

                console.log(res)

                alert(res.data.message + " Re Login..?")

                if(res.data.message=="Lawyer Edit SuccessFully")
                {
                    localStorage.removeItem("Lawyertoken")

                    navi("/LawyerLogin")
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
                                <label  className='fw-bold mb-2' style={{ fontSize: "16px" }}>Full Name</label>
                                <input type="text" class="form-control form-control-lg" placeholder="Enter the name"

                                    value={fullName}
                                    onChange={(e) => { setfullName(e.target.value) }}

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

            <div class="d-flex justify-content-center">
                <div class="col-12 ">

                    <h3 class="fw-bold ps-lg-3">Professional Info</h3>

                    <div class=" py-4">

                        <form onSubmit={handleSubmit} style={{ fontSize: "16px" }}>

                            <div class="d-flex flex-wrap justify-content-between">

                                <div className='col-12 col-lg-6 p-lg-3'>
                                    <div class="form-group ">

                                        <div class="my-3 ">
                                            <label class="fw-bold py-2">Full Name</label>
                                            <input type="text" class="form-control"
                                                placeholder="Full Name" />
                                        </div>

                                        <div class="my-3">
                                            <label class="fw-bold py-2">Skills</label>
                                            <div class="form-control p-1 d-flex flex-wrap gap-2">
                                                <button class="border-0 px-2 py-1"
                                                    style={{ fontSize: "12px" }}>Lorem <i
                                                        class="fa-solid fa-xmark"></i></button>
                                                <button class="border-0 px-2 py-1"
                                                    style={{ fontSize: "12px" }}>Ipsum <i
                                                        class="fa-solid fa-xmark"></i></button>
                                                <button class="border-0 px-2 py-1"
                                                    style={{ fontSize: "12px" }}>McClintock <i
                                                        class="fa-solid fa-xmark"></i></button>
                                            </div>
                                        </div>

                                        <div class="my-3">
                                            <label class="fw-bold py-2">Example select</label>
                                            <select class="form-select">
                                                <option hidden>Select</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>

                                        <div class="my-3">
                                            <label class="fw-bold py-2">About You</label>

                                            <div class="form-control text-center p-5 position-relative"
                                                style={{ border: "dotted", borderColor: "lightgray", background: "#f5faff" }}>

                                                <i type="button"
                                                    id="dropid"
                                                    class="fa-solid fa-cloud-arrow-up fs-1 my-1">
                                                </i>
                                                {/* <!-- is input ko use karke karna he --> */}

                                                <input type="file" id="fileInput"
                                                    style={{ display: "none" }} />

                                                <p style={{ fontSize: "12px" }} class="my-1">Drag &
                                                    Drop to upload document</p>
                                                <i class="fa-solid fa-camera position-absolute bottom-0 end-0 me-2 mb-2"></i>
                                            </div>

                                        </div>

                                        <div class="mt-2 mb-4">

                                            <a href
                                                class="text-decoration-none fw-bold link-primary "
                                                style={{ fontSize: "14px" }}><i
                                                    class="fa-solid fa-circle-plus"></i> Add
                                                more Documents/Certificate</a>

                                        </div>

                                    </div>
                                </div>

                                <div className='col-12 col-lg-6 p-lg-3'>
                                    <div class="form-group">

                                        <div class="my-3">
                                            <label class="fw-bold py-2">About You</label>
                                            <textarea class="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows="7"></textarea>
                                        </div>

                                        <div class="my-3">
                                            <label class="fw-bold py-2">About You</label>
                                            <textarea class="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows="7"></textarea>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className='col-12 col-lg-6 p-lg-3'>
                                <Link to={"/SuccessfullyCreated"} class="btn reg2btn w-100">Register</Link>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>


    </>)
}

const Payment = () => {
    return (<>

        <div>

            <div>
                <h3 className=' fw-bold mb-3'>My Wallet</h3>

                <div className='p-4 d-flex gap-3 flex-wrap justify-content-between align-items-center' style={{ background: "#1e2d38", borderRadius: "5px" }}>

                    <div>
                        <h1 className='text-white fw-bold'>$2000</h1>
                        <h6 className='text-white text-center'>Total Balance</h6>
                    </div>

                    <div className='col-12 col-lg-5'>
                        <button className='btn text-white px-5 w-100' style={{ background: "#006ebd" }}>tranfer to Bank Account</button>
                    </div>

                </div>
            </div>

            <div className='d-flex flex-wrap  justify-content-between mt-4'>

                <h5 className='fw-bold'>My Bank Account</h5>

                <a href="" className=' text-decoration-none fw-bold' style={{ fontSize: "16px" }}>  <img className='mb-1 me-1' width={"18px"} src="../image/payment4.png" alt="" /> Add New Card</a>

            </div>

            <div className='d-flex gap-2 gap-lg-0 flex-wrap justify-content-center my-3 pb-4 border-bottom'>

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

            <div>
                <div className=' d-flex justify-content-between mt-4'>
                    <h5 className='fw-bold mb-4 text-center text-lg-start'>Messages</h5>
                    <i class="ri-search-line fs-4"></i>
                </div>

                <div style={{ height: "63vh", overflowY: "scroll" }} className='MessagesScroll'>

                    <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap align-items-center' >

                        <div className=' col-2 col-lg-1  text-center'>
                            <img src="../image/available2.png" alt="" width={60} />
                        </div>

                        <div className=' col-12 col-lg-10'>
                            <div className='d-flex justify-content-between '>

                                <div>
                                    <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                                </div>

                                <div className='text-secondary fw-bold d-flex gap-4'>
                                    <div>
                                        11 Jan 2023
                                    </div>

                                    <div style={{ color: "#006ebd" }}>
                                        $199
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap align-items-center' >

                        <div className=' col-2 col-lg-1  text-center'>
                            <img src="../image/available2.png" alt="" width={60} />
                        </div>

                        <div className=' col-12 col-lg-10'>
                            <div className='d-flex justify-content-between '>

                                <div>
                                    <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                                </div>

                                <div className='text-secondary fw-bold d-flex gap-4'>
                                    <div>
                                        11 Jan 2023
                                    </div>

                                    <div style={{ color: "#006ebd" }}>
                                        $199
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap align-items-center' >

                        <div className=' col-2 col-lg-1  text-center'>
                            <img src="../image/available2.png" alt="" width={60} />
                        </div>

                        <div className=' col-12 col-lg-10'>
                            <div className='d-flex justify-content-between '>

                                <div>
                                    <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                                </div>

                                <div className='text-secondary fw-bold d-flex gap-4'>
                                    <div>
                                        11 Jan 2023
                                    </div>

                                    <div style={{ color: "#006ebd" }}>
                                        $199
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap align-items-center' >

                        <div className=' col-2 col-lg-1  text-center'>
                            <img src="../image/available2.png" alt="" width={60} />
                        </div>

                        <div className=' col-12 col-lg-10'>
                            <div className='d-flex justify-content-between '>

                                <div>
                                    <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                                </div>

                                <div className='text-secondary fw-bold d-flex gap-4'>
                                    <div>
                                        11 Jan 2023
                                    </div>

                                    <div style={{ color: "#006ebd" }}>
                                        $199
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap align-items-center' >

                        <div className=' col-2 col-lg-1  text-center'>
                            <img src="../image/available2.png" alt="" width={60} />
                        </div>

                        <div className=' col-12 col-lg-10'>
                            <div className='d-flex justify-content-between '>

                                <div>
                                    <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                                </div>

                                <div className='text-secondary fw-bold d-flex gap-4'>
                                    <div>
                                        11 Jan 2023
                                    </div>

                                    <div style={{ color: "#006ebd" }}>
                                        $199
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap align-items-center' >

                        <div className=' col-2 col-lg-1  text-center'>
                            <img src="../image/available2.png" alt="" width={60} />
                        </div>

                        <div className=' col-12 col-lg-10'>
                            <div className='d-flex justify-content-between '>

                                <div>
                                    <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                                </div>

                                <div className='text-secondary fw-bold d-flex gap-4'>
                                    <div>
                                        11 Jan 2023
                                    </div>

                                    <div style={{ color: "#006ebd" }}>
                                        $199
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap align-items-center' >

                        <div className=' col-2 col-lg-1  text-center'>
                            <img src="../image/available2.png" alt="" width={60} />
                        </div>

                        <div className=' col-12 col-lg-10'>
                            <div className='d-flex justify-content-between '>

                                <div>
                                    <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                                </div>

                                <div className='text-secondary fw-bold d-flex gap-4'>
                                    <div>
                                        11 Jan 2023
                                    </div>

                                    <div style={{ color: "#006ebd" }}>
                                        $199
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap align-items-center' >

                        <div className=' col-2 col-lg-1  text-center'>
                            <img src="../image/available2.png" alt="" width={60} />
                        </div>

                        <div className=' col-12 col-lg-10'>
                            <div className='d-flex justify-content-between '>

                                <div>
                                    <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                                </div>

                                <div className='text-secondary fw-bold d-flex gap-4'>
                                    <div>
                                        11 Jan 2023
                                    </div>

                                    <div style={{ color: "#006ebd" }}>
                                        $199
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='border-bottom border-1  py-2 d-flex gap-2 flex-wrap align-items-center' >

                        <div className=' col-2 col-lg-1  text-center'>
                            <img src="../image/available2.png" alt="" width={60} />
                        </div>

                        <div className=' col-12 col-lg-10'>
                            <div className='d-flex justify-content-between '>

                                <div>
                                    <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                                </div>

                                <div className='text-secondary fw-bold d-flex gap-4'>
                                    <div>
                                        11 Jan 2023
                                    </div>

                                    <div style={{ color: "#006ebd" }}>
                                        $199
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>

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


export default EditProfileLaw

