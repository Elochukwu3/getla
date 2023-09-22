import { IMAGE_PATH } from "@assets/utils/webImage";
import Button from "@components/button";
type prop={
    bool: Boolean
}

function Load({ bool }:prop) {
  return (
    <div className="fixed backdrop-blur-0 bg-[#1b1635] opacity-80 z-50  w-full items-center inset-0 flex justify-center">
      <div className="relative font-montserrat border border-custom-purple p-8 h-fit w-1/3 text-white text-center">
        <div>
          <img
            src={IMAGE_PATH.grat}
            alt=""
            className="object-cover mx-auto mix-blend-screen"
          />

          {bool ? (
            <div className="font-clash">Your Message has been sent</div>
          ) : (
            <div>
              <p className="text-xl">congratulations</p>
              <p className="text-2xl">you have succesfully registerd</p>
              <div className="text-sm py-3">
                <p>Yes it was easy and you did it</p>
                <p>check your mail for next step</p>
              </div>
            </div>
          )}
          <div className="w-full my-10 z-50">
            <Button caption="Back" bool={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Load;
