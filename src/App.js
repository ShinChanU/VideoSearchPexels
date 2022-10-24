import React from 'react';
import styled from 'styled-components';
import NavBar from 'components/NavBar.js';
import OpenColor from 'open-color';
import VideoPage from 'pages/VideoPage.js';
import Footer from 'components/Footer';

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: ${OpenColor.teal[0]};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <NavBar />
      <VideoPage />
      <Footer />
    </Container>
  );
}

export default App;
