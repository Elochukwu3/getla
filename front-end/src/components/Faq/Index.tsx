import { IMAGE_PATH } from "@assets/utils/webImage";
import FlexWrapper from "@components/FlexWrapper";
import EachFaq from "./EachFaq";
import HeaderText from "@components/HeaderText";

const Faq = () => {
  return (
    <FlexWrapper className="md:gap-10 py-10 ">
      <div className="w-1/2 max-md:w-full max-md:my-10">
        <span className="text-3xl mb-3 text-custom-light block ">&#x2726;</span>
        <div className="max-md:text-cnter w-full mb-10 ">
          <HeaderText header1="Frequently Ask" header2="Question" />
          <p className="max-sm:text-sm mt-5">
            We got answers to the questions that you might{" "}
          </p>
          <p>want to ask about getlinked Hackathon 1.0</p>
        </div>
        <EachFaq />
        <EachFaq />
        <EachFaq />
        <EachFaq />
        <EachFaq />
        <EachFaq />
      </div>
      <div className="flex- w-1/2 max-md:w-full relative ">
        <div className="flex  justify-between absolute left-[13%] top-[1%] max-sm:-top-[1%] w-6/12 mx-auo font-bold items-center">
          <span className="text-border text-custom-purple lg:text-5xl md:text-4xl text-4xl">
            ?
          </span>
          <span className=" text-7xl -mt-14">
            <span className="text-border-two text-custom-purple"> ?</span>{" "}
            <span className="text-xl text-custom-highlight pl-2">&#x2726;</span>
          </span>
          <span className="text-border text-custom-purple lg:text-5xl md:text-4xl text-4xl ">
            ?
          </span>
        </div>
        <img src={IMAGE_PATH.workerImg} alt="" />
        <span className="text-xl max-md:bottom-2/3 max-sm:text-base text-custom-highlight absolute bottom-3/4 left-[20%] font-bold ">&#x2726;</span>
        <span className="text-2xl text-zinc-700 absolute bottom-2/4 left-8 font-bold ">&#x2726;</span>
        <span className="text-2xl text-white absolute bottom-0 right-1/4 font-bold ">&#x2726;</span>
      </div>
    </FlexWrapper>
  );
};
export default Faq;
