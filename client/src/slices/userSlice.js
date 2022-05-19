import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const registerUser = createAsyncThunk('user/register', async(info,{rejectWithValue})=>{
    try {
        const {profilePic} = info; 
        console.log(profilePic)

        // const {data} = await axios.post(
        //     '/api/person/register',
        //     info.data);
        //     info.navigate('/login')
        // return data;
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

// login action
export const loginUser = createAsyncThunk('user/loginUser', async(info,{rejectWithValue})=>{
    try {
        const {data} = await axios.post(
            '/api/person/login',
            info.data);
            data.role === 'user' ? info.navigate('/profile') 
            : data.role === 'admin' && info.navigate('/dashboard');
            // info.navigate('/profile')
        return data;
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

// load userInfo
export const loadUserInfo = createAsyncThunk('user/loadUserInfo'
, async(info,{rejectWithValue})=>{
    try {
        const {data} = await axios.get(
            '/api/person/personInfo', {
                headers: { 
                    token: localStorage.getItem('token'),
                },
            }
           );
        return data;
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

// load userInfo By Id
export const getUserById = createAsyncThunk('user/getUserById'
, async(info,{rejectWithValue})=>{
    try {
        const {data} = await axios.get(
           `/api/person/personInfo/${info._id}`, {
                headers: { 
                    token: localStorage.getItem('token'),
                },
            }
           );
        return data;
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

//update userInfo
export const updateUserWithID = createAsyncThunk('user/updateUserWithID', 
async(info,{rejectWithValue, dispatch})=>{
    try {
        const {data} = await axios.put(
            `/api/person/${info._id}`, info,
            {headers: { 
                token: localStorage.getItem('token'),
            }},);
            return dispatch(loadUserInfo())
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

//load all users info
export const getUsers = createAsyncThunk('post/getUsers', 
async(info,{rejectWithValue})=>{
    try {
        const {data} = await axios.get(
            '/api/person/allUsers',
            {headers: { 
                token: localStorage.getItem('token'),
            }},);
        return data;
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

//delete user
export const deleteUserWithID = createAsyncThunk('post/deleteUserWithID', 
async(userId,{rejectWithValue, dispatch})=>{
    try {
        const {data} = await axios.delete(
            `/api/person/${userId}`,
            {headers: { 
                token: localStorage.getItem('token'),
            }},);
            return dispatch(getUsers())
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

// update profile picture
export const updateProfilePic = createAsyncThunk('user/updateProfilePic'
, async(file,{rejectWithValue, dispatch})=>{
    try {
        const formPic = new FormData();
        formPic.append('profilePicture',file)
        const {data} = await axios.put(
            '/api/person/profilePic',
             formPic,
              {
                headers: { 
                    token: localStorage.getItem('token'),
                },
            }
           );
        return dispatch(loadUserInfo());
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});



// update profile favoris
export const updateFavoris = createAsyncThunk('user/updateFavoris'
, async(info,{rejectWithValue, dispatch})=>{
    try {
        await axios.put(
            '/api/person/favoris/favoris',
             info,
              {
                headers: { 
                    token: localStorage.getItem('token'),
                },
            }
           );
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

// update profile favoris
export const updateFavorisPull = createAsyncThunk('user/updateFavorisPull'
, async(info,{rejectWithValue, dispatch})=>{
    try {
        await axios.put(
            'api/person/favoris/pull',
             info,
              {
                headers: { 
                    token: localStorage.getItem('token'),
                },
            }
           );
           return dispatch(loadUserInfo());
    } catch (errors) {
        console.log(errors.response.data.msg)
        return rejectWithValue(errors.response.data.msg)
    }
});

// update profile statut
export const updateStatut = createAsyncThunk('user/updateStatut'
, async(info,{rejectWithValue, dispatch})=>{
    try {
        await axios.put(
            '/api/commande',
             info,
              {
                headers: { 
                    token: localStorage.getItem('token'),
                },
            }
           );
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

// update profile modePayement
export const updateModePay = createAsyncThunk('user/updateModePay'
, async(info,{rejectWithValue, dispatch})=>{
    try {
        await axios.put(
            '/api/person/modepay',
             info,
              {
                headers: { 
                    token: localStorage.getItem('token'),
                },
            }
           );
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

const userSlice = createSlice({
    name:'user',
    initialState:{
        loading: false,
        userList: [],
        userInfo:{},
        token:localStorage.getItem('token') || null,
        isAuth:Boolean(localStorage.getItem('isAuth')) || null,
        errors:null,
        role:localStorage.getItem('role') || '',
        card:localStorage.getItem('card') || [],
        totalPrice: localStorage.getItem('totalPrice') || 0,
    },
    reducers:{
        logout: (state)=> {
            state.token = null;
            state.isAuth = false;
            state.role = '';
            localStorage.removeItem('token');
            localStorage.removeItem('isAuth');
            localStorage.removeItem('role');
    },
        afterPayement: (state)=> {
            state.card = [];
            state.totalPrice = 0;
            localStorage.removeItem('card');
            localStorage.removeItem('totalPrice');
        },    
    },
    extraReducers:{
        // [register.pending]:(state, action)=>{
        //     state.loading = true
        // },
        [registerUser.fulfilled]:(state, action)=>{
            state.msg = action.payload.msg
        } // state.userList = action.payload 
        ,
        [registerUser.rejected]:(state, action)=>{
            state.errors = action.payload
        },
        [loginUser.fulfilled]:(state,action)=>{
            state.isAuth= true;
            localStorage.setItem('isAuth', true);
            state.token = action.payload.token;
            state.role= action.payload.role;
            localStorage.setItem('role', action.payload.role)
            localStorage.setItem('token',action.payload.token)
        },
        [loginUser.rejected]:(state, action)=>{
            state.errors = action.payload
        },
        //load user info to
        [loadUserInfo.fulfilled]:(state,action)=>{
            state.userInfo = action.payload
        },
        [loadUserInfo.rejected]:(state, action)=>{
            state.errors = action.payload
        },
        [getUserById.fulfilled]:(state,action)=>{
            state.userInfo = action.payload
        },
        [getUserById.rejected]:(state, action)=>{
            state.errors = action.payload
        },
        [updateUserWithID.rejected]:(state, action)=>{
            state.errors = action.payload
        },
        [getUsers.pending]:(state)=>{
            state.loading= true
        },   
        [getUsers.fulfilled]:(state, action)=>{
            state.userList= action.payload
            state.errors= null
            state.loading= false
        }, 
        [getUsers.rejected]:(state, action)=>{
            state.errors = action.payload
            state.loading= false
        },
    }
});
export default userSlice.reducer;
export const {logout, afterPayement} = userSlice.actions;