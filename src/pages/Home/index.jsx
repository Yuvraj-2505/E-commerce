import React from 'react'
import HomeSlider from '../../components/Homeslider/HomeSlider'
import HomeCatSlider from '../../components/HomeCatSlider/HomeCatSlider'
import { TbTruckDelivery } from "react-icons/tb";
import AdsBannerSlider from '../../components/AdsBannerSlider/AdsBannerSlider';

const Home = () => {
  return (
    <>
        <HomeSlider/>
        <HomeCatSlider/>

        <section className='bg-white py-16'>
            <div className='container'>
                <div className='freeShipping w-full p-4 py-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7'>
                    <div className='col1 flex items-center gap-4'>
                        <TbTruckDelivery className='text-[50px]'/>
                        <span className='text-[20px] font-[600] uppercase'>Free Shipping</span>
                    </div>

                    <div className='col2'>
                        <p className='mb-0 font-[400]'>
                            Free Delivery Now On Your First Order and over $200
                        </p>
                    </div>

                    <p className='font-bold text-[25px]'>- Only $200*</p>
                </div>

                <AdsBannerSlider items={4}/>

            </div>
        </section>

        <br /><br /><br /><br /><br /><br />
    </>
  )
}

export default Home
