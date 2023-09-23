import Register from "@components/Register";
import { motion } from "framer-motion";

const Reg = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        className="w-[20rem] h-[10rem] z-10 absolute right-0 bottom-0 bg-[#470985] rounded-full blur-2xl"
      ></motion.div>
      <Register />
    </div>
  );
};
export default Reg;
