import React from 'react'
import styled from "styled-components"

function Section() {
    return (
        <SectionContainer>
             <PictureText>
                 <h1>Model S</h1>
                 <p>Contact to score stuff</p>
             </PictureText>
             <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
        </ButtonGroup>
        </SectionContainer>
        
    )
}

export default Section
// justify ontent is for vertcial alignmnet
const SectionContainer = styled.div`
    width: 100vw; 
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;

     
`

const PictureText = styled.div`
padding-top: 15vh;
text-align: center;
`

const ButtonGroup = styled.div`
    display: flex; 
    margin-botton: 300px;
`

const LeftButton = styled.div`
background-color: red;
height: 70px;
width: 256px;
color: white; 
display: flex;
 justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
`

const RightButton = styled(LeftButton)`

`

