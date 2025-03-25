import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { content } from './App';
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Rating from '@mui/material/Rating';
import axios from 'axios';

function JacobAbout() {

    const token = JSON.parse(localStorage.getItem("Usertoken"));
    const Lawyertoken = JSON.parse(localStorage.getItem("Lawyertoken"));

    const { id } = useParams();

    // const { Arr } = useContext(content);
    const [star, setstar] = useState(0);
    const [star2, setstar2] = useState(0);
    const [date, setDate] = useState(null);
    const navi = useNavigate();

    const [lawyer, setLawyer] = useState([]);
    const [timeId, settimeId] = useState([]);

    const [ratings, setRatings] = useState([]);
    const [ratingsAll, setRatingsAll] = useState({});

    const [ratingsRange, setratingsRange] = useState([5, 4, 3, 2, 1]);

    const [getpayments, setgetpayments] = useState([]);
    const [payment, setpayment] = useState();


    const [showAll, setShowAll] = useState(false);

    const visibleRatings = showAll ? ratings : ratings.slice(0, 2);


    const obj = lawyer.find((v) => {
        return v._id == id
    })

    // console.log(ratings[0].ratting)


    const postTimeSlot = async () => {

        try {

            const response = await axios.post(
                "https://lawyer-management-system-api.onrender.com/lawyer/post-time",
                { date },
                { headers: { Authorization: `Bearer ${token.token}` } }
            );
            // alert("Time slot posted successfully!");
            settimeId(response.data._id)
        } catch (error) {
            console.error("Failed to post time slot", error);
            alert("Time slot no!")
        }

    };

    const bookNow = async () => {

        try {
            const data = { lawyer: id, timeSlot: timeId }

            console.log(data)
            await axios.post(
                "https://lawyer-management-system-api.onrender.com/booking/post-booking",
                data,
                { headers: { Authorization: `Bearer ${token.token}` } }
            );
            // alert("Appointment booked successfully!");
        } catch (error) {
            console.error("Failed to book appointment", error);
        }
    };

    const getrating = async () => {

        try {

            const response1 = await axios.get(`https://lawyer-management-system-api.onrender.com/lawyer/get-all-ratting/${id}`, {
                // headers: { Authorization: `Bearer ${Lawyertoken.token}` }
            })

            setRatings(response1.data)

            const response2 = await axios.get(`https://lawyer-management-system-api.onrender.com/lawyer/get-ratting/${id}`, {
                // headers: { Authorization: `Bearer ${Lawyertoken.token}` }
            })

            setRatingsAll(response2.data)

            //             averageRatting
            // : 
            // 4.333333333333333
            // countRatting
            // : 
            // 3

        }

        catch (error) {
            console.log(error)
        }

    }



    const getpayment = async () => {

        try {

            const response1 = await axios.get(`https://lawyer-management-system-api.onrender.com/payment/get-paymentDetails`, {
                headers: { Authorization: `Bearer ${token.token}` }
            })

            const obj = response1.data.find((v) => {
                return v.lawyer._id == id
            })

            setgetpayments(obj)


        }

        catch (error) {
            console.log(error)
        }

    }


    const handlepayment = async () => {

        try {
            const data = { paymentId: getpayments._id }
            const response1 = await axios.post(`https://lawyer-management-system-api.onrender.com/payment/razorpay`,
                data,
                { headers: { Authorization: `Bearer ${token.token}` } })

            console.log(response1)
        }

        catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        axios.get("https://lawyer-management-system-api.onrender.com/lawyer/admin-lawyer")
            .then((response) => {
                setLawyer(response.data);
            })
            .catch((error) => {
                console.error(error.message);
            });

        getpayment();
        getrating();
    }, [])


    // const handlepayment = () => {

    //     if (false) {
    //         navi("/PaymentSuccessfully")
    //     }

    //     else {
    //         navi("/PaymentFailed")
    //     }

    // }


    return (
        <div>

            <div className='d-flex justify-content-center border-bottom pb-5'>

                <div className='col-12 col-xxl-8'>

                    <div className='d-flex flex-wrap gap-5 p-4'>

                        <div className='col-12 col-lg-3 p-lg-3  text-center'>

                            <div className='border py-4'>
                                {/* <img className="object-fit-cover" src={obj && obj.image} alt="fasdfasdf" style={{ widht: "10px", height: "100%" }} /> */}
                                <img
                                    className=" object-fit-cover"
                                    src={obj?.image}
                                    alt="fasdfasdf"
                                    style={{ width: "120px", height: "120px", borderRadius: "50%" }}
                                />

                                <h5 className='mt-3 mb-0 fs-bold'>{obj && obj.fullName}</h5>

                                <div className=''>
                                    <img width={70} src="../image/booking5.png" alt="" />
                                    <b className='mx-2'>(233 Reviews)</b>
                                </div>


                                <h6 className='text-info my-3 fs-5 fw-bold'>$ {obj && obj.rate} / <span className='text-dark'> per hour</span></h6>

                                <button className='btn rounded mt-2 px-5 text-white btn-lg' style={{ fontSize: "13px", background: "#006ebd" }}>Send Message</button>
                            </div>

                        </div>

                        <div className='col'>

                            <h4 className='fw-bold'>About Jocob</h4>

                            <div className=" text-secondary" style={{ fontSize: "17px" }}>

                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...

                                <span class="collapse" id="collapseExample">

                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.

                                </span>

                                <a style={{ color: "#006ebd" }} class=" text-decoration-none fw-bold" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Read More
                                </a>

                            </div>

                            <h4 className='mt-3 fw-bold'>Skills</h4>

                            <div>

                                {
                                    obj && obj.skills.map((v) => (

                                        <button key={v} style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>{v}</button>
                                    ))
                                }

                                {/* <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>Accident</button>
                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>McClintock</button>
                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>Lorem Ipsum</button>
                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>Accident</button>
                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>McClintock</button>
                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>Characteristic</button>
                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>De Finibus</button>
                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>Malorum</button> */}

                            </div>

                            <h4 className='mt-3 fw-bold'>Resolution Experience</h4>

                            <div className=" text-secondary" style={{ fontSize: "17px" }}>

                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source....

                                <span class="collapse" id="collapseExample">

                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.

                                </span>

                                <a style={{ color: "#006ebd" }} class=" text-decoration-none fw-bold" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Read More
                                </a>

                            </div>

                            <div className='my-3 d-flex flex-wrap gap-3 border-bottom pb-4'>
                                <button className='btn px-lg-5 fw-bold btn-lg' style={{ fontSize: "14.5px", background: "#e0f2ff", color: "#006ebd" }} data-bs-toggle="modal" href="#exampleModalToggle" role="button">Check Availability</button>

                                <button className='btn btn-lg px-lg-5 fw-bold' style={{ fontSize: "14.5px", background: "#006ebd", color: "#ffff" }}>Book Video Call</button>
                            </div>


                            {/*  */}
                            <div className='col-12 col-lg-5 mt-4'>

                                <h4 className='fw-bold'>Reviews</h4>

                                <div className='d-flex justify-content-between align-items-center gap-4'>
                                    <h4 className='' style={{ color: "#0d960b" }}>Exceptional {parseFloat(ratingsAll.averageRatting).toFixed(1)}</h4>

                                    <h5 style={{ fontSize: "15px " }} className='fw-bold'>{ratingsAll.countRatting + " Reviews"} </h5>
                                </div>

                                <div className='d-flex gap-2 mt-2'>
                                    <Rating name="read-only" value={parseFloat(ratingsAll.averageRatting).toFixed(1)} readOnly />
                                </div>

                                <JacobAboutRatting></JacobAboutRatting>

                            </div>
                            {/*  */}

                            <div className='my-4'>
                                <div>
                                    {visibleRatings.map((v, index) => (
                                        <div key={index} className='border-bottom border-1 py-2 d-flex flex-wrap'>
                                            <div className='col-2 col-lg-1 text-center'>
                                                <img src="../image/available2.png" alt="" width={50} />
                                            </div>
                                            <div className='col-11'>
                                                <div className='d-flex justify-content-between '>
                                                    <div>
                                                        <h6 className='fs-5 fw-bold'>{v.user.name}</h6>
                                                        <p className="text-secondary fw-bold my-1 fs-6">
                                                            {new Date(v.date).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })}
                                                        </p>

                                                    </div>
                                                    <div className='d-flex gap-1'>

                                                        <Rating name="read-only" value={v.ratting} readOnly />

                                                    </div>
                                                </div>
                                                <p style={{ fontSize: "13px" }}>
                                                    {v.review}
                                                </p>
                                            </div>
                                        </div>

                                    ))}
                                </div>

                                {ratings.length > 2 && (
                                    <b style={{ color: "#006ebd", cursor: "pointer" }}
                                        onClick={() => setShowAll(!showAll)}
                                        className="fs-5 mt-2"
                                    >
                                        {showAll ? "Show Less" : "See All Reviews"}
                                    </b>
                                )}
                            </div>

                        </div>

                    </div>
                </div>

            </div>


            {/* modal 1 */}

            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered  d-flex justify-content-center pt-5">
                    <div class="modal-content CheckAvailability">
                        <div class="modal-body">

                            <div className=' text-end '>
                                <button style={{ fontSize: "13px" }} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>


                            <h4 className='text-center fw-bold mb-4'>Check Availability</h4>

                            <div className='px-3'>
                                <div className='d-flex gap-2 border align-items-center'>
                                    <img
                                        className=" object-fit-cover"
                                        src={obj?.image}
                                        alt="fasdfasdf"
                                        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                                    />

                                    <div className=''>

                                        <h5 className='fw-bold mb-0'>{obj && obj.fullName}</h5>

                                        {/* <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-regular fa-star"></i> */}
                                        <img width="75px" src="../image/section5start.png" alt="" />

                                        <b className='ms-2'>(233 Reviews)</b>

                                        <p className="fs-6"><b className='fs-6' style={{ color: "#0672bf" }}>$ {obj && obj.rate}</b> / per hour</p>

                                    </div>
                                </div>
                            </div>

                            <h4 className='my-3 px-3 fw-bold'>Availability</h4>

                            <div className='mb-3'>
                                <button className='btn'>Today</button>
                                <button className='btn'>Tomorrow</button>
                            </div>

                            <div className='d-flex flex-wrap'>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>8:00 to 8:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>8:30 to 9:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>9:00 to 9:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>9:30 to 10:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>10:00 to 10:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>10:30 to 11:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>11:00 to 11:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>11:30 to 12:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>12:00 to 12:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>12:00 to 1:00 AM</button>
                                </div>

                            </div>


                        </div>
                        <div class="modal-footer border-0 px-4">
                            <button onClick={postTimeSlot} style={{ background: "#006ebd" }} class="btn text-white w-100 fs-5" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Book video call</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal 2 */}

            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered d-flex justify-content-center">
                    <div class="modal-content CheckAvailability">
                        <div class="modal-body">

                            <div className=' text-end'>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>


                            <h4 className='text-center fw-bold mb-3'>Book Now</h4>

                            <div className="card flex justify-content-center">
                                <Calendar id='p-datepicker' value={date} onChange={(e) => setDate(e.value)} inline showWeek />
                            </div>

                            {/* <h4 className='my-3'>Availability</h4> */}

                            {/* <button className='btn'>Today</button> */}
                            <button className='btn fw-bold fs-5'>Select Time</button>

                            <div className='d-flex flex-wrap'>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>8:00 to 8:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>8:30 to 9:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>9:00 to 9:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>9:30 to 10:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>10:00 to 10:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>10:30 to 11:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>11:00 to 11:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>11:30 to 12:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>12:00 to 12:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>12:00 to 1:00 AM</button>
                                </div>

                            </div>


                        </div>
                        <div class="modal-footer px-4 border-0">
                            <button onClick={bookNow} style={{ background: "#006ebd" }} class="btn text-white w-100 fs-5" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal 3 */}

            <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered d-flex justify-content-center">
                    <div class="modal-content CheckAvailability">

                        <div className=' text-end'>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="px-4">

                            <h4 className='text-center fw-bold mb-3 fs-5'>Payment</h4>

                            <div className="">

                                <div className='d-flex'>

                                    <div className='col-6 d-flex gap-3'>

                                        <div>
                                            <i style={{ fontSize: "20px" }} class="ri-calendar-line"></i>
                                        </div>

                                        <div>
                                            <h6 style={{ fontSize: "14px" }} className=' text-secondary'>Date</h6>
                                            <h6 style={{ fontSize: "16px" }} className='fw-bold'>22 May 2023</h6>
                                            <h6 style={{ fontSize: "14px" }} className=' text-primary mt-2'>Edit</h6>


                                        </div>
                                    </div>

                                    <div className='col-6 d-flex gap-3'>

                                        <div>
                                            <i style={{ fontSize: "20px" }} class="ri-time-line"></i>
                                        </div>

                                        <div>
                                            <h6 style={{ fontSize: "14px" }} className=' text-secondary'>Date</h6>
                                            <h6 style={{ fontSize: "16px" }} className='fw-bold'>10:30 to 11:00 AM</h6>
                                            <h6 style={{ fontSize: "14px" }} className=' text-primary mt-2'>Edit</h6>


                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <img className=' img-fluid w-100' src="../image/credit.jpg" alt="" />
                                </div>

                                <div className='mt-3'>

                                    <div>
                                        <label className='fw-bold mb-2' style={{ fontSize: "14px" }} for="">Name on Card</label>

                                        <div className='form-outline'>

                                            <input className=' form-control' type="text" placeholder="Name on Card" style={{ fontSize: "14px" }} />
                                            <i style={{ fontSize: "20px" }} class="ri-user-line fontleftsilde"></i>

                                        </div>
                                    </div>

                                    <div className='my-2'>
                                        <label className='fw-bold mb-2' style={{ fontSize: "14px" }} for="">Name on Card</label>

                                        <div className='form-outline'>

                                            <input className=' form-control' type="text" placeholder="Name on Card" style={{ fontSize: "14px" }} />
                                            <i style={{ fontSize: "20px" }} class="ri-bank-card-line fontleftsilde"></i>

                                        </div>

                                    </div>

                                    <div className=' d-flex gap-2'>

                                        <div className='col-4'>
                                            <label className='fw-bold' style={{ fontSize: "14px" }} for="">Expiry Date</label>

                                            <select className=' form-select mt-2'>
                                                <option value="" hidden>MM</option>

                                                <option value="">Jan</option>
                                                <option value="">Feb</option>
                                                <option value="">Mar</option>
                                                <option value="">Apr</option>
                                                <option value="">May</option>
                                                <option value="">Jun</option>
                                                <option value="">Jul</option>
                                                <option value="">Aug</option>
                                                <option value="">Sep</option>
                                                <option value="">Oct</option>
                                                <option value="">Nov</option>
                                                <option value="">Dec</option>

                                            </select>

                                        </div>

                                        <div className='col-4'>
                                            <label className='fw-bold' style={{ fontSize: "14px" }} for=""></label>

                                            <select className=' form-select mt-2'>
                                                <option value="" hidden>YYYY</option>

                                                <option value="">2020</option>
                                                <option value="">2021</option>
                                                <option value="">2022</option>
                                                <option value="">2023</option>
                                                <option value="">2024</option>
                                                <option value="">2025</option>
                                                <option value="">2026</option>

                                            </select>

                                        </div>

                                        <div className='col-3 ms-2'>
                                            <label className='fw-bold' style={{ fontSize: "14px" }} for="">CVV</label>

                                            <input type="text" className=' form-control mt-2' placeholder='CVV' />

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="modal-footer px-4 border-0">
                            <button style={{ background: "#006ebd" }} onClick={handlepayment}>Pay Now</button>

                            <button style={{ background: "#006ebd" }} class="btn text-white w-100 fs-5" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}

        </div>
    )
}

