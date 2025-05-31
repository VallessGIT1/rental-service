import {Logo} from "../logo/logo";
import {useContext} from "react";
import {AuthContext} from "../../hooks/auth-provider";
import {useNavigate} from "react-router-dom";
import {AppRoute, BASE_API_URL} from "../../const";

function Header() {

  const {user, logout} = useContext(AuthContext)
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate(AppRoute.Login)
  }

  return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {
                    user && (
                        <li className="header__nav-item user">
                          <a className="header__nav-link header__nav-link--profile" href="#">
                            <div className="header__avatar-wrapper user__avatar-wrapper">
                              {user.avatar && <img src={`${BASE_API_URL}${user.avatar}`} alt='avatar'/>}
                            </div>
                            <span className="header__user-name user__name">{user.email}</span>
                            <span className="header__favorite-count">3</span>
                          </a>
                        </li>
                    )
                }
                <li className="header__nav-item">
                  {
                      user && (
                          <a className="header__nav-link" href="#" onClick={handleLogout}>
                            <span className="header__signout">Sign out</span>
                          </a>
                      )
                  }
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  )
}

export {Header}