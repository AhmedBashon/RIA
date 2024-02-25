import React from 'react'
import AppHeader from '../components/header';
import AppPricing from '../components/pricing';
import AppFooter from '../components/footer';
function Price() {
  return (
    <div className="App">
    <header id='header'>
      <AppHeader />
    </header>
    <main>
      <AppPricing />
    </main>
    <footer id="footer">
      <AppFooter />
    </footer>
  </div>
  )
}

export default Price