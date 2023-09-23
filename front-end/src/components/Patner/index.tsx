import { scaler } from "@assets/utils/data";
import { IMAGE_PATH } from "@assets/utils/webImage";
import { motion } from "framer-motion";

const Patner = () => {
  return (
    <motion.div 
    {...scaler}
    className=" border-b border-zinc-700 pb-10 mb-12">
      <div className="lg:w-1/3 md:w-7/12 sm:w-10/12 mx-auto text-center text-white sm:px-2 my-12">
        <p className="font-clash py-4 text-4xl font-bold max-sm:text-xl ">
          Partners and Sponsors
        </p>
        <p className="font-montserrat">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="relative my-10  border border-custom-purple rounded-md py-14 w-9/12 max-sm:py-10 max-md:w-11/12 max-md:px-5 max-sm:px-2 mx-auto">
        <div className="flex w-9/12 mx-auto gap max-md:w-full justify-center">
          <div className="border-b-4 max-md:border-b-[3px] p-4 border-r-4 border-custom-purple object-contain">
            <img src={IMAGE_PATH.ll} alt="" className="w-28 h-24 mx-auto" />
          </div>
          <div className="border-b-4 max-md:border-b-[3px] relative flex items-center border-r-4 p-4 border-custom-purple ">
            <img src={IMAGE_PATH.libert} alt="" className="w-28 mx-auto" />
            <span className="text-2xl text-custom-highlight right-5   max-md:hidden -top-1 max-md:xl absolute z-20">
            &#x2726;
          </span>
          </div>
          <div className="border-b-4 max-md:border-b-[3px] p-4 border-custom-purple ">
            <img src={IMAGE_PATH.win} alt="" className="w-28 mx-auto" />
          </div>
        </div>
        <div className="flex w-9/12 mx-auto ga item-center max-md:w-full justify-center">
          <div className="border-r-4 max-md:border-r-[3px] p-4 border-custom-purple relative">
            <div className="w-8 h-8 rounded-full bg-custom-purple absolute max-sm:-right-[12%] -right-[12%] -top-[12%]"></div>
            <img src={IMAGE_PATH.whisper} alt="" className="w-28 mx-auto" />
          </div>
          <div className="border-r-4 max-md:border-r-[3px] flex items-center p-4 border-custom-purple relative">
          <div className="w-8 h-8 rounded-full bg-custom-purple absolute max-sm:-right-[12%] -right-[12%] -top-[12%]"></div>

            <img src={IMAGE_PATH.paybox} alt="" className="w-28 mx-auto" />
            <span className="text-2xl text-white left-1 max-md:hidden -bottom-1/3 max-md:xl absolute z-20">
            &#x2726;
          </span>
          </div>
          <div className="p-4 flex items-center">
            <img src={IMAGE_PATH.visual} alt="" className="w-28 mx-auto" />
          </div>
        </div>
        <span className="text-sm hidden max-sm:block text-white right-1/4 bottom-0 absolute z-20">
            &#x2726;
          </span>
        <span className="text-2xl max-md:text-xl max-sm:text-sm max-sm:top-3 text-custom-pp left-[15%] max-md:left-2 -top-[10%] absolute z-20">
            &#x2726;
          </span>
          <div
        className="w-[14rem] opacity-75 h-[15rem] max-md:hidden z-10 -top-6 absolute -left-14 bg-[#470985] 
        rounded-full blur-2xl"
      />
      <div
              className="rounded-full blur-2xl w-[14rem] h-[15rem] max-md:hidden z-10 -bottom-6 absolute opacity-75 -right-20 bg-[#470985] "
              />

      </div>
    </motion.div>
  );
};

export default Patner;
