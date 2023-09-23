import { IMAGE_PATH } from "@assets/utils/webImage";
import { PAGE_TEXT } from "@assets/utils/webText";
import FlexWrapper from "@components/FlexWrapper";
import HeaderText from "@components/HeaderText";
import { motion } from "framer-motion";

function PageCriteria() {
  return (
    <>
      <FlexWrapper>
        <div className="flex- w-1/2 max-md:w-full relative  shrink-0">
          <img src={IMAGE_PATH.humanImg} alt="" className="relative z-10 shrink-0"/>
          <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0.7 }}
        className="w-[20rem] h-[15rem] max-2xl:bottom-14 max-xl:bottom-20 max-lg:bottom-3 max-md:bottom-0 absolute left-0 bottom-0 -max-sm:bottom-5 bg-[#470985] rounded-full blur-2xl"
      ></motion.div>
        </div>
        <div className="flex- w-1/2 max-md:w-full max-md:text-center space-y-5 relative py-14">
        <div
        className="w-[15rem] opacity-75 max-sm:opacity-50 h-[15rem] z-10 absolute right-0 -bottom-[10rem] bg-[#470985] max-md:hidden rounded-full blur-2xl"
     />
          <HeaderText header1="Judging Criteria" header2="Key attributes " />
          {PAGE_TEXT.judgingCriteria.map((item) => (
            <p className="relative z-10">
              <span className="text-pink-500">{item.colouredText}</span>
              {item.mainText}
            </p>
          ))}
        </div>
      </FlexWrapper>
    </>
  );
}

export default PageCriteria;
