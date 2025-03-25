import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function LawyerLogin() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    // const [getdatanme, setgetdatanme] = useState("");
    const navi = useNavigate("");

    const handlesubmin = (e) => {

        e.preventDefault()

        const data = {
            email: email,
            password: password,
        }

        if (email === "" || password === "") {
            alert("Plese enter the value..?")
        }

        else {
            fetch("https://lawyer-management-system-api.onrender.com/lawyer/lawyer-login", {
                method: "post",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)
            })

                .then((res) => {
                    return res.json()
                })

                .then((data) => {


                    if (data) {
                        alert(data.message);
                    }

                    if (data.message === "Login SuccessFully") {
                        localStorage.setItem("Lawyertoken", JSON.stringify(data))
                        navi("/")

                    }

                })

                .catch((error) => {
                    console.error("Error fetching lawyers:", error);
                    
                })

        }
    }

    return (
        <div className='Registration'>
            <div className="d-flex flex-wrap gap-4">

                <div className="col-12 col-lg-7 login-img1">
                    <img className="img-fluid login-child" src="./Image/Login 1.png"
                        alt='not found' />

                    <div className="login-imgchild  d-flex flex-wrap flex-lg-nowrap gap-5">

                        <h1 className="text-white display-4" style={{ fontWeight: "500" }}>We earn your <span
                            className="text-info">trust</span> and are deligent
                            your case.</h1>
                        <img className=" " src="./Image/1.png" alt='not found' />

                    </div>
                </div>

                <div className="col-12 col-lg-3 mb-5 mb-lg-0   row px-2 px-lg-4 mx-0">

                    <div className='mt-4 ms-2 ms-lg-0'>
                        <Link to={"/"} className="text-decoration-none text-dark fw-bold"><i className="ri-arrow-left-line"></i> Back</Link>
                    </div>

                    <div className="card-body py-5 px-md-5">
                        <h3 className="text-center my-4 fw-bold">Lawyer Login</h3>
                        <form onSubmit={handlesubmin}>

                            {/* <!-- Email input --> */}
                            <div data-mdb-input-init
                                className="form-outline mb-4">

                                <input type="email" id="form3Example3"
                                    className="form-control "
                                    placeholder="Email"

                                    value={email}
                                    onChange={(e) => { setemail(e.target.value) }}
                                />
                                <i className="ri-mail-line fontleftsilde fs-4"></i>
                            </div>

                            {/* <!-- Password input --> */}
                            <div data-mdb-input-init
                                className="form-outline">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="form3Example4"
                                    className="form-control"
                                    placeholder="Password"

                                    value={password}
                                    onChange={(e) => { setpassword(e.target.value) }}
                                />
                                <i className="ri-lock-2-line fontleftsilde fs-4"></i>
                                <i
                                    className={showPassword ? "ri-eye-off-line fontrightsilde fs-4" : "ri-eye-line fontrightsilde fs-4"}
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ cursor: "pointer" }}
                                ></i>
                            </div>

                            {/* <!-- Checkbox --> */}
                            <div className='text-center my-3'>
                                <Link to={"/LawForgotPassword"} className='text-decoration-none fw-bold ' style={{ fontSize: "16px", color: "#0d75bf" }}>Forget Password?</Link>
                            </div>

                            {/* <!-- Submit button --> */}
                            <button type='submit'

                                className="btn btn-primary btn-lg btn-block mb-4 w-100" style={{ background: "#006ebd" }}>
                                Login
                            </button>

                            {/* <!-- Register buttons --> */}
                            <div className="text-center">
                                <p className="mt-4 fw-bold" style={{ fontSize: "15px" }}>OR Login With</p>

                                <div className="d-flex justify-content-center gap-2">

                                    <div className=' position-relative rounded-pill icon-Hover' style={{ background: " rgba(135, 206, 250, 0.204)", padding: "28px" }}>
                                        <i className="position-absolute top-50 start-50 translate-middle ri-facebook-fill fs-3" style={{ color: "#0d75bf" }}></i>
                                    </div>

                                    <div className=' position-relative rounded-pill icon-Hover' style={{ background: " rgba(135, 206, 250, 0.204)", padding: "28px" }}>
                                        <i className="position-absolute top-50 start-50 translate-middle ri-google-fill fs-3" style={{ color: "#0d75bf" }}></i>

                                    </div>

                                    <div className=' position-relative rounded-pill icon-Hover' style={{ background: " rgba(135, 206, 250, 0.204)", padding: "28px" }}>
                                        <i className="position-absolute top-50 start-50 translate-middle ri-apple-fill fs-3" style={{ color: "#0d75bf" }}></i>

                                    </div>

                                    <div className=' position-relative rounded-pill icon-Hover' style={{ background: " rgba(135, 206, 250, 0.204)", padding: "28px" }}>
                                        <i className="position-absolute top-50 start-50 translate-middle ri-twitter-fill fs-3" style={{ color: "#0d75bf" }}></i>

                                    </div>

                                    <div className=' position-relative rounded-pill icon-Hover' style={{ background: " rgba(135, 206, 250, 0.204)", padding: "28px" }}>
                                        <i className="position-absolute top-50 start-50 translate-middle ri-linkedin-fill fs-3" style={{ color: "#0d75bf" }}></i>

                                    </div>

                                </div>

                            </div>
                        </form>

                        <p style={{ fontSize: "13px" }} className="my-5 text-center fw-bolder fs-6">Don't have an account? for Lawyer
                            <Link to={"/BecomeServiceprovider"} className=' text-decoration-none'> Register .</Link></p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LawyerLogin;

