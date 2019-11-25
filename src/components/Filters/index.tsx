import React from "react";

import Dropdown from "../Dropdown";

import "./Filters.scss";

export interface IFilter<T> {
  options: T[];
  label: string;
  defaultValue: T;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface IFiltersProps {
  items: Array<IFilter<string | number>>;
}

const Filters: React.FC<IFiltersProps> = ({ items }) => {
  const FilterOptions = items.map(
    ({ label, options, onChange, defaultValue }) => (
      <div key={label} className="filter">
        <label className="text-normal filter__label">{label}</label>
        <Dropdown
          defaultValue={defaultValue}
          items={options}
          onChange={onChange}
        />
      </div>
    ),
  );

  return <aside className="filters">{FilterOptions}</aside>;
};

export default Filters;
