import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <img src="../img/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="header-menu">
        <Link to="/">Accueil</Link>
        <Link to="/aboutus">A Propos</Link>
      </div>
    </div>
  )
}

export default Header
