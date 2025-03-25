import { Opacity, Phone, Visibility } from '@mui/icons-material';
import { dark } from '@mui/material/styles/createPalette';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'

function BecomeServiceprovider() {

  const [formdata, setformdata] = useState({});

  const handlepost = (v) => {

    setformdata(v)

  }

  return (
    <div className=' border-bottom pb-5'>

      <div className='pb-5'>

        {/* <!-- Main Heading --> */}
        <div class=" d-flex justify-content-center py-3">

          <h3 class="fw-bold col-12 col-lg-8 text-center text-lg-start">Become
            a Service Provider</h3>

        </div>

        <>

          <Routes>
            <Route path='/' element={<><BecomeServiceproviderPersonalinfo props={handlepost} /></>}></Route>
            <Route path='BecomeServiceproviderProfessionalo' element={<><BecomeServiceproviderProfessionalo props2={formdata} /></>}></Route>

          </Routes>

        </>
      </div>


    </div>
  )
}


function BecomeServiceproviderPersonalinfo({ props }) {
  const navi = useNavigate("");

  const [image, setimage] = useState(null);
  const [fullName, setfullName] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Conpassword, setConpassword] = useState("");


  const ref1 = useRef();

  const handleinput = () => {

    ref1.current.click();

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if (image === "" || fullName === "" || mobileNumber === "" || email === "" || password === "") {
      alert("Enter The value..?")
    }

    else if (password !== Conpassword) {

      alert("Password no  Match..?")
    }

    else {

      var data = {
        image: image,
        fullName: fullName,
        mobileNumber: mobileNumber,
        email: email,
        password: password
      }

      props(data);


      navi("/BecomeServiceprovider/BecomeServiceproviderProfessionalo")

    }

  }

  // useEffect(() => {
  //   if (image) {
  //     // Save the image URL in localStorage when it's selected
  //     localStorage.setItem("userImage", image);
  //   }
  // }, [image]);


  const imageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append("file", file);
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
  
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
  
        // Set new size (Adjust width & height as needed)
        const MAX_WIDTH = 300;
        const MAX_HEIGHT = 300;
  
        let width = img.width;
        let height = img.height;
  
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
  
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
  
        const resizedBase64 = canvas.toDataURL("image/jpeg", 0.7); // 70% quality for compression
        setimage(resizedBase64);
      };
    };
  };
  

  console.log(image)

  return (
    <div>
      <img src={image}></img>
      <input
        type="file"
        ref={ref1}
        onChange={imageChange}
        style={{ display: "none" }}
      />
 
      {/* <!-- Success Gateway --> */}
      <div class=" d-flex justify-content-center pt-5 pb-4">

        <div class="col-12 col-lg-6">

          <div class="d-flex ">

            {/* <!-- Circle-1 --> */}
            <div
              class="col-6 d-flex justify-content-center align-items-center">

              {/* <!-- Line before Circle --> */}
              <div class="border succgtw border-2 col"></div>

              {/* <!-- Circle in which 1 is written --> */}
              <div
                class="col-1 position-relative succcir rounded-pill"
                style={{ padding: "40px" }}>
                <b
                  class="position-absolute top-50 start-50 translate-middle fs-4 text-light">1</b>
              </div>

              {/* <!-- Line after Circle --> */}
              <div class="border succgtw border-2 col"></div>
            </div>

            {/* <!-- Circle-2 --> */}
            <div
              class="col-6 d-flex justify-content-center align-items-center">

              {/* <!-- Line before Circle --> */}
              <div class="border border-2 col"></div>

              {/* <!-- Circle in which 2 is written --> */}
              <div
                class="col-1 position-relative border border-4 rounded-pill"
                style={{ padding: "40px" }}>
                <b
                  class="position-absolute top-50 start-50 translate-middle fs-4">2</b>
              </div>

              {/* <!-- Line after Circle --> */}
              <div class="border border-2 col"></div>
            </div>

          </div>
        </div>

      </div>

      {/* <!-- Form Heading --> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "338px" }}>

          <h3 class="text-center fw-bold">Personal Info</h3>

          <div class="d-flex justify-content-center py-3">

            {/* <!-- User Profile Photo icon--> */}
            <div onClick={handleinput} class="rounded-pill position-relative lawyer_profileimg"
              style={{  backgroundImage: `url(${image})`}}>
                {(!image)? <i
                class="fa-solid fa-user fs-1 text-secondary position-absolute top-50 start-50 translate-middle"></i> 
                : false}
              

              {/* <!-- Camera icon --> */}
              <div class="position-absolute bottom-0 end-0 me-2 mb-2">
                <div
                  class="rounded-pill position-relative Camera"
                  style={{ padding: "19px 19px" }}>
                  <i
                    class="fa-solid fa-camera text-light position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </div>

            </div>

          </div>

          {/* <!-- Form --> */}

          <div class="">

            <form onSubmit={handleSubmit} style={{ fontSize: "16px" }}>

              <div class="my-3">
                <label for class="fw-bold py-2">Full Name</label>
                <input type="text" class="form-control lh-lg"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => { setfullName(e.target.value) }}

                />
              </div>

              <div class="my-3">
                <label for class="fw-bold py-2">Mobile Number</label>
                <input type="text" class="form-control  lh-lg"
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => { setmobileNumber(e.target.value) }}

                />
              </div>

              <div class="my-3">
                <label for class="fw-bold py-2">Email</label>
                <input type="text" class="form-control lh-lg"
                  placeholder="Email"

                  value={email}
                  onChange={(e) => { setemail(e.target.value) }}

                />
              </div>

              <div class="my-3">
                <label for class="fw-bold py-2">Password</label>
                <div class="position-relative">
                  <input type="password" class="form-control lh-lg"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => { setpassword(e.target.value) }}

                  />
                  <i class="ri-eye-line position-absolute top-50 end-0 me-2 translate-middle-y fs-5"></i>
                </div>
              </div>

              <div class="my-3">
                <label for class="fw-bold py-2">Confirm Password</label>
                <div class="position-relative">
                  <input type="password" class="form-control lh-lg"
                    placeholder="Confirm Password"

                    value={Conpassword}
                    onChange={(e) => { setConpassword(e.target.value) }}
                  />

                  <i class="ri-eye-close-line position-absolute top-50 end-0 me-2 translate-middle-y fs-5"></i>
                </div>
              </div>

              <button type='submit' class="btn reg1btn w-100">Continue</button>

            </form>
          </div>
        </div>

      </div>

    </div>
  )
}



