import { IMAGE_PATH } from "@assets/utils/webImage";
import FlexWrapper from "@components/FlexWrapper";
import HeaderText from "@components/HeaderText";
import { useState } from "react";
const PriceAward = () => {
  return (
    <div className="my-5">
      <div className="w-1/2 max-md:w-full ml-auto text-white max-md:text-center">
        <HeaderText header1={" Prizes and"} header2={"Rewards"} />
        <p className="font-montserrat py-4 max-sm:text-sm">
          <span className="block ">
            Highlight of the prizes or rewards for winners and{" "}
          </span>
          <span>for participants. </span>
        </p>
      </div>
      <FlexWrapper>
        <img src={IMAGE_PATH.trophyImg} alt="" />
        <div className="h-52 w-full rounded-md flex flex-col items-center  border border-pink-900">
            <img src="" alt="" />
          <div className="justify-end flex flex-col items-center">
          <p>2nd</p>
            <p>Runner</p>
            <p>N300,000</p>
          </div>
        </div>
      </FlexWrapper>
    </div>
  );
};

export default PriceAward;
