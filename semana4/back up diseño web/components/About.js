import React from 'react';
import { Route, Link, useMatch, useResolvedPath, Routes } from 'react-router-dom';

const About = () => {
  let resolvedPath = useResolvedPath("");
  let match = useMatch({ path: resolvedPath.pathname, end: false });

  return (
    <div>
      <h1>About Page</h1>
      <ul>
        <li><Link to={`${match.url}/team`}>Our Team</Link></li>
        <li><Link to={`${match.url}/history`}>Our History</Link></li>
      </ul>
      <Routes>
        <Route path={`${match.path}/team`} element={<Team />} />
        <Route path={`${match.path}/history`} element={<History />} />
      </Routes>
    </div>
  );
}

const Team = () => <div><h2>Team Page</h2></div>;
const History = () => <div><h2>History Page</h2></div>;

export default About;
