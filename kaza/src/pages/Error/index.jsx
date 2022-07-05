//function page
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <div className="Erreur">
      <div className="Erreur-Container">
        <p className="Erreur-Container-text1">404</p>
        <p className="Erreur-Container-text2">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="Erreur-Container-text3" to={'/'}>
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  )
}
export default ErrorPage
//}
