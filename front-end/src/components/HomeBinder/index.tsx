import { useState, useEffect } from "react";
import Button from "../button";
import { ICON } from "@assets/utils/webImage";

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
      <div>
        <div className="font-clash font-bold text-7xl max-md:text-4xl max-sm:text-3xl">
        <p>getlinked Tech</p>
        <p>Hackathon <span className="text-custom-highlight">1.0</span></p>
        </div>
        <p>
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
      </div>
    </div>
  );
}

export default HomeBinder;
