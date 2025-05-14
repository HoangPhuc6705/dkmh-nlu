interface IconProp {
  imageUri?: string | null;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  onClick?: () => void;
}

function Icon(props: IconProp) {
  return (
    <div
      className="relative size-10 max-sm:size-8 rounded-full flex justify-center items-center hover:bg-stone-400/20 **:size-6 max-sm:**:size-5 **:text-stone-600 cursor-pointer active:bg-stone-400/20 transition"
      onClick={props.onClick}
    >
      {props.imageUri ?
        <div>
          <img src={props.imageUri} className="size-6 rounded-full" />
        </div>
        : <></>}
      {props.icon}
      {props.badge}
    </div>
  );
}

export default Icon;
