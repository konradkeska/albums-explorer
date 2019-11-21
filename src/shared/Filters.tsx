import * as React from "react";
import Dropdown from "./Dropdown";

export interface IFilter<T> {
  options: T[];
  label: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface IFiltersProps {
  items: Array<IFilter<string | number>>;
}

const Filters: React.FC<IFiltersProps> = ({ items }) => {
  const FilterOptions = items.map(({ label, options, onChange }) => (
    <div key={label} className="filter">
      <label className="text-normal filter__label">{label}</label>
      <Dropdown items={options} onChange={onChange} />
    </div>
  ));

  return <aside className="filters">{FilterOptions}</aside>;
};

export default Filters;
