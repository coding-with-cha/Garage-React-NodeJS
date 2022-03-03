import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import useDispatch from 'react-redux'



export const getPosts = createAsyncThunk('post/getPosts', 
async(info,{rejectWithValue})=>{
    try {
        const {data} = await axios.get(
            'http://localhost:5000/api/post',
            {headers: { 
                token: localStorage.getItem('token'),
            }},);
        return data;
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

export const createPost = createAsyncThunk('post/createPost', 
async(info,{rejectWithValue})=>{
    try {
        const {data} = await axios.post(
            'http://localhost:5000/api/post',
            info.data,
            {
                headers: { 
                    token: localStorage.getItem('token'),
                },
            });
            info.navigate('/profile')
        return data;
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

export const getPostsWithID = createAsyncThunk('post/getPostsWithID', 
async(info,{rejectWithValue})=>{
    try {
        const {data} = await axios.get(
            'http://localhost:5000/api/post/withId',
            {headers: { 
                token: localStorage.getItem('token'),
            }},);
        return data;
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

export const getPostsFilter = createAsyncThunk('post/getPostsFilter', 
async(info,{rejectWithValue})=>{
    try {
        const {data} = await axios.get(
           ` http://localhost:5000/api/post/${info}`);
        return data;
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

export const deletePostsWithID = createAsyncThunk('post/deletePostsWithID', 
async(postId,{rejectWithValue, dispatch})=>{
    try {
        const {data} = await axios.delete(
            `http://localhost:5000/api/post/${postId}`,
            {headers: { 
                token: localStorage.getItem('token'),
            }},);
            return dispatch(getPosts())
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    } 
});
export const deletePostsWithIDP = createAsyncThunk('post/deletePostsWithIDP', 
async(postId,{rejectWithValue, dispatch})=>{
    try {
        const {data} = await axios.delete(
            `http://localhost:5000/api/post/${postId}`,
            {headers: { 
                token: localStorage.getItem('token'),
            }},);
            return dispatch(getPostsWithID())
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    } 
});
// for profile
export const updatePostsWithIDP = createAsyncThunk('post/updatePostsWithID', 
async(postInfo,{rejectWithValue, dispatch})=>{
    try {
        const {data} = await axios.put(
            `http://localhost:5000/api/post/${postInfo._id}`, postInfo,
            {headers: { 
                token: localStorage.getItem('token'),
            }},);
           return dispatch(getPostsWithID())  
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

// dashboard
export const updatePostsWithID = createAsyncThunk('post/updatePostsWithID', 
async(postInfo,{rejectWithValue, dispatch})=>{
    try {
        const {data} = await axios.put(
            `http://localhost:5000/api/post/${postInfo._id}`, postInfo,
            {headers: { 
                token: localStorage.getItem('token'),
            }},);
           
            return dispatch(getPosts()) 
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});


// update post picture
export const updatePostPic = createAsyncThunk('user/updatePostPic'
, async(info,{rejectWithValue, dispatch})=>{
    try {
        const formPic = new FormData();
        formPic.append('postPicture', info.file)
        // console.log(info._id)
        // console.log(info.file)
        const {data} = await axios.put(
            `http://localhost:5000/api/post/postPic/${info._id}`,
             formPic,
              {
                headers: { 
                    token: localStorage.getItem('token'),
                },
            }
           );
        return dispatch(getPostsWithID());
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});




const postSlice = createSlice({
    name:'post',
    initialState:{
        loading: false,
        postList: [],
        errors: null,
    },
    extraReducers:{
        [getPosts.pending]:(state)=>{
            state.loading= true
        },   
        [getPosts.fulfilled]:(state, action)=>{
            state.postList= action.payload
            state.errors= null
            state.loading= false
        }, 
        [getPosts.rejected]:(state, action)=>{
            state.errors = action.payload
            state.loading= false
        },
        [createPost.rejected]:(state, action)=>{
            state.errors = action.payload
        },
        [getPostsWithID.pending]:(state)=>{
            state.loading= true
        },   
        [getPostsWithID.fulfilled]:(state, action)=>{
            state.postList= action.payload
            state.errors= null
            state.loading= false
        }, 
        [getPostsWithID.rejected]:(state, action)=>{
            state.errors = action.payload
            state.loading= false
        }
        , 
        [updatePostsWithID.rejected]:(state, action)=>{
            state.errors = action.payload
        },
        [getPostsFilter.pending]:(state)=>{
            state.loading= true
        },   
        [getPostsFilter.fulfilled]:(state, action)=>{
            state.postList= action.payload
            state.errors= null
            state.loading= false
        }, 
        [getPostsFilter.rejected]:(state, action)=>{
            state.errors = action.payload
            state.loading= false
        }
    }
});
export default postSlice.reducer;