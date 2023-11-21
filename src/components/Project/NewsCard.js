import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import useWindowWidth from "../Hooks/useWindowWidth";
import { CommonStyling } from "../../lib/CommonStyling";

// import components
import EventCardButton from "./EventCardButton.js";

// Split and convert into Wed, Dec 7, 2021 format
function formatDate(dateString) {
  var dateComponents = dateString.split("/");
  var dateObject = new Date(dateComponents[2], dateComponents[0] - 1, dateComponents[1]);

  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var formattedDate = daysOfWeek[dateObject.getDay()] + ', ' + months[dateObject.getMonth()] + ' ' + dateObject.getDate() + ', ' + dateObject.getFullYear();
  return formattedDate
}


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
            <EventCardButton
              to={eventType == "PAST" ? galleryLink : `/news-and-events/${slug}`}
              buttonText={eventType == "PAST" ? "View Gallery" : "See Details"}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
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
