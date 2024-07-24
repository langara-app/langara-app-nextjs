import React from "react";
import styled from "styled-components";
import { CommonStyling } from "@/lib/CommonStyling";

import { FaShareNodes, FaRegCopy, FaCopy } from "react-icons/fa6";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailIcon,
  EmailShareButton,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

const SocialShareBtn = ({ blogLink, blogTitle }) => {
  const [copy, setCopy] = React.useState(false);

  function buttonClick(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function copyToClipboard(text) {
    if (typeof window === "undefined" || !navigator.clipboard) {
      return;
    }
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text successfully copied to clipboard");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  }

  return (
    <SocialBtn onClick={buttonClick}>
      <div
        className="parent-wrapper dropdown"
        onMouseLeave={() => setCopy(false)}
        onTouchEnd={() => setCopy(false)}
      >
        <button disabled className="share-button">
          <FaShareNodes size={20} color={CommonStyling.primaryColor} />
        </button>

        <div className={`dropdown-content options-wrapper`}>
          <ul>
            <li>
              <LinkedinShareButton url={blogLink}>
                <div className="socials">
                  <LinkedinIcon size={20} round /> Linkedin
                </div>
              </LinkedinShareButton>
            </li>
            <li>
              <FacebookShareButton
                url={blogLink}
                quote={blogTitle}
                hashtag={"#langara"}
              >
                <div className="socials">
                  <FacebookIcon size={20} round /> Facebook
                </div>
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton
                url={blogLink}
                title={blogTitle}
                hashtags={["#langara", "#wmdd", "#webandmobile"]}
              >
                <div className="socials">
                  <TwitterIcon size={20} round /> Twitter
                </div>
              </TwitterShareButton>
            </li>
            <li>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(blogLink);
                  setCopy(true);
                }}
              >
                <div className="socials">
                  {copy && <FaCopy color={CommonStyling.primaryColor} />}
                  {!copy && <FaRegCopy />}
                  Copy
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </SocialBtn>
  );
};

const SocialBtn = styled.div`
  .share-button {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    border: 2px solid ${CommonStyling.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s ease; /* Smooth color transition */
  }
  .dropdown:hover .share-button {
    background-color: ${CommonStyling.primaryColor};
  }

  .share-button svg {
    transition: color 0.5s ease;
  }

  .socials {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .dropdown:hover .share-button svg {
    color: white !important;
  }
  // drop down styles
  .options-wrapper > ul {
    padding-left: 0;
  }

  .options-wrapper li {
    list-style: none;
    cursor: pointer;
  }
  .options-wrapper li button {
    width: 100%;
    padding: 0.5rem 1rem !important;
  }
  .options-wrapper li:hover {
    background-color: ${CommonStyling.outlineColor};
  }

  .options-wrapper li:first-child:hover {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .options-wrapper li:last-child:hover {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .options-wrapper li.selected {
    background-color: ${CommonStyling.outlineColor};
  }
  .options-wrapper li.selected:first-child {
    background-color: ${CommonStyling.outlineColor};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .options-wrapperli.selected: last-child {
    background-color: ${CommonStyling.outlineColor};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .dropdown {
    transition: all 0.2s ease-in-out;
    position: relative;
    display: block;
  }

  .dropdown-content {
    display: none;

    min-width: 160px;
    box-shadow:
      rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
      rgba(0, 0, 0, 0.14) 0px 8px 10px 1px,
      rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
    border-radius: 1rem;
    padding: 0.5rem 0;
    background: ${CommonStyling.backgroundColor};
    position: absolute;
    right: 0;
    position: absolute
    z-index: 10; /
  }

  .dropdown-content li {
    color: black;
    // padding: .5rem 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content li:hover {
    background-color: #f1f1f1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
`;

export default SocialShareBtn;
