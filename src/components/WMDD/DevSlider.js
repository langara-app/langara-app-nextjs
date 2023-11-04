import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { WmddData }from '../../lib/WmddData';

const DevSlider = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
          {
            breakpoint: 1016,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1015,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
        ]
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
    );

return (
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
)};

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
    @media only screen and (min-width: 1016px) {
        width: 0;
    }
`;
const SliderContainer = styled.div``;

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
    font-size: 15px;
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
    @media only screen and (min-width: 1016px) {
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
        color: #BAA994;
      }
      .slick-dots li.slick-active button:before {
        color: white !important;
      }
    .slick-slide div {
        outline: none;
    }
`;

export default DevSlider;