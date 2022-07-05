import React, { useState } from 'react'
function AboutUsPage() {
  const data = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: 'Responsabilité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className="dropdown">
      <div className="dropdown-container">
        {data.map((item, i) => (
          <div className="dropdown-container-item" key={item.title}>
            <div
              className="dropdown-container-item-title"
              onClick={() => toggle(i)}
            >
              <h2>{item.title}</h2>
              <img
                src="../img/arrow-dropdown.svg"
                alt="arrow accordeon"
                className="dropdown-container-item-title-img"
                style={{
                  transform: selected === i ? 'rotate(-180deg)' : null,
                  transition: '0.2s',
                }}
              />
            </div>
            <div
              className={selected === i ? 'box show' : 'box'}
              key={i.content}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutUsPage
//}
