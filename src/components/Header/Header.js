import React from 'react';
// import css
import './header.css'
// import images
import Logo from './logo-cis.png';
import userIcon from './user.svg';
import callIcon from './call-center.svg';


const Header = () => {

  return (
    <header className="max-header">
      <div className="container-menu">
        <div className="logo max-logo">
          <a href="/">
          <img src={Logo} className="logo" alt="logo"></img>
          </a>
        </div>
        <nav className="nav-bar max-nav">          
          <ul>
            <li>              
              <a href="#call">
                <img src={callIcon} alt="Ligar"></img>
                (45) 2105-9099
              </a>
            </li>

            <li>
              <a href="/login">
                <img src={userIcon} alt="Ligar"></img>
                Entre e agende uma consulta
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
