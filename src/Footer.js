import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>

            <footer>
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-lg-8 row justify-content-center  gap-5 pt-5 pb-4 ">

                        <div className="col-12 col-lg-6 col-xl-4 ">
                            <img className="img-fluid" src="../Image/2.png" alt
                                width="120px" />

                            <div className="d-flex">
                                <p className="my-4 col-12 col-xl-9 footer-PTeg">Contrary to popular
                                    belief, Lorem Ipsum is not simply
                                    random text. it ha roots in a piece of classical
                                    Latin
                                    literature.</p>
                            </div>

                            <Link to={"/BecomeServiceprovider"} className="btn btn-lg px-4" style={{color: "white", background: "#006ebd" }}>Become a Service
                                Provider</Link>

                        </div>

                        <div className="row col-12 col-lg-4 col-xl-4 justify-content-lg-end  ">

                            <div className="col-5">

                                <h5 className="my-3 fw-bolder">Quick Links</h5>

                                <p>About Us</p>
                                <p>Become a Service Provider</p>
                                <p><Link to={"/FreeCalculator"} className=' text-decoration-none text-dark'>Fee Calculator</Link></p>
                                <p>New Features</p>

                            </div>

                            <div className="col-5 ">
                                <h5 className="my-3 fw-bolder">Sipport</h5>

                                <p>Contact Us</p>
                                <p>Support Lorem Ipsum</p>
                                <p>Lorem Ipsum</p>
                                <p>Careers</p>
                                <p><Link to={"/Complaint"} className=' text-decoration-none text-dark'>Complaint</Link></p>

                            </div>

                        </div>

                        <div className="col-12  col-xxl-3 ">

                            <h5 className="my-3 fw-bolder">Social</h5>

                            <div className="mt-5 d-flex gap-2">

                                <div className='icon-Hover position-relative rounded-pill' style={{ background: "rgba(128, 128, 128, 0.183)", padding: "23px" }}>
                                    <i className="ri-facebook-fill position-absolute top-50 start-50 translate-middle fs-4"></i>
                                </div>

                                <div className='icon-Hover position-relative rounded-pill' style={{ background: "rgba(128, 128, 128, 0.183)", padding: "23px" }}>
                                    <i className="ri-linkedin-fill position-absolute top-50 start-50 translate-middle fs-4"></i>
                                </div>

                                <div className='icon-Hover position-relative rounded-pill' style={{ background: "rgba(128, 128, 128, 0.183)", padding: "23px" }}>
                                    <i className="ri-twitter-fill position-absolute top-50 start-50 translate-middle fs-4"></i>
                                </div>

                                <div className='icon-Hover position-relative rounded-pill' style={{ background: "rgba(128, 128, 128, 0.183)", padding: "23px" }}>
                                    <i className="ri-instagram-fill position-absolute top-50 start-50 translate-middle fs-4"></i>
                                    
                                </div>
                                

                            </div>

                        </div>


                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <p className="col-12 col-lg-8 text-center border-top py-5">
                    <i class="ri-copyright-line"></i> Copyright 2023. All Rights Reserved.</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer;
