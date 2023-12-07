import React, { useEffect, useState } from "react";
import { CardTemplate } from "./CardTemplate";
import { tweets } from "./tweetInfo";
import { BigCardTemplate } from "./BigCardTemplate";
import { UserProvider } from "../context/UserContext";
import { TweetConsumer, useTweet } from "../context/TweetContext";
export const Home = () => {
  // const { tweet } = useTweet();

  // const handleTweets = (tweet) => {
  //   tweets.unshift(tweet);
  // };
  return (
    <div>
      <h1 className="text-3xl font-bold text-start p-5">Top tweets</h1>

      <div className="md:grid md:grid-cols-3 ">
        {/* <TweetConsumer>
          {({ tweet }) => {
            handleTweets(tweet);
          }}
        </TweetConsumer> */}
        {tweets.map((tweetInfo, i) => (
          <CardTemplate
            key={i}
            userId={tweetInfo.userId}
            tweet={tweetInfo.tweet}
            likeCountPrev={tweetInfo.likeCountPrev}
            img={tweetInfo.img}
          />
        ))}
      </div>
      {/* <div className="flex justify-end m-10">
          <BigCardTemplate
            userId="@ahsgjgjd"
            tweet="jdsjfj ghhbghhuihfhjubjfjkvbn"
            likeCountPrev={124}
            img={`https://picsum.photos/id/568/400/400`}
          />
        </div> */}
    </div>
  );
};
