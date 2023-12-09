import {createSlice ,nanoid} from '@reduxjs/toolkit';
import {  tweets } from '../components/tweetInfo';

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
                img:`https://picsum.photos/id/157/40/40`
            }
            state.allTweets.unshift(tweet)
        },
        dltTweet:(state,action)=>{
            state.allTweets = state.allTweets.filter((tweet) => tweet.id !== action.payload )
        }

    }

})

export const {addTweet} = tweetSlice.actions;
export default tweetSlice.reducer;