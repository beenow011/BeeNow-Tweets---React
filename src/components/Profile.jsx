import React from "react";
import { useUser } from "../context/UserContext";
export const Profile = () => {
  const { users } = useUser();
  return (
    <div className="flex">
      {console.log(users)}
      <img
        src="https://picsum.photos/id/234/400/400"
        alt=""
        className="rounded-full ring-4 ring-black m-4"
      />
      <div className="p-4 flex flex-col m-auto ">
        <ul className="flex flex-col items-start">
          <li className="mb-4">
            <h1 className="text-3xl font-sans font-bold">@abhinav_nb</h1>
          </li>
          <li className="mb-4">
            <p>Abhinav N B</p>
          </li>
          <li className="mb-4">
            <p className="text-start">
              Hello, I'm Abhinav NB, a Computer Science student currently
              pursuing my Bachelor of Engineering (BE) degree at NIE Mysore. I
              hail from Chikmagalur, where I completed my schooling. My passion
              lies in the world of photography and video editing, where I
              explore my creativity and storytelling skills.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
