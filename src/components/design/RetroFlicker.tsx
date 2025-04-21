

export default function RetroFlicker() {
  return (
    <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[999]"
    >
        <div className="w-full h-full bg-white opacity-[0.03] animate-retroFlicker"/>
    </div>
  )
}