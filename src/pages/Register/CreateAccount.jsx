import React from "react";
import Navbar from "../../components/Navbar";
import AutocomCreate from "../../components/AutocomCreate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  // const [topping, setTopping] = useState(null);

  // const onOptionChange = (e) => {
  //   setTopping(e.target.value);
  // };
  // console.log("Type:", topping);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    license_plate: "",
    province: "",
    countries: "",
  });

  const [formError, setFormError] = useState({});

  const onChangeHandler = (event) => {
    console.log(event);

    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const onProvinceChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      province: value,
    }));
  };

  const validateForm = () => {
    let err = {};

    if (formData.firstname === "") {
      err.firstname = "กรุณากรอกข้อมูลให้ครบถ้วน!";
    }

    if (formData.lastname === "") {
      err.lastname = "กรุณากรอกข้อมูลให้ครบถ้วน!";
    }
    if (formData.phone === "") {
      err.phone = "กรุณากรอกข้อมูลให้ครบถ้วน!";
    } else {
      let regex = /^(0[689]{1})+([0-9]{8})+$/g;
      if (!regex.test(formData.phone)) {
        err.phone = "กรุณากรอกข้อมูลให้ถูกต้อง!";
      }
    }

    if (formData.license_plate === "") {
      err.license_plate = "กรุณากรอกข้อมูลให้ครบถ้วน!";
    }

    if (formData.province === "") {
      err.province = "กรุณากรอกข้อมูลให้ครบถ้วน!";
    }
    

    if (formData.countries === "") {
      err.countries = "โปรดเลือกประเภทรถ";
    }

    setFormError({ ...err });

    return Object.keys(err).length < 1;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    let isValid = validateForm();

    if (isValid) {
      alert("Submitted");
      navigate("/otp" ,{ state :{ phone: formData.phone }});
      //API call to server
    } else {
      alert("In-Valid Form");
    }
    console.log(isValid);
  };

  return (
    <>
      <Navbar />
      <div style={{fontFamily: 'Kanit'}} className="pl-6 pr-6 sm:pl-[20%] sm:pr-[20%] pt-10">
        <div className="pb-5">
          <div className="pb-3 text-[#333333] text-left">
            ข้อมูลการลงทะเบียน
          </div>

          <form onSubmit={onSubmitHandler}>
            <div className="mb-4">
              <label className="text-sm font-light text-[#97A9AA]">ชื่อ</label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                name="firstname"
                onChange={onChangeHandler}
                value={formData.firstname}
              />
              <span className="non-valid non-valid text-red-500 text-xs">
                {formError.firstname}
              </span>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-light text-[#97A9AA]">
                นามสกุล
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                name="lastname"
                value={formData.lastname}
                onChange={onChangeHandler}
              />
              <span className="text-red-500 text-xs">
                {/* กรุณากรอกข้อมูลให้ครบถ้วน */}
                {formError.lastname}
              </span>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-light text-[#97A9AA]">
                เบอร์โทรศัพท์
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={onChangeHandler}
              />
              <span className="text-red-500 text-xs">{formError.phone}</span>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-light text-[#97A9AA]">
                ทะเบียนรถ
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                name="license_plate"
                value={formData.license_plate}
                onChange={onChangeHandler}
              />
              <span className="text-red-500 text-xs">
                {formError.license_plate}
              </span>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-light text-[#97A9AA]">
                จังหวัดของทะเบียนรถคุณ
              </label>
              <AutocomCreate onProvinceChange={onProvinceChange} />
                <span className="text-red-500 text-xs">
                  {formError.province}
                </span>
            </div>

            <div className="mb-4">
              <label className="mb-4 block text-sm font-light text-[#97A9AA]">
                Vehicle Types
              </label>

              <fieldset className="flex">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="countries"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-[#27AECB] dark:focus:bg-[#27AECB] dark:bg-gray-700 dark:border-gray-600"
                    value="EV"
                    // checked={topping === "EV"}
                    // onChange={onOptionChange}
                    onChange={onChangeHandler}
                    checked={formData.countries === "EV"}
                  />
                  <label className="block ml-2 text-sm font-light text-[#97A9AA]">
                    รถไฟฟ้า (EV)
                  </label>
                </div>

                <div className="flex items-center pl-5">
                  <input
                    type="radio"
                    name="countries"
                    value="other"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    // checked={topping === "other"}
                    // onChange={onOptionChange}
                    onChange={onChangeHandler}
                    checked={formData.countries === "other"}
                  />
                  <label className="block ml-2 text-sm font-light text-[#97A9AA]">
                    อื่นๆ
                  </label>
                </div>
                
              </fieldset>
              <span className="text-red-500 text-xs">
                {formError.countries}</span>
            </div>

            <div className="flex justify-center">
              <div className="w-full sm:w-[25%] pt-0 sm:flex sm:justify-around">
                <div className="pt-2 sm:pt-0 text-center">
                  <button
                    className="bg-gradient-to-b from-cyan-500 to-teal-400 mb-3 inline-block w-full rounded px-6 sm:px-10 pt-2.5 pb-2 text-xs font-light uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    type="submit"
                  >
                    <span className="text-base">ยืนยันการลงทะเบียน</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
