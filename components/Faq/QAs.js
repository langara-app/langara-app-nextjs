import React from "react";
import styled from "styled-components";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import { IoIosArrowDown } from "react-icons/io";

const QAs = ({ data }) => {
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
  border: 1px solid #B0BEC5;
  font-size: 1.5rem;
  border-radius: 4px;
  background-color: white;

  .MuiAccordion-root {
    font-weight: 700;
    font-size: 20px;
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
  .MuiAccordionSummary-content.Mui-expanded{
    margin: 2rem 0 2rem 0;
  }
  .MuiAccordionDetails-root {
    flex-direction: column;
    padding: 0;
  }

  p,
  a {
    font-weight: 200;
    color: #675d51;
    margin: 0;
  }

  p {
    padding: 0 2rem;
    padding-bottom: 2rem;
  }

  a {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #DE3F21;
    padding: 0 2rem;
    padding-bottom: 2rem;
  }

  @media only screen and (min-width: 768px) {

    .MuiAccordionSummary-content {
    }

    p,
    a {
    }
  }
`;

export default QAs;
