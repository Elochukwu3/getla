import { scaler } from "@assets/utils/data";
import { ICON, IMAGE_PATH } from "@assets/utils/webImage";
import { PAGE_TEXT } from "@assets/utils/webText";
import HeaderText from "@components/HeaderText";
import { motion } from "framer-motion";

const PageRules = () => {
  return (
    <div
    className="flex-row-reverse border-b gap-5 border-zinc-700 flex max-md:flex-col items-center py-8 w-full px-10 max-md:px-6 text-white font-montserrat mx-auto">
      <motion.div
      {...scaler}
       className="w-1/2 max-md:w-full relative">
        <img src={IMAGE_PATH.womanImg} alt="" className="" />
      </motion.div>
      <div className="flex- w-1/2 max-md:w-full max-md:text-center relative">
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        className="w-[20rem] h-[20rem] z-10 absolute left-10 top-0 bg-[#470985] opacity-5 rounded-full blur-3xl"
      ></motion.div>
        <div className="mb-4 relative z-10">
            <img src={ICON.star} alt="" className="grayscale invert-60 w-5 h-5 mx-auto block mb-5 max-md:absolute max-md:-right-4 max-md:top-7" />
          <HeaderText header1=" Rules and" header2="Guidelines" />
        </div>
        <motion.p 
        {...scaler}
         className=" relative z-10">{PAGE_TEXT.rulestext}</motion.p>
        <img
          src={ICON.star}
          alt=""
          className="w-4 h-4 my-5 block ml-auto max-md:ml-10"
        />
      </div>
    </div>
  );
};

export default PageRules;
