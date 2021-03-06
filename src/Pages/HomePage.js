import React from "react";

import styled from "styled-components";
import KonaStyle from "../components/KonaStyle";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="typography">
        <h1>
          Hello I'm <span>Sourov Roy</span>
        </h1>
        <p>
            Welcome To My Portfolio
        </p>
        <div className="icons">
          <div className="icon i-facebook">
           
            <FacebookIcon />
          </div>
          <div className="icon i-github">
          
            <GithubIcon />
          </div>
          <div className="icon i-youtube">
            
            <YoutubeIcon />
          </div>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 95%;
    @media screen and (max-width:425px){
        width:80%;
    }

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    
       .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
         /* border-radius: 50%;  */
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 2rem;
          @media screen and (max-width:425px){
            margin-right: 1rem;
    }
       
        }
        svg {
          margin: 0.5rem;
        }
      } 

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }


`;
export default HomePage;
