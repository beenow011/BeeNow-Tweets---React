import {createSlice} from '@reduxjs/toolkit';
import {  tweets } from '../components/tweetInfo';
import { addTodo } from '../../../redux-toolkit-todo/src/features/todo/todoSlice';
const initialState = {
    allTweets: [...tweets]
}

export const tweetSlice = createSlice({
    name:"tweets",
    initialState,
    reducers:{
        addTweet:(state,action)=>{
            const tweet = {
                userId: "@abhinavnb011",
                tweet: action.payload,
                likeCountPrev: 0,
                img:`https://picsum.photos/id/157/40/40`
            }
            state.allTweets.unshift(tweet)
        }

    }

})

export const {addTweet} = tweetSlice.actions;
export default tweetSlice.reducer;