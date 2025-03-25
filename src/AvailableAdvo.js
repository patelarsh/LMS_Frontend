import React, { useContext } from 'react'
import { content } from './App';

function AvailableAdvo() {



    const Arr = [

        {
            id: 1,
            url: "./image/available2.png",
            name: "Arlene McCoy",
            price: 200
        },

        {
            id: 2,
            url: "./image/available3.png",
            name: "Mirza",
            price: 200
        },

        {
            id: 3,
            url: "./image/available2.png",
            name: "Arlene McCoy",
            price: 200
        },

        {
            id: 4,
            url: "./image/available2.png",
            name: "Arlene McCoy",
            price: 200
        }
        ,

        {
            id: 4,
            url: "./image/available2.png",
            name: "Arlene McCoy",
            price: 200
        }
        ,

        {
            id: 4,
            url: "./image/available2.png",
            name: "Arlene McCoy",
            price: 200
        }
        ,

        {
            id: 4,
            url: "./image/available2.png",
            name: "Arlene McCoy",
            price: 200
        }
        ,

        {
            id: 4,
            url: "./image/available2.png",
            name: "Arlene McCoy",
            price: 200
        }
        ,

        {
            id: 4,
            url: "./image/available2.png",
            name: "Arlene McCoy",
            price: 200
        }
        ,

        {
            id: 4,
            url: "./image/available2.png",
            name: "Arlene McCoy",
            price: 200
        }
        ,

        {
            id: 4,
            url: "./image/available2.png",
            name: "Arlene McCoy",
            price: 200
        }
        ,

        {
            id: 12,
            url: "./image/available2.png",
            name: "Ravi",
            price: 200
        }


    ]

    return (
        <div>
            <div className='d-flex justify-content-center border-bottom pb-5'>

                <div className='col-12 col-lg-7'>

                    <h3 className='m-3 my-4 fw-bold text-center text-lg-start'>Available Advocates</h3>

                    <div className='px-lg-3'>
                        <div className='Availableimage d-flex  flex-wrap justify-content-between  align-items-center'>

                            <div className='col-12 col-lg-6 text-white '>
                                <h6 >We earn your trust and are deligent your case.</h6>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            </div>

                            <div className='col-12 col-lg-5 text-lg-end'>
                                <button className='btn fw-bold  px-4' style={{ background: "#ffffff", color: "#0873bf" }}>Hire an Advocate</button>
                            </div>


                        </div>
                    </div>

                    <div className='Availableimage2  d-flex flex-wrap my-3'>

                        {
                            Arr.map((v) => (

                                <div className='p-3 col-12 col-lg-3 '>
                                    <div className='border Availableimage2chiuld p-3 text-center position-relative'>
                                        <img className='m-auto' src={v.url} alt='not found' height={110} />

                                        <h6 className='fw-bold mt-2'>{v.name}</h6>

                                        <div className='py-0'>

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
                            ))
                        }

                    </div>

                </div>

            </div>
        </div>
    )
}

export default AvailableAdvo;
