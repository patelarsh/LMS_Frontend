import axios from 'axios';
import React, { useState } from 'react'

function PostJob() {

    const Usertoken = JSON.parse(localStorage.getItem("Usertoken"));

    console.log(Usertoken)
    const [title, settitle] = useState("");
    const [TotalHours, setTotalHours] = useState("");
    const [TimeDuration, setTimeDuration] = useState("");
    const [rate, setrate] = useState("");
    const [expirence, setexpirence] = useState("");
    const [City, setCity] = useState("");
    const [State, setState] = useState("");
    const [aboutYou, setaboutYou] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            // const data = {title,TotalHours,TimeDuration,HourlyRate,Experience,City,State,Description}

            const data = {
                // rate: "fad",
                // aboutYou: "fsd",
                // // skills: ["ok", "done"],
                // // specialist: "auto",
                // expirence: "adsadf"

                rate, aboutYou, expirence
            }

            // Assuming you have a token stored
            const response = await axios.post(
                `https://lawyer-management-system-api.onrender.com/user/post-job`, data,

                {
                    headers: {
                        Authorization: `Bearer ${Usertoken.token}`, // Add authentication token
                        "Content-Type": "application/json",
                    },
                }
            );

            alert("Job posted successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error posting job:", error);
            alert("Failed to post job");
        }
    };

    return (
        <div className='border-bottom pb-3'>

            <div className='d-flex container justify-content-center  pb-5'>
                <div className='col-12 col-lg-11 PostJob'>
                    <h2 className='my-4 fw-bold'>Post a Job</h2>

                    <form onSubmit={handleSubmit}>
                        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                        <div className="row mb-4">
                            <div className=" col-12 col-lg-6 my-3 my-lg-auto">
                                <div data-mdb-input-init className="form-outline">
                                    <label className="form-label" htmlFor="form6Example1">Requirement Title</label>

                                    <input type="text" id="form6Example1" className="form-control" placeholder='Write Here'

                                        value={title}
                                        onChange={(e) => { settitle(e.target.value) }}

                                    />

                                </div>
                            </div>
                            <div className="col">
                                <div data-mdb-input-init className="form-outline">
                                    <label className="form-label" htmlFor="form6Example2">Total Hours</label>

                                    <input type="text" id="form6Example2" className="form-control" placeholder='30'

                                        value={TotalHours}
                                        onChange={(e) => { setTotalHours(e.target.value) }}

                                    />

                                </div>
                            </div>

                            <div className="col">
                                <div data-mdb-input-init className="form-outline">
                                    <label className="form-label" htmlFor="form6Example2">Time Duration</label>
                                    <input type="text" id="form6Example2" className="form-control" placeholder='1 week'

                                        value={TimeDuration}
                                        onChange={(e) => { setTimeDuration(e.target.value) }}

                                    />

                                </div>
                            </div>
                        </div>

                        {/* <!-- Text input --> */}
                        <div className="row mb-4">
                            <div className="col mb-3 my-lg-auto">
                                <div data-mdb-input-init className="form-outline row justify-content-center">


                                    <div className='col-12'>
                                        <label className="form-label col" htmlFor="form6Example2">Hourly Rate</label>
                                    </div>

                                    <div className='col-12 d-flex justify-content-center'>
                                        <input type="text" id="form6Example1" className="form-control col" placeholder='$ 40'

                                            value={rate}
                                            onChange={(e) => { setrate(e.target.value) }}

                                        />

                                        <span className='col-1 text-center mt-1 fs-6'>to</span>

                                        <input type="text" id="form6Example1" className="form-control col " placeholder='$ 50' />
                                    </div>

                                </div>
                            </div>


                            <div className="col-12 col-lg-6">
                                <div data-mdb-input-init className="form-outline">
                                    <label className="form-label" htmlFor="form6Example2">Experience In</label>
                                    <select className="form-select" aria-label="Default select example" value={expirence}
                                        onChange={(e) => { setexpirence(e.target.value) }}>
                                        <option selected hidden>Select</option>
                                        <option value="auto">auto</option>
                                        <option value="leagual">legal</option>
                                        <option value="criminal">criminal</option>
                                    </select>

                                </div>
                            </div>
                        </div>

                        {/* <!-- Text input --> */}
                        <div className="row mb-4">
                            <div className="col-6">
                                <div data-mdb-input-init className="form-outline">
                                    <label className="form-label" htmlFor="form6Example1">City</label>
                                    <select className="form-select" aria-label="Default select example"
                                        value={City}
                                        onChange={(e) => { setCity(e.target.value) }}>
                                        <option selected hidden>Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                </div>
                            </div>

                            <div className="col-6">
                                <div data-mdb-input-init className="form-outline">
                                    <label className="form-label" htmlFor="form6Example1">State</label>
                                    <select className="form-select" aria-label="Default select example" value={State}
                                        onChange={(e) => { setState(e.target.value) }}>
                                        <option selected hidden>Select</option>
                                        <option value="1">Ahmedabad</option>
                                        <option value="2">Surat</option>
                                        <option value="3">Rajkot</option>
                                    </select>

                                </div>
                            </div>

                        </div>

                        {/* <!-- Message input --> */}
                        <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="form6Example7">Description</label>
                            <textarea className="form-control" id="form6Example7" rows="6" placeholder="Write here"

                                value={aboutYou}
                                onChange={(e) => { setaboutYou(e.target.value) }}

                            ></textarea>

                        </div>

                        {/* <!-- Submit button --> */}
                        <button data-mdb-ripple-init type="submit" className="btn btn-block mb-4 px-5 py-2 text-white" style={{ background: "#006ebd" }}>Post Job</button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default PostJob
