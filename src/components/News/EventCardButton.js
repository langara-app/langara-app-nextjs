import React from "react";
import styled from "styled-components";
import { CommonStyling } from "../../lib/CommonStyling";

const EventCardButton = ({
  buttonText = "See Details",
  to,
  openNew = false,
}) => {
  return <EventCardBtn>{buttonText}</EventCardBtn>;
};

const EventCardBtn = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  color: ${CommonStyling.primaryColor};
  font-size: ${CommonStyling.buttonFontSize};
  background-color: ${CommonStyling.backgroundColor};
  border: 1px solid ${CommonStyling.primaryColor};
  transition: background-color 0.3s;

  &:hover {
    color: ${CommonStyling.backgroundColor};
    background-color: ${CommonStyling.primaryColor};
  }
`;

export default EventCardButton;
