

function Sectitle({title}) {
  return (
    <div className="flex gap-6  items-center py-10">
      <h1 className="text-2xl text-white font-medium">{title}</h1>
      <div className="w-60 h-[1.2px] bg-tertiary"></div>
    </div>
  )
}

export default Sectitle
