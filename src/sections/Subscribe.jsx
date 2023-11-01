// import { AnimatePresence, easeIn, motion } from "framer-motion";
// import { UseToggle } from "../hooks/useToggle";
// import { forwardRef } from "react";
import Button from "../components/Button"


const Subscribe = () => {
  // const [open, toggle] = UseToggle(true);
  // const boxVariants = {
  //   visible: { x: 0, rotate: 0 },
  //   hidden: { x:100, rotate:45}
  // }
  // const items = open ? [1, 2, 3, 4, 5] : [3, 5];
  // const wrapperVarriants = {
  //   visible: { opacity: 1, transition:{when:'beforeChildren'} },
  //   hidden:{opacity:0, transition:{when:'afterChildren'}, staggerChildren:.2}
  // }
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-[500px] font-palanquin font-bold">Sign Up from <span className="text-coral-red">Updates</span> & Newsletter</h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <Button label="Sign Up" className="flex max-sm:justify-end items-center max-sm:w-full" />
      </div>
    </section>
    // <div>
    //   <motion.div variants={wrapperVarriants} animate={open ? 'visible' : 'hidden'}>
    //     <AnimatePresence mode="popLayout">
    //       {items.map(item => (
    //         <MotionBox variants={boxVariants} key={item} initial='hidden' animate='visible' exit='hidden'>{item }</MotionBox>
    //       ))}
    //     </AnimatePresence>
    //   </motion.div>

    //   <button
    //     className="bg-blue-500 text-white py-2 px-6 rounded-md mt-2 font-semibold"
    //     onClick={() => toggle.onToggle()}
    //   >
    //     Toggle
    //   </button>
    // </div>
  );
};
// const Box = forwardRef(({ children }, ref) => {
//   return <div ref={ref} className="box">{children}</div>;
// })

// const MotionBox = motion(Box);

export default Subscribe;
