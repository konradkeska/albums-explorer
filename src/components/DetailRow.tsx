import * as React from "react";

interface IDetailRowProps {
  value?: string;
  label: string;
}

const DetailRow: React.FC<IDetailRowProps> = ({ label, value }) => (
  <li className="list__item">
    <label className="bold">{label} </label>
    <p style={{ marginTop: "3px" }}>{value || "-"}</p>
  </li>
);

export default DetailRow;
