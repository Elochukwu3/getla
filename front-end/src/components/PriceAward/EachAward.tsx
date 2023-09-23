import { propType } from "./type";
const EachAward = ({ amount, image, position, gold }: propType) => {
  return (
    <div
      className={`relative h-52 max-md:h-40 w-40 max-md:w-28 rounded-md flex flex-col justify-between items-center  border ${
        gold ? "border-custom-purple bg-award2 mt-2" : "bg-award border-custom-pink"
      }`}
    >
      <div className="relative w-full">
        <img
          src={image}
          alt=""
          className={`absolute -top-20 max-md:-top-14 object-contian left-0 right-0 block mx-auto ${
            gold ? "" : "w-9/12 max-md:w-10/12"
          }`}
        />
      </div>
      <div className="text-center font-montserrat">
        <p className="font-bold text-3xl">{position}</p>
        <p className="">Runner</p>
        <p
          className={`text-2xl fontbold font-bold max-md:text-xl py-2 ${
            gold ? "text-custom-pp" : "text-custom-highlight"
          }`}
        >
          {amount}
        </p>
      </div>
    </div>
  );
};

export default EachAward;
