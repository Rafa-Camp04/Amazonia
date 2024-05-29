import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import './LoginForm.css';
import amazonBlackLogo from '../../../../frontend/media/amazon-logo-black.png';

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  return (
    <div id='root'>
      <div className='sign-in-header'>
        <Link to={'/'}><img className='black-logo' src={amazonBlackLogo} /></Link>
      </div>

      <div id='center-content'>
        <div className='sign-in-block'>
          <form onSubmit={handleSubmit}>

            <h1>Sign in</h1>

            <ul>
              {errors.map(error => <li key={error}>{error}</li>)}
            </ul>

            <label className='sign-in-form-label'>Email</label>
            <br/>

            <input
              className='sign-in-form-input'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br/>
            <br/>

            <label className='sign-in-form-label'>Password</label>
            <br/>

            <input
              className='sign-in-form-input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br/>
            <br/>

            <button className='sign-in-form-button' type="submit">Sign In</button>
            <br/>
            <br/>
            <button className='sign-in-form-button'>Demo User</button>

            <br/>
            <br/>

            <div id='text-under-form'><p>By continuing, you agree to Amazonia's Conditions of Use and Privacy Notice.</p></div>

          </form>
        </div>

        <br/>

        <div id='new-to-amazonia'>
          <h5>New to Amazonia?</h5>
          <div id='line'></div>
        </div>

        <span id='bottom-button'>
          <span>
            <a id='link-to-sign-up'>Create your Amazonia account</a>
          </span>
        </span>
      </div>

      <br/>
      <br/>

      <div id='footer'>
        <div id='inner-footer'></div>
      </div>

    </div>

  );
}

export default LoginForm;