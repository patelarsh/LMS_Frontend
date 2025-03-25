import React, { useContext, useEffect, useRef, useState } from 'react'
import { content } from './App';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from '@mui/material';

function LegalAdvice() {

    // const { Arr } = useContext(content);

    const ref1 = useRef();
    const [dataobj, setdataobj] = useState();
    // const [message, setmessage] = useState()
    const [messageARR, setmessageARR] = useState([]);
    const [date, setdate] = useState(new Date());
    const refMessage = useRef();
    const navi = useNavigate();

    const [lawyer, setLawyer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {

        axios.get("https://lawyer-management-system-api.onrender.com/lawyer/admin-lawyer")
            .then((response) => {
                setLawyer(response.data);
                console.log(response.data)
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });

        // ref1.current.style.display = "none";

        const time = setInterval(() => {

            setdate(new Date())
        }, 1000);

        return () => clearInterval(time)

    }, [])


    if (loading) return <div className='text-center my-5'>
        <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>
    </div>
    if (error) return <p>Error: {error}</p>



    // function handlemesge(id) {
    //     if (ref1.current.style.display == "none") {
    //         ref1.current.style.display = "block"
    //     }


    //     const obj = Arr.find((v) => {
    //         return v.id == id
    //     })

    //     setdataobj(obj)

    // }

    // const handleclose = () => {
    //     if (ref1) {
    //         // ref1.current.style.display = "none"
    //     }
    // }



    function handlemesge(id) {
        
        navi("/Message/"+id);

        // if (!message) {
        //     return;
        // }

        // else {
        //     setmessageARR([...messageARR, { name: message, data: date.toLocaleTimeString() }])
        // }

        // setmessage("")

        // if (refMessage.current) {
        //     refMessage.current.scrollTop = refMessage.current.scrollHeight;
        // }
    }


    const handleView = (id) => {
        navi("/JacobAbout/" + id)

        console.log(id)

    }

    const handleVideo = ()=>{
        navi("/VideoCall")
    }


    return (
        <div>
            <div className='d-flex justify-content-center  border-bottom pb-5'>

                <div className='col-12 col-lg-7'>

                    <h3 className='m-3 my-4 fw-bold text-center text-lg-start'>Legal Advice Advocates</h3>

                    <div className='px-lg-2'>
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

                    <div className=' LegalAdvice2 my-4 position-relative'>
                        {
                            lawyer.map((v) => (
                                <div key={v._id} className='LegalAdvice2child p-3 border rounded-3'>

                                    <div className='d-flex gap-2'>
                                        <img className=' img-fluid rounded-pill object-fit-cover' src={v.image} alt={"images"} width={75} height={75} />

                                        <div>

                                            <h6 className='fw-bold my-0'>{v.fullName}</h6>

                                            <div className='py-0'>
                                                <img width={75} src="../image/section5start.png" alt="" />

                                                <b className='ms-2'>(233 Reviews)</b>
                                            </div>

                                            <p style={{ color: "#0672bf", fontSize: "16px" }}><span className='text-info fw-bold'>$ {v.rate}</span> <span style={{ color: "rgb(177, 174, 174)" }}>/ per hour</span></p>

                                        </div>
                                    </div>

                                    <p className='fw-bolder mt-2' style={{ fontSize: "13px", color: "rgb(177, 174, 174)" }}>There are many variations of passages of Lorem Ipsum available, but the majority....</p>

                                    <div className="d-flex gap-2">
                                        <button style={{ background: "rgba(135, 206, 250, 0.204)", fontSize: "12px" }} className="btn col btn-lg text-primary fw-bold" type="button" onClick={() => { handleView(v._id) }}>View Details</button>
                                        <button onClick={handleVideo} className="btn btn-lg col fw-bold text-white" type="button" style={{ fontSize: "12px", background: "#006ebd" }}>Book Video Call</button>
                                        
                                    </div>

                                    <i onClick={() => { handlemesge(v._id) }} class="ri-chat-3-line position-absolute top-0 end-0 m-3 fs-4" style={{ color: "#0672bf" }}></i>

                                </div>
                            ))
                        }

                        <div className='messagemain position-absolute d-none' ref={ref1}>

                            <div className='d-flex border p-2 justify-content-between'>
                                <div className=''>
                                    <img src={dataobj && dataobj.url} alt="" width={30} />
                                    <b className='fs-6 mx-3'>{dataobj && dataobj.name}</b>
                                </div>

                                {/* <button className='border' onClick={handleclose}>
                                    X
                                </button> */}
                            </div>

                            <div className='messageChild px-1 p-4' ref={refMessage}>
                                {
                                    messageARR && messageARR.map((v) => (
                                        <div>
                                            {/* <h5>your output</h5> */}
                                            <h5 className='my-3 '> <span className='p-1 rounded'>{v.name}</span> <br /> <span className='bg-dark text-white'>{v.data}</span> </h5>
                                        </div>
                                    ))
                                }

                            </div>

                            {/* <div className='messageChild2 p-3 d-flex'>

                                <input className='form-control' type="text" value={message} onChange={(e) => { setmessage(e.target.value) }} />
                                <button className='btn btn-primary btn-sm mx-1' onClick={handleMesge}>send</button>

                            </div> */}

                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default LegalAdvice;
