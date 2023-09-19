import { useState, useEffect } from "react";
import Button from "../button";

function NavBar() {
  const [drop, setDrop] = useState<Boolean>(false);
  const handler = (): void => {
    setDrop(!drop);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setDrop(false);
      }
        setDrop(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="border-b border-zinc-700 text-white py-4 max-md:px-5">
      <nav className="md:w-11/12 mx-auto  flex justify-between items-center text-white">
        <div className="flex font-clash text-4xl">
          <span className="text-white">get</span>
          <span className="text-custom-highlight">linked</span>
        </div>
        <ul
          className={`md:flex w-8/12 z-30  justify-between items-center flex-row ${
            drop
              ? "max-md:overflow-hidden max-md:pt-20 max-md:px-10 max-md:max-md:block max-md:fixed max-md:space-y-10 max-md:inset-0 max-md:w-full  max-md:bg-custom-purple"
              : "max-md:hidden"
          }`}
        >
          <li onClick={handler} className="cursor-pointer max-md:mt-10">
            Timeline
          </li>
          <li onClick={handler} className="cursor-pointer">
            Overview
          </li>
          <li onClick={handler} className="cursor-pointer">
            FAQs
          </li>
          <li onClick={handler} className="cursor-pointer">
            Contact
          </li>
          <Button caption={"Register"} />
        </ul>
        <span className="md:hidden block z-40" onClick={handler}>
          x
        </span>
      </nav>
    </div>
  );
}

export default NavBar;
