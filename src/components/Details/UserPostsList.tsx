import * as React from "react";
import { IPost } from "store/types";

import "./UserPostsList.scss";

interface IUserPostsListProps {
  userPosts: IPost[];
}

const UserPostsList: React.FC<IUserPostsListProps> = ({ userPosts }) => {
  const ListItems =
    userPosts &&
    userPosts.map(({ id, title, body }) => (
      <li className="list__item" key={id}>
        <article>
          <h3>{title}</h3>
          <p>{body}</p>
        </article>
      </li>
    ));

  return <ul className="list">{ListItems}</ul>;
};

export default UserPostsList;
