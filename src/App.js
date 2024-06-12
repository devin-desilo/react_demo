import React, { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

export default App;