function BecomeServiceproviderProfessionalo({ props2 }) {

  const [rate, setrate] = useState("");
  const [aboutYou, setaboutYou] = useState("");
  const [skills, setskills] = useState(["Litigation", "Negotiation", "Contract Drafting"]);
  const [specialization, setspecialization] = useState("");
  const [experience, setexperience] = useState("");
  const navi = useNavigate("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (rate === "" || aboutYou === "" || skills === "" || specialization === "" || experience === "") {
      alert("Enter The Value..?")
    }

    else {

      axios.post("https://lawyer-management-system-api.onrender.com/lawyer/lawyer-signup",
        {
          ...props2,
          rate,
          aboutYou,
          skills,
          specialization,
          experience,
        }
      )

        .then((res) => {

          if (res) {
            alert("Registration SuccessFully...?");
            navi("/LawyerLogin")
          }

        })

        // .then((data)=>{
        //      console.log(data)
        // })

        .catch((error) => {
          console.error(error)
        })
    }


  };


  const handleskills = (out) => {

    const aar = skills.filter((v) => {

      return v !== out

    })

    setskills(aar)

  }


  return (
    <>

      <div class=" d-flex justify-content-center pt-5 pb-4">

        <div class="col-12 col-lg-6">

          <div class="d-flex ">

            <div
              class="col-6 d-flex justify-content-center align-items-center">
              <div class="border border-2 col"></div>

              <div
                class="col-1 position-relative border border-4 rounded-pill"
                style={{ padding: "40px" }}>
                <b
                  class="position-absolute top-50 start-50 translate-middle fs-4">1</b>
              </div>

              <div class="border border-2 col"></div>
            </div>

            {/* <!-- Circle-2 --> */}
            <div
              class="col-6 d-flex justify-content-center align-items-center">

              {/* <!-- Line before Circle --> */}
              <div class="border succgtw border-2 col"></div>

              {/* <!-- Circle in which 2 is written --> */}
              <div
                class="col-1 position-relative succcir rounded-pill"
                style={{ padding: "40px" }}>
                <b
                  class="position-absolute top-50 start-50 translate-middle fs-4 text-light">2</b>
              </div>

              {/* <!-- Line after Circle --> */}
              <div class="border succgtw border-2 col"></div>
            </div>

          </div>
        </div>

      </div>

      <div class="d-flex justify-content-center">
        <div class="col-12 col-lg-5 col-xxl-3">

          <h3 class="text-center fw-bold">Professional Info</h3>

          <div class="p-2 px-lg-5 py-4">

            <form onSubmit={handleSubmit} style={{ fontSize: "16px" }}>
              <div class="my-3">
                <label class="fw-bold py-2">Rate (Per hour)</label>
                <input type="text" class="form-control"

                  value={rate}
                  onChange={(e) => { setrate(e.target.value) }}

                  placeholder="$" />
              </div>

              <div class="my-3">
                <label class="fw-bold py-2">About You</label>
                <textarea class="form-control"
                  id="exampleFormControlTextarea1"
                  value={aboutYou}
                  onChange={(e) => { setaboutYou(e.target.value) }}
                  rows="6"></textarea>
              </div>

              <div class="my-3">
                <label class="fw-bold py-2">Skills</label>
                <div class="form-control p-1 d-flex flex-wrap gap-2">

                  {

                    skills.map((v) => (
                      <button class="border-0 px-2 py-1"
                        style={{ fontSize: "12px" }}>{v}

                        <i onClick={() => { handleskills(v) }}

                          class="fa-solid fa-xmark"></i></button>
                    ))

                  }

                </div>
              </div>

              <div class="my-3">
                <label class="fw-bold py-2">Example select</label>
                <select class="form-select"

                  value={specialization}
                  onChange={(e) => { setspecialization(e.target.value) }}

                >
                  <option hidden>Select</option>
                  <option value="criminal">criminal</option>
                  <option>Accident</option>
                  <option>murder</option>
                </select>
              </div>

              <div class="my-3">
                <label class="fw-bold py-2">Resolution Experience</label>
                <textarea class="form-control"
                  id="exampleFormControlTextarea1"

                  value={experience}
                  onChange={(e) => { setexperience(e.target.value) }}

                  rows="6"></textarea>
              </div>

              <div class="my-3">
                <label class="fw-bold py-2">About You</label>

                <div class="form-control text-center p-5 position-relative"
                  style={{ border: "dotted", borderColor: "lightgray", background: "#f5faff" }}>

                  <i type="button"
                    id="dropid"
                    class="fa-solid fa-cloud-arrow-up fs-1 my-1">
                  </i>
                  {/* <!-- is input ko use karke karna he --> */}

                  <input type="file" id="fileInput"
                    style={{ display: "none" }} />

                  <p style={{ fontSize: "12px" }} class="my-1">Drag &
                    Drop to upload document</p>
                  <i class="fa-solid fa-camera position-absolute bottom-0 end-0 me-2 mb-2"></i>
                </div>

              </div>

              <div class="mt-2 mb-4">

                <a href
                  class="text-decoration-none fw-bold link-primary "
                  style={{ fontSize: "14px" }}><i
                    class="fa-solid fa-circle-plus"></i> Add
                  more Documents/Certificate</a>

              </div>

              <button type='submit' class="btn reg2btn w-100">Register</button>
            </form>
          </div>
        </div>
      </div>


    </>
  )
}


export default BecomeServiceprovider
