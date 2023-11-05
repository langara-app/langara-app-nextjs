import React, { useState, useEffect } from "react";
import Select from "react-dropdown-select";
import useWindowWidth from "../Hooks/useWindowWidth";
import styled from "styled-components";
import { CommonStyling } from "../../lib/CommonStyling";

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
          data-number={index + 1}
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
  font-size: ${CommonStyling.body1FontSize};
  color: ${(allProps) =>
    allProps["data-number"] === allProps["checked"] ? "#DE3F21" : "#37474F"};
  font-weight: ${(allProps) =>
    allProps["data-number"] === allProps["checked"] ? 600 : 200};
  border-bottom: ${(allProps) =>
    allProps["number"] === allProps["checked"] ? "3px solid #DE3F21" : "none"};
  padding: 0.8rem;
  cursor: pointer;
  margin-bottom: 2.8vh;
  margin-top: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default Options;
