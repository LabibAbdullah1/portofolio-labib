import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { CustomCursor } from './components/CustomCursor';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

const App = () => {
  return (
    <Router>
      <CustomCursor />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;