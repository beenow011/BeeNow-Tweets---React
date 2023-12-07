import { createContext, useContext } from "react";

export const TweetContext = createContext({
    tweets:{
        userId: "@instaheroAmogh",
      tweet: `boring day...! how to make it exciting...! #day`,
      likeCountPrev: 0,
      img:`https://picsum.photos/id/123/40/40`
    },
    addTweet: (tweet,userId,img)=>{},
    deleteTweet: (tweet,userId,likeCountPrev,img)=>{},
})

export const useTweet = ()=>{
    return useContext(TweetContext)
}
export const TweetProvider = TweetContext.Provider;
export const TweetConsumer = TweetContext.Consumer;