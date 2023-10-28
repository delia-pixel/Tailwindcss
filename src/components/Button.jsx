const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`py-4 px-7 border  rounded-full font-monsterrat text-lg
      ${fullWidth && "w-full"}
      font-bold flex gap-2 justify-center items-center leading-none
        ${textColor ? `${textColor} ${backgroundColor} ${borderColor}` :
        `text-white bg-coral-red border-coral-red hover:bg-gradient-to-r hover:from-coral-red hover:to-orange-400 transition-all duration-200 `}
    `}
    >
      {label}
      {iconUrl && <img src={iconUrl} alt="arrow" width={25} height={25} />}
    </button>
  );
};

export default Button
