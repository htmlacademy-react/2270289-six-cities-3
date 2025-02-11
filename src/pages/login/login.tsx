import { Link, Navigate } from 'react-router-dom';
import { useRef, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AppRoute, AuthData } from '../../const';
import ErrorMessage from '../../components/error-message/error-message';
/*
Request
{
  "email": "istanik@yandex.ru",
  "password": "passEdord12d"
}
RESPONSE
{
  "email": "istanik@gmail.com",
  "token": "aXN0YW5pa0BnbWFpbC5jb20=",
  "name": "istanik",
  "avatarUrl": "https://15.design.htmlacademy.pro/static/avatar/9.jpg",
  "isPro": false
}
*/

export default function Login(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      //console.log('начианем логгирование...');
      //console.log('loginRef.current.value', loginRef.current.value);
      //console.log('passwordRef.current.value', passwordRef.current.value);
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  //const user = useAppSelector((state) => state.dataAuthorization);
  //console.log('user => ', user);

  const authorizationStatus = useAppSelector((state) => state.dataAuthorization.authorizationStatus);

  //const patternInput = '{{/^(?!.*\s).{1,}$/}}';

  return (
    authorizationStatus === 'UNKNOWN' || authorizationStatus === 'NO_AUTH'
      ? (
        <div className="page page--gray page--login">
          <ErrorMessage />
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <Link className="header__logo-link" to="/">
                    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                  </Link>
                </div>
              </div>
            </div>
          </header>

          <main className="page__main page__main--login">
            <div className="page__login-container container">
              <section className="login">
                <h1 className="login__title">Sign in</h1>
                <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">E-mail</label>
                    <input className="login__input form__input" type="email" name="email" defaultValue={AuthData.email}
                      id="email" placeholder="Email" required ref={loginRef}
                    />
                  </div>
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">Password</label>
                    <input className="login__input form__input" type="password" name="password" defaultValue={AuthData.password}
                      id="password" placeholder="Password" required ref={passwordRef} autoComplete='off'
                      title="Любые символы кроме пробелов."
                      onKeyDown={(event) => {
                        return (event.key === ' ') ?
                          event.preventDefault() :
                          event.key;
                        }}
                    />
                  </div>
                  <button className="login__submit form__submit button" type="submit">Sign in</button>
                </form>
              </section>
              <section className="locations locations--login locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="/">
                    <span>Amsterdam</span>
                  </Link>
                </div>
              </section>
            </div>
          </main>
        </div>
      )
      : <Navigate to={AppRoute.Main} />
  );
}
