import { flexProp } from "./type";

const FlexWrapper = ({ children, className }: flexProp) => {
  return (
    <div
      className={`${
        className && className
      } border-b gap-5 border-zinc-700 flex max-md:flex-col items-center py-8 w-full px-10 max-md:px-5 text-white font-montserrat mx-auto`}
    >
      {children}
    </div>
  );
};

export default FlexWrapper