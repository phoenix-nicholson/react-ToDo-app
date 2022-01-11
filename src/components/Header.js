import React from 'react';
import classNames from 'classnames';

export default function Header(type, setType) {
  return (
    <div>
      <div>
        <h2
          onClick={() => {
            setType('sign in');
          }}
          className={classNames({ active: type === 'sign in' })}
        >
          Sign In
        </h2>
      </div>
      <div>
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
