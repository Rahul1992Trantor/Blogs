import React, {useContext} from 'react';
import { useSetState } from 'react-use';
import './login.scss'

import { AuthContext } from '../context/Auth.context.js';

const initialState = {
  email: '',
  password: ''
}

const LoginForm = () => {
  const { state: ContextState, login } = useContext(AuthContext);
  const {
    isLoginPending,
    isLoggedIn,
    loginError
  } = ContextState;
  const [state, setState] = useSetState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    login(email, password);
    setState({
      email: '',
      password: ''
    });
  }
    
  return (
    <div class="container">
    <div class="screen">
      <div class="screen__content">
        <form class="login"  onSubmit={onSubmit}>
          <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input type="text" class="login__input" placeholder="User name / Email"  name="email" 
              onChange={e => setState({email: e.target.value})} 
              value={state.email} 
              placeholder="admin"/>
          </div>
          <div class="login__field">
            <i class="login__icon fas fa-lock"></i>
            <input type="password" class="login__input" placeholder="Password"  name="password" 
                onChange={e => setState({password: e.target.value})} 
                value={state.password} 
                placeholder="admin"/ >
          </div>
          <button class="button login__submit">
            <span class="button__text">Log In Now</span>
            <i class="button__icon fas fa-chevron-right"></i>
          </button>   
          { isLoginPending && <div>Please wait...</div> }
        { isLoggedIn && <div>Success.</div> }
        { loginError && <div>{loginError.message}</div> }
        </form>
        <div class="social-login">
          <h3>log in via</h3>
          <div class="social-icons">
            <a href="#" class="social-login__icon fab fa-instagram"></a>
            <a href="#" class="social-login__icon fab fa-facebook"></a>
            <a href="#" class="social-login__icon fab fa-twitter"></a>
          </div>
        </div>
      </div>
      <div class="screen__background">
        <span class="screen__background__shape screen__background__shape4"></span>
        <span class="screen__background__shape screen__background__shape3"></span>    
        <span class="screen__background__shape screen__background__shape2"></span>
        <span class="screen__background__shape screen__background__shape1"></span>
      </div>    
    </div>
  </div>
  )
}


export default LoginForm;