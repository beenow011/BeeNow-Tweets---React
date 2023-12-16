import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Profile } from "./Profile";
export const UserProfile = () => {
  const tweetSelector = useSelector((state) => state.allTweets);
  const { userId } = useParams();
  const user = tweetSelector.find((ele) => ele.userId === userId);
  const img = "https://picsum.photos/id/123/40/40";
  // const userId = "@jsdjfbjfb";
  // const bio = "kdjfsfjhjdskjfbfvjkdbskjbvjcbjkdbfjbvkjbfbdvjbcjkdbfjkvbfkjb";
  const userName = user.userId.slice(1);
  if (userId === "@abhinav_nb") {
    return <Profile />;
  } else {
    return (
      <div className="md:flex text-white ">
        {console.log(userName)}
        <img
          src={user.img}
          alt=""
          className="rounded-full ring-2 ring-white m-4 h-36  md:h-96"
        />
        <div className="p-4 flex flex-col m-auto ">
          <ul className="flex flex-col items-start">
            <li className="mb-4">
              <h1 className="text-3xl font-sans font-bold">{user.userId}</h1>
            </li>
            <li className="mb-4">
              <p>{userName}</p>
            </li>
            <li className="mb-4">
              <p className="text-start">{user.tweet}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};
