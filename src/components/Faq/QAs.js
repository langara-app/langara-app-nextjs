import React from "react";
import styled from "styled-components";

import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Typography,
} from "@mui/material";

import { IoIosArrowDown } from "react-icons/io";
import { CommonStyling } from "../../lib/CommonStyling";

const QAs = ({ data }) => {
  // console.log(data)
  return (
    <QAContainer>
      {data.map((q, index) => (
        <MuiAccordion key={index}>
          <MuiAccordionSummary
            style={{ borderBotomWidth: "1px" }}
            expandIcon={<IoIosArrowDown />}
          >
            {q.acf.question}
          </MuiAccordionSummary>
          <MuiAccordionDetails>
            <p
              dangerouslySetInnerHTML={{
                __html: q.acf.answer,
              }}
            ></p>

            <a href={q.acf.link}>
              {q.acf.link !== undefined ? "More details" : null}
            </a>
          </MuiAccordionDetails>
        </MuiAccordion>
      ))}
    </QAContainer>
  );
};

const QAContainer = styled.div`
  border: 1px solid #b0bec5;
  font-size: 1.5rem;
  border-radius: 4px;
  background-color: white;

  .MuiAccordion-root {
    font-weight: 700;
    font-size: ${CommonStyling.body1FontSize};
    line-height: 30px;
    color: #263238;
  }

  .MuiPaper-root {
    /* background-color: unset; */
  }

  .MuiAccordion-root.Mui-expanded {
    background-color: "#EFFDFB";
  }
  .MuiPaper-elevation1 {
    border-bottom: 1px solid #e0e0e0;
    box-shadow: unset;
  }
  .MuiAccordionSummary-root {
    padding: 0 2rem;
  }
  .MuiAccordionSummary-content {
    margin: 2rem 0 2rem 0;
  }
  .MuiAccordionSummary-content.Mui-expanded {
    margin: 2rem 0 2rem 0;
  }
  .MuiAccordionDetails-root {
    flex-direction: column;
    padding: 0;
  }

  p,
  a {
    font-weight: 200;
    color: #263238;
    margin: 0;
  }

  p {
    padding: 0 2rem;
    padding-bottom: 2rem;
  }

  a {
    font-weight: 700;
    font-size: ${CommonStyling.body2FontSize};
    line-height: 30px;
    color: #de3f21;
    padding: 0 2rem;
    padding-bottom: 2rem;
  }

  @media only screen and (min-width: 768px) {
    .MuiAccordionSummary-content {
    }

    p,
    a {
      font-size: ${CommonStyling.body2FontSize};
    }
  }
`;

export default QAs;
