import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import oc from 'open-color';

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex: 1;
`;

const Form = styled.form`
  width: 300px;
  margin: 10px auto;

  > input,
  > div > button,
  > div > input {
    font-size: 15px;
    padding: 8px 10px;
    border-radius: 5px;
    margin: 10px auto;
  }

  > input {
    width: 100%;
  }

  > div {
    display: flex;
    > button {
      width: 70%;
    }
    > input {
      width: 25%;
      margin: auto;
    }
  }

  > div > input,
  > div > button {
    background: ${oc.teal[1]};
    border: none;
    cursor: pointer;
    :hover {
      background: ${oc.teal[8]};
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

const Video = ({ loading, getVideoData, videoData, setVideoData }) => {
  const [searchInput, setSearchInput] = useState('');

  const onChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Container>
      <Form id="videoForm" onSubmit={(e) => getVideoData(e, searchInput)}>
        <input
          value={searchInput}
          onChange={onChangeInput}
          placeholder="검색어를 입력해주세요."
        />
        <div>
          <button type="submit" form="videoForm">
            동영상 검색
          </button>
          <input
            type="button"
            onClick={() => setVideoData([])}
            value="초기화"
          />
        </div>
      </Form>
      {loading && <Loading>loading...</Loading>}
      {!!videoData.length && (
        <VideoContainer>
          {videoData.map((e) => {
            const { id, link } = e.video_files[0];
            return (
              <VideoEl key={id}>
                <ReactPlayer
                  url={link}
                  controls={true}
                  width="100%"
                  height="400px"
                />
              </VideoEl>
            );
          })}
        </VideoContainer>
      )}
    </Container>
  );
};

export default Video;
