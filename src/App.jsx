import React from 'react'
import Filter from "./components/Filter"
import MenuList from "./components/MenuList"
import Cart from "./components/Cart"
import './App.css'

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <span className="logo-icon">🍽️</span>
              <h1>Campus Eats</h1>
            </div>
            <p className="tagline">Fresh food delivered to your campus</p>
          </div>
        </div>
      </header>
      
      <main className="container main-content">
        <div className="content-grid">
          <div className="menu-section">
            <div className="section-header">
              <h2>🍜 Our Menu</h2>
              <Filter />
            </div>
            <MenuList />
          </div>
          <aside className="cart-section">
            <Cart />
          </aside>
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2024 Campus Eats - Made with ❤️ for students</p>
      </footer>
    </div>
  )
}

export default App
