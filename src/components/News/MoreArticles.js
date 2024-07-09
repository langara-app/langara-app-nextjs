import RecentArticlesCard from "./RecentArticlesCard";
import styled from "styled-components";

const MoreArticles = ({ recentArticles }) => {
  return (
    <MoreArticlesContainer>
      <h2 className="section-title">More to Explore</h2>
      <RecentArticlesCard recentArticles={recentArticles}></RecentArticlesCard>
    </MoreArticlesContainer>
  );
};

const MoreArticlesContainer = styled.div`
  .section-title {
    margin: 0;
    padding: 0;
    max-width: 1600px;
    margin: 0 auto;
    font-weight: 700;
    font-size: 2rem;
    line-height: 50px;
    margin-bottom: 2rem;
    border-top: 1px solid #cfd8dc;
    padding-top: 4rem;
  }
`;

export default MoreArticles;
