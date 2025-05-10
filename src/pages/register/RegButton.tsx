import { useState } from "react";

const Button: React.FC<{ slot: boolean }> = ({ slot }) => {
  const [state, setState] = useState<boolean>(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-2 py-1 rounded-full cursor-pointer font-roboto disabled:bg-stone-400 disabled:cursor-context-menu ${
        state ? "bg-red-500 text-white" : "bg-nonglam text-white"
      }`}
      disabled={slot ? false : true}
    >
      {state ? "Huỷ đăng kí" : slot ? 'Đăng kí' : 'Hết số lượng'}
    </button>
  );
};

export default Button;
