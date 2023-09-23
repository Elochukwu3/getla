import { ICON, IMAGE_PATH } from "@assets/utils/webImage";
import { PAGE_TEXT } from "@assets/utils/webText";
import HeaderText from "@components/HeaderText";
import { motion } from "framer-motion";
import { scaler } from "@assets/utils/data";

const PageIntro = () => {
  return (
    <div id="overview" className="border-b gap-6 border-zinc-700 flex sm:gap-8  max-md:flex-col max-md:w-sm items-center py-8 max-lg:w-full w-11/12 px-10 max-lg:px-7 max-md:px-6 text-white font-montserrat mx-auto">
      <div className="w-1/2 max-md:w-full relative">
        <img src={ICON.star} alt="" className="absolute z-10 -left-5 scale-50 top-1/3" />
        <motion.div {...scaler}>
        <img src={IMAGE_PATH.bulbImg} alt="" className=" scale-75" />
        </motion.div>
        <img src={IMAGE_PATH.arrowImg} alt="" className=" block ml-auto max-md:mx-auto max-md:scale-50" />
      </div>
      <motion.div
      {...scaler}
      className="flex- w-1/2 max-md:w-full max-md:justify-center max-md:text-center">
        <div className="flex justify-between max-lg:justify-center items-center pb-3 relative">
          <HeaderText
            header1="Introduction to getlinked"
            header2="tech Hackathon 1.0"
          />
          <div className="relative h-fit w-fit max-lg:absolute right-0">
            <img src={ICON.star} alt="" className="grayscale invert" />
          </div>
        </div>
        <p>{PAGE_TEXT.introdructionText}</p>
      </motion.div>
    </div>
  );
};

export default PageIntro;
