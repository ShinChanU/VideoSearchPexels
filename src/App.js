import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from 'components/NavBar.js';
import OpenColor from 'open-color';
import FootballPage from 'pages/FootballPage.js';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${OpenColor.indigo[1]};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<FootballPage />} />
          <Route path="*" element={<FootballPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
