import React from "react";

interface CardProps {
  image: string;
  title: string;
  uploadTime: string;
}

const Card: React.FC<CardProps> = ({ image, title, uploadTime }) => {
  return (
    <div className="flex flex-col gap-2 overflow-hidden border-2 border-stone-300 rounded-lg cursor-pointer hover:bg-stone-200">
      <img
        src={image}
        alt="Image"
      />

      <div className="p-2 h-full font-roboto text-stone-700 font-semibold flex flex-col justify-between gap-3">
        <h3>{title}</h3>
        <span className="text-sm text-stone-500">{uploadTime}</span>
      </div>
    </div>
  );
};

export default Card;
