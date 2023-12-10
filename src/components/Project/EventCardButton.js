import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { CommonStyling } from "../../lib/CommonStyling";

const EventCardButton = ({
  buttonText = "See Details",
  to,
  openNew = false,
}) => {
  return (
    <EventCardBtn>
      {!to ? (
        buttonText
      ) : (
        <Link target={openNew ? "_blank" : "_self"} href={to}>
          {buttonText}
        </Link>
      )}
    </EventCardBtn>
  );
};

const EventCardBtn = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  color: ${CommonStyling.primaryColor};
  font-size: ${CommonStyling.buttonFontSize};
  background-color: ${CommonStyling.backgroundColor};
  border: 2px solid ${CommonStyling.primaryColor};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${CommonStyling.backgroundColor};
    color: ${CommonStyling.primaryColor};
  }
`;

export default EventCardButton;
