import React from 'react'

const NavBar = () => {
  return (
    <>
    <div  className="flex justify-between bg-gray-300 p-4">

    <div>

      <button className="">LOGO</button>
    </div>
    <div className="flex justify-around space-x-4 px-2">
  <button className="btn">Library</button>
  <button className="btn">Previous</button>
  <button className="btn">Next</button>
  <button className="btn">Logout</button>
</div>
    </div>
    </>
  )
}

export default NavBar