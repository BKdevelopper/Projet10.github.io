import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const AppartementPage = (props) => {
  const { id } = useParams() // get id from url
  const navigate = useNavigate()
  const [accommodation, setAccommodation] = useState()
  const IdAppartement = props.items.filter((data) => data.id === id)
  console.log(IdAppartement)
  useEffect(() => {
    const IdAppartemente = props.items.find((data) => data.id === id)
    IdAppartemente ? setAccommodation(IdAppartemente) : navigate('/404')
  }, [])

  const [view, setView] = useState(false)
  const [view2, setView2] = useState(false)
  const dataStar = IdAppartement.map((el) => el.rating)
  const nbrStar = parseInt(dataStar, 10) // 10 décimal
  function handleClick() {
    setView((view) => !view)
  }
  function handleClick2() {
    setView2((view2) => !view2)
  }
  let activeDiv = view ? 'active' : 'inActive'
  let activeDiv2 = view2 ? 'active' : 'inActive'

  return accommodation ? (
    <div className="container">
      <div className="infosContainer">
        {IdAppartement.map((item) => (
          <div className="infosContainer-left" key={item.id}>
            <h1 className="infosContainer-left-title">{item.title}</h1>
            <p className="infosContainer-left-address">{item.location}</p>
            <div className="infosContainer-left-tagInfos">
              {IdAppartement.map(({ tags }) => {
                return tags.map((t) => {
                  return (
                    <p className="infosContainer-left-tagInfos-item" key={t}>
                      {t}
                    </p>
                  )
                })
              })}
            </div>
          </div>
        ))}

        <div className="infosContainer-right">
          {IdAppartement.map((item) => (
            <div className="infosContainer-right-user" key={item.host.name}>
              <p className="infosContainer-right-user-name">{item.host.name}</p>
              <img
                src={item.host.picture}
                alt={item.host.picture}
                className="infosContainer-right-user-img"
              />
            </div>
          ))}
          {
            <div className="infosContainer-right-stars">
              <div className="infosContainer-right-stars-container">
                <div className="infosContainer-right-stars-container-starRate">
                  {[...Array(nbrStar)].map((stars, index) => {
                    return (
                      <img key={index} src="../img/star_24px2.svg" alt="" />
                    )
                  })}
                </div>

                <div className="infosContainer-right-stars-container-starBase">
                  {[...Array(5 - nbrStar)].map((starBase, index) => {
                    return <img key={index} src="../img/star_24px.svg" alt="" />
                  })}
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <div className="descriptionContainer">
        {IdAppartement.map((dropdown, index) => (
          <div className="descriptionContainer-dropdown" key={index}>
            <div className="descriptionContainer-dropdown-container">
              <div className="descriptionContainer-dropdown-container-title">
                <button
                  className={`descriptionContainer-dropdown-container-title-btn ${activeDiv}`}
                  onClick={handleClick}
                >
                  <div className="descriptionContainer-dropdown-container-title-btn-dropdown">
                    <p className="descriptionContainer-dropdown-container-title-btn-dropdown-text">
                      Description
                    </p>
                    <img
                      src="../img/arrow-dropdown.svg"
                      alt="arrow-dropdown"
                      className="descriptionContainer-dropdown-container-title-btn-dropdown-arrowDown"
                      style={{
                        transform: view ? 'rotate(-180deg)' : null,
                        transition: '0.2s',
                      }}
                    />
                  </div>
                </button>
              </div>
              {view ? (
                <div className="descriptionContainer-dropdown-container-content">
                  <p className="descriptionContainer-dropdown-container-content-text">
                    {dropdown.description}
                  </p>
                </div>
              ) : null}
            </div>

            <div className="descriptionContainer-dropdown-container">
              <div className="descriptionContainer-dropdown-container-title">
                <button
                  className={`descriptionContainer-dropdown-container-title-btn ${activeDiv2}`}
                  onClick={handleClick2}
                >
                  <div className="descriptionContainer-dropdown-container-title-btn-dropdown">
                    <p className="descriptionContainer-dropdown-container-title-btn-dropdown-text">
                      Equipements
                    </p>
                    <img
                      src="../img/arrow-dropdown.svg"
                      alt="arrow-dropdown"
                      className="descriptionContainer-dropdown-container-title-btn-dropdown-arrowDown"
                      style={{
                        transform: view2 ? 'rotate(-180deg)' : null,
                        transition: '0.2s',
                      }}
                    />
                  </div>
                </button>
              </div>
              {view2 ? (
                <div className="descriptionContainer-dropdown-container-content">
                  <ul className="ulEquipments">
                    {dropdown.equipments.map((stuff, index) => (
                      <li
                        className="descriptionContainer-dropdown-container-content-text"
                        key={index}
                      >
                        {stuff}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <></>
  )
}

export default AppartementPage
