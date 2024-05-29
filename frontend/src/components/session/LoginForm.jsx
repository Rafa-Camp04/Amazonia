import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import amazonBlackLogo from '../../../../frontend/media/amazon-logo-black.png';

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

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

  const handleSignUpRedirect = () => {
    navigate('/signup');
  };

  const handleDemoUserLogin = () => {
    const demoEmail = 'demo@example.com';
    const demoPassword = 'password';
    setEmail(demoEmail);
    setPassword(demoPassword);
    // Optionally, directly submit the form
    handleSubmit({ preventDefault: () => {} });
  };

  return (
    <div id='root'>
      <div className='sign-in-header'>
        <Link to={'/'}><img className='black-logo' src={amazonBlackLogo} /></Link>
      </div>

      <div id='center-content'>

        {errors.length > 0 && (
          <div className='error-div'>
            <div id='inner-error-div'>
              <h4 id='alert-heading'>There was a problem</h4>
              <ul className='error-text'>
                {errors.map(error => <li key={error}>{error}</li>)}
              </ul>
            </div>
          </div>
        )}

        <div className='sign-in-block'>
          <form onSubmit={handleSubmit}>

            <h1>Sign in</h1>

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
            <button type='button' className='sign-in-form-button' onClick={handleDemoUserLogin}>Demo User</button>

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

        <button id='bottom-button' onClick={handleSignUpRedirect}>
          <span>Create your Amazonia account</span>
        </button>
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