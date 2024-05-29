import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css'
import amazonLogo from '../../../../frontend/media/amazon-logo.png';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

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

      <div className='nav-fill'>
        
      </div>

      <div>
        <ul>
          {sessionLinks}
        </ul>
      </div>

    </div>
  );
}

export default Navigation;