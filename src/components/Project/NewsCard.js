import React, { useState } from "react";
import styled from "styled-components";
import { CommonStyling } from "../../lib/CommonStyling";

// import components
import EventCardButton from "./EventCardButton.js";

import formatDate from "@/utils/dateFormatter";
import Link from "next/link";

// eventType is either Past or Current
// showOutline is a boolean that determines whether or not to show the outline
// cardData is an object that contains the data for the card

const NewsCard = ({ cardData, showOutline, eventType }) => {
  const {
    slug,
    name,
    description,
    event_date,
    event_start_time,
    event_end_time,
    event_location,
    galleryLink,
  } = cardData;
  return (
    <Container data-cardborder={showOutline}>
      <Link target={"_self"} href={`/news-and-events/${slug}`}>
        <div className="card">
          {/* <div className="imgWrap">
            <img src={picture} alt="project image" />
          </div> */}
          <div className="eventTextWrap">
            <h3 className="eventTitle">{name}</h3>
            <p className="eventDesc">{description}</p>
            {/* event meta info */}
            <div className="eventMeta">
              <div>
                <p className="date-label">Date: </p>
                <p className="event-date">{formatDate(event_date)}</p>
              </div>
              <div>
                <p className="time-label">Time: </p>
                <p className="event-time">
                  {event_start_time} - {event_end_time}
                </p>
              </div>
              <div>
                <p className="location-label">Location: </p>
                <p className="event-location">{event_location}</p>
              </div>
            </div>
            {/* See Details Btn */}
            <div className="btn-wrapper">
              <EventCardButton />
            </div>
          </div>
        </div>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  .card {
    width: 300px;
    height: 450px;
    border-radius: 1rem;
    background-color: ${CommonStyling.backgroundColor};
    border: ${(props) =>
      props["data-cardborder"] ? "2px solid #E6E6E6" : "none"};
    margin-bottom: 2rem;
  }

  .eventTextWrap {
    border-radius: 1rem;
    height: 100%;
    padding: 1rem;
  }

  .eventTextWrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .date-label,
  .time-label,
  .location-label {
    font-weight: 600;
  }

  .eventMeta > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }

  .eventMeta p {
    text-align: right;
  }

  .eventTextWrap > .eventTitle {
    color: ${CommonStyling.primaryColor};
    font-size: ${CommonStyling.h3FontSize};
    font-weight: 500;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
  }

  p.eventDesc {
    font-size: ${CommonStyling.body2FontSize};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 5;
  }
`;

export default NewsCard;
