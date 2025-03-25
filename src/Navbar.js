import { Search } from '@mui/icons-material';
import React, { useEffect, useRef } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import axios, { AxiosHeaders } from 'axios';


function Navbar() {

  const ref1 = useRef();
  const search = useRef();
  const navi = useNavigate("");

  const Lawyertoken = JSON.parse(localStorage.getItem("Lawyertoken"));
  const Usertoken = JSON.parse(localStorage.getItem("Usertoken"));

  const jobpost_Total = localStorage.getItem("jobpost");


  // (Usertoken) ? alert("Usertoken123") : (Lawyertoken) ?  alert("Lawyertoken123") :  alert("Login")



  // localStorage.clear("Usertoken")
  // localStorage.clear("Lawyertoken")


  useEffect(() => {

    search.current.style.display = "none"

    if (Lawyertoken) {
      return;
    }

    else {
      ref1.current.style.display = "none"
    }


  }, [])

  const handlenav = () => {

    if (ref1.current.style.display === "none") {
      ref1.current.style.display = "block"
    }

    else {
      ref1.current.style.display = "none"
    }

  }


  const handleSearch = () => {

    if (search.current.style.display == "none") {
      search.current.style.display = "inline"
    }

    else {
      search.current.style.display = "none"
    }
  }


  const handleLogoutUser = () => {

    localStorage.removeItem("Usertoken")
    alert("Logout Successfully..?")
    navi("/Login")

  }

  const handleLogoutLawyer = () => {

    localStorage.removeItem("Lawyertoken")
    alert("Logout Successfully..?")
    navi("/LawyerLogin")
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg text-white" style={{ background: "#09193c" }}>

        <div className="container-fluid row ">

          <div
            className=" col-lg-4 col-12 d-flex   justify-content-between">
            <a className="navbar-brand" href="#">
              <img className="img-fluid"
                style={{ width: "130px" }}
                src="../Image/1.png"
                alt />
            </a>

            <button className="navbar-toggler text-white" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              {/* <span className="navbar-toggler-icon"></span>  */}
              <i className="fa-solid fa-bars-staggered text-white"></i>
            </button>
          </div>

          <div className={(Lawyertoken) ? "collapse d-flex justify-content-end navbar-collapse col-4" : "collapse navbar-collapse col-4"} id="navbarSupportedContent">

            <ul className={(Lawyertoken) ? "navbar-nav mb-2  mb-lg-0 gap-3" : "navbar-nav mb-2 me-auto mb-lg-0 gap-3"}>

              {
                (Lawyertoken) ? <></> : <><li className="nav-item position-relative" style={{ zIndex: "3" }} >
                  <Link onClick={handlenav} className="nav-link text-white">Categories <i class="ri-arrow-down-s-line"></i></Link>

                  <div ref={ref1} className="position-absolute start-0 top-100 lEGALMAINwidth">

                    {/* 1 */}

                    <div className='row border p-2 lEGALMAIN '>

                      <div className='col-10 '><i className="fa-solid fa-car"></i> <span className=" px-3">Legal </span> </div>
                      <i class="ri-arrow-right-s-line col-2 text-end"></i>

                      <div className=" lEGALCHILD bg-white border">

                        {/*second child 1 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 2 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 3 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 4 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 5 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>


                      </div>

                    </div>

                    {/* 2 */}

                    <div className='row border p-2 lEGALMAIN '>

                      <div className='col-10 '><i className="fa-solid fa-car"></i> <span className=" px-3">Auto </span> </div>
                      <i class="ri-arrow-right-s-line col-2 text-end"></i>

                      <div className=" lEGALCHILD bg-white border">

                        {/*second child 1 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 2 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 3 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 4 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 5 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>


                      </div>

                    </div>

                    {/* 3 */}

                    <div className='row border p-2 lEGALMAIN '>

                      <div className='col-10 '><i className="fa-solid fa-car"></i> <span className=" px-3">Customer </span> </div>
                      <i class="ri-arrow-right-s-line col-2 text-end"></i>

                      <div className=" lEGALCHILD bg-white border">

                        {/*second child 1 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 2 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 3 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 4 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 5 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>


                      </div>

                    </div>

                    {/* 4 */}

                    <div className='row border p-2 lEGALMAIN '>

                      <div className='col-10 '><i className="fa-solid fa-car"></i> <span className=" px-3">Housing </span> </div>
                      <i class="ri-arrow-right-s-line col-2 text-end"></i>

                      <div className=" lEGALCHILD bg-white border">

                        {/*second child 1 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 2 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 3 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 4 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 5 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>


                      </div>

                    </div>

                    {/* 5 */}

                    <div className='row border p-2 lEGALMAIN '>

                      <div className='col-10 '><i className="fa-solid fa-car"></i> <span className=" px-3">Employment </span> </div>
                      <i class="ri-arrow-right-s-line col-2 text-end"></i>

                      <div className=" lEGALCHILD bg-white border">

                        {/*second child 1 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 2 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 3 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 4 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 5 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>


                      </div>

                    </div>

                    {/* 6 */}

                    <div className='row border p-2 lEGALMAIN '>

                      <div className='col-10 '><i className="fa-solid fa-car"></i> <span className=" px-3">Medical </span> </div>
                      <i class="ri-arrow-right-s-line col-2 text-end"></i>

                      <div className=" lEGALCHILD bg-white border">

                        {/*second child 1 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 2 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 3 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 4 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 5 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>


                      </div>

                    </div>

                    {/* 7 */}

                    <div className='row border p-2 lEGALMAIN '>

                      <div className='col-10 '><i className="fa-solid fa-car"></i> <span className=" px-3">Travel and Tourism </span> </div>
                      <i class="ri-arrow-right-s-line col-2 text-end"></i>

                      <div className=" lEGALCHILD bg-white border">

                        {/*second child 1 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 2 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 3 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 4 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 5 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>


                      </div>

                    </div>

                    {/* 8 */}

                    <div className='row border p-2 lEGALMAIN '>

                      <div className='col-10 '><i className="fa-solid fa-car"></i> <span className=" px-3">Environmental </span> </div>
                      <i class="ri-arrow-right-s-line col-2 text-end"></i>

                      <div className=" lEGALCHILD bg-white border">

                        {/*second child 1 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 2 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 3 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 4 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 5 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>


                      </div>

                    </div>

                    {/* 9 */}

                    <div className='row border p-2 lEGALMAIN '>

                      <div className='col-10 '><i className="fa-solid fa-car"></i> <span className=" px-3">Technology </span> </div>
                      <i class="ri-arrow-right-s-line col-2 text-end"></i>

                      <div className=" lEGALCHILD bg-white border">

                        {/*second child 1 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 2 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 3 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 4 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 5 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>


                      </div>

                    </div>

                    {/* 10 */}

                    <div className='row border p-2 lEGALMAIN '>

                      <div className='col-10 '><i className="fa-solid fa-car"></i> <span className=" px-3">Education </span> </div>
                      <i class="ri-arrow-right-s-line col-2 text-end"></i>

                      <div className=" lEGALCHILD bg-white border">

                        {/*second child 1 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 2 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 3 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 4 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 5 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>


                      </div>

                    </div>

                    {/* 11 */}

                    <div className='row border p-2 lEGALMAIN '>

                      <div className='col-10 '><i className="fa-solid fa-car"></i> <span className=" px-3">Financial </span> </div>
                      <i class="ri-arrow-right-s-line col-2 text-end"></i>

                      <div className=" lEGALCHILD bg-white border">

                        {/*second child 1 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 2 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 3 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 4 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 5 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>


                      </div>

                    </div>

                    {/* 12 */}

                    <div className='row border p-2 lEGALMAIN '>

                      <div className='col-10 '><i className="fa-solid fa-car"></i> <span className=" px-3">Physical Representation  </span> </div>
                      <i class="ri-arrow-right-s-line col-2 text-end"></i>

                      <div className=" lEGALCHILD bg-white border">

                        {/*second child 1 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 2 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 3 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 4 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>

                        {/*second child 5 */}

                        <div className='row border p-2 lEGALMAINnext'>

                          <div className='col-10 '> <span className="">Legal 2</span> </div>
                          <i class="ri-arrow-right-s-line col-2 text-end"></i>

                          <div className=' row  lEGALCHILDnext border p-0'>

                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>
                            <div className='col-12 border p-2'>Legal</div>

                          </div>

                        </div>


                      </div>

                    </div>


                  </div>

                  {/*  */}
                </li></>
              }

              <li className="nav-item">
                <Link to={"/"} className="nav-link" aria-current="page"
                >Home</Link>
              </li>

              {
                (Lawyertoken) ? <></> : <>

                  <li className="nav-item">
                    <Link to={"/NearMe"} className="nav-link text-white"  >Near Me</Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/Available" className="nav-link  text-white"
                    >Available Advoccates</Link>
                  </li>

                </>
              }
            </ul>

            <div className="d-flex flex-wrap align-items-center gap-5">

              <div className='col-12 col-lg-auto  d-lg-flex gap-5 justify-content-between align-items-center'>

                {
                  (Usertoken) ?

                    <><Link to={"/PostJob"} className='btn text-white px-4' style={{ background: "#2ea63a" }}>Post A Job</Link></>

                    :
                    <></>
                }

                {
                  (Lawyertoken) ?

                    <>
                      <Link to={"/Jobpost"} className='btn text-white px-4'>Job Posts <i className={"badge rounded-pill"} style={{ background: "#2ea63a" }}>{jobpost_Total}</i></Link>

                    </>
                    :

                    <></>
                }



                <div className='my-3 my-lg-auto d-flex align-items-center'>
                  <input ref={search} type="search" className='mx-2 form-control' placeholder="enter the search" />
                  <i onClick={handleSearch} className="fa-solid fa-magnifying-glass" type="button"></i>
                </div>

                <div className=' position-relative'>
                  <b style={{ fontSize: "13px" }} className='' type="button" data-bs-toggle="dropdown" aria-expanded="false">EN <i class="ri-arrow-down-s-line"></i></b>
                  <ul class="dropdown-menu dropdown-menu-end position-absolutebottom start-0 mt-2">
                    <li><button class="dropdown-item" type="button">Hindi</button></li>
                  </ul>
                </div>
              </div>

              {/* <Link className=' text-warning' to={"/"}> */}

              {Lawyertoken && (
                <Badge className="mx-2" badgeContent={4} color="primary">
                  <i className="ri-notification-2-line"></i>
                </Badge>
              )}

              <div class="btn-group d-flex gap-3 align-items-center">




                {
                  Usertoken ? (
                    <div>
                      <img style={{ width: "35px" }} src="../image/navprofile.png" alt="User Profile" />
                      <b
                        type="button"
                        style={{ fontSize: "14px" }}
                        className="mx-2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {Usertoken.user.name} <i className="ri-arrow-down-s-line"></i>
                      </b>
                      <ul className="dropdown-menu dropdown-menu-end py-0">
                        
                        <li>
                          <Link to="/EditProfile" className="dropdown-item fs-5 profile-hover-effect1">
                            <i className="ri-user-line me-2"></i> My Profile
                          </Link>
                        </li>
                        <li onClick={handleLogoutUser}>
                          <Link className="dropdown-item fs-5 profile-hover-effect1 border">
                            <i className="ri-logout-box-r-line me-2"></i> Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : Lawyertoken ? (
                    <div>
                      <img style={{ width: "35px" }} src="../image/navprofile.png" alt="Lawyer Profile" />
                      <b
                        type="button"
                        style={{ fontSize: "14px" }}
                        className="mx-2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {Lawyertoken.lawyer.fullName} <i className="ri-arrow-down-s-line"></i>
                      </b>
                      <ul className="dropdown-menu dropdown-menu-end py-0">
                        <li>
                          <Link to="/Dashboard" className="dropdown-item fs-5 profile-hover-effect1">
                            <i className="ri-dashboard-line me-2"></i> Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link to="/EditProfileLaw" className="dropdown-item fs-5 profile-hover-effect1">
                            <i className="ri-user-line me-2"></i> My Profile
                          </Link>
                        </li>
                        <li onClick={handleLogoutLawyer}>
                          <Link className="dropdown-item fs-5 profile-hover-effect1 border">
                            <i className="ri-logout-box-r-line me-2"></i> Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div>
                      <button className="btn btn-primary px-4" data-bs-toggle="dropdown" aria-expanded="false">
                        <Link className="text-white text-decoration-none">Login</Link>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <Link to="/Login" className="dropdown-item">
                            <i className="ri-user-line"></i> User Login
                          </Link>
                        </li>
                        <li>
                          <Link to="/LawyerLogin" className="dropdown-item">
                            <i className="ri-user-line"></i> Lawyer Login
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )
                }

                {/* Notification */}



              </div>



              {/* </Link> */}

            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
