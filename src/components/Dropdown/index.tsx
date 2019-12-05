import React from "react";

import "./Dropdown.scss";

interface IDropdownProps {
  items: any[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string | number | string[];
}

const Dropdown: React.FC<IDropdownProps> = ({
  items,
  onChange,
  defaultValue,
}) => {
  const Options = items.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

  return (
    <select
      defaultValue={defaultValue}
      onChange={onChange}
      className="filter__dropdown"
    >
      {Options}
    </select>
  );
};

export default Dropdown;
