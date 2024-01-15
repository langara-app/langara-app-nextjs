import React, { useEffect } from "react";

import styled from "styled-components";
import { CommonStyling } from "@/lib/CommonStyling";

const CustomArrowDownIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 1.5L8.5 8.5L1 1.5"
      stroke="#F15A22"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const CustomSelect = ({
  filterByText = "Filter by Year",
  label,
  value,
  onChange,
  options,
  outlineColor,
}) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const listenToClickingOutside = (e) => {
      
      if ( !([...e.target.classList]).includes("select-btn")) {
        setOpen(false);
      }
    };

    document.addEventListener("click", listenToClickingOutside);

    return () => {
      document.removeEventListener("click", listenToClickingOutside);
    };
  }, []);

  return (
    <SelectComponent outlineColor={outlineColor}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        className={`select-btn ${open ? "btn-pressed" : ""}`}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: ".5rem 1rem",
            gap: ".8rem",
          }}
        >
          <span style={{ color: "#F15A22", fontWeight: "bold" }}>
            {filterByText}
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: ".4rem",
            }}
          >
            {value || label}
            {<CustomArrowDownIcon />}
          </span>
        </div>
      </button>
      <div className={`options-container`}>
        <div className={`options-wrapper ${open ? "show" : "hide"}`}>
          <ul>
            {options.map((option) => (
              <li
                key={option.value}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(option.value);
                  setOpen(false);
                }}


                value={option.value}
                className={
                  option.label == (value || label)
                    ? "selected filter-select-option"
                    : "filter-select-option"
                }
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SelectComponent>
  );
};

const FilterBy = ({ filterByYear, years, outlineColor }) => {
  const [selectedOption, setSelectedOption] = React.useState("");
  // year options
  const yearsOption = years.map((year) => {
    return { value: year, label: year };
  });
  yearsOption.unshift({ value: "All", label: "All" });

  // handle  change and propagate
  const handleChange = (value) => {
    setSelectedOption(value);
    filterByYear(value.toString());
  };

  return (
    <div>
      <CustomSelect
        outlineColor={outlineColor}
        label="All"
        value={selectedOption}
        onChange={handleChange}
        options={yearsOption}
      />
    </div>
  );
};

const SelectComponent = styled.div`
  z-index: 10 !important;
  position: relative;

  .options-wrapper > ul {
    padding-left: 0;
  }
  .select-btn {
    min-width: 210px;
    background: ${CommonStyling.backgroundColor};
    border: 2px solid ${CommonStyling.outlineColor};
    border-radius: 1rem;
  }
  .btn-pressed {
    border: 2px solid ${(props) => props["outlineColor"]};
  }
  .options-container {
    min-width: 210px;
    margin-top: 0.2rem;
    position: relative;
  }
  .options-wrapper.hide {
    opacity: 0;
  }

  .options-wrapper.show {
    transition: all 0.2s ease-in-out;
  }

  .options-wrapper {
    box-shadow:
      rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
      rgba(0, 0, 0, 0.14) 0px 8px 10px 1px,
      rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
    border-radius: 1rem;
    padding: 0.5rem 0;
    background: ${CommonStyling.backgroundColor};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  .options-wrapper li {
    list-style: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
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
`;

export default FilterBy;
export { CustomSelect };
