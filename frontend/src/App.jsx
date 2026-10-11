import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EducationChips from './components/EducationChips'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './App.css'


function App() {
    const [selectedEducation, setSelectedEducation] = useState('B.Tech')
  return (
    <>
      <Navbar />
      <Hero />
      <EducationChips
  selectedEducation={selectedEducation}
  setSelectedEducation={setSelectedEducation}
      /> 
      <HowItWorks />
      <Features />
      <CTASection />
      <Footer />
    </>
  )
}

export default App