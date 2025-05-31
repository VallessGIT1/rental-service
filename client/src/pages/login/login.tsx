import {Logo} from "../../components/logo/logo";
import {useContext, useState} from "react";
import {AuthContext} from "../../hooks/auth-provider";
import {useNavigate} from "react-router-dom";
import {AppRoute} from "../../const";

function Login() {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
    navigate(AppRoute.Main)
  }

  return (
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo/>
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
                  <input
                      className="login__input form__input"
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Электронная почта"
                      required
                  />
                </div>

                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                      className="login__input form__input"
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Пароль"
                      required
                  />
                </div>

                <button
                    className="login__submit form__submit button"
                    type="submit"
                >
                  Sign in
                </button>

              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
  );
}

export {Login};
