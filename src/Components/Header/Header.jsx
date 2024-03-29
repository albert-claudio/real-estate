import React, { useState } from 'react'
import logo from '../Assets/logo1.png'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <Link to="/">
          {/* LOGO WEBSITE */}
            <img src={logo} alt="logo" width={100} />
          </Link>
            
              <OutsideClickHandler onOutsideClick={()=> {
                setMenuOpened(false)
              }}>

            <div className="flexCenter h-menu"
              style={getMenuStyles(menuOpened)}
              >
                <NavLink to="/properties">Properties</NavLink>
                <a href="">Contact</a>

                {/* LOGIN BUTTON */}
                <button className="button">
                  Login
                </button>
            </div>
                </OutsideClickHandler>
            <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
        </div>
    </section>
  )
}

export default Header