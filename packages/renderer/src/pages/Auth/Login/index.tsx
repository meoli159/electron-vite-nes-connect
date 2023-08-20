import React, {useState, type ChangeEvent} from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import type {User} from 'types/User';

function test(state: User) {
  window.api.login(state);
}

export default function LoginPage() {
  const [state, setState] = useState<User>({email: '', password: ''});

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    test(state);
    console.log(state?.email, state?.password);
  };

  return (
    <div className="container">
      <form
        className="login-form"
        onSubmit={handleLogin}
      >
        <h1>Oh! Hi There Welcome Back Capt </h1>
        <div className="input-box">
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setState({...state, email: e.target.value})
            }
            value={state?.email}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setState({...state, password: e.target.value})
            }
            value={state?.password}
            required
          />
        </div>
        <div className="forgot-link">
          <a
            href="#"
            style={{margin: '5px', fontWeight: 'bold'}}
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="btn-login"
        >
          Login
        </button>

        <div className="register-link">
          <p>
            Don't have account?
            <Link
              to={'/register'}
              style={{margin: '5px', fontWeight: 'bold'}}
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
