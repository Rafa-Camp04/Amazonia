import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignUpForm.css';
import amazonBlackLogo from '../../../../frontend/media/amazon-logo-black.png';

function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Navigate to="/" replace={true}/>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, password }))
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
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
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

          <div className='sign-up-block'>
            <form onSubmit={handleSubmit}>

              <h1>Create account</h1>

              <label className='sign-in-form-label'>Email</label>
              <br/>

              <input
                className='sign-up-form-input'
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
                className='sign-up-form-input'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br/>
              <br/>

              <label className='sign-in-form-label'>Re-enter password</label>
              <br/>

              <input
                className='sign-up-form-input'
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <br/>
              <br/>

              <button className='sign-up-form-button' type="submit">Sign Up</button>
              <br/>

              <br/>
              <br/>

              <div id='text-under-form'><p>By continuing, you agree to Amazonia&apos;s Conditions of Use and Privacy Notice.</p></div>

              <br/>
              <br/>
              <br/>

              <div id='text-with-link'>
                <p>Already have an account? <Link to='/login'>Sign In</Link></p>
              </div>
            </form>
          </div>
        </div>

        <br/>
        <br/>

        <div id='footer'>
          <div id='inner-footer'></div>
        </div>

      </div>
    </>
  );
}

export default SignupForm;