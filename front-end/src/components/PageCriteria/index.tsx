import { IMAGE_PATH } from "@assets/utils/webImage";
import { PAGE_TEXT } from "@assets/utils/webText";
import FlexWrapper from "@components/FlexWrapper";
import HeaderText from "@components/HeaderText";

function PageCriteria() {
  return (
    <>
      <FlexWrapper>
        <div className="flex- w-1/2 max-md:w-full  ">
          <img src={IMAGE_PATH.humanImg} alt="" />
        </div>
        <div className="flex- w-1/2 max-md:w-full max-md:text-center space-y-5">
          <HeaderText header1="Judging Criteria" header2="Key attributes " />
          {PAGE_TEXT.judgingCriteria.map((item) => (
            <p>
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
