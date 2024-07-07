import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Explore from './components/explore';
import './App.css';
import Background from './components/background';

function App() {
  return (
    <div className="App">
      <Background>
        <Navbar />
        <Header />
      </Background>
      <main>
        <Explore />
      </main>
    </div>
  );
}

export default App;
