import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import useWindowWidth from "../Hooks/useWindowWidth";
import { WmddData }from '../../lib/WmddData';

const DevSlider = () => {
    const width = useWindowWidth();
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    //   autoplay: true,
      speed: 2000,
      
    };
    
    const developerInfo = WmddData.developer_details;
    const developerDetails = developerInfo.map(detail => 
    <ContentContainer>
      {/* <Number src={detail.number} width={40} height={90}/> */}
      <Subtitle>{detail.title}</Subtitle>
      <Body>{detail.description}</Body>
      {/* <Arrow src={detail.arrow} /> */}
    </ContentContainer>
)
return width < 1015 ? (
    <DevSliderContainer>
        <Title>Summary Of Developer Stream</Title>
        <Slider {...settings}>
            {/* <Number src={detail.number} width={40} height={90}/> */}
            <SliderContainer>
                {developerDetails[0]}
            </SliderContainer>
            <SliderContainer>
                {developerDetails[1]}
            </SliderContainer>
            <SliderContainer>
                {developerDetails[2]}
            </SliderContainer>
        </Slider>
  </DevSliderContainer>
  ) : (
      <DevContainer>
        <Title>Summary Of Developer Stream</Title>
        <GridContainer>
            <GridItem>
                {developerDetails[0]}   
            </GridItem>
            <GridItem>
                {developerDetails[1]}
            </GridItem>
            <GridItem>
                {developerDetails[2]}
            </GridItem>
        </GridContainer>
      </DevContainer>
  );
};
const Number = styled.img`
    position: absolute;
    top: -3%;
    top: 1%;
`;

const SliderContainer = styled.div`
    width: 308px;
    height: 398px;
`;

const Arrow = styled.img`
    position: absolute;
    margin-top: 10px;
    margin-left: 170px;
`;
const Title = styled.h1`
    color: white;
    font-size: 32px;
    margin-top: 0;
    line-height: 1.25;

    @media only screen and (min-width: 768px) {
        font-size: ${(50 / 1366) * 100}vw;
      }
`;
const Subtitle = styled.h2`
    color: #FFF2A8;
    padding-top: 20px;
    font-size: 24px;
`;
const Body = styled.div`
    color: white;
    size: 13px;
`;
const DevSliderContainer = styled.div`
    background-color: #675D51;
    padding: 50px 2.5rem;
`;
const ContentContainer = styled.div`
    background-color: #596C69;
    width: 308px; 
    height: 398px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
`;

const DevContainer = styled.div`
    background-color: #675D51;
    padding: 2.5rem;
`;

const GridContainer = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
`;

const GridItem = styled.div`
      margin-left: auto;
      margin-right: auto;
`;

export default DevSlider;