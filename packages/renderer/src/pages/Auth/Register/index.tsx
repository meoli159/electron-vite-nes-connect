import {type ChangeEvent} from 'react';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import type {User} from 'types/User';
import './style.css';

function test(state: User) {
  window.api.register(state);
}

export default function RegisterPage() {
  const [state, setState] = useState<User>({email: '', userName: '', password: ''});

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    test(state);
    console.log(state.email, state.userName, state.password);
  };

  return (
    <div className="container">
      <form
        className="register-form"
        onSubmit={handleRegister}
      >
        <h1>Welcome to Nes Connect </h1>
        <div className="input-box">
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setState({...state, email: e.target.value})
            }
            value={state?.email}
            required
          />
        </div>
        <div className="input-box">
          <input
            name="user name"
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
        <button
          type="submit"
          className="btn-register"
        >
          Register
        </button>

        <div className="login-link">
          <p>
            Already have account?
            <Link
              to={'/login'}
              style={{margin: '5px', fontWeight: 'bold'}}
            >
              Login here!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
