import { useState, useEffect } from "react";
import Button from "../button";
import { IMAGE_PATH, ICON } from "@assets/utils/webImage";
import Timer from "@components/Timer";

function HomeBinder() {
  return (
    <div className="text-white border-b border-zinc-700">
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
      <div className="flex max-md:flex-col max-md:items-center mt-12 ">
        <div className="md:pl-12 w-9/12  max-md:w-10/12  max-sm:text-center ">
          <div className="font-clash space-y-3 font-bold text-7xl max-md:text-5xl max-sm:text-4xl">
            <p>getlinked Tech</p>
            <p className="flex items-end relative z-30 max-md:justify-center h-24">
              Hackathon <span className="text-custom-highlight ">1.0</span>
              <img
                src={IMAGE_PATH.chainImg}
                alt=""
                className="object-contain  max-md:scale-50 max-md:w-1/2 h-full"
              />
              <img src={IMAGE_PATH.fireImg} alt="" className="object-contain max-md:scle-50 max-md:w-1/2 "/>
            </p>
          </div>
          <p className="w-8/12 max-md:w-9/12 max-sm:w-full font-Montserrat mb-8">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Button caption={"register"} />
          <div className="w-7/12 mt-20 md:block hidden">
            <img
              src={ICON.star}
              alt=""
              className="invert-60 w-5 ml-auto block "
            />
          </div>
          <div className="my- font-unical text-5xl flex gap-3 max-md:justify-center">
            <Timer />
          </div>
        </div>
        <div className="relative">
          <img src={IMAGE_PATH.man_Img_Banner} alt="" className=" grayscale" />
          <img
            src={IMAGE_PATH.moonImg}
            alt=""
            className="absolute left-0 -top-10 z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeBinder;
