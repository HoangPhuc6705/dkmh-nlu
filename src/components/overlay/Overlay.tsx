

interface OverlayProps {
  onOpened(): void
}

function Overlay(props: OverlayProps) {

  return (
    <div 
    className="fixed top-0 left-0 bottom-0 z-[99] right-0 bg-stone-950/30 transition"
    onClick={props.onOpened}>

    </div>
  )
}

export default Overlay;