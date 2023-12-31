import { propType } from "./type";

function Button({ caption, bool, type = "button"}: propType) {
  
  return (
    <button type={type} className={`capitalize rounded-sm outline-none px-2  ${bool ? "w-full" : "w-172"} h-10 bg-button-gradient text-white text-base font-montserrat`}>{caption}</button>
  );
}

export default Button;
