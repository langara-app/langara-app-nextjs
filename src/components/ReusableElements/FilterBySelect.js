import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Select from "@mui/material/Select";
import select_icon from "@/assets/projects/select_icon.svg";

// import { ChevronLeft } from "@mui/icons-material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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

const CustomSelect = ({ label, value, onChange, options }) => {
  return (
    <FormControl
      variant="outlined"
      fullWidth
      sx={{ width: "200px", padding: "0px" }}
    >
      <Select
        sx={{
          borderRadius: "1rem",
          backgroundColor: "white",
          padding: ".5rem 1rem",
        }}
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        IconComponent={CustomArrowDownIcon}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#F15A22", fontWeight: "bold" }}>
                  Filter by term
                </span>
                <span>{label}</span>{" "}
              </div>
            );
          }

          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "#F15A22", fontWeight: "bold" }}>
                Filter by term
              </span>
              <span>{selected}</span>
            </div>
          );
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export {
  CustomSelect
}
// Example usage
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const FilterBy = () => {
  const [selectedOption, setSelectedOption] = React.useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <CustomSelect
        label="All"
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};
export default FilterBy;
