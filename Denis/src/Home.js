import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Skrewball from './images/skrewball.jpeg'
import Denis from './images/denis.jpeg'

const Section = styled.section`
height: 100vh;
deisplay: flex;
justify-content;
align-items: center;
background: #131313
`;

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height: 100vh;
padding: 3rem calc((100VW - 1300PX)/ 2)

@media screen and (max-width: 768px){
  grid-grid-template-columns: 1fr;
}
`;

const ColumnLeft = styled.div`
display: flex;
color: #fff;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5rem 2rem;

h1 {
  margin-bottom: 0.5rem;
  font-size 
}

p {
  margin: 2rem 0;
  font-size: 4rem;
  line-height: 1.1;
}

`;

const Button = styled.div`
padding: 1rem 3rem;
font-size: 1 rem;
border: 2px solid #fff;
border-radius: 4px;
outline: none;
cursor: pointer;
background: transparent;

`;


const Image = styled.img`
// position: absolute;
width: 100%;
height: 100%;
max-width: 250px;
max-height: 250px;
`;


const ColumnRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
position: relative;
`;




function Home() {
   
   
    return (
     <Section>
       <Container>
         <ColumnLeft>
           <h1>hey</h1>
           <p>Journey</p>
          <Button>Get Started</Button>
         </ColumnLeft>
         <ColumnRight>
         <Image 
            style={{
            width: 200,
            height: 200,
            borderRadius: 200 / 2
          }}
        src={Skrewball} alt= "skrew" />
        <Image 
          style={{
          width: 200,
          height: 200,
          borderRadius: 200 / 2
        }}
        src={Denis} alt= "skrew" />
        </ColumnRight>
       </Container>
     </Section>
    );
  }
  
  export default Home;
  