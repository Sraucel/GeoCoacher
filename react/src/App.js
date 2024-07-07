import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};


const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>GeoCoacher</h1>
        <p>GeoCoacher offers personalized geography coaching services, aiming to help people understand and appreciate geographic concepts through interactive and practical learning experiences.</p>
        <p>Potential users range from students to companies, anyone willing to learn about geography or needs it for something.</p>
        <p>Alex, a high school student, is interested in improving their geography knowledge for upcoming exams and enhancing their understanding of world regions and geographic concepts.</p>
        <nav>
          <ul>
            <li><Link to="/interactive-process" className="App-link">Interactive Process</Link></li>
            <li><Link to="/analyze-results" className="App-link">Analyze Results</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

const InteractiveProcessPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Process</h1>
        <h2>Follow Instructions</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Question:
            <textarea name="question"></textarea>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
};

const AnalyzeResultsPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Analyze Results</h1>
        <p>Explore in a Divergent/Convergent Model.</p>
        <p>Analyze the results of your interactive processes here.</p>
        {/* Add any charts, graphs, or results display components here */}
      </header>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/interactive-process" element={<InteractiveProcessPage />} />
          <Route path="/analyze-results" element={<AnalyzeResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
