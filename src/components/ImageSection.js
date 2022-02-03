import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                  {/* <h4>I am <span></span></h4> */}
                <p className="paragraph">
                            I am so much passionate about web Application development
                            and Machine Learning.
                    
                </p>  
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Sourov Roy Antu</p>
                        <p>: 24</p>
                        <p>: Bangladeshi</p>
                        <p>: Bangla,English,Hindi </p>
                        <p>: Gazipur</p>
                        <p>: Software Solution</p>
                    </div>
                </div>
                {/* <PrimaryButton title={'Download Cv'} /> */}
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 3rem;
    display: flex;
    .left-content{
        width: 50%;
        img{
            margin-top:1rem;
            width: 90%;
            height:80% ;
            object-fit: cover;
        }
    }
    .right-content{
           width:100%;   
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 1rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 3rem;
            .info-title{
                padding-right: 5rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .5rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
