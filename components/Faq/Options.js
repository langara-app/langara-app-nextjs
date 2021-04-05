import React, { useState, useEffect } from "react";
import Select from "react-dropdown-select";
import useWindowWidth from "../Hooks/useWindowWidth";
import styled from "styled-components";

const Options = ({ data, onClick }) => {
  const width = useWindowWidth();
  const [questionCat, setQuestionCat] = useState(data[0].categorySlug);
  const [checkedIndex, setCheckedIndex] = useState(1);

  const scrutinizer = (val) => {
    return parseInt(val.split(" ")[2]);
  };

  const setCat = (values) => {
    width < 768
      ? onClick(values[0].categorySlug)
      : (onClick(values.id), setCheckedIndex(scrutinizer(values.className)));
  };

  return width < 768 ? (
    <Select
      options={data}
      onChange={setCat}
      valueField={"categorySlug"}
      labelField={"categoryName"}
      color={"#C36448"}
      values={[data[0]]}
      style={{ padding: "1rem", marginBottom: "8.5vw" }}
      searchable={false}
    />
  ) : (
    <Container>
      {data.map((q, index) => (
        <CategoryName
          key={index}
          onClick={(e) => {
            setCat(e.target);
          }}
          id={q.categorySlug}
          className={index + 1}
          number={index + 1}
          checked={checkedIndex}
        >
          {q.categoryName}
        </CategoryName>
      ))}
    </Container>
  );
};

const CategoryName = styled.p`
  text-align: center;
  font-size: ${(16 / 1365) * 100}vw;
  margin-bottom: 0;
  padding: ${(23 / 1365) * 100}vw ${(15 / 1365) * 100}vw;
  color: ${({ number, checked }) =>
    number === checked ? "#c36448" : "#675D51"};
  font-weight: ${({ number, checked }) => (number === checked ? 600 : 200)};
  background-color: ${({ number, checked }) =>
    number === checked ? "white" : "#EFFCFA"};
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 ${(293 / 1365) * 100}vw;
`;

export default Options;
