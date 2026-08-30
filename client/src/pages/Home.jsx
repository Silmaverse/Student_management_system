import React from 'react'
import Hero from '../components/Hero'
import Category from '../components/Category'
import BestSellingCourse from '../components/BestSellingCourse'
import RecentlyAddedCourse from '../components/RecentlyAddedCourse'
import Instructor from '../components/Instructor'

const Home = () => {
  return (
    <>
    <Hero/>
    <Category/>
    <BestSellingCourse/>
    <RecentlyAddedCourse/>
    <Instructor/>
    </>
  )
}

export default Home