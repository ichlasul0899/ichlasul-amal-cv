import React from 'react';

const CardPorto = ({ data, index }) => {
  console.log(data.srcImage, "====>", data.title)
  return (
    <div className="col m4 s12">
      <div className="card">
        <div className="card-image">
          <img src={data.srcImage} className="materialboxed" alt={data.title} />
            <span className="card-title">{data.title}</span>
        </div>
        <div className="card-content">
          <p>{data.desc}</p>
        </div>
        <div className="card-action">
          <a href="/">This is a link</a>
        </div>
      </div>
    </div>
  )
}

export default CardPorto;