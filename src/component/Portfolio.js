import React, {useEffect} from 'react';
import CardPorto from './CardPorto'

const Portfolio = props => {

  const portfolio = [
    {
      id: 1,
      srcImage: "assets/images/gambar1.png",
      title: "Mobile UI MedicTF",
      desc:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    },
    {
      id: 2,
      srcImage: "assets/images/gambar2.png",
      title: "Mobile UI MedicTF",
      desc:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    },
    {
      id: 3,
      srcImage: "assets/images/gambar3.png",
      title: "Mobile UI MedicTF",
      desc:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    },
  ];

  let renderedPortfolio 
  const {from,id} = props

  useEffect(() => {
    console.log(from, id);
  }, [])

  if (props.from === "detail") {
    const data = portfolio.filter((data) => {
      if (id == data.id) {
        return data
      }
    })
    // console.log(data, "=====iklas")
    if (data) {
      // console.log("000", data[0])
      renderedPortfolio = <CardPorto data={data[0]} />
      
    }
    // renderedPortfolio = <>
    //     {portfolio.filter((data, index) => {
    //       console.log(typeof id, "====>", typeof data.id);
    //       if (id == data.id) {
    //         console.log(id, " & ", data.id)
    //         console.log("data nih :", data)
    //         return <CardPorto data={data}  />;
    //       }
    //     })}
    //   </>;
  } else {
    renderedPortfolio = <>{
        portfolio.map((data, index) => {
          return <CardPorto data={data} id={index} />
        })
      }</>
  }



  return (
    <section id="portfolio" className="scrollspy">
      <div className="container">
        <div className="row">
          <h3 className="center light">Portfolio</h3>
          {
            renderedPortfolio
          }

        </div>
      </div>
    </section>
  )
}

export default Portfolio;