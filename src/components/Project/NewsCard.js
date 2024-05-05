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
    event_title,
    term_indicator,
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
            <div className="term-indicator">
              <span>{term_indicator}</span>
            </div>
            <h3 className="eventTitle">{event_title}</h3>
            <p className="eventDesc">{description}</p>
            {/* event meta info */}
            <div className="eventMeta">
              <div className="eventMeta-labels">
                <p className="date-label">Date: </p>
                <p className="time-label">Time: </p>
                <p className="location-label">Location: </p>
              </div>
              <div className="eventMeta-values">
                <p className="event-date">{formatDate(event_date)}</p>
                <p className="event-time">
                  {event_start_time.toUpperCase()} -{" "}
                  {event_end_time.toUpperCase()} PST
                </p>
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
    height: 475px;
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

  .eventMeta {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .eventMeta p {
    margin-bottom: 0.3rem;
  }

  .term-indicator {
    text-align: right;
  }
  .term-indicator span {
    display: inline-block;
    font-size: ${CommonStyling.body2FontSize};
    border: 1px solid ${CommonStyling.primaryColor};
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    font-weight: 400;
    color: ${CommonStyling.backgroundColor};
    background-color: ${CommonStyling.primaryColor};
  }

  .eventTextWrap > .eventTitle {
    color: ${CommonStyling.primaryColor};
    font-size: ${CommonStyling.h3FontSize};
    font-weight: 500;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
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
