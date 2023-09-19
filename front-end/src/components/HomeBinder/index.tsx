import { useState, useEffect } from "react";
import Button from "../button";
import { IMAGE_PATH, ICON } from "@assets/utils/webImage";

function HomeBinder() {
  return (
    <div className="text-white">
      <div className="flex mx-auto w-11/12 justify-between max-md:flex-col-reverse max-md:text-2xl max-sm:text-lg text-3xl font-bold italic font-montserrat text-white">
        <img
          src={ICON.star}
          className="object-contain w-fit h-fit max-md:-scale-y-50 max-md:pl-20"
        />
        <div>
          <span className="flex  max-md:justify-center">
            Igniting a Revolution in
            <span className="relative block">
              {" "}
              HR Innovation
              <svg
                className="w-60 max-md:w-44 max-sm:w-28"
                height="17"
                viewBox="0 0 255 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
                  stroke="#FF26B9"
                  strokeWidth="5"
                />
              </svg>
            </span>
          </span>
        </div>
      </div>
      <div className="flex max-md:flex-col max-md:items-center mt-12">
        <div className="md:pl-12 w-7/12  max-md:w-10/12  max-sm:text-center ">
          <div className="font-clash space-y-3 font-bold text-7xl max-md:text-4xl max-sm:text-3xl">
            <p>getlinked Tech</p>
            <p>
              Hackathon <span className="text-custom-highlight">1.0</span>
              <img src="" alt="" />
              <img src="" alt="" />
            </p>
          </div>
          <p className="w-8/12 max-md:w-9/12 max-sm:w-full font-Montserrat mb-8">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Button caption={"register"} />
          <div className="my-9">00 00 00</div>
        </div>
        <div>
          <img src={IMAGE_PATH.man_Img_Banner} alt="" className="w-1/" />
        </div>
      </div>
    </div>
  );
}

export default HomeBinder;
