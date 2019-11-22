import React from "react";

import { IUser } from "store/types";

import DetailRow from "components/DetailRow";

interface IUserDetailsListProps {
  user: IUser;
}

const UserDetailsList: React.FC<IUserDetailsListProps> = ({
  user: { name, email, phone, website },
}) => (
  <ul className="list">
    <DetailRow value={name} label="name" />
    <DetailRow value={email} label="email" />
    <DetailRow value={phone} label="phone" />
    <DetailRow value={website} label="website" />
  </ul>
);

export default UserDetailsList;
