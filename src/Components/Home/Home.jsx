import React from 'react'
import './Home.scss';
import axios from 'axios';

const Card = ({ img }) => (
  <img className='card' src={img} alt="cover" />
)

const Row = ({ title, arr=[{
  img: 'https://ohsmagnet.com/wp-content/uploads/2019/04/unnamed-607x900.jpg'
}] }) => (
  <div className='row'>
    <h2>{title}</h2>
    <div>
        {
          arr.map((item) => (
            <Card img={item.img} />
          ))
        }
    </div>
  </div>
)

const Home = () => {
  return (
    <section className="home">
      <div className="banner"></div>

      <Row title={"Popular on Netflix"} />
      <Row title={"Movies"} />
      <Row title={"TV Shows"} />
      <Row title={"Recently Added"} />
      <Row title={"My List"} />
    </section>
  )
}

export default Home