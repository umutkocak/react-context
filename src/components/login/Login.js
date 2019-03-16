import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="login container pt-5">
      <div className="card">
        <div className="card-header">Login/Register</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="Email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="Email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Password</label>
              <input
                type="password"
                className="form-control"
                id="Password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-warning mb-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}