import styled, { keyframes } from "styled-components";
import Image from "next/image";
import ArticleSubmissionImage from "@/assets/img/news/ArticleSubmissionImg.png";
import { CommonStyling } from "@/lib/CommonStyling";

const ArticleSubmissionCard = ({ data }) => {
  return (
    <Container>
      <section>
        <div className="left">
          <img src={ArticleSubmissionImage} alt="Article Submission" />
        </div>
        <div className="right">
          <div className="submission-info">
            <div>
              <h2>Submit Your Articles Now!</h2>
              <p>
                We are pleased to announce that students and faculty members of
                the WMDD department can now publish their articles on our
                website. Have you been involved in an interesting project?
                Developed an innovative product? Landed your dream job in the IT
                industry, or simply want to share insights on web and mobile
                design and development? Send your articles to{" "}
                <span>webmobilePDD@langara.ca</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  background-color: #d3d7d0;
  border-radius: 32px 32px 0 0;
  margin-top: 4rem;
  min-height: 70vh;

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 70vh;
  }

  section img {
    width: 100%;
    height: 100%;
    border-radius: 32px 0 0 0;
    object-fit: cover;
  }

  .submission-info {
    position: relative;
    background-color: white;
    padding: 2rem;
    border-radius: 16px;
    max-width: 400px;
  }

  .submission-info::before {
    content: "";
    position: absolute;
    top: 20px;
    left: -10px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid white;
  }

  .submission-info h2 {
    font-size: ${CommonStyling.body1FontSize};
    font-weight: bold;
  }

  .submission-info span {
    color: ${CommonStyling.primaryColor};
    font-weight: bold;
    text-decoration: underline;
    text-decoration-thickness: 2.5px;
  }
  .submission-info span:hover {
    text-decoration: none;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem;
  }

  @media (max-width: 768px) {
    section {
      grid-template-columns: 1fr;
    }

    .submission-info::before {
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 10px solid white;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
    }
  }
`;

export default ArticleSubmissionCard;
