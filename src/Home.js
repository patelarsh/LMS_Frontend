import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Home() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [

        {
            id: 1,
            url: "./image/sliderimag1.png",
            name: "Arlene McCoy",
            price: 200
        },

        {
            id: 2,
            url: "./image/sliderimag2.png",
            name: "Jenny Willson",
            price: 200
        },

        {
            id: 3,
            url: "./image/sliderimag3.png",
            name: "Eleanor Pena ",
            price: 200
        },

        {
            id: 4,
            url: "./image/sliderimag4.png",
            name: "Dalene Robertson",
            price: 200
        }
        ,

        {
            id: 4,
            url: "./image/sliderimag5.png",
            name: "Arlene McCoy",
            price: 200
        }
        ,

        {
            id: 4,
            url: "./image/sliderimag6.png",
            name: "Arlene McCoy",
            price: 200
        }
        ,

        {
            id: 4,
            url: "./image/sliderimag7.png",
            name: "Arlene McCoy",
            price: 200
        }
        ,

        {
            id: 4,
            url: "./image/sliderimag8.png",
            name: "Arlene McCoy",
            price: 200
        }
        ,

        {
            id: 4,
            url: "./image/sliderimag9.png",
            name: "Arlene McCoy",
            price: 200
        }
        ,

        {
            id: 4,
            url: "./image/sliderimag10.png",
            name: "Arlene McCoy",
            price: 200
        }
        ,

        {
            id: 4,
            url: "./image/sliderimag11.png",
            name: "Arlene McCoy",
            price: 200
        }
        ,

        {
            id: 12,
            url: "./image/sliderimag12.png",
            name: "Ravi",
            price: 200
        }


    ]

    const visibleCards = 4;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + visibleCards >= cards.length ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - visibleCards : prevIndex - 1
        );
    }


    return (
        <div>
 
            <div className="Nav-Home">

                <Navbar></Navbar>

                <div className="d-flex justify-content-center">

                    <div className="col-10 col-lg-8 pb-4">
                        <section
                            className="row justify-content-center align-items-center gap-5 py-5">

                            <div className="col-12 col-lg-5 col-xl-5 text-white">

                                <h1 className="" >Unbelievable
                                    Solutions For All Legal Cases</h1>
                                <img className="img-fluid mb-5" src="./Image/home1.png" alt='' />

                                <p className="py-1 mb-5">Lorem Ipsum is simply dummy text of
                                    the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s.</p>

                                <button className="btn btn-lg px-4" style={{ color: "white", background: "#006ebd" }}>Hire an
                                    Advocate</button>

                            </div>

                            <div className="col-12 col-lg-6 col-xl-5 ">

                                <img className="img-fluid"
                                    src="../Image/home2.png" />

                            </div>

                        </section>
                    </div>

                </div>
            </div>

            {/* <!-- section 2 start --> */}

            <section className="section2 d-flex justify-content-center ">

                <div className="col-10 col-lg-7 my-5">

                    <div className="row gap-5 py-4">
                        <h1 className="col-12 col-lg-6">We earn your trust and are
                            deligent your case.</h1>

                        <p className="col-12 col-lg-5">Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since
                            the 1500s.</p>
                    </div>

                    <div className="sec2 my-5">

                        <div className="">
                            <Link to={"/LegalAdvice"} className=' text-decoration-none text-dark'>
                                <img className='w-50' src="../image/section2img1.png" alt="" />
                                <h6>Legal</h6>
                            </Link>
                        </div>

                        <div className="">
                            <img className='w-50' src="../image/section2img2.png" alt="" />
                            <h6>Auto</h6>
                        </div>

                        <div className="">
                            <img className='w-50' src="../image/section2img3.png" alt="" />
                            <h6>Customer</h6>
                        </div>

                        <div className="">
                            <img className='w-50' src="../image/section2img4.png" alt="" />
                            <h6>Housing</h6>
                        </div>

                        <div className="text-center">
                            <img className='w-50' src="../image/section2img5.png" alt="" />
                            <h6>Employment</h6>
                        </div>

                        <div className="text-center">
                            <img className='w-50' src="../image/section2img6.png" alt="" />
                            <h6>Medical</h6>
                        </div>

                        <div className="text-center col-2">
                            <img className='w-50' src="../image/section2img7.png" alt="" />
                            <h6>Travel <br /> and Tourism</h6>
                        </div>

                        <div className="text-center col-2">
                            <img className='w-50' src="../image/section2img8.png" alt="" />
                            <h6>Environmental</h6>
                        </div>

                        <div className="text-center col-2">
                            <img className='w-50' src="../image/section2img1.png" alt="" />
                            <h6>Technology</h6>
                        </div>

                        <div className="text-center col-2">
                            <img className='w-50' src="../image/section2img1.png" alt="" />
                            <h6>Education</h6>
                        </div>

                        <div className="text-center col-2">
                            <img className='w-50' src="../image/section2img1.png" alt="" />
                            <h6>Financial</h6>
                        </div>

                        <div className="text-center col-2 border">
                            <img className='w-50' src="../image/section2img12.png" alt="" />
                            <h6 className=''>Physical <br /> Representation</h6>
                        </div>

                    </div>

                </div>

            </section>

            {/* section 3 */}

            <section className='my-5 section3'>
                <div className='d-flex justify-content-center'>
                    <div className="col-12 col-lg-8 carousel-container p-5">

                        <button onClick={prevSlide} className="carousel-button1">❮</button>
                        <div className="carousel-wrapper" style={{ overflow: "hidden" }}>
                            <h1 className='text-center display-4 mb-4' style={{ fontWeight: "500" }}>Available Advocates</h1>
                            <div
                                className="carousel-track"
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                                }}
                            >
                                {cards.map((v) => (
                                    <div key={v.id} className='p-3'>
                                        <div className='border p-3 text-center position-relative'>
                                            <img className='m-auto' src={v.url} alt='not found' height={110} />

                                            <h6 className='fw-bold mt-2'>{v.name}</h6>

                                            <div className=' py-0'>

                                                <img width={75} src="../image/section5start.png" alt="" />

                                                <b className='ms-2' style={{ fontSize: "14px" }}>(233 Reviews)</b>

                                            </div>

                                            <div>
                                                <h6 style={{ color: "#0672bf" }} className='fw-bold'>$ {v.price} <span style={{ color: "black" }}> /per hour</span></h6>

                                            </div>

                                            <p className='text-start m-0'> There are many variations of passages of Lorem Ipsum available, but the majority...</p>

                                            <i class="ri-chat-3-line position-absolute top-0 end-0 m-3 fs-4" style={{ color: "#0672bf" }}></i>
                                        </div>

                                    </div>

                                ))}
                            </div>
                        </div>
                        <button onClick={nextSlide} className="carousel-button2">❯</button>
                    </div>
                </div>
            </section>


            {/* <!-- section4 start --> */}

            <section className="section4">

                <div className="d-flex justify-content-center align-items-center">

                    <div className="col-10 col-lg-7 row justify-content-center align-items-center">

                        <div className="sec4img col-12 col-lg-6">
                        </div>

                        <div className='col-12 col-lg-6 py-3 ps-0 ps-lg-5'>
                            <div className="ps-0 ps-lg-4">
                                <h6 className="my-3 text-secondary">About Us</h6>
                                <h1 className="my-3" style={{ wordSpacing: "4px" }}>We never sleep till our client get
                                    justice.</h1>
                                <p className="my-5">Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since
                                    the 1500s.</p>

                                <button className="btn btn-lg px-4" style={{ color: "white", background: "#006ebd" }}>Find an
                                    Advocate</button>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            {/* <!-- section5 start --> */}

            <section className="d-flex justify-content-center mt-3 mb-5">
                <div className="col-11 col-lg-7 text-center">

                    <h1 className="my-5 display-4" style={{ fontWeight: "500" }}>How it Works</h1>

                    <div className="Works">
                        <div className="Workschild1 col-3  p-3">
                            <img className="img-fluid my-4" src="./Image/workimg1.jpg"
                                alt width="80px" />

                            <h5>Lorem Ipsum is simply</h5>

                            <p className='my-3'>Contrary to popular belief, Lorem Ipsum is not simply
                                random text. It has roots in a piece of classical
                                Latin literature.</p>
                        </div>

                        <div className="Workschild1 col-3  p-3">
                            <img className="img-fluid my-4" src="./Image/workimg2.jpg"
                                alt width="80px" />

                            <h5>Lorem Ipsum is simply</h5>

                            <p className='my-3'>Contrary to popular belief, Lorem Ipsum is not simply
                                random text. It has roots in a piece of classical
                                Latin literature.</p>
                        </div>

                        <div className="Workschild1 col-3  p-3">
                            <img className="img-fluid my-4" src="./Image/workimg2.jpg"
                                alt width="80px" />

                            <h5 className='my-3'>Lorem Ipsum is simply</h5>

                            <p>Contrary to popular belief, Lorem Ipsum is not simply
                                random text. It has roots in a piece of classical
                                Latin literature.</p>
                        </div>

                    </div>

                    <Link to={"/BecomeServiceprovider"} className=" my-5 btn btn-lg px-4" style={{ color: "white", background: "#006ebd" }}>Become a Service
                        Provider</Link>

                </div>
            </section>

            {/* <!-- section 6 start --> */}

            <section className="section6">
                <div className="d-flex justify-content-center text-center">
                    <div className="col-12 col-lg-8 mt-5">

                        <h1 className='display-4' style={{ fontWeight: "500" }}>Download App</h1>

                        <div className="d-flex justify-content-center py-3">

                            <p className="col-11 col-lg-8">Lorem Ipsum is simply dummy
                                text of the
                                printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since
                                the 1500s.</p>
                        </div>

                        <div className="mt-3 mb-5 pb-5">
                            <img className="img-fluid mx-2" src="./Image/download2.png" alt
                                width="150px" />
                            <img className="img-fluid mx-2" src="./Image/download3.png" alt
                                width="150px" />
                        </div>

                        <img className="img-fluid" src="./Image/downloadimg1.png" alt />

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home;
