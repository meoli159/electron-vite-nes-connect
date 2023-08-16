import type {ChangeEvent} from 'react';
import React, { useState} from 'react';
import './style.css';

type User = {
  userName: string;
  password: string;
};

// function test() {
//   const electron = window.electron;
//   electron.login('login', 'greeting from login page');
// }
export default function LoginPage() {
  const [state, setState] = useState<User>({userName: '', password: ''});

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // test();
    console.log(state?.userName, state?.password);
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
            name="userName"
            type="text"
            placeholder="User Name"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setState({...state, userName: e.target.value})
            }
            value={state?.userName}
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
            <a
              href="#"
              style={{margin: '5px', fontWeight: 'bold'}}
            >
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
