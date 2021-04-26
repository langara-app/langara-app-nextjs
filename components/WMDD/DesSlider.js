import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import useWindowWidth from "../Hooks/useWindowWidth";
import { WmddData }from '../../lib/WmddData';

const DesSlider = () => {
  const width = useWindowWidth();
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      speed: 2000
    };

    const designerInfo = WmddData.designer_details;
    const designerDetails = designerInfo.map(detail => 
      <ContentContainer>
        <Container>
          <Number src={detail.number} width={40} height={90}/>
        </Container>
        <Subtitle>{detail.title}</Subtitle>
        <Body>{detail.description}</Body>
        <Arrow src={detail.arrow} />
    </ContentContainer>
    );

    return width < 1015 ? (
      <DesSliderContainer>
        <Title>Summary Of Designer Stream</Title>
        <Slider {...settings}>
          <SliderContainer>
            {designerDetails[0]}
          </SliderContainer>
          <SliderContainer>
            {designerDetails[1]}
          </SliderContainer>
          <SliderContainer>
            {designerDetails[2]}
          </SliderContainer>
        </Slider>
      </DesSliderContainer>
    ) : (
      <DesContainer>
        <Title>Summary Of Designer Stream</Title>
        <GridContainer>
            <GridItem>
                {designerDetails[0]}   
            </GridItem>
            <GridItem>
                {designerDetails[1]}
            </GridItem>
            <GridItem>
                {designerDetails[2]}
            </GridItem>
        </GridContainer>
    </DesContainer>
    );
}

const Container = styled.div`
  height: 30px;
  background-color: #EFFDFB;
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
    display: none;
  }
  // @media only screen and (min-width: 768px) {
  //     display: none;
  // }
`;
const SliderContainer = styled.div``;

const Title = styled.h1`
  font-size: 32px;
  margin-top: 0;
  line-height: 1.25;

  @media only screen and (min-width: 768px) {
    font-size: ${(50 / 1366) * 100}vw;
  }
`;
const Subtitle = styled.h2`
  color: #C36448;
  padding-top: 20px;
  font-size: 24px;
  padding: 0 60px;
  text-align: center;
  line-height: 1.25;
`;
const Body = styled.div`
  size: 13px;
  padding: 0 20px;
  text-align: left;
`;
const DesSliderContainer = styled.div`
  padding: 2.5rem;

  .slick-dots li {
    margin: 0 !important;
  }
  .slick-dots li button:before {
    font-size: 11px !important;
  }
  .slick-dots li.slick-active button:before {
    color: #675D51 !important;
  }
  .slick-slide div {
    outline: none;
  }
`;
const ContentContainer = styled.div`
  background-color: #FFF2A8;
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
const DesContainer = styled.div`
  background-color: #EFFDFB;
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
  position: relative;
`;

export default DesSlider;