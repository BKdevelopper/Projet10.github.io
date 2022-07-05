import { Link } from 'react-router-dom'
import React from 'react'

const HomePage = (props) => {
  const cards = props.cards
  return (
    <div className="cardsContainer">
      <div className="backgroundCards">
        <span>Chez vous, partout et ailleurs</span>
      </div>

      <div className="cards">
        {cards.map((data) => (
          <div className="cardsItem" key={data.id}>
            <Link to={`/location/${data.id}`} state={data}>
              <img
                src={data.cover}
                alt={data.cover}
                className="cardsItem-img"
              />
              <p className="cardsItem-title">{data.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default HomePage
