import React, { useEffect, useState } from "react";
import { MyTweet } from "./MyTweet";
import { CardTemplate } from "./CardTemplate";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import dp from "../assets/dp.jpg";
export const Profile = () => {
  const tweetSelector = useSelector((state) => state.allTweets);
  const [tweets, setTweets] = useState(tweetSelector);
  // let myTweets = [];
  useEffect(() => {
    setTweets(tweetSelector.filter((tweet) => tweet.userId === "@abhinav_nb"));
    localStorage.setItem("tweets", JSON.stringify(tweets));
    // console.log(tweets);
  }, [tweetSelector]);
  return (
    <div className="md:flex">
      <img
        src={dp}
        alt=""
        className="rounded-full ring-4 ring-black m-4 h-36  md:h-96"
      />
      <div className="p-4 flex flex-col m-auto ">
        <ul className="flex flex-col items-start">
          <li className="mb-4">
            <h1 className="text-3xl font-sans font-bold">@abhinav_nb</h1>
          </li>
          <li className="mb-4">
            <p className="text-gray-700 text-2xl">Abhinav N B</p>
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
        <h1 className="text-start text-3xl font-bold ">Your tweets</h1>
        <div className="md:grid md:grid-cols-2 ">
          {tweets.length > 0 ? (
            tweets.map((tweetInfo, i) => (
              <MyTweet
                id={tweetInfo.id}
                key={i}
                userId={tweetInfo.userId}
                tweet={tweetInfo.tweet}
                likeCountPrev={tweetInfo.likeCountPrev}
                img={tweetInfo.img}
              />
            ))
          ) : (
            <div className="flex  ">
              <p className="text-start text-gray-800 text-xl h-5">No tweets</p>
              <Link to="/tweets">
                {" "}
                <button className="bg-blue-500 rounded-lg p-1 ml-2 text-white hover:bg-blue-700">
                  First tweet
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
