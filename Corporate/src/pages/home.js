import React from 'react'
import AppHeader from '../components/header';
import AppHero from '../components/hero';
import AppAbout from '../components/about';
import AppServices from '../components/services';
import AppWorks from '../components/works';
import AppTeams from '../components/teams';
import AppTestimonials from '../components/testimonials';
import AppPricing from '../components/pricing';
import AppBlog from '../components/blog';
import AppContact from '../components/contact';
import AppFooter from '../components/footer';
function Home() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
       
        <AppServices />
        <AppWorks />
        <AppTeams />
        <AppTestimonials />
        
        <AppBlog />
        
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  )
}

export default Home