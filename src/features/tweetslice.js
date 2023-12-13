import {createSlice ,nanoid} from '@reduxjs/toolkit';
import {  tweets } from '../components/tweetInfo';
import dp from "../assets/dp.jpg";

const initialState = {
    allTweets: [...tweets]
}

export const tweetSlice = createSlice({
    name:"tweets",
    initialState,
    reducers:{
        addTweet:(state,action)=>{
            const tweet = {
                id:nanoid(),
                userId: "@abhinav_nb",
                tweet: action.payload,
                likeCountPrev: 0,
                img:dp
            }
            state.allTweets.unshift(tweet)
        },
        dltTweet:(state,action)=>{
            state.allTweets = state.allTweets.filter((tweet) => tweet.id !== action.payload )
        }

    }

})

export const {addTweet,dltTweet} = tweetSlice.actions;
export default tweetSlice.reducer;