import React, { useState } from 'react';
import { signInUser, signupUser } from '../../services/users';
import AuthForm from '../../components/AuthForm';
import Header from '../../components/Header';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp =
        type === 'signin' ? await signInUser(email, password) : await signupUser(email, password);
      setCurrentUser(resp);
    } catch {
      setErrorMessage('Something has gone wrong. Please try again');
    }
  };

  return (
    <div>
      <Header type={type} setType={setType} />
      <AuthForm
        errorMessage={errorMessage}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        setType={setType}
      />
    </div>
  );
}
