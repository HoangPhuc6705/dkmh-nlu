const ButtonGreen: React.FC<{ text: string; icon?: React.ReactNode }> = ({
  text,
  icon,
}) => {
  return (
    <button className="bg-nonglam rounded-full flex items-center py-2 px-4 text-white gap-3 font-roboto cursor-pointer">
      {icon}
      {text}
    </button>
  );
};

export default ButtonGreen;
