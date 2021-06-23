import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { logIn } from '../../redux/actions/actionCreators';
import RegularBtn from '../Buttons/RegularBtn';
import logo from '../../assets/logo.svg';
import './login.scss';

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
      <Route exact path="/">
        {user?.token ? <Redirect to="/dashboard" /> : <Redirect to="/" />}
      </Route>
      <div className="form-wrapper">

        <img className="form-wrapper__logo" src={logo} alt="logo" />

        <h1 className="form-wrapper__title">Invoices App</h1>

        <form className="form-wrapper__form" onSubmit={handleSubmit}>

          <label className="form__label" htmlFor="email">
            Email
            <input
              onChange={
              (event) => setEmail(event.target.value)
              }
              name="email"
              type="email"
            />
          </label>

          <label
            className="form__label"
            htmlFor="password"
          >
            Password
            <input
              onChange={
              (event) => setPassword(event.target.value)
              }
              name="password"
              type="password"
            />
          </label>

          <div className="form__btn-wrapper">
            <RegularBtn
              nameBtn="LogIn"
              type="submit"
              data="login-button"
            />
          </div>
        </form>

      </div>
    </>
  );
}

export default LogIn;
