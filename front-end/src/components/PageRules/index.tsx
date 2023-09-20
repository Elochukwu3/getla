import { ICON, IMAGE_PATH } from "@assets/utils/webImage";
import { PAGE_TEXT } from "@assets/utils/webText";
import HeaderText from "@components/HeaderText";

const PageRules = () => {
  return (
    <div className="flex-row-reverse border-b gap-5 border-zinc-700 flex max-md:flex-col items-center py-8 w-11/1 px-10 text-white font-montserrat mx-auto">
      <div className="w-1/2 max-md:w-full relative">
        <img src={IMAGE_PATH.womanImg} alt="" className="" />
      </div>
      <div className="flex- w-1/2 max-md:w-full max-md:text-center relative">
        <div className="mb-4">
            <img src={ICON.star} alt="" className="grayscale invert-60 w-5 h-5 mx-auto block mb-5 max-md:absolute max-md:-right-4 max-md:top-7" />
          <HeaderText header1=" Rules and" header2="Guidelines" />
        </div>
        <p>{PAGE_TEXT.rulestext}</p>
        <img
          src={ICON.star}
          alt=""
          className="w-4 h-4 my-5 block ml-auto max-md:ml-10"
        />
      </div>
    </div>
  );
};

export default PageRules;
