import Button from "../button";
import { IMAGE_PATH} from "@assets/utils/webImage";
import Input from "@components/Input";
import Category from "./Category";
import Group from "./Group";


function Register() {
  return (
    <div className="grid grid-cols-2 w-10/12 lg:w-11/12 max-md:w-full max-md:grid-cols-1 mx-auto">
      <div className="relative">
        <img src={IMAGE_PATH.reg} alt="" />
         <span className="text-xl max-sm:text-sm text-custom-highlight top-10 left-0  absolute z-20">
              &#x2726;
            </span>
         <span className="text-xl max-sm:text-sm text-zinc-500 bottom-10 left-0  absolute z-20">
              &#x2726;
            </span>
         <span className="text-xl max-md:right-1/3 max-sm:text-sm text-violet-500 bottom-1/4 right-1/3  absolute z-20">
              &#x2726;
            </span>
      </div>
      <div className="text-white font-montserrat bg-move p-8 relative max-md:p-4 max-sm:p-4 w-full">
      <span className="text-3xl max-md:right-1 max-sm:text-sm text-zinc-500 top-5 right-1/4  absolute z-20">
              &#x2726;
            </span>
        <p className="text-custom-highlight font-clash font-bold text-2xl mb-8">
          Register
        </p>
        <div className="text-sm">
          <span>Be part of this movement!</span>
        </div>
        <p className="my-4 text-xl font-bold">CREATE YOUR ACCOUNT</p>
        <div className="space-y-8">
          <div className="flex justify-between w-full gap-3 max-sm:flex-col">
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
          <div className="flex justify-between w-full gap-3 max-sm:flex-col">
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
          <div className="flex justify-between w-full gap-3 max-sm:flex-col">
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
        <div className="max-md:w-172 max-md:mx-auto">
          <Button bool={true} caption="Register Now" />
        </div>
      </div>
    </div>
  );
}

export default Register;
