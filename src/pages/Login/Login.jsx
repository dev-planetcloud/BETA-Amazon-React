import React from 'react'
import MuiAutocomplete from '../../components/MuiAutocomplete'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {
    const [showRegistration, setShowRegistration] = useState(false);

    const handleRegistrationClick = () => {
        setShowRegistration(true);
    };

    const handleCloseRegistration = () => {
        setShowRegistration(false);
    };

    return (

        <div style={{fontFamily: 'Kanit'}} className="login-content relative flex items-top justify-center min-h-screen bg-white sm:bg-gray-200 sm:items-center sm:pt-0">
            <div className="relative md:flex rounded-none md:rounded-[30px]  shadow-xl w-full md:w-auto">
                <div className="md:shrink-0 relative ">
                    <img
                        className="h-[26rem] w-full object-cover md:h-full md:w-96 rounded-none md:rounded-l-[30px]"
                        src="../src/assets/images/imglogin.svg" />
                    <div
                        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:top-1/2 text-center">
                        <div className="text-left">
                            <span className="text-white text-5xl sm:text-6xl">Welcome</span><br />
                            <span className="text-white text-xl font-extralight">To Parking Dashboard</span><br />
                            <div className="bg-white col-span-1 border-t my-2"></div>
                            <span className="text-white font-extralight text-xs sm:text-base">ระบบบริหารจัดการที่จอดรถอัจฉริยะ</span>
                        </div>
                    </div>
                </div>

                <div className="absolute w-[90%] top-[48%] left-[50%]  -translate-x-1/2 -translate-y-1/2 sm:w-full sm:translate-y-0 sm:translate-x-0 sm:left-0 sm:top-0 sm:relative rounded-[30px] sm:rounded-none md:rounded-r-[30px] bg-white  shadow-[2px_2px_15px_-5px_rgba(0,0,0,0.25)] sm:shadow-none">
                    <div className="p-8">
                        <div className="justify-center items-center text-center flex mx-auto">
                            <img className="h-16 sm:h-20" src="../src/assets/images/logo.svg" />
                            <div className="text-3xl sm:text-5xl">
                                <span className="font-light">Planet<span className="font-normal text-lime-500">EV</span></span>
                            </div>
                        </div>

                        <form className=' mt-8 sm:mt-10'>
                            <div className="relative mb-4 ">
                                <label className=" text-[#A3BEC0]">กรอกทะเบียนรถของคุณ</label>
                                <input className=" w-full px-4 py-2 mt-2 text-cyan-600 md:w-full lg:w-90 bg-gray-50 border rounded-md border-[#1ab6c1]  focus:ring-cyan-300 focus:outline-none focus:ring-2 " />
                            </div>

                            <div className="relative mb-1 ">
                                <label className=" text-[#A3BEC0]">จังหวัดของทะเบียนรถคุณ</label>
                                {/* <input className=" w-full px-4 py-2 mt-2 text-cyan-600 md:w-full lg:w-90 bg-gray-50 border rounded-md border-[#1ab6c1]  focus:ring-cyan-300 focus:outline-none focus:ring-2 " /> */}
                                <MuiAutocomplete />
                            </div>



                            <div className="mb-1 pt-4 pb-1 text-center">
                                <div
                                    className="cursor-pointer bg-gradient-to-b from-cyan-500 to-teal-400 mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                    onClick={handleRegistrationClick}>
                                    <span  className="text-base sm:text-xl">เข้าสู่ระบบ</span>
                                </div>
                            </div>
                            <div className="pb-1 text-center ">
                                <Link to="/register" className="text-base sm:text-xl underline text-[#138BBD] cursor-pointer" >ลงทะเบียน</Link>
                            </div>

                        </form>


                    </div>
                </div>



            </div>
            {showRegistration && (
                <div className="bg-gray-200 bg-opacity-75 absolute inset-0 flex items-center justify-center">
                    <div className=" w-[30vh] sm:w-[35vh] md:w-80 lg:w-90 h-[40%] ">
                        <div className="p-4 bg-white rounded-[30px]">
                            <div className="flex items-center justify-center">
                                <img src="../src/assets/images/icon plate.svg" />
                            </div>
                            <div className="text-center font-light mt-2">
                                <span className="text-[#1AB6C1] text-base">ไม่พบข้อมูลทะเบียนรถของคุณ</span><br />
                                <span className="text-[#B0B0B0] text-sm">กรุณาลงทะเบียนเพื่อใช้บริการ</span>
                                <div className="pt-2 text-center">
                                    <Link
                                        to='/register'
                                        className="bg-gradient-to-b from-cyan-500 to-teal-400 mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-light uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                        type="submit">
                                        <span className="text-base">ลงทะเบียน</span>
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <button
                                        className="border-[1px] border-[#2AADCE] mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-light uppercase leading-normal text-[#2AADCE] shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                        type="button" onClick={handleCloseRegistration}>
                                        <span className="text-base">ยกเลิก</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Login