import React, { useState } from "react";
import birdbg from "../assets/birdbg.png";
import { tweets } from "./tweetInfo";
import { useDispatch } from "react-redux";
import { addTweet } from "../features/tweetslice";
export const Tweets = () => {
  const [Tweet, setTweet] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTweet(e.target.value);
  };
  const handleSubmit = (e) => {
    if (Tweet.length > 0) {
      e.preventDefault();
      dispatch(addTweet(Tweet));

      setTweet("");
    } else {
      alert("tweet must be min of 1 char.");
    }
  };
  return (
    <div className="p-5">
      <form action="" onSubmit={handleSubmit}>
        <h1 className="text-3xl text-gray-700 font-bold text-left ">
          What's on your mind...!?
        </h1>
        <div
          className="flex items-start bg-[url('../assets/birdbg.png') bg-cover] overflow-hidden"
          id="bg"
        >
          <textarea
            className="w-96 h-96 rounded-sm shadow-md shadow-black p-5 mt-6 font-mono "
            placeholder=" Tweet here...!"
            wrap="soft"
            maxLength="500"
            minLength="1"
            id="textbox"
            value={Tweet}
            onChange={handleChange}
          ></textarea>
          <button
            className="p-3 bg-blue-gray-600 ml-3 md:ml-10 rounded-md hover:bg-blue-gray-900 text-blue-gray-100 mt-auto"
            type="submit"
          >
            Tweet
          </button>

          <img
            src={birdbg}
            alt=""
            width={100}
            className="m-10 hidden md:inline"
          />
          <img
            src={birdbg}
            alt=""
            width={100}
            className="m-10 mt-auto hidden md:inline"
          />
          <img
            src={birdbg}
            alt=""
            width={100}
            className="m-10 hidden md:inline"
          />
        </div>
      </form>
    </div>
  );
};
