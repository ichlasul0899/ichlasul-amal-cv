import React from 'react'

const ImageSlider = ({data, id}) => {
  if (data) {
    console.log(data.image, "==>", id)
  }
  return (
    <li>
      <img src={data.image} alt={data.image} />
      <div className="caption center-align">
        <h3>{data.title}</h3>
        <h5 className="light grey-text text-lighten-3">{data.desc}</h5>
      </div>
    </li>
  )
}

export default ImageSlider