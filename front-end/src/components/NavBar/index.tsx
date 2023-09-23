import { useState} from "react";
import Button from "../button";
import { ICON } from "@assets/utils/webImage";
import { Link as LoutLink} from "react-router-dom";
import { ROUTES } from "@assets/utils/routes";
import { Link } from "react-scroll";
import useFuns from "./useFun";
import { info } from "@assets/utils/data";

function NavBar() {
  const [drop, setDrop] = useState<Boolean>(false);  
 const {handler} = useFuns(setDrop);
 const btnHandle = ()=> handler(drop);
 


  return (
    <div className="border-b border-zinc-700 text-white md:p-8 py-4 max-md:px-5 mb-10">
      <nav className="md:w-11/12 mx-auto  flex justify-between items-center text-white">
        <Link to={ROUTES.home} className=" flex font-clash text-4xl">
          <span className="text-white">get</span>
          <span className="text-custom-highlight">linked</span>
        </Link>
        <ul
          className={`sm:font-bold md:font-normal md:flex w-8/12 z-40 md:text-lg md:gap-2 lg:text-xl text-2xl  justify-between items-center flex-row font-montserrat ${
            drop
              ? "max-md:overflow-hidden max-md:pt-20 max-md:px-10 max-md:max-md:block max-md:fixed max-md:space-y-10 max-md:inset-0 max-md:w-full  max-md:bg-custom-purple"
              : "max-md:hidden"
          }`}
        >
          <Link
        {... info}
            to={ROUTES.timeline}
            onClick={btnHandle}
            className="block cursor-pointer  max-md:mt-10 hover:bg-button-gradient hover:bg-clip-text hover:text-transparent"
          >
            Timeline
          </Link>
          <Link
           {... info}
            to={ROUTES.overview}
            onClick={btnHandle}
            className="block cursor-pointer hover:bg-button-gradient hover:bg-clip-text hover:text-transparent"
          >
            Overview
          </Link>
          <Link
           {... info}
            to={ROUTES.fqq}
            onClick={btnHandle}
            className="block cursor-pointer hover:bg-button-gradient hover:bg-clip-text hover:text-transparent"
          >
            FAQs
          </Link>
          <LoutLink
            to={ROUTES.contact}
            onClick={()=>setDrop(!drop)} 
             className=" block hover:bg-button-gradient hover:bg-clip-text hover:text-transparent"
          >
            Contact
          </LoutLink>
          <LoutLink to={ROUTES.register} className="block" onClick={()=>setDrop(!drop)}>
            <Button caption={"Register"} />
          </LoutLink>
        </ul>
        <span
          className={`md:hidden flex justify-center  p-3px  z-40 cursor-pointer rounded-full ${
            drop && "bg-button-gradient"
          }`}
          onClick={btnHandle}
        >
          <img
            alt=""
            src={drop ? ICON.timesImg : ICON.hambuger}
            className="bg-custom-purple object-contain "
          />
        </span>
      </nav>
    </div>
  );
}

export default NavBar;
