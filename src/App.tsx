//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import WeekOnePage from './pages/WeekOnePage';
//import WeekTwoPage from './pages/WeekTwoPage';
//import ResourcesPage from './pages/ResourcesPage';
//import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router basename="/English2_Diego">
      <Layout>
        <Routes>
          //<Route path="/" element={<HomePage />} />
          <Route path="/week-one" element={<WeekOnePage />} />
          /*<Route path="/week-two" element={<WeekTwoPage />} />*/
          /*<Route path="/resources" element={<ResourcesPage />} />*/
          /*<Route path="/about" element={<AboutPage />} /> */
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


