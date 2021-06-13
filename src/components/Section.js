import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade'

function Section(props) {
  return (
    <SectionContainer backgroundImage={props.backgroundImageName}>
        <Fade bottom>
      <PictureText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </PictureText>
      </Fade>
      <Buttons>
          <Fade bottom>
        <ButtonGroup>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>
        </Fade>
        <DownMovingArrow src="images/down-arrow.svg" />
      </Buttons>
    </SectionContainer>
  );
}

export default Section;
// justify ontent is for vertcial alignmnet
const SectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props=> `url("/images/${props.backgroundImage}")`}
`;

const PictureText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-botton: 300px;
 
  @media(max-width: 768px){
      flex-direction: column
  }
`;

const LeftButton = styled.div`
  background-color: grey;
  height: 70px;
  width: 356px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 22px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
 background-color: white;
  height: 70px;
  width: 356px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 22px;
  cursor: pointer;
  margin: 8px;
`;

const DownMovingArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;

