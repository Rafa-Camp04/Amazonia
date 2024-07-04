import './Modal.css'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as sessionActions from '../../store/session';

function Modal() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    const dropDown = sessionUser ? (
        <div id='drop-down'>
            <button id='drop-down-button' onClick={logout}>Log Out</button>
        </div>
      ) : (
        <div id='drop-down'>
          <Link to={'/login'}>
            <button id='drop-down-button'>Sign In</button>
          </Link>
            <p id='new-customer-paragraph'>New customer? <Link to={'/signup'}>Start here.</Link></p>
        </div>
    )

    return(
        <>
            {dropDown}
        </>
    )
}

export default Modal;