import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useRef, FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData, AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { userAuthorizationStatus } from '../../store/user/user.selectors';
import { getCityByCityName, getRandomCityName } from '../../utils';
import { setCurrentCity } from '../../store/all-offers/all-offers.slice';

export default function Login(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const AuthStatus = useSelector(userAuthorizationStatus);
  const isAuth = (AuthStatus === AuthorizationStatus.Auth);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  const cityName = getRandomCityName().name;

  if (isAuth) {
    return (
      <Navigate to={AppRoute.Main} />
    );
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities - Login Page</title>
      </Helmet>

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
                  onKeyDown={(event) =>
                    (event.key === ' ') ?
                      event.preventDefault() :
                      event.key}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
                onClick={() => dispatch(setCurrentCity(getCityByCityName(cityName)))}
              >
                <span>{cityName}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
