import React from 'react'
import AppHeader from '../components/header';
import AppContact from '../components/contact';
import AppFooter from '../components/footer';

function contactus() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  )
}

export default contactus