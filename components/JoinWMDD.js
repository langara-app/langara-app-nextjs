import Button from './ReusableElements/Button';
import styled from "styled-components";
import { HomeData } from '../lib/HomeData';

const JoinWMDD = () => {
  return (
    <>
    <SectionContainer
        style={{
          backgroundColor: "#C2E5E0",
          color: "#675d51",
          paddingBottom: "1px",
        }}
        margin={false}
      >
        <Title>{HomeData.lastMessage.title}</Title>
        <SectionDescription>
          {HomeData.lastMessage.description}
        </SectionDescription>

        <Button
          text={"See Admission Requirements"}
          margin={2}
          font={18}
          size={"med"}
        />
      </SectionContainer>
    </>

  )
 
};

const SectionContainer = styled.div`
  margin: ${({ margin }) => (margin ? "0 0rem 5rem" : 0)};
`;
const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;
const SectionDescription = styled.p`
  margin: 2rem 0;
  text-align: center;
`;


export default JoinWMDD;

