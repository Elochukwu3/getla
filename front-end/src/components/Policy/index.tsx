import { IMAGE_PATH } from "@assets/utils/webImage";
import FlexWrapper from "@components/FlexWrapper";
import HeaderText from "@components/HeaderText";
import Button from "@components/button";
import { motion } from "framer-motion";

const Policy = () => {
  return (
    <div className="w-10/12 max-md:w-full mx-auto font-montserrat">
      <FlexWrapper>
        <div className="w-1/2 max-md:w-full relative pb-14">
       <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        className="w-[15rem] h-[15rem] z-10 absolute left-0 -bottom-[2rem] bg-[#470985] rounded-full blur-2xl"
      ></motion.div>
          <div className="relative z-20">
            <div className="relative z-20">
            <span className="text-2xl max-md:text-xl max-sm:text-sm text-zinc-700 max-md:-top-6 top-0 text-grey right-1/3  absolute z-20">
              &#x2726;
            </span>
                <HeaderText header1=" Privacy Policy and" header2="Terms" />
            </div>
            <p className="py-2 max-md:text-center">
              Last updated on September 12, 2023
            </p>
            <p className="my-4 max-md:pb-10 max-md:text-center relative pr-10 max-md:pr-0 ">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
              <span className="text-2xl max-md:text-xl max-sm:text-sm text-custom-pp max-md:top-3/4 max-md:right-5 -top-8 text-grey right-0  absolute z-20">
              &#x2726;
            </span>
            </p>
          </div>
          <div className="relative border-custom-purple bg-award2 border rounded-md p-9 max-md:p-5 max-sm:px-2">
          <span className="text-2xl max-md:text-xl max-sm:text-sm text-custom-light  top-3/4 text-grey -left-[14%] max-md:-left-4  absolute z-20">
              &#x2726;
            </span>
            <p className="mb-5 max-md:text-center">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <span className="text-custom-lighter block pb-5">
              Licensing Policy
            </span>
            <p>Here are terms of our Standard License:</p>
            <div className="space-y-8 mt-4 mb-8">
              <div className="flex gap-3 z-30 relative">
                <img src={IMAGE_PATH.good} alt="" className="object-contain" />
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex gap-3 z-30 relative">
                <img src={IMAGE_PATH.good} alt="" className="object-contain" />
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
            </div>
            <div className="flex justify-center z-30 relative">
              <Button caption="Read More" />
            </div>
          </div>
        </div>
        <div className="w-1/2 relative flex-1 mx-6 max-md:mx-auto max-md:w-full max-md:mt-20">
          <img
            src={IMAGE_PATH.lock}
            alt=""
            className="absolute block mx-auto -top-[18%] right-2 w-8/12 max-md:right-[20%] max-md:-top-1/4"
          />
          <div className="relative z-20 max-md:w-9/12">
          <img src={IMAGE_PATH.manImg} alt="" />
          <span className="text-xl  max-sm:text-sm text-white bottom-0 left-1/4  absolute z-20">
              &#x2726;
            </span>
            <span className="text-xl max-md:right-1/3 max-sm:text-sm text-white top-0 right-14  absolute z-20">
              &#x2726;
            </span>
            <span className="text-xl left-20 ax-sm:text-sm text-custom-highlight bottom-1/2  absolute z-20">
              &#x2726;
            </span>

          </div>
          <span className="text-xl bottom-0 max-sm:text-sm text-zinc-600 right-0  absolute z-20">
              &#x2726;
            </span>
        </div>
      </FlexWrapper>
    </div>
  );
};

export default Policy;
