import React, { useState } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

const ImageSlider = (props) => {
  const { id } = useParams()

  const imageId = props.items.filter((image) => image.id === id)

  const [current, setCurrent] = useState(0)
  const slidelength = imageId
    .map((slide) => slide.pictures)
    .map((img) => (img = img.length))
  const nextSlide = () => {
    setCurrent(current === slidelength - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? slidelength - 1 : current - 1)
  }

  if (!Array.isArray(slidelength) || slidelength.length <= 0) {
    return null
  }

  return (
    <div className="sliderContainer">
      <FaChevronLeft
        className="sliderContainer-arrow-left"
        onClick={prevSlide}
      />
      <FaChevronRight
        className="sliderContainer-arrow-right"
        onClick={nextSlide}
      />
      {imageId.map((slide, index) => {
        return slide.pictures.map((img, index) => (
          <div
            className={index === current ? 'slide-active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={img} alt={img} className="imageSlider" key={img} />
            )}
          </div>
        ))
      })}
    </div>
  )
}

export default ImageSlider
