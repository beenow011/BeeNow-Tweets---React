import React from "react";
import { useUser } from "../context/UserContext";
export const UserProfile = () => {
  const { users } = useUser();
  const img = "https://picsum.photos/id/123/40/40";
  const userId = "@jsdjfbjfb";
  const bio = "kdjfsfjhjdskjfbfvjkdbskjbvjcbjkdbfjbvkjbfbdvjbcjkdbfjkvbfkjb";
  return (
    <div className="flex">
      <img src="" alt="" className="rounded-full ring-4 ring-black m-4" />
      <div className="p-4 flex flex-col m-auto ">
        <ul className="flex flex-col items-start">
          <li className="mb-4">
            <h1 className="text-3xl font-sans font-bold">{userId}</h1>
          </li>
          <li className="mb-4">
            <p>Abhinav N B</p>
          </li>
          <li className="mb-4">
            <p className="text-start">{bio}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
