interface BagdeProps {
  x: number;
  y: number;
}

function Bagde(props: BagdeProps) {
  return (
    <div
      className={`absolute bg-red-600 scale-[0.4] flex justify-center items-center rounded-full font-roboto`}
      style={{
        transform: `translate(${props.x}px, ${props.y}px)`,
      }}
    >
    </div>
  );
}

export default Bagde;
