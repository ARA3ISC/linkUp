import React from "react";
import Button from "../components/buttons/Button";

function Landing() {
  return (
    <>
      <section className="container mx-auto h-screen px-4 py-2 text-center md:flex md:justify-around md:items-center">
        <div className="md:w-1/2 md:text-start">
          <h1 className="pt-14 pb-8 text-5xl font-abril  md:leading-normal ">
            Seamless Conversations, Real-Time Messaging, Anytime You Want
          </h1>
          <p className="text-[#505050] font-light text-lg">
            Stay connected with anyone, anywhere, and at any time. Our app
            ensures smooth, fast, and reliable communication, so you're never
            out of touch
          </p>
          <div className="flex justify-center md:justify-start py-6">
            <Button value="Let's Chat!" />
          </div>
        </div>


        <div className="m-10 flex justify-center">
          <img
            src="/src/assets/smiling-woman.png"
            alt="smiling-woman"
            className="w-[32rem] object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default Landing;
