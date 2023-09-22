import React from 'react'
import Back from '../common/Back'
import images from '../images/services.jpg';
import RecentCard from '../recent/RecentCard';

const Blog = () => {
  return (
    <>
        <section className='blog-out mb'>
            <Back name='Blog' title='Blog Grid - Our Blogs' cover={images} />
            <div className='container recent'>
                <RecentCard />
            </div>
        </section>
    </>
  )
}

export default Blog
