import { useRef } from "react";
import videoFile from "../assets/nature.mp4";
import kgzFile from "../assets/kgz.mp4";
import styled from "styled-components";

export const VideoPlayer = () => {
  const videoRef1 = useRef();
  const videoRef2 = useRef();

  const handlePlay = () => {
    videoRef1.current.play();
    videoRef2.current.play();
  };

  const handlePause = () => {
    videoRef1.current.pause();
    videoRef2.current.pause();
  };

  const handleRewind = () => {
    videoRef1.current.currentTime -= 5;
    videoRef2.current.currentTime -= 5;
  };

  const handleForward = () => {
    videoRef1.current.currentTime += 5;
    videoRef2.current.currentTime += 5;
  };

  return (
    <StyledContainer>
      <StyledDiv>
        <video
          ref={videoRef1}
          src={videoFile}
          width="400"
          height="300"
          controls
        />
        <video
          ref={videoRef2}
          src={kgzFile}
          width="400"
          height="300"
          controls
        />
      </StyledDiv>

      <ButtonContainer>
        <StyledButton onClick={handlePlay}>Play</StyledButton>
        <StyledButton onClick={handlePause}>Pause</StyledButton>
        <StyledButton onClick={handleRewind}>Rewind 5s</StyledButton>
        <StyledButton onClick={handleForward}>Forward 5s</StyledButton>
      </ButtonContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 150px;
  video {
    width: 100%;
    height: 400px;
    border-radius: 12px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }

  &:active {
    background: #004094;
  }
`;
