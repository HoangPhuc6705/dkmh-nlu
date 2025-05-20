import React from "react";


const CardNotif: React.FC<{name: string}> = ({ name }) => {


  return (
    <div className="w-[250px] h-[350px] border border-stone-500 rounded-md p-3 flex flex-cols gap-1">
      <span>{name}</span>
      <div className="flex flex-cols gap-1">
        
      </div>
    </div>
  )
}

export default CardNotif;