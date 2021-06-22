import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { logIn } from '../../redux/actions/actionCreators';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(logIn(email, password));
  }

  return (
    <>
      <Route exact path="/login">
        {user?.token ? <Redirect to="/dashboard" /> : <Redirect to="/" />}
      </Route>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input onChange={(event) => setEmail(event.target.value)} name="email" type="email" />
        </label>

        <label htmlFor="password">
          <input onChange={(event) => setPassword(event.target.value)} name="password" type="password" />
        </label>

        <button data-testid="login-button" type="submit">LogIn</button>
      </form>
    </>
  );
}

export default LogIn;
