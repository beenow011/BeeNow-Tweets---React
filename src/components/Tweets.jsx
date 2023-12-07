import React, { useState } from "react";
import birdbg from "../assets/birdbg.png";
import { TweetProvider } from "../context/TweetContext";
import { tweets } from "./tweetInfo";
export const Tweets = () => {
  const [Tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState({});
  const addTweet = () => {};
  //   setTweets({
  //     userId: "@abhinav_nb",
  //     tweet: Tweet,
  //     likePrevCount: 0,
  //     img: "https://picsum.photos/id/234/400/400",
  //   });
  // };
  const deleteTweet = () => {};
  // const add = (e) => {
  //   e.preventDefault();
  //   addTweet({ Tweet });
  //   console.log(Tweet);
  // };
  // const handleChange = (e) => {
  //   setTweet(e.target.value);
  // };
  return (
    <TweetProvider value={{ tweets, addTweet, deleteTweet }}>
      <div className="p-5">
        <form action="">
          <h1 className="text-3xl text-gray-700 font-bold text-left ">
            What's on your mind...!?
          </h1>
          <div
            className="flex items-start bg-[url('../assets/birdbg.png') bg-cover]"
            id="bg"
          >
            <textarea
              className="w-96 h-96 rounded-sm shadow-md shadow-black p-5 mt-6 font-mono "
              placeholder=" Tweet here...!"
              wrap="soft"
              maxLength="500"
              id="textbox"
            ></textarea>
            <button
              className="p-3 bg-blue-gray-600  ml-10 rounded-md hover:bg-blue-gray-900 text-blue-gray-100 mt-auto"
              type="submit"
            >
              Tweet
            </button>
            <img src={birdbg} alt="" width={100} className="m-10" />
            <img src={birdbg} alt="" width={100} className="m-10 mt-auto" />
            <img src={birdbg} alt="" width={100} className="m-10" />
          </div>
        </form>
      </div>
    </TweetProvider>
  );
};
