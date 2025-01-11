import React from "react";
import RegisterCard from "../components/register/RegisterCard";

function Register() {
  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="bg-[#FEDCC5] flex flex-col justify-center md:flex md:flex-row-reverse md:justify-evenly bg-[url('/src/assets/bird_bg.png')] bg-cover bg-left bg-fixed items-center"
      >
        <img
          src="/src/assets/bird.png"
          alt="bird"
          className="animate-float w-[32rem] object-contain md:block hidden"
        />
        <div className="">
          <RegisterCard />
        </div>
      </div>
    </>
  );
}

export default Register;
