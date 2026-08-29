import React from 'react'
import Hero from '../components/Hero'
import Category from '../components/Category'
import BestSellingCourse from '../components/BestSellingCourse'
import RecentlyAddedCourse from '../components/RecentlyAddedCourse'

const Home = () => {
  return (
    <>
    <Hero/>
    <Category/>
    <BestSellingCourse/>
    <RecentlyAddedCourse/>
    </>
  )
}

export default Home