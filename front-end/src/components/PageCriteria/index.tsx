import { IMAGE_PATH } from "@assets/utils/webImage";
import { PAGE_TEXT } from "@assets/utils/webText";
import FlexWrapper from "@components/FlexWrapper";
import HeaderText from "@components/HeaderText";
import { motion } from "framer-motion";

function PageCriteria() {
  return (
    <>
      <FlexWrapper>
        <div className="flex- w-1/2 max-md:w-full   ">
          <img src={IMAGE_PATH.humanImg} alt="" className="relative z-10"/>
          <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        className="w-[20rem] h-[10rem] absolute left-0 bottom-0 -max-sm:bottom-5 bg-[#470985] rounded-full blur-2xl"
      ></motion.div>
        </div>
        <div className="flex- w-1/2 max-md:w-full max-md:text-center space-y-5 relative py-14">
        <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        className="w-[15rem] h-[15rem] z-10 absolute right-0 -bottom-[10rem] bg-[#470985] max-md:hidden rounded-full blur-2xl"
      ></motion.div>
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
