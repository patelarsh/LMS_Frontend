import React from 'react'

function PaymentSuccessfully() {
  return (
    <div>

      <div className='border-bottom py-5'>
        <div className='text-center my-5 py-5'>
          <img className=' img-fluid' width={"130px"} src="../image/PaymentSuccessfully.webp" alt="" />
          <h4 className='fw-bold'>Successfully Done!</h4>
          <p style={{ fontSize: "16px" }} className=' text-secondary'>Your booking has been submitted <br /> successfully.</p>

          <button className='btn btn-primary mt-3' style={{ padding: "6px 40px" }}>Ok</button>
        </div>

      </div>
    </div>
  )
}

export default PaymentSuccessfully
