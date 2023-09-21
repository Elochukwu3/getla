import { IMAGE_PATH } from "@assets/utils/webImage";
import FlexWrapper from "@components/FlexWrapper";
import HeaderText from "@components/HeaderText";
import EachAward from "./EachAward";
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
      <FlexWrapper className="relative">
        <div className="relative">
          <img src={IMAGE_PATH.trophyImg} alt="" className="scale-75 mb-10" />
          <span className="text-2xl text-white  max-md:hidden right-1/2 bottom-0 max-md:xl absolute z-20">
            &#x2726;
          </span>
        </div>
        <div className="flex gap-10 max-md:gap-7 max-sm:gap-4 justify-center relative max-sm:scale-75">
          <span className="text-2xl text-white left-1 max-md:hidden -top-1/3 max-md:xl absolute z-20">
            &#x2726;
          </span>

          <span className="text-2xl text-white absolute z-20 -right-10 max-sm:-top-20 max-sm:right-0 max-sm:text-sm">
            &#x2726;
          </span>
          <EachAward
            position="2nd"
            amount="N300,000"
            image={IMAGE_PATH.silverImg}
            gold={false}
          />
          <EachAward
            position="1st"
            amount="N400,000"
            image={IMAGE_PATH.goldImg}
            gold={true}
          />
          <EachAward
            position="3rd"
            amount="N150,000"
            image={IMAGE_PATH.bronzeImg}
            gold={false}
          />
          <span className="text-2xl text-zinc-600 right-1/3 -bottom-14 max-md:xl absolute z-20">
            &#x2726;
          </span>
        </div>
      </FlexWrapper>
    </div>
  );
};

export default PriceAward;
