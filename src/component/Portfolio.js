import React from 'react';
import CardPorto from './CardPorto'

const Portfolio = () => {

  const portfolio = [
    {
      srcImage: '../images/gambar1.png',
      title: 'Mobile UI MedicTF',
      desc: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
    },
    {
      srcImage: '../images/gambar1.png',
      title: 'Mobile UI MedicTF',
      desc: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
    },
    {
      srcImage: '../images/gambar1.png',
      title: 'Mobile UI MedicTF',
      desc: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
    }
  ]

  return (
    <section id="portfolio" class="scrollspy">
      <div class="container">
        <div class="row">
          {/* <img src={`${process.env.PUBLIC_URL}/assets/images/gambar1.png`}  /> */}
          <h3 class="center light">Portfolio</h3>
          {
            portfolio.map((data, index) => {
              return <CardPorto data={data} id={index} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio;