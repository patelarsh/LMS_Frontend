import React, { createContext, useEffect, useState } from 'react'
import Navbar from './Navbar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import './App.css'
import Footer from './Footer';
import NearMe from './NearMe';
import Login from './Login';
import PostJob from './PostJob';
import Registration from './Registration';
import AvailableAdvo from './AvailableAdvo';
import LegalAdvice from './LegalAdvice';
import JacobAbout from './JacobAbout';
import PaymentSuccessfully from './PaymentSuccessfully';
import PaymentFailed from './PaymentFailed';
import EditProfile, { Booking } from './EditProfile';
import ForgotPassword from './ForgotPassword';
import FreeCalculator from './FreeCalculator';
import BecomeServiceprovider from './BecomeServiceprovider';
import SuccessfullyCreated from './SuccessfullyCreated';
import Dashboard from './Dashboard';
import EditProfileLaw from './EditProfileLaw';
import Jobpost from './Jobpost';
import LawyerLogin from './LawyerLogin';
import LawForgotPassword from './LawForgotPassword';
import axios from 'axios';
import ChatApp from './P1';
import P1 from './P1';
import Complaint from './Complaint';
import  Message  from './Message';
import VideoCall from './VideoCall';

export const content = createContext();

const Arr = [

    {
        id: 1,
        url: "../image/available2.png",
        name: "Arlene McCoy",
        price: 200
    },

    {
        id: 2,
        url: "../image/available3.png",
        name: "Mirza",
        price: 200
    },

    {
        id: 3,
        url: "../image/available2.png",
        name: "Arlene McCoy",
        price: 200
    },

    {
        id: 4,
        url: "../image/available2.png",
        name: "Arlene McCoy",
        price: 200
    }
    ,

    {
        id: 5,
        url: "../image/available2.png",
        name: "Arlene McCoy",
        price: 200
    }
    ,

    {
        id: 6,
        url: "../image/available2.png",
        name: "Arlene McCoy",
        price: 200
    }
    ,

    {
        id: 7,
        url: "../image/available2.png",
        name: "Arlene McCoy",
        price: 200
    }
    ,

    {
        id: 8,
        url: "../image/available2.png",
        name: "Arlene McCoy",
        price: 200
    }
    ,

    {
        id: 9,
        url: "../image/available2.png",
        name: "Arlene McCoy",
        price: 200
    }
    ,

    {
        id: 10,
        url: "../image/available2.png",
        name: "Arlene McCoy",
        price: 200
    }
    ,

    {
        id: 11,
        url: "../image/available2.png",
        name: "Arlene McCoy",
        price: 200
    }
    ,

    {
        id: 12,
        url: "../image/available2.png",
        name: "Ravi",
        price: 309
    }


]

function App() {

    // useEffect(()=>{
    //     axios.get("https://lawyer-management-system-api.onrender.com/lawyer/dashboard")
    //     .then((res)=>{
    //         console.log(res)
    //     })
    // },[])



    return (
        <div> 
      
      
            <content.Provider value={{ Arr }}>
                
                <BrowserRouter>
               
                    <Routes>
                        <Route path='/' element={<> <Home /> <Footer /> </>}></Route>
                        <Route path='/NearMe' element={<><Navbar></Navbar> <NearMe /> <Footer /> </>}></Route>
                        <Route path='/Login' element={<> <Login /> </>}></Route>
                        <Route path='/Regi' element={<> <Registration /> </>}></Route>
                        <Route path='/ForgotPassword' element={<> <ForgotPassword /> </>}></Route>
                        <Route path='/Available' element={<><Navbar /> <AvailableAdvo /> <Footer /> </>}></Route>
                        <Route path='/PostJob' element={<> <Navbar></Navbar> <PostJob /> <Footer></Footer></>}></Route>
                        <Route path='/LegalAdvice' element={<><Navbar /> <LegalAdvice /> <Footer /> </>}></Route>
                        <Route path='/JacobAbout/:id' element={<><Navbar /> <JacobAbout /> <Footer /> </>}></Route>
                        <Route path='/PaymentSuccessfully' element={<> <Navbar></Navbar> <PaymentSuccessfully /> <Footer></Footer></>}></Route>
                        <Route path='/PaymentFailed' element={<> <Navbar></Navbar> <PaymentFailed /> <Footer></Footer></>}></Route>
                        <Route path='/EditProfile/*' element={<> <Navbar></Navbar> <EditProfile /> <Footer></Footer></>}></Route>
                        <Route path='/FreeCalculator' element={<> <Navbar></Navbar> <FreeCalculator /> <Footer></Footer></>}></Route>


                        {/*  */}

                        <Route path='/LawyerLogin' element={<> <LawyerLogin /> </>}></Route>
                        <Route path='/BecomeServiceprovider/*' element={<> <Navbar></Navbar> <BecomeServiceprovider /> <Footer></Footer></>}></Route>
                        <Route path='/SuccessfullyCreated' element={<> <Navbar></Navbar> <SuccessfullyCreated /> <Footer></Footer></>}></Route>
                        <Route path='/Dashboard/*' element={<> <Navbar></Navbar> <Dashboard /> <Footer></Footer></>}></Route>
                        <Route path='/EditProfileLaw/*' element={<> <Navbar></Navbar> <EditProfileLaw /> <Footer></Footer></>}></Route>
                        <Route path='/Jobpost' element={<> <Navbar></Navbar> <Jobpost /> <Footer></Footer></>}></Route>
                        <Route path='/LawForgotPassword' element={<>  <LawForgotPassword /> </>}></Route>
                        <Route path='/Complaint' element={<><Navbar />  <Complaint /> <Footer /> </>}></Route>
                        <Route path='/Message/:id' element={<><Navbar />  <Message /> <Footer /> </>}></Route>

                        <Route path='/VideoCall' element={<><Navbar />  < VideoCall/> <Footer /> </>}></Route>



                    </Routes>

                </BrowserRouter>

            </content.Provider>


        </div>
    )
}

export default App;

