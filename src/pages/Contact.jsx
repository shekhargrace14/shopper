import React from 'react'
import HeroBanner from '../../public/assets/bg/bg-img-4.jpg'
import Hero from '../components/Hero'

const Contact = () => {
  return (
    <div>
      <Hero HeroBanner={HeroBanner} title={"Contact"} paragraph={null} formButton={null} />
    </div>

  )
}

export default Contact