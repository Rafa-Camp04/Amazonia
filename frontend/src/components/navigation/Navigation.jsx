import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css'
import amazonLogo from '../../../../frontend/media/amazon-logo.png';
import {RiSearchLine} from 'react-icons/ri';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
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

      <div className='nav-search'>
        <form id='nav-bar-search-form' onSubmit={handleSubmit}>
          <input type='text' id='search-area' placeholder="  Search Amazonia"></input>
          <button type='submit' id='search-button'>
            <RiSearchLine className='search-icon'/>
          </button>
        </form>
      </div>

      <div className='nav-links'>
        <ul>
          {sessionLinks}
        </ul>
      </div>

    </div>
  );
}

export default Navigation;