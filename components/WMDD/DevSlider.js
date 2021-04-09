import React from "react";
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
            <Container>
                <Number src={detail.number} width={40} height={90}/>
            </Container>
            <Subtitle>{detail.title}</Subtitle>
            <Body>{detail.description}</Body>
            <Arrow src={detail.arrow} />
        </ContentContainer>
)
return width < 1015 ? (
    <DevContainer>
        <Title>Summary Of Developer Stream</Title>
        <Slider {...settings}>
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
  </DevContainer>
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

const Container = styled.div`
    height: 30px;
    background-color: #675D51;
`;
const Number = styled.img`
    position: absolute;
    top: -4%;
    margin-left: 20px;

    @media only screen and (min-width: 768px) {
        display: block;
      }
`;

const Arrow = styled.img`
    position: absolute;
    bottom: 30px;
    margin-left: 215px;

    @media only screen and (min-width: 768px) {
        margin-left: 415px;
      }
    
    @media only screen and (min-width: 768px) {
        display: none;
      }
`;

const SliderContainer = styled.div`
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
    padding: 0 80px;
    text-align: center;
    line-height: 1.25;
`;
const Body = styled.div`
    color: white;
    size: 13px;
    padding: 0 20px;
    text-align: left;
`;

const ContentContainer = styled.div`
    background-color: #596C69;
    width: 308px; 
    height: 428px;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (min-width: 768px) {
        width: 520px;
        height: 300px;
      }

    @media only screen and (min-width: 1015px) {
        width: 308px; 
        height: 428px;
      }
`;

const DevContainer = styled.div`
    background-color: #675D51;
    padding: 50px 2.5rem;

    .slick-dots li {
        margin: 0 !important;
      }
      .slick-dots li button:before {
        font-size: 11px !important;
      }
      .slick-dots li.slick-active button:before {
        color: white !important;
      }
    .slick-slide div {
        outline: none;
    }
`;
const GridContainer = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
`;
const GridItem = styled.div`
    //   margin-left: auto;
    //   margin-right: auto;
      position: relative;
`;

export default DevSlider;