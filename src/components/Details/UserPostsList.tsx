import * as React from "react";
import { IPost } from "store/types";

import "./UserPostsList.scss";

interface IUserPostsListProps {
  userPosts: IPost[];
}

const UserPostsList: React.FC<IUserPostsListProps> = ({ userPosts }) => {
  const ListItems =
    userPosts &&
    userPosts.map((item) => (
      <li className="list__item" key={item.id}>
        <article>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      </li>
    ));

  return <ul className="list">{ListItems}</ul>;
};

export default UserPostsList;
