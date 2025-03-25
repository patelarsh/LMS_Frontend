import React from 'react'

function PaymentFailed() {
  return (
    <div>
      <div className='border-bottom py-5'>

        <div className='text-center my-5 py-5'>
          <img className=' img-fluid mb-3' width={"80px"} src="https://t4.ftcdn.net/jpg/05/52/59/47/360_F_552594762_JC9fZz2A8d576ctAFuqoBK5g68Z1jgwK.png" alt="" />
          <h4 className='fw-bold'>Payment Failed!</h4>
          <p style={{ fontSize: "16px" }} className=' text-secondary'>Your payment has been failed please. <br/> check payment method.</p>

          <button className='btn btn-primary mt-3' style={{ padding: "6px 40px" }}>Ok</button>
        </div>

      </div>
    </div>
  )
}

export default PaymentFailed
