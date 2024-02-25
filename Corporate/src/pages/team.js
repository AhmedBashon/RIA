import React from 'react'
import AppHeader from '../components/header';
import AppTeams from '../components/teams';
import AppFooter from '../components/footer';
function Team() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppTeams />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  )
}

export default Team