import { ROUTES } from "@assets/utils/routes";
import Button from "../button";
import { IMAGE_PATH, ICON } from "@assets/utils/webImage";
import Timer from "@components/Timer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { scaler, starImageAnimation } from "@assets/utils/data";


function HomeBinder() {
  return (
    <div id="sect" className="text-white border-b border-zinc-700 relative">
      <div
        className="opacity-75 max-sm:opacity-50 w-[14rem] h-[15rem] max-md:hidden z-10 absolute left-[16rem] -top-20 bg-[#470985] 
        rounded-full blur-2xl"
     />
      <div className="flex mx-auto w-11/12 justify-between max-md:flex-col-reverse max-md:text-2xl  max-sm:text-base text-3xl font-bold italic font-montserrat text-white">
        <motion.img
         src={ICON.star}
         {...starImageAnimation}
         className="object-contain w-fit h-fit max-md:h-5 max-md:pl-20 max-md:scale-50 max-md:opacity-70"
        />
        <div style={{ whiteSpace: 'nowrap' }}  className="z-10 max-mobile:scale-75">
          <span className="flex gap-2 max-md:justify-center">
            <motion.span
            initial={{ translateX: 200 }}
            whileInView={{ translateX: 0 }}
            transition={{ duration: 0.5, type: "tween" }}
            >
              Igniting a Revolution in
            </motion.span>
            <p className="relative block "
            >
              <motion.span className="relative"
            initial={{ translateX: 200 }}
            whileInView={{ translateX: 0 }}
            transition={{ duration: 0.5, type: "tween" }}
            >
              {" "}
              HR Innovation
              </motion.span>
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
            </p>
          </span>
        </div>
      </div>
      <div className="flex max-md:flex-col z-30 relative max-md:items-center mt-12 ">
        <div className="md:pl-12 w-9/12  max-md:w-10/12  max-sm:text-center ">
          <motion.div 
            initial={{ translateX: 200 }}
            whileInView={{ translateX: 0 }}
            transition={{ duration: 0.5, type: "tween" }}
          className="font-clash space-y-3 font-bold text-7xl max-md:text-5xl max-sm:text-4xl relative">
          <div
        className="w-[16rem] opacity-60 h-[15rem] -left-[4rem] max-md:block hidden z-10 absolute  top-0 bg-[#470985] rounded-full blur-2xl"
      />
            <p>getlinked Tech</p>
            <p className="flex items-end h-16 relative z-30 max-md:justify-center">
              Hackathon <span className="text-custom-highlight ">1.0</span>
              <img
                src={IMAGE_PATH.chainImg}
                alt=""
                className="object-contain max-sm:h-1/2 max-md:h-4/5"
              />
              <img src={IMAGE_PATH.fireImg} alt="" className="object-contain  max-sm:h-1/2"/>
            </p>
          </motion.div>
          <p className="w-8/12 z-30 relative max-md:w-9/12 max-sm:w-full font-Montserrat mb-8">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Link to={ROUTES.register}>
          <Button caption={"register"} />
          </Link>
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
        <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 0.7 }}
        className="w-[14rem] h-[15rem] z-10 absolute right-0 -top-5 bg-[#470985] 
        rounded-full blur-2xl"
      ></motion.div>
          <motion.img
          {...scaler}
           src={IMAGE_PATH.man_Img_Banner} alt="" className=" grayscale" />
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
