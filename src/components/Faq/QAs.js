import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoIosArrowDown } from "react-icons/io";
import { CommonStyling } from "../../lib/CommonStyling";
import { useRouter } from "next/router";

const QAs = ({ data, expanded, setExpanded }) => {
  const router = useRouter();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.tagName == "A") {
      router.push(e.target.href, undefined, { scroll: false });
    }
  };

  return (
    <QAContainer>
      {data.map((q, index) => (
        <Accordion
          key={index}
          onChange={handleChange(index)}
          expanded={expanded === index}
        >
          <AccordionSummary
            style={{ borderBotomWidth: "1px" }}
            expandIcon={<IoIosArrowDown />}
          >
            {q.acf.question}
          </AccordionSummary>
          <AccordionDetails>
            <p
              onClick={handleClick}
              dangerouslySetInnerHTML={{
                __html: q.acf.answer,
              }}
            ></p>

            <a
              href={q.acf.link}
              style={{
                display:
                  q.acf.link !== undefined && !!q.acf.link ? "inline" : "none",
              }}
            >
              More Details
            </a>
          </AccordionDetails>
        </Accordion>
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
    margin-bottom: 0;
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
    // margin: 2rem 0 2rem 0;
  }
  .MuiAccordionDetails-root {
    flex-direction: column;
    padding: 0;
    margin-bottom: 2rem;
  }

  .Mui-expanded {
    margin-bottom: 0 !important;
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

  .answer-html-link {
    padding: 0;
  }

  a {
    font-weight: 700;
    font-size: ${CommonStyling.body2FontSize};
    line-height: 30px;
    color: #f15a22;
    padding: 0 2rem;
    padding-bottom: 2rem;
    text-decoration: underline solid;
    text-decoration-thickness: 2px;
  }
  a:hover {
    text-decoration: none;
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
