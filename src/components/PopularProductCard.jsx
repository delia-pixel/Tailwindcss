import { star } from "../assets/icons";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { useState } from "react";
import { view } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className="flex flex-1 flex-col w-full max-sm:w-full"
    >
      <motion.img
        src={imgURL}
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        alt={name}
        className="w-[280px] h-[280px]"
      />
      <div className="mt-8 flex justify-start gap-2.5 ">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-monsterrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>

      <h3 className="mt-2 text-2xl font-palanquin font-semibold leading-normal">
        {name}
      </h3>

      <p className="mt-2 font-semibold font-montserrat text-2xl leading-normal text-coral-red">
        {price} <img src={view} alt="eye icon" width={48} height={48} />
      </p>
    </motion.div>
  );
};
<Modal open={open} onClose={() => setOpen(false)}>
  <h1>Hello here !</h1>
</Modal>;
export default PopularProductCard;
