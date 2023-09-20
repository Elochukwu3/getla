import { IMAGE_PATH } from "@assets/utils/webImage";
import FlexWrapper from "@components/FlexWrapper";
import EachFaq from "./EachFaq";
import HeaderText from "@components/HeaderText";

const Faq = () => {
  return (
    <FlexWrapper className="md:gap-10 ">
      <div className="w-1/2 max-md:w-full ">
        <div className="max-md:text-cnter w-full mb-10 ">
          <HeaderText header1="Frequently Ask" header2="Question" />
          <p className="max-sm:text-sm mt-5">We got answers to the questions that you might </p>
          <p>want to ask about getlinked Hackathon 1.0</p>
        </div>
        <EachFaq />
        <EachFaq />
        <EachFaq />
        <EachFaq />
        <EachFaq />
        <EachFaq />
      </div>
      <div className="flex- w-1/2 max-md:w-full ">
        <img src={IMAGE_PATH.workerImg} alt="" />
      </div>
    </FlexWrapper>
  );
};
export default Faq;
