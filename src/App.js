import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import PopularDrinks from './components/PopularDrinks';
function App() {
  return (
    <div className="h-auto w-full" style={{ backgroundColor: '#E5E5E5' }} >
      <Header />
      <PopularDrinks />
    </div>
  );
}

export default App;
