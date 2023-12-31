import { info } from "@assets/utils/data";
import { ROUTES } from "@assets/utils/routes";
import { ICON } from "@assets/utils/webImage";
import { Link as LinkRoute } from "react-router-dom";
import { Link } from "react-scroll";

const Footer = () => {
  
  return (
    <div className=" font-montserrat text-white mt-14 bg-footer py-10 mb-0 relative">
         <span className="text-xl left-14 max-sm:left-4 max-sm:inline max-sm:text-sm text-white top-1/4 max-sm:top-20 max-md:hidden block  absolute z-20">
              &#x2726;
            </span>
      <div className=" w-10/12 max-sm:w-full max-sm:pl-10 mx-auto grid grid-cols-4 mb-5 max-md:grid-cols-1 max-sm:space-y-12">
        <div className="col-span-2 max-sm:col-span-1 pr-12 max-md:pr-0">
          <div className="font-clash text-3xl font-bold my-6 ">
            <span>get</span>
            <span className="text-custom-highlight">linked</span>
          </div>
          <p className="flex flex-col gap-10 max-sm:text-sm pr-3">
            <span>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
            </span>
            <span>
              <span>Terms of Use </span>
              <span> Privacy Policy</span>
            </span>
          </p>
        </div>
        <div className="space-y-5 relative">
             <span className="text-xl right-10 max-sm:text-sm text-zinc-600 bottom-3/4 max-md:bottom-1/2  absolute z-20">
              &#x2726;
            </span>
          <p className="text-custom-highlight">Useful Links</p>
          <Link {...info} className="block cursor-pointer" to={ROUTES.overview}>Overview</Link>
          <Link {...info} className="block cursor-pointer" to={ROUTES.timeline}>Timeline</Link>
          <Link {...info} className="block cursor-pointer" to={ROUTES.fqq}>FAQs</Link>
          <Link {...info} className="block cursor-pointer" to={ROUTES.register}>Register</Link>
          <div className="flex gap-4 items-center">
            <p className="text-custom-highlight">Follow us</p>
            <div className="flex items-center gap-3 object-contain">
              <LinkRoute to={"https://getlinked.ai"}>
                <img src={ICON.insta} alt="" />
              </LinkRoute>
              <LinkRoute to={"https://getlinked.ai"}>
                <img src={ICON.x} alt="" />
              </LinkRoute>
              <LinkRoute to={"https://romauld.vercel.app/"}>
                <img src={ICON.facebook} alt="" />
              </LinkRoute>
              <LinkRoute to={"https://getlinked.ai"}>
                <img src={ICON.linked} alt="" />
              </LinkRoute>
            </div>
          </div>
        </div>
        <div className="space-y-5 relative">
             <span className="text-xl right-0 m ax-sm:text-sm text-white bottom-0 max-md:bottom-1/2  absolute z-20">
              &#x2726;
            </span>
          <p className="text-custom-highlight">Contact Us</p>
          <p className="flex gap-4 items-center">
            <img src={ICON.call} alt="" className="object-contain"/>
            <span>+234 679 81819</span>
          </p>

          <div className="flex gap-4 ">
            <img src={ICON.gp} alt="" className="object-contain -mt-10"/>
            <div>
              <p>27,Alara Street</p>
              <p>Yaba 100012</p>
              <p>Lagos State</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-8 pb-5 relative">
      <span className="text-xl max-sm:text-sm text-custom-highlight textt-center block pb-4">
              &#x2726;
            </span>
            < LinkRoute to={"https://getlinked.ai"}>
            All rights reserved. © getlinked Ltd.
            </LinkRoute>
        </div>
    </div>
  );
};

export default Footer;
