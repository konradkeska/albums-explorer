import React from "react";

interface IDropdownProps {
  items: any[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<IDropdownProps> = ({ items, onChange }) => {
  const options = items.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

  return (
    <select onChange={onChange} className="filter__dropdown">
      {options}
    </select>
  );
};

export default Dropdown;
