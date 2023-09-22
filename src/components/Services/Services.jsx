import React from 'react'
import Back from '../common/Back';
import images from '../images/services.jpg'
import FeaturedCard from '../featured/FeaturedCard';

const Services = () => {
  return (
    <>
    <section className='services mb'>
        <Back name='Services' title='Services -AllServices'  cover={images}/>
        <div className='featured container'>
            <FeaturedCard />
        </div>

        
    </section>
    </>
  )
}

export default Services
