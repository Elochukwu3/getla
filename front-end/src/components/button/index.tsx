import { propType } from "./type";

function Button({ caption }: propType) {
  return (
    <button className="capitalize rounded-sm outline-none w-172 h-53 bg-button-gradient text-white text-base font-montserrat">{caption}</button>
  );
}

export default Button;
