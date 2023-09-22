import { useState, useEffect } from "react";
import Button from "../button";
import { IMAGE_PATH, ICON } from "@assets/utils/webImage";
import Input from "@components/Input";
import Category from "./Category";
import Group from "./Group";


function Register() {
  const numberOfGroup = Array.from({ length: 15 }, (_, i) => i + 1);
  return (
    <div className="grid grid-cols-2 w-10/12 mx-auto">
      <div className="">
        <img src={IMAGE_PATH.reg} alt="" />
      </div>
      <div className="text-white font-montserrat bg-move p-8">
        <p className="text-custom-highlight font-clash font-bold text-2xl mb-8">
          Register
        </p>
        <div className="text-sm">
          <span>Be part of this movement!</span>
        </div>
        <p className="my-4 text-xl font-bold">CREATE YOUR ACCOUNT</p>
        <div className="space-y-8">
          <div className="flex justify-between w-full gap-3">
            <Input
              label="Team’s Name"
              id="team"
              placeholder="Enter the name of your group"
            />
            <Input
              label="Project Topic"
              id="Project"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex justify-between w-full gap-3">
            <Input
              label="Email"
              id="Email"
              placeholder="Enter your email address"
            />
            <Input
              label="Phonee"
              id="phone"
              placeholder="What is your group project topic"
            />
          </div>
          <div className="flex justify-between w-full gap-3">
           <Category/>
           <Group/>
          </div>
        </div>
        <span className="text-pink-500 text-sm block pt-3">
          Please review your registration details before submitting
        </span>
        <div className="flex items-center bg-inherit my-5 text-sm gap-3">
          <input type="checkbox" className="bg-inherit" />
          <span>
            I agreed with the event terms and conditions and privacy policy
          </span>
        </div>
        <div>
          <Button bool={true} caption="Register Now" />
        </div>
      </div>
    </div>
  );
}

export default Register;
