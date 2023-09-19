import { ICON, IMAGE_PATH } from "@assets/utils/webImage";
import { PAGE_TEXT } from "@assets/utils/webText";
import HeaderText from "@components/HeaderText";

const PageIntro = () => {
  return (
    <div className="border-b gap-5 border-zinc-700 flex max-md:flex-col items-center py-8 w-11/1 px-10 text-white font-montserrat mx-auto">
      <div className="w-1/2 max-md:w-full relative">
        <img src={ICON.star} alt="" className="absolute z-10 -left-5 scale-50 top-1/3" />
        <img src={IMAGE_PATH.bulbImg} alt="" className="" />
        <img src={IMAGE_PATH.arrowImg} alt="" className=" block ml-auto max-md:mx-auto max-md:scale-50" />
      </div>
      <div className="flex- w-1/2 max-md:w-full max-md:text-center">
        <div className="flex justify-between items-center pb-3">
          <HeaderText
            header1="Introduction to getlinked"
            header2="tech Hackathon 1.0"
          />
          <div className="relative h-fit w-fit ">
            <img src={ICON.star} alt="" className="grayscale invert " />
          </div>
        </div>
        <p>{PAGE_TEXT.introdructionText}</p>
      </div>
    </div>
  );
};

export default PageIntro;
