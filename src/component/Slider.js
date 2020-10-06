import React from 'react'
import ImageSlider from './ImageSlider'

const Slider = () => {

  const imageSlider = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600203119434-ad1d1a31322e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      title: 'Hello Good People !',
      desc: 'Welcome to Ichlasul Amal Website'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1580679226887-adc446a6c912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      title: 'Hello Good People 2 !',
      desc: 'Welcome to Ichlasul Amal Website 2'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1578911220845-6b187f4b1a7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      title: 'Hello Good People 3 !',
      desc: 'Welcome to Ichlasul Amal Website 3'
    }
  ]

  return (
    <div className="slider" >
      <ul className="slides">
        {
          imageSlider.map((data, index) => {
            return <ImageSlider data={data} id={index} />
          })
        }
        
      </ul>
    </div>
  )
}

export default Slider


        
        