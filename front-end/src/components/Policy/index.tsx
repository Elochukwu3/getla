import { IMAGE_PATH } from "@assets/utils/webImage";
import FlexWrapper from "@components/FlexWrapper";
import HeaderText from "@components/HeaderText";
import Button from "@components/button";

const Policy = () => {
  return (
    <div className="w-10/12 mx-auto font-montserrat">
      {/* <span className="text-2xl max-md:text-xl max-sm:text-sm max-sm:top-3 text-custom-pp left-[15%] max-md:left-2 -top-[10%] absolute z-20">
            &#x2726;
          </span> */}
      <FlexWrapper>
        <div className="w-1/2  max-md:w-full">
          <div>
            <HeaderText header1=" Privacy Policy and" header2="Terms" />
            <p>Last updated on September 12, 2023</p>
            <p>
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
          <div className="border-custom-purple bg-award2 border rounded-md p-9">
            <p className="mb-5 text-sm">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <span className="text-custom-lighter block pb-5">Licensing Policy</span>
            <p>Here are terms of our Standard License:</p>
            <div className="space-y-8 mt-4">
              <div className="flex gap-3">
                <img src={IMAGE_PATH.good} alt="" className="object-contian"/>
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex gap-3">
              <img src={IMAGE_PATH.good} alt="" />
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
            </div>
            <Button caption="Read More"/>
          </div>
        </div>
        <div className="w-1/2 relative flex-1 mx-6 max-md:w-full">
            <img src={IMAGE_PATH.lock} alt="" className="absolute block mx-auto left-0 right-0 w-7/12"/>
            <img src={IMAGE_PATH.manImg} alt="" />
        </div>
      </FlexWrapper>
    </div>
  );
};

export default Policy;
