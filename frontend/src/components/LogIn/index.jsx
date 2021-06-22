import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function LogIn() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [wantsToLogIn, setWantsToLogIn] = useState(true);
  const [isSignedUp, setIsSignedUp] = useState(false);

  function handleLogIn(event) {
    event.preventDefault();
    dispatch(logIn(email, password));
  }

  function logInWhenSignUp() {
    dispatch(logIn(user?.user?.email, user?.user?.password));
  }

  function handleSignUp(event) {
    event.preventDefault();
    setIsSignedUp(true);
    dispatch(signUp({
	  email,
	  password,
	  name: username,
	  image: 'https://trello-attachments.s3.amazonaws.com/60be2ac66f584f1c15c44183/710x682/ecf1f118c533b3cb15e3517966c32f48/default-logo.png'
    }));
  }

  return (
    <>
      <Route exact path="/logIn">
        {user?.token ? <Redirect to="/myProfile" /> : <Redirect to="/logIn" />}
      </Route>

      {
        isSignedUp && (
          <div className="LogInForm__container--signedup">
            <img src="https://trello-attachments.s3.amazonaws.com/60be2ac66f584f1c15c44183/1200x1200/fc34a6b95311fc2852e72754f5921e2b/â%C2%80%C2%94Pngtreeâ%C2%80%C2%94summer_plant_cartoon_parrot_animal_6018817.png" alt="" />
            <p>Thanks for joining us!</p>
            <button type="button" data-testid="profile-login-button" onClick={logInWhenSignUp}>Go to my Profile</button>
          </div>
        )
      }

      {
    wantsToLogIn && (
      <div className="LogInForm__container">
        <p className="LogInForm__title">Welcome back</p>

        <form className="LogInForm__form" onSubmit={handleLogIn}>
          <label htmlFor="email">
            <input type="email" />
          </label>

          <label htmlFor="name">
            <input type="text" />
          </label>
        </form>
        <p className="form__paragraph--last">Not a member yet?</p>
        <button className="LogInForm__button" data-testid="change-login-button" type="button" onClick={() => { setWantsToLogIn(false); setEmail(''); setPassword(''); }}>SignUp</button>
      </div>
    )
}
    </>
  );
}

export default LogIn;
