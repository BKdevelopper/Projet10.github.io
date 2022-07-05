//function page
import { useFetch } from '../../Utils/hooks'
import AppartementPage from '../../components/Location'
import ImageSlider from '../../components/Slider'

const LocationPage = (props) => {
  const {
    data: items,
    error,
    isLoading,
  } = useFetch(`http://localhost:3000/api/data.json`)

  return (
    <div className="location-page">
      {isLoading && <div className="loading">Traitement en cours ...</div>}
      {error && (
        <div className="error">
          Désolé, une erreur est survenue pendant le chargement ...
        </div>
      )}
      {items && <ImageSlider items={items} />}
      {items && <AppartementPage items={items} />}
    </div>
  )
}
export default LocationPage
//}
