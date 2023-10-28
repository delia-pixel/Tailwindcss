import { motion } from "framer-motion";
import { UseToggle } from "../hooks/useToggle";
import { forwardRef } from "react";
// import Button from "../components/Button"

const Subscribe = () => {
  const [open, toggle] = UseToggle(true);
  const boxVariants = {
    visible: { x: 0, opacity: 1, rotate: 0 },
    hidden: { x:100, opacity:0, rotate:45}
  }
  return (
    // <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
    //   <h3 className="text-4xl leading-[68px] lg:max-w-[500px] font-palanquin font-bold">Sign Up from <span className="text-coral-red">Updates</span> & Newsletter</h3>
    //   <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
    //     <input type="text" placeholder="subscribe@nike.com" className="input" />
    //     <Button label="Sign Up" className="flex max-sm:justify-end items-center max-sm:w-full" />
    //   </div>
    // </section>
    <div>
      <MotionBox
        variants={boxVariants}
        whileTap={{ scale: 1.2 }}
        animate={open ? "visible" : "hidden"}
        className="box"
      >
        1
      </MotionBox>

      <button
        className="bg-blue-500 text-white py-2 px-6 rounded-md mt-2 font-semibold"
        onClick={() => toggle.onToggle()}
      >
        Toggle
      </button>
    </div>
  );
};
const Box = forwardRef(({ children }, ref) => {
  return <div ref={ref} className="box">{children}</div>;
})

const MotionBox = motion(Box);

export default Subscribe;
