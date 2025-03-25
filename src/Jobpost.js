import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Jobpost() {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchJobs = async () => {
        try {
            const response = await axios.get("https://lawyer-management-system-api.onrender.com/user/get-job");
            setJobs(response.data);
            setLoading(false);
            localStorage.setItem("jobpost", JSON.stringify(response.data.length)); 
        } catch (error) {
            console.error("Error fetching jobs:", error);
            setError("Failed to fetch jobs");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
   
    return (
        <div>

            <div className='d-flex justify-content-center'>
                <div className='col-10 col-lg-8 my-5'>
                    <div>
                        <div className='d-flex justify-content-between'>

                            <h3 className='fw-bold ms-lg-3'>Job Posts</h3>

                            <div class="btn-group me-lg-3">

                                <button data-bs-toggle="dropdown" aria-expanded="false" className=' postfiltercolor btn border border-2 fw-bold'><i class="ri-filter-3-line"></i> Filter</button>

                                <ul class="dropdown-menu dropdown-menu-end p-0 px-3 mt-4 border-0 jobfilter" >

                                    <li className={"d-flex py-2 justify-content-between align-items-center border-bottom"}>

                                        <h6 class="fw-bold">Legal</h6>
                                        <i class="ri-checkbox-circle-fill text-primary fs-4"></i>

                                    </li>

                                    <li className={"d-flex py-2 justify-content-between align-items-center border-bottom"}>

                                        <h6 class="fw-bold">Auto</h6>
                                        <i class="ri-checkbox-circle-fill text-secondary fs-4"></i>

                                    </li>

                                    <li className={"d-flex py-2 justify-content-between align-items-center border-bottom"}>

                                        <h6 class="fw-bold">Customer</h6>
                                        <i class="ri-checkbox-circle-fill text-secondary fs-4"></i>

                                    </li>

                                    <li className={"d-flex py-2 justify-content-between align-items-center border-bottom"}>

                                        <h6 class="fw-bold">Housing</h6>
                                        <i class="ri-checkbox-circle-fill text-secondary fs-4"></i>

                                    </li>

                                    <li className={"d-flex py-2 justify-content-between align-items-center border-bottom"}>

                                        <h6 class="fw-bold">Employment</h6>
                                        <i class="ri-checkbox-circle-fill text-secondary fs-4"></i>

                                    </li>

                                    <li className={"d-flex py-2 justify-content-between align-items-center border-bottom"}>

                                        <h6 class="fw-bold">Medical</h6>
                                        <i class="ri-checkbox-circle-fill text-secondary fs-4"></i>

                                    </li>

                                    <li className={"d-flex justify-content-between align-items-center border-bottom"}>

                                        <h6 class="fw-bold">Travel and Tourism</h6>
                                        <i class="ri-checkbox-circle-fill text-secondary fs-4"></i>

                                    </li>

                                    <li className={"d-flex py-2 justify-content-between align-items-center border-bottom"}>

                                        <h6 class="fw-bold">Environmental</h6>
                                        <i class="ri-checkbox-circle-fill text-secondary fs-4"></i>

                                    </li>

                                    <li className={"d-flex py-2 justify-content-between align-items-center border-bottom"}>

                                        <h6 class="fw-bold">Technology</h6>
                                        <i class="ri-checkbox-circle-fill text-secondary fs-4"></i>

                                    </li>

                                    <li className={"d-flex py-2 justify-content-between align-items-center border-bottom"}>

                                        <h6 class="fw-bold">Education</h6>
                                        <i class="ri-checkbox-circle-fill text-secondary fs-4"></i>

                                    </li>

                                    <li className={"d-flex py-2 justify-content-between align-items-center border-bottom"}>

                                        <h6 class="fw-bold">Financial</h6>
                                        <i class="ri-checkbox-circle-fill text-secondary fs-4"></i>

                                    </li>

                                    <li className={"d-flex py-2 justify-content-between align-items-center border-bottom"}>

                                        <h6 class="fw-bold">Physical Representation</h6>
                                        <i class="ri-checkbox-circle-fill text-secondary fs-4"></i>

                                    </li>

                                    <li className={"d-flex py-2 flex-wrap justify-content-between align-items-center"}>


                                        <div className='col-6'>

                                            <button className='btn col-11' style={{ border: "1px solid #006ebd", color: "#006ebd" }}>Cancle</button>

                                        </div>

                                        <div className=' col-6 text-end'>

                                            <button className='btn col-11' style={{ background: "#006ebd", color: "#fff" }}>Apply</button>

                                        </div>
                                    </li>


                                </ul>
                            </div>

                        </div>

                        <div className='d-flex flex-wrap my-3'>

                            {
                                jobs && jobs.map((v) => (
                                    <div className='col-12 col-lg-6 p-lg-3'>
                                        <div className=' border p-4'>

                                            <h6>I need someone to view my legal work like Misleading advertising and Contract disputes.</h6>

                                            <div className='d-flex gap-2'>

                                                <p style={{ fontSize: "12px", color: "grey" }}>Hourly $40-50 </p>
                                                <h6>-</h6>
                                                <p style={{ fontSize: "12px", color: "grey" }}> posted 4 hour ago</p>

                                            </div>

                                            <div className='row row-cols-2'>

                                                <div>

                                                    <h6>Less than 30 hrs/week</h6>
                                                    <p style={{ fontSize: "12px", color: "grey" }}>Hours needed</p>

                                                </div>

                                                <div>

                                                    <h6>Duration</h6>
                                                    <p style={{ fontSize: "12px", color: "grey" }}>2 Weeks</p>

                                                </div>

                                                <div>

                                                    <h6>Experience In</h6>
                                                    <p style={{ fontSize: "12px", color: "grey" }}>{v.expirence}</p>

                                                </div>

                                                <div>

                                                    <h6>Location</h6>
                                                    <p style={{ fontSize: "12px", color: "grey" }}>Dallas, TX</p>

                                                </div>

                                            </div>

                                            <div className="text-secondary">
                                                We need someone with larger-scale legal experience.

                                                {/* Dynamic collapse ID */}
                                                <span className="collapse" id={`collapseExample-${v._id}`}>
                                                    {v.aboutYou}
                                                </span>

                                                {/* Toggle Collapse */}
                                                <a
                                                    style={{ color: "#006ebd" }}
                                                    className="text-decoration-none fw-bold"
                                                    data-bs-toggle="collapse"
                                                    href={`#collapseExample-${v._id}`}
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls={`collapseExample-${v._id}`}
                                                >
                                                    ...More
                                                </a>
                                            </div>

                                            <div className='d-flex align-items-center gap-2 my-3'>
                                                <img width={20} height={20} src="../image/payment3.png" alt="" />
                                                <h6>  payment Verified</h6>
                                            </div>

                                            <div className="d-flex align-items-center gap-3">

                                                <h6>Posted</h6>
                                                <img width={"25px"} height={"25px"} className="" src="../image/booking3.png" alt="" />
                                                <h6 className=' fw-bold'>Eleanor Pera</h6>

                                            </div>

                                            <div className='d-flex flex-wrap mt-2'>

                                                <div className='col-12 col-lg-6'>

                                                    <button className='btn col-12 col-lg-11' style={{ background: "#e0f2ff", color: "#006ebd" }}>Message</button>

                                                </div>

                                                <div className='col-12 col-lg-6 text-end'>

                                                    <button className='btn col-12 col-lg-11' style={{ background: "#006ebd", color: "#fff" }}>Accept Proposal</button>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Jobpost;
