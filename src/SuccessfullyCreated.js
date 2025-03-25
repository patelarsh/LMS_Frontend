import React from 'react'

function SuccessfullyCreated() {
    return (
        <div>

            <div className='border-bottom py-5'>
                <div className='text-center my-5 py-5'>
                    <img className=' img-fluid' width={"130px"} src="../image/PaymentSuccessfully.webp" alt="" />
                    <h4 className='fw-bold'>Successfully Created!</h4>
                    <p style={{ fontSize: "16px" }} className=' text-secondary'>You have successfully created the profile. <br></br> Wait for our admin team to review and <br></br> make your profile online soon.</p>

                    <button className='btn mt-3 text-white' style={{ padding: "8px 40px",background:"#006ebd" }}>Ok</button>
                </div>

            </div>
        </div>
    )
}

export default SuccessfullyCreated;
