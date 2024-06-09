const BidangPengurus = ({id, title, children}) => {
  return (
    <>
    <h1
            id={id}
            className="border-dark-blue mt-10 p-2 text-center text-lg md:text-2xl font-semibold"
          >
            {title}
          </h1>
          <div className="flex justify-center gap-14 py-10">
            {children}
          </div>
    </>
  )
}

export default BidangPengurus