import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Registration() {

    const [name, setname] = useState("");

    const [number, setnumber] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const navi = useNavigate("");


    const handlenumber = (e) => {
        const value = e.target.value;
        if (value.length <= 10) {
            setnumber(value);
        }
    };

    const handlesubmin = (e) => {
        e.preventDefault();

        const data = { name: name, password: password, email: email }

        if (name === "" || number === "10" || email === "" || password === "" || confirmpassword === "") {
            alert("enter the value..?")
        }

        else if (password !== confirmpassword) {
            alert("No match password..?")
        }

        else {

            fetch("https://lawyer-management-system-api.onrender.com/user/user-signup", {
                method: "post",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)
            })

        .catch((error)=>{
            console.error("data no fount..?",error)
        })


        alert("Regitration SuccessFully..?");
        navi("/Login")

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

                <div className="col-12 col-lg-3 mb-5 mb-lg-0  row px-2 px-lg-4 mx-0">

                    <div className='mt-4 ms-2 ms-lg-0'>
                        <Link to={"/"} className="text-decoration-none text-dark fw-bold"><i class="ri-arrow-left-line"></i> Back</Link>
                    </div>

                    <div className="card-body py-5 px-md-5">
                        <h3 className="text-center my-4 fw-bold">Create An Account</h3>
                        <form onSubmit={handlesubmin}>

                            {/* <!-- name input --> */}
                            <div data-mdb-input-init
                                className="form-outline mb-4">

                                <input type="text" id="form3Example3"
                                    className="form-control "
                                    placeholder="Full Name"

                                    value={name}
                                    onChange={(e) => { setname(e.target.value) }} />

                                <i class="ri-user-line fontleftsilde fs-4"></i>
                            </div>

                            {/* <!-- number input --> */}
                            <div data-mdb-input-init
                                className="form-outline mb-4">
                                <input type="number" id="form3Example3"
                                    className="form-control "
                                    placeholder="Mobile Number"

                                    value={number}
                                    onChange={handlenumber}

                                />

                                <i class="ri-smartphone-line fontleftsilde fs-4"></i>
                            </div>

                            {/* <!-- Email input --> */}
                            <div data-mdb-input-init
                                className="form-outline mb-4">
                                <input type="email" id="form3Example3"
                                    className="form-control "
                                    placeholder="Email"

                                    value={email}
                                    onChange={(e) => { setemail(e.target.value) }}


                                />
                                <i class="ri-mail-line fontleftsilde fs-4"></i>
                            </div>

                            {/* <!-- Password input --> */}
                            <div data-mdb-input-init
                                className="form-outline mb-4">


                                <input type="password" id="form3Example4"
                                    className="form-control"
                                    placeholder="Password"

                                    value={password}
                                    onChange={(e) => { setpassword(e.target.value) }}

                                />


                                <i class="ri-lock-2-line fontleftsilde fs-4"></i>
                                <i class="ri-eye-line fontrightsilde fs-4"></i>
                            </div>

                            {/* <!--Confirm Password input --> */}
                            <div data-mdb-input-init
                                className="form-outline mb-5">
                                <input type="password" id="form3Example4"
                                    className="form-control"
                                    placeholder="Confirm Password"

                                    value={confirmpassword}
                                    onChange={(e) => { setconfirmpassword(e.target.value) }}

                                />
                                <i class="ri-lock-2-line fontleftsilde fs-4"></i>
                                <i class="ri-eye-close-line fontrightsilde fs-4"></i>
                            </div>

                            {/* <!-- Submit button --> */}
                            <button type='submit'

                                className="btn btn-lg btn-block mb-4 w-100 text-white" style={{ background: "#006ebd" }}>
                                Register
                            </button>

                        </form>

                        <p style={{ fontSize: "13px" }} className="my-5 text-center fw-bolder fs-6">Don't have an account?
                            <Link to={"/Login"} className=' text-decoration-none'> Login .</Link></p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Registration;
