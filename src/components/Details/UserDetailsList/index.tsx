import React from "react";

import { IUser } from "store/types";

import DetailRow from "components/DetailRow";

import eng from "lang/eng";

import "./UserDetailsList.scss";

interface IUserDetailsListProps {
  user: IUser;
}

const UserDetailsList: React.FC<IUserDetailsListProps> = ({
  user: { name, email, phone, website },
}) => (
  <section className="user full-width">
    <h5 className="sub-title">{eng.ABOUT_AUTHOR}</h5>
    <ul className="list">
      <DetailRow value={name} label="name" />
      <DetailRow value={email} label="email" />
      <DetailRow value={phone} label="phone" />
      <DetailRow value={website} label="website" />
    </ul>
  </section>
);

export default UserDetailsList;
