import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import useWindowWidth from "../Hooks/useWindowWidth";
import { WmddData }from '../../lib/WmddData';

const SimpleSlider = () => {
// export default class SimpleSlider extends Component {
//   render() {
    const width = useWindowWidth();
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 2000
    };
    
    const developerInfo = WmddData.developer_details;
    const developerDetails = developerInfo.map(detail => 
    <ContentContainer>
      <Number src={detail.number} width={40} height={90}/>
      <Subtitle>{detail.title}</Subtitle>
      <Body>{detail.description}</Body>
      <Arrow src={detail.arrow} />
    </ContentContainer>
)
return width < 768 ? (
    <DevSliderContainer>
        <Title>Summary Of Developer Stream</Title>
        <Slider {...settings}>
            {/* <Number src={detail.number} width={40} height={90}/> */}
            {developerDetails[0]}
            {developerDetails[1]}
            {developerDetails[2]}
        </Slider>
  </DevSliderContainer>
  ) : (
      <DevGridContainer>
        {developerDetails[0]}
        {developerDetails[1]}
        {developerDetails[2]}
      </DevGridContainer>
  );
};
const Number = styled.img`
    position: absolute;
    top: -3%;
    top: 1%;
`;

const Arrow = styled.img`
    position: absolute;
    // bottom: 20%;
    // left: 24%
    margin-top: 10px;
    margin-left: 170px;
    // margin-bottom: 5%;

`;
const Title = styled.h1`
    color: white;
    font-size: 32px;
    margin-top: 0;
    line-height: 1.25;
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
    // position: relative;
    height: 80%;
`;
const ContentContainer = styled.div`
    background-color: #596C69;
    width: 308px; 
    height: 398px;
    margin-right: 0;
    padding: 20px;
    // position: relative;
`;

const DevGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-content: center;



`;

  export default SimpleSlider;