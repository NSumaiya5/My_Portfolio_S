import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import Button from "react-bootstrap/Button";


const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong>Sumaiya Aktar</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Front-End Developer"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
        <div className="mt-5 "> 
          <a href="https://drive.google.com/uc?export=download&id=1Wk2f-gW2hilJR-6uTtBEeZH01Vqj8DWa"
 target="_blank" rel="noopener noreferrer">
           <Button className="m-2 " variant="outline-info"> My Resume </Button>
                    </a></div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
