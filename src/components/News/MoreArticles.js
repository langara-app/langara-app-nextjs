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
    font-weight: 700;
    font-size: 2rem;
    line-height: 50px;
    margin: 1rem 0 1rem 0;
  }
`;

export default MoreArticles;
