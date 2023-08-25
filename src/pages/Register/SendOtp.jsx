import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useLocation } from "react-router-dom";

function SendOtp() {
  const location = useLocation();
  const { phone } = location.state || "";
  return (
    <div>
      <Navbar />
      <div
        style={{ fontFamily: "Kanit" }}
        className="pl-6 pr-6 sm:pl-[20%] sm:pr-[20%] pt-10"
      >
        <div className="pb-5">
          <div className="pb-3 text-[#333333] text-center text-2xl">
            ยืนยันตัวตนด้วย OTP
            <form>
              <div className="mb-4 text-center">
                <div className="text-[#B0B0B0] text-base sm:text-xl font-light my-4">
                  รหัส OTP ได้ถูกส่งไปยังหมายเลข {phone} กรุณาใส่หัส OTP
                  ที่คุณได้รับ
                </div>
                <div className="text-[#1EB2C3]"></div>
              </div>
              <div
                id="otp"
                className="flex flex-row justify-center text-center px-2 mt-4"
              >
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded bg-[#F5F6F8]"
                  type="text"
                  id="first"
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded bg-[#F5F6F8]"
                  type="text"
                  id="second"
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded bg-[#F5F6F8]"
                  type="text"
                  id="third"
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded bg-[#F5F6F8]"
                  type="text"
                  id="fourth"
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded bg-[#F5F6F8]"
                  type="text"
                  id="fifth"
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded bg-[#F5F6F8]"
                  type="text"
                  id="sixth"
                />
              </div>

              <div className="flex justify-center text-center mt-5 mb-20 text-base">
                <span className="text-[#B0B0B0]">ไม่ได้รับ OTP ? </span>
                <div className="flex items-center text-[#20B1C5] cursor-pointer">
                  <span className="pl-2 underline"> ส่งอีกครั้ง</span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-full sm:w-[25%] pt-0 sm:flex sm:justify-around">
                  <div className="pt-2 sm:pt-0 text-center">
                    <button
                      className="bg-gradient-to-b from-cyan-500 to-teal-400 mb-3 inline-block w-full rounded px-6 sm:px-10 pt-2.5 pb-2 text-xs font-light uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="submit"
                    >
                      <span className="text-base">ยืนยัน</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendOtp;
