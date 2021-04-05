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
        <MuiAccordion>
          <MuiAccordionSummary
            style={{ borderBotomWidth: "1px" }}
            expandIcon={<IoIosArrowDown />}
          >
            {index + 1}. {q.acf.question}
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
  margin-bottom: ${(70 / 375) * 100}vw;
  .MuiAccordion-root.Mui-expanded {
    margin: 0;
  }

  .MuiPaper-root {
    background-color: unset;
  }
  .MuiAccordion-root.Mui-expanded {
    background-color: "#EFFDFB";
  }
  .MuiPaper-elevation1 {
    border-bottom: 1px solid #e0e0e0;
    box-shadow: unset;
  }
  .MuiAccordionSummary-content {
    font-size: 4vw;
    color: #675d51;
    margin: ${(15 / 375) * 100}vw 0;
  }

  .MuiAccordionDetails-root {
    flex-direction: column;
  }

  p,
  a {
    font-size: 4vw;
    font-weight: 200;
    color: #675d51;
  }

  a {
    text-decoration: underline;
  }

  @media only screen and (min-width: 768px) {
    background-color: white;
    padding: ${(70 / 1365) * 100}vw ${(293 / 1365) * 100}vw
      ${(130 / 1365) * 100}vw;
    margin: 0;

    .MuiAccordionSummary-content {
      font-size: ${(16 / 1365) * 100}vw;
    }

    .MuiAccordionSummary-content {
      margin: ${(21 / 1365) * 100}vw 0;
    }

    p,
    a {
      font-size: ${(16 / 1365) * 100}vw;
    }
  }
`;

export default QAs;
