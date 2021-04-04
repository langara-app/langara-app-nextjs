import React, { useState, useEffect } from "react";
import Select from "react-dropdown-select";

import { ProjectCategoryData } from "../../lib/ProjectCategoryData";

const Options = ({ data }) => {
  const [questionCat, setQuestionCat] = useState(data[0].categorySlug);

  return (
    <Select
      options={data}
      onChange={(values) => setQuestionCat(values[0].categorySlug)}
      valueField={"categorySlug"}
      labelField={"categoryName"}
      color={"#C36448"}
      values={[data[0]]}
    />
  );
};

export default Options;
