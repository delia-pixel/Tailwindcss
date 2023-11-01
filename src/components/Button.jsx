import { motion, stagger } from 'framer-motion';


const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  const varriants = {
    in: { x: 0 },
    move:{x: [20]},
  };
  return (
    <motion.button
      initial={{ opacity: 0  }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileHover={varriants}
      className={`py-4 px-7 border  rounded-full font-monsterrat text-lg
      ${fullWidth && "w-full"}
      font-bold flex gap-2 justify-center items-center leading-none
        ${
          textColor
            ? `${textColor} ${backgroundColor} ${borderColor}`
            : `text-white bg-coral-red border-coral-red hover:bg-gradient-to-r hover:from-coral-red hover:to-orange-400 transition-all duration-200 `
        }
    `}
    >
      {label}
      <motion.span variants={varriants} initial="in" whileHover="move">
        {iconUrl && <img src={iconUrl} alt="arrow" width={25} height={25} />}
      </motion.span>
    </motion.button>
  );
};

export default Button
