import React from 'react';
import classNames from 'classnames';
import './Header.css';

export default function Header({ type, setType }) {
  return (
    <div>
      <div className="header-div">
        <h2
          onClick={() => {
            setType('signin');
          }}
          className={classNames({ active: type === 'signin' })}
        >
          Sign In
        </h2>
      </div>
      <div className="header-div">
        <h2
          onClick={() => {
            setType('sign up');
          }}
          className={classNames({ active: type === 'sign up' })}
        >
          Sign Up
        </h2>
      </div>
    </div>
  );
}
