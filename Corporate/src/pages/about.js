import React from 'react'
import AppHeader from '../components/header';
import AppAbout from '../components/about';
import AppFooter from '../components/footer';
function about() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppAbout />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  )
}

export default about