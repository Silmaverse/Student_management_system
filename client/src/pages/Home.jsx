import React from 'react'
import Hero from '../components/Hero'
import Category from '../components/Category'
import BestSellingCourse from '../components/BestSellingCourse'
import RecentlyAddedCourse from '../components/RecentlyAddedCourse'
import Instructor from '../components/Instructor'
import Companies from '../components/Companies'

const Home = () => {
  return (
    <>
    <Hero/>
    <Category/>
    <BestSellingCourse/>
    <RecentlyAddedCourse/>
    <Instructor/>
    <Companies/>
    </>
  )
}

export default Home