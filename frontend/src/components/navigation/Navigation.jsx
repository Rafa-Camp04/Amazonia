import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {RiSearchLine} from 'react-icons/ri';
import './Navigation.css'
import amazonLogo from '../../../../frontend/media/amazon-logo.png';
import linkedinLogo from '../../../../frontend/media/linkedin-icon.png';
import githubLogo from '../../../../frontend/media/github-icon.png';
import cartIcon from '../../../../frontend/media/cart-icon.png';
// import { useState } from 'react';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  // const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('FORM IS WORKING, YOU DONT HAVE TO CLICK AGAIN')
  }

  const sessionLinks = sessionUser ? (
    <>
      <li>
        <button onClick={logout}>Log Out</button>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink to="/login">Sign in</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </>
  );

  return (
    <div className='nav-bar'>
      <div className='nav-left'>
        <img className='logo' src={amazonLogo} alt='Amazon Logo' />
      </div>

      <div id='nav-search-div'>
        <form id='nav-bar-search-form' onSubmit={handleSubmit}>
          <input type='text' id='search-area' placeholder="  Search Amazonia"></input>
          <button type='submit' id='search-button'>
            <RiSearchLine className='search-icon'/>
          </button>
        </form>
      </div>

      <div className='nav-links'>

        <div id='profile-links'>
        <a className='pf' href="https://github.com/Rafa-Camp04"><img className='logo-link' src={githubLogo} width="40" height="40" /></a>
          <a className='pf' href="https://www.linkedin.com/in/rafael-campos-60471a2b2/"><img className='logo-link' src={linkedinLogo} width="40" height="40" /></a>
        </div>

        <div id='account'>
          
          <ul>
            {sessionLinks}
          </ul>
        </div>

        <div id='cart'>
          <img id="cart-icon" src={cartIcon} alt="cartIcon" />
          <p id='cart-text'>Cart</p>
          <div id='cart-quantity'>0</div>
        </div>

      </div>

    </div>
  );
}

export default Navigation;