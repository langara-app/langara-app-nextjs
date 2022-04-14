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
  font-size: 1.25rem;
  color: ${({ number, checked }) => number === checked ? "#DE3F21" : "#37474F"};
  font-weight: ${({ number, checked }) => (number === checked ? 600 : 200)};
  border-bottom: ${({ number, checked }) => number === checked ? "3px solid #DE3F21" : "none"};
  padding-bottom: 0.8rem;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default Options;
