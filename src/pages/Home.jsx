import React from 'react'
import Herosection from '../components/Herosection'
import AboutSection from '../components/AboutSection'
import SpecialOffers from '../components/SpecialOffers'
import RoomsSlider from '../components/RoomsSlider'
import Amenities from '../components/Amenities'
import FunFacts from '../components/FunFacts'
import OffersSection from '../components/OffersSection'
import VideoSection from '../components/VideoSection'
import Testimonials from '../components/Testimonials'
import ReservationForm from '../components/ReservationForm'
import BlogSection from '../components/sections/BlogSection'
import WhatsAppSticky from '../components/WhatsAppSticky'
import CallSticky from '../components/CallSticky'
import Franchise from '../components/Franchise'

export default function Home() {
  return (
    <div>
      <Herosection  />
      <AboutSection/>
      <SpecialOffers/>
      <RoomsSlider/>
      <Amenities/>
      <FunFacts/>
      <OffersSection/>
      <VideoSection/>
      <Testimonials/>
      <ReservationForm/>
      <BlogSection/>
      <WhatsAppSticky/>
      <CallSticky />
      <Franchise/>
      
    </div>
  )
}
