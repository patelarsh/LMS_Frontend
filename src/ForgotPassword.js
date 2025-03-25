import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [email, setemail] = useState("");
    const navi = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();

        if (email === "") {
            alert("enter the value..?");
        }

        else {
            axios.post("https://lawyer-management-system-api.onrender.com/user/forgot-password",
                {
                    email: email
                }
            )

            .then((res) => {

                alert(res.data.message)

                if(res.data.message=="Email Sent SuccessFully")
                {
                    navi("/Login")
                }
                
            })

                .catch((error) => {
                    console.error("data not found..?", error)
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

                        <h1 className="text-white display-4" style={{ fontWeight: "500" }}>Lorem ipsum dolor consectetur adipiscing.</h1>
                        <img className=" " src="./Image/1.png" alt='not found' />

                    </div>
                </div>

                <div className="col-12 col-lg-3 mb-5 mb-lg-0  row px-2 px-lg-4 mx-0">

                    <div className='mt-4 ms-2 ms-lg-0'>
                        <Link to={"/"} className="text-decoration-none text-dark fw-bold"><i class="ri-arrow-left-line"></i> Back</Link>
                    </div>

                    <div className="card-body py-5 px-md-5">
                        <h3 className="text-center my-4 fw-bold">Forgot Password</h3>
                        <p className="text-center fs-6" style={{ color: "#9facb5" }}>Please enter the email address you 'd like to your password reset information sent to.</p>
                        <form onSubmit={handlesubmit}>

                            {/* <!-- Email input --> */}
                            <div data-mdb-input-init
                                className="form-outline my-4">
                                <input type="email" id="form3Example3"
                                    className="form-control "
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => { setemail(e.target.value) }}
                                />
                                <i class="ri-mail-line fontleftsilde fs-4"></i>
                            </div>

                            {/* <!-- Submit button --> */}
                            <button type="submit" data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-lg btn-block mb-4 w-100 text-white" style={{ background: "#006ebd" }}>
                                Submit
                            </button>

                        </form>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default ForgotPassword;