function JacobAboutRatting() {
    const { id } = useParams();
    const [ratings, setRatings] = useState([]);
    const [ratingsAll, setRatingsAll] = useState({});
    const ratingsRange = [5, 4, 3, 2, 1];

    const getrating = async () => {
        try {
            const response1 = await axios.get(`https://lawyer-management-system-api.onrender.com/lawyer/get-all-ratting/${id}`);
            setRatings(response1.data);

            const response2 = await axios.get(`https://lawyer-management-system-api.onrender.com/lawyer/get-ratting/${id}`);
            setRatingsAll(response2.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getrating();
    }, []);

    const calculateRatingDistribution = () => {
        const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

        ratings.forEach((rating) => {
            ratingCounts[rating.ratting] += 1;
        });

        return ratingCounts;
    };

    const ratingDistribution = calculateRatingDistribution();

    return (
        <div>
            <div className='mt-3'>
                {ratingsRange.map((v) => {
                    const ratingCount = ratingDistribution[v] || 0;
                    const ratingPercentage = (ratingCount / ratingsAll.countRatting) * 100;

                    return (
                        <div key={v} className="d-flex gap-3 justify-content-between align-items-center">
                            <h5 className="fw-bold">
                                {v} <i style={{ fontSize: "12px" }} className="fa-solid fa-star text-warning"></i>
                            </h5>

                            <div className="progress" style={{ width: "70%", height: "8px" }}>
                                <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: `${ratingPercentage}%`, height: "10px" }}
                                    aria-valuenow={ratingPercentage}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>

                            <b>{ratingPercentage.toFixed(1)} %</b>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default JacobAbout;

