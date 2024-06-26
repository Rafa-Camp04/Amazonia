import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {RiSearchLine} from 'react-icons/ri';
import './Navigation.css'
import amazoniaLogo from '/media/amazonia-logo-white.png';
import linkedinLogo from '/media/linkedin-icon.png';
import githubLogo from '/media/github-icon.png';
import cartIcon from '/media/cart-icon.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import * as cartItemsActions from '../../store/cart';
import * as reviewsActions from '../../store/review';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionUser) {
      dispatch(cartItemsActions.indexCartItems())
    }

    dispatch(reviewsActions.indexReviews())

  }, [dispatch, sessionUser])

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const allCartItems = useSelector(state => state.cartItems);
  
  const cartQuantity = () => {
    let cartQuantity = 0;

    Object.values(allCartItems).map(item => {
        cartQuantity += item.quantity
    })

    return cartQuantity
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const dropDown = sessionUser ? (
    <div id='drop-down'>
      <Link to >
        <button id='drop-down-button' onClick={logout}>Log Out</button>
      </Link>
    </div>
  ) : (
    <div id='drop-down'>
      <Link to={'/login'}>
        <button id='drop-down-button'>Sign In</button>
      </Link>
        <p id='new-costumer-paragraph'>New costumer? <Link to={'/signup'}>Start here.</Link></p>
    </div>
  )

  const signedIn = sessionUser ? (
    <p id='hello-paragraph'>Hello, User</p>
  ) : (
    <p id='hello-paragraph'>Hello, sign in</p>
  )

  return (
    <div id='nav-bar'>
      <div id='navigation-section'>

        <div className='nav-left'>
          <Link to={'/'}>
            <div id='logo-div'>
              <img id='logo' src={amazoniaLogo} alt='Amazonia Logo' />
            </div>
          </Link>
        </div>

        <div id='nav-search-div'>
          <form id='nav-bar-search-form' onSubmit={handleSubmit}>
            <input type='text' id='search-area' placeholder="Search Amazonia"></input>
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

          <div id='account' onMouseEnter={() => setDropDownOpen((dropDown) => !dropDown)}>
            {signedIn}
            <p id='account-lists-text'>Account & Lists <FontAwesomeIcon icon={faCaretDown} className='drop-down-arrow-down' /></p>
          </div>

          <Link to={'/cart'}>
            <div id='cart'>
              <img id="cart-icon" src={cartIcon} alt="cartIcon" />
              <p id='cart-text'>Cart</p>
              <div id='cart-quantity'>{cartQuantity()}</div>
            </div>
          </Link>

        </div>
      </div>  

      { isDropDownOpen && dropDown }

      <div id='category-section'>
      </div>

    </div>
  );
}

export default Navigation;