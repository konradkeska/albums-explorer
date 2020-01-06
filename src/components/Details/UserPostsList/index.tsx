import React from "react";
import { IPost } from "store/types";

import eng from "lang/eng";

import "./UserPostsList.scss";

interface IUserPostsListProps {
  userPosts: IPost[];
}

const UserPostsList: React.FC<IUserPostsListProps> = ({ userPosts }) => {
  const ListItems = userPosts?.map(({ id, title, body }) => (
    <li className="list__item" key={id}>
      <article>
        <h3>{title}</h3>
        <p>{body}</p>
      </article>
    </li>
  ));

  return (
    <section className="posts full-width">
      <h5 className="sub-title">{eng.RECENT_POSTS}</h5>
      <ul className="list">{ListItems}</ul>
    </section>
  );
};

export default UserPostsList;
