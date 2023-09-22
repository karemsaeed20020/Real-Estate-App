import React from 'react'
import Back from '../common/Back';
import images from '../images/pricing.jpg'
import PriceCard from '../home/price/PriceCard';

const Pricing = () => {
  return (
    <>
        <section className='pricing mb'>
            <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={images} />
            <div className='price container'>
                <PriceCard />
             </div>
        </section>
    </>
  )
}

export default Pricing
