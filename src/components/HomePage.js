import React from 'react'
import styled from "styled-components"
import Section from './Section';



function HomePage() {
    return (
        <Container> 
            <Section title="Model S" description="Order Online for Contactless delivery" backgroundImageName="model-s.jpg"/>
            <Section  title="Model X" description="Order Online for Contactless delivery" backgroundImageName="model-x.jpg"/>
            <Section  title="Model Y" description="Order Online for Contactless delivery" backgroundImageName="model-y.jpg"/>
        </Container>
    )
}

export default HomePage

const Container = styled.div`
   height: 100vh
`
 
  