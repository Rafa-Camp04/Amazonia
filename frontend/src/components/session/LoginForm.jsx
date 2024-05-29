import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './LoginForm.css';
import amazonBlackLogo from '../../../../frontend/media/amazon-logo-black.png'

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
    <>
      <div className='sign-in-header'>
        <img className='black-logo' src={amazonBlackLogo} />
      </div>

      <div className='sign-in-block'>
        <form onSubmit={handleSubmit}>

          <h1>Sign in</h1>

          <ul>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>

          <label>
            Email
            <input
              className='sign-in-input'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Password
            <input
              className='sign-in-input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button id='sign-in-button' type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;