import { useState } from "react";
import styled from "styled-components";
import { VideoPlayer } from "./VideoPlayer";
import { Todo } from "./todo-useRef/Todo";
import { StarWars } from "./StarWars";

export const Tabs = () => {
  const [isActive, setIsActive] = useState("first");

  const handleChangeTabs = () => {
    switch (isActive) {
      case "first":
        return (
          <TabContent>
            <VideoPlayer />
          </TabContent>
        );
      case "second":
        return (
          <TabContent>
            <Todo />
          </TabContent>
        );
      case "third":
        return (
          <TabContent>
            <StarWars />
          </TabContent>
        );
      default:
        return null;
    }
  };

  return (
    <TabsContainer>
      <ButtonsWrapper>
        <TabButton
          active={isActive === "first"}
          onClick={() => setIsActive("first")}
        >
          First
        </TabButton>
        <TabButton
          active={isActive === "second"}
          onClick={() => setIsActive("second")}
        >
          Second
        </TabButton>
        <TabButton
          active={isActive === "third"}
          onClick={() => setIsActive("third")}
        >
          Third
        </TabButton>
      </ButtonsWrapper>
      {handleChangeTabs()}
    </TabsContainer>
  );
};

const TabsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 20px auto;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background: ${(props) => (props.active ? "#007bff" : "#ccc")};
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    background: ${(props) => (props.active ? "#0056b3" : "#999")};
  }
`;

const TabContent = styled.div`
  padding: 15px;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
