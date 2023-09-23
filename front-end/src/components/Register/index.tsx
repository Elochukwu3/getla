import { IMAGE_PATH} from "@assets/utils/webImage";
import Input from "@components/Input";
import Category from "./Category";
import Group from "./Group";
import useSubmit from "./hook/useSubmit";
import Load from "@components/Load";
import Loader from "@components/Load/Loader";
import { motion } from "framer-motion";


function Register() {
 const { responseData, error, isLoading, submitForm } = useSubmit();
  
  return (
    <>
    {responseData && <Load bool={false}/>}
    {isLoading && <Loader/>}
  
    <div className="grid relative grid-cols-2 w-10/12 max-lg:flex max-lg:justify-center  max-lg:w-full max-md:w-full max-md:grid-cols-1 mx-auto">
      <motion.div
      whileHover={{ scale: 0.9 }} 
      whileTap={{ scale: 1 }}   
      initial={{ scale: 0.7 }}
       whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
       className="relative max-lg:hidden block">
          <motion.div
    initial={{opacity: 0.7}}
    animate={{opacity: 0.8}}
    className="w-[20rem] h-[20rem] top-10 bg-[#470985] absolute z-20 rounded-full blur-2xl"
    >
      
    </motion.div>
        <img src={IMAGE_PATH.reg} alt="" className="relative z-30"/>
         <span className="text-xl max-sm:text-sm text-custom-highlight top-10 left-0  absolute z-20">
              &#x2726;
            </span>
         <span className="text-xl max-sm:text-sm text-zinc-500 bottom-10 left-0  absolute z-20">
              &#x2726;
            </span>
         <span className="text-xl max-md:right-1/3 max-sm:text-sm text-violet-500 bottom-1/4 right-1/3  absolute z-20">
              &#x2726;
            </span>
      </motion.div>
      <form onSubmit={submitForm} className="text-white font-montserrat bg-move p-8 relative max-md:p-4 max-sm:p-4 w-full">
  

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
        {error &&  <p className="my-2 textsm text-red-600"> error occured, Try again.</p>}

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
              label="Phone"
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
          <input type="checkbox" id="checked" className="bg-inherit" required/>
          <span>
            I agreed with the event terms and conditions and privacy policy
          </span>
        </div>
        <div className="max-md:w-172 max-md:mx-auto w-full relative z-30">
          <button type={"submit"} className={`capitalize rounded-sm outline-none px-2 w-full h-53 bg-button-gradient text-white text-base font-montserrat`}>Register Now</button>

        </div>
      </form>
 
    </div>
    </>
  );
}

export default Register;
