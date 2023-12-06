import { createContext, useContext } from "react";

export const TweetContext = createContext({
    tweets:[{
        userId:"@abhinav011",
        tweet: `Use our Card to provide a flexible and extensible content container based on Tailwind CSS with multiple variants and options.`,
        likeCountPrev : 4,
        img:`https://picsum.photos/id/123/40/40`
    }],
    addTweet: (tweet,userId,likeCountPrev,img)=>{},
    deleteTweet: (tweet,userId,likeCountPrev,img)=>{},
})

export const useTweet = ()=>{
    return useContext(TweetContext)
}
export const TweetProvider = TweetContext.Provider