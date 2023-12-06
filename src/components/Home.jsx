import React from "react";
import { CardTemplate } from "./CardTemplate";
import { tweets } from "./tweetInfo";
import { BigCardTemplate } from "./BigCardTemplate";
export const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-start p-5">Top tweets</h1>

      <div className="grid grid-cols-3">
        {tweets.map((tweetInfo) => (
          <CardTemplate
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
