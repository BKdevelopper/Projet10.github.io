import { useFetch } from '../../Utils/hooks'
import React from 'react'
import HomePage from '../../components/Home'
const Home = () => {
  const {
    data: cards,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/api/data.json`)
  return <div className="page-home">{cards && <HomePage cards={cards} />}</div>
}

export default Home
