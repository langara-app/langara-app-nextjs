import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { WmddData }from '../../lib/WmddData';

export default class SimpleSlider extends Component {
  render() {
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

    const designerInfo = WmddData.designer_details;
    const designerDetails = designerInfo.map(detail => 
        <ContentContainer>
            <Number src={detail.number} width={40} height={90}/>
            <Subtitle>{detail.title}</Subtitle>
            <Body>{detail.description}</Body>
            <img src={detail.arrow} />
      </ContentContainer>
    )

    return (
      <DevSliderContainer>
        <Title>Summary Of Designer Stream</Title>
        <Slider {...settings}>
            {designerDetails[0]}
            {designerDetails[1]}
            {designerDetails[2]}
        </Slider>
      </DevSliderContainer>
    );
  }
}

const Number = styled.img`
    position: absolute;
    top: -3%;
    top: 1%;
`;

const Title = styled.h1`
    font-size: 32px;
    margin-top: 0;
    line-height: 1.25;
`;
const Subtitle = styled.h2`
    color: #C36448;
    padding-top: 20px;
    font-size: 24px;
`;
const Body = styled.div`
    size: 13px;
`;
const DevSliderContainer = styled.div`
  padding: 50px 2.5rem;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`;
const ContentContainer = styled.div`
  background-color: #FFF2A8;
  width: 308px;
  height: 398px;
  padding: 20px;
  `;