import { IMAGE_PATH } from "@assets/utils/webImage";
import FlexWrapper from "@components/FlexWrapper";
import HeaderText from "@components/HeaderText";
import EachAward from "./EachAward"
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
        <div className="flex gap-10 max-md:gap-7 max-sm:gap-4 justify-center relative">
        <span className="text-xl text-custom-highlight absolute pl-2">&#x2726;</span>
            <EachAward position="2nd" amount="N300,000" image={IMAGE_PATH.silverImg} gold={false}/>
            <EachAward position="1st" amount="N400,000" image={IMAGE_PATH.goldImg} gold={true}/>
            <EachAward position="3rd" amount="N150,000" image={IMAGE_PATH.bronzeImg} gold={false}/>
        </div>
      </FlexWrapper>
    </div>
  );
};

export default PriceAward;
