import { useState } from "react";
const EachFaq = () => {
  const [faq, setFaq] = useState(false);
  const handler = () => setFaq(!faq);

  //to start on the question marks on the faq
  return (
    <div className="my-5">
      <div onClick={handler} className="flex justify-between font-montserrat pb-3">
        <p>Can I work on a project I started before the hackathon?</p>
        <span className="text-pink-500 text-xl">+</span>
      </div>
      <div className={faq ? "duration-1000 transition-[height] h-fit ease-out text-base p-2": "h-0 overflow-hidden ease-in"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        tenetur et fuga odit similique sequi, commodi sit. Corporis numquam
        praesentium quis dolorum. Error, inventore repellat assumenda temporibus
        ea dignissimos exercitationem.
      </div>
      <div className="border-pink-500 border-b  w-full h-0"></div>
    </div>
  );
};

export default EachFaq;
