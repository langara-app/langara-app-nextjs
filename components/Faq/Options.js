import React, { useState, useEffect } from "react";
import Select from "react-dropdown-select";

import { ProjectCategoryData } from "../../lib/ProjectCategoryData";

const Options = ({ data, onClick }) => {
  const [questionCat, setQuestionCat] = useState(data[0].categorySlug);

  const setCat = (values) => {
    onClick(values[0].categorySlug);
  };

  return (
    <Select
      options={data}
      onChange={setCat}
      valueField={"categorySlug"}
      labelField={"categoryName"}
      color={"#C36448"}
      values={[data[0]]}
      style={{ marginBottom: "8.5vw" }}
    />
  );
};

export default Options;
