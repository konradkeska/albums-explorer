import React from "react";

import "./DetailRow.scss";

interface IDetailRowProps {
  label: string;
  value?: string;
}

const DetailRow: React.FC<IDetailRowProps> = ({ label, value }) => (
  <li className="list__item">
    <label className="bold">{label}</label>
    <p className="value">{value || "-"}</p>
  </li>
);

export default DetailRow;
