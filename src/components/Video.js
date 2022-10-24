import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-content: center;

  > input {
    width: 200px;
    font-size: 25px;
    padding: 5px 10px;
    border-radius: 5px;
    background: white;
    border: none;
    margin: 10px auto;
    background: black;
    color: white;
  }

  > button {
    width: 200px;
    font-size: 25px;
    padding: 5px 10px;
    border-radius: 5px;
    background: white;
    margin: 10px auto;
    cursor: pointer;
    :hover {
      background: black;
      color: white;
      transition: 0.2s all linear;
    }
  }
`;

const Loading = styled.div`
  text-align: center;
`;

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

const VideoEl = styled.div`
  margin: 20px;
`;

const Video = ({ getSportsData, loading, broadcastData }) => {
  return (
    <Container>
      <button onClick={getSportsData}>채널 불러오기</button>
      {loading && <Loading>로딩중입니다...</Loading>}
      {broadcastData && (
        <VideoContainer>
          {broadcastData.links.map((e, i) => (
            <VideoEl>
              <div>{broadcastData.names[i]}</div>
              <ReactPlayer url={e} controls={true} width="100%" height="auto" />
            </VideoEl>
          ))}
        </VideoContainer>
      )}
    </Container>
  );
};

export default Video;
