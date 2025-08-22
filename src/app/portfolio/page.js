import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import PortfolioHero from '@/components/PortfolioHero'
import PortfolioSection from '@/components/PortfolioSection'
import React from 'react'

function page() {
  return (
    <div className='bg-black'>
      <PortfolioHero title='Do Epic' text={["design", "dev", "creative", "social", "design"]} />
      <PortfolioSection />
      <Footer />
    </div>
  )
}

export default page
