import React, { useState } from 'react'
import { NavLink , Link} from 'react-router-dom'
import "./header.css"

function Header() {

  const [showMenu , setShoeMenu] = useState(false);

  return (
    <nav>
      <Link
      to={"/"}
       className='title'
      >Logo</Link>
      <div className="menu"
       onClick={()=>setShoeMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={showMenu ? "open" : ""}>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        <li><NavLink to={"/products"}>products</NavLink></li>
        <li><NavLink to={"/cart"}>Cart</NavLink></li>
      </ul>
    </nav>
  )
}

export default Header
