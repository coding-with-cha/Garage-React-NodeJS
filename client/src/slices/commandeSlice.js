import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import useDispatch from 'react-redux'
 

export const registerCommande = createAsyncThunk('commande/registerCommande', 
async(info,{rejectWithValue})=>{
    try {
        const {data} = await axios.post(
            'http://localhost:5000/api/commande',
            info,
            {
                headers: { 
                    token: localStorage.getItem('token'),
                },
            }
        );
        return data;
    } catch (errors) {
        console.log(errors.response.data.msg)
        return rejectWithValue(errors.response.data.msg)
    }
});

export const updateStatut = createAsyncThunk('commande/updateStatut'
, async(info,{rejectWithValue, dispatch})=>{
    try {
        await axios.put(
            `http://localhost:5000/api/commande/${info._id}`,info,
            {
                headers: { 
                    token: localStorage.getItem('token'),
                },
            }
        );
          return dispatch(getCommandes());
    } catch (errors) {
        console.log(errors.response.data.msg)
        return rejectWithValue(errors.response.data.msg)
    }
});

export const getCommandes = createAsyncThunk('commande/getCommandes', 
async(info,{rejectWithValue})=>{
    try {
        const {data} = await axios.get(
            'http://localhost:5000/api/commande/getAll',
            {headers: { 
                token: localStorage.getItem('token'),
                }
            },
        );
        return data;
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

export const getCommandesWithID = createAsyncThunk('commande/getCommandesWithID', 
async(info,{rejectWithValue})=>{
    try {
        const {data} = await axios.get(
            'http://localhost:5000/api/commande/forOwner/forOwner',
            {headers: { 
                token: localStorage.getItem('token'),
            }},);
        return data;
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

export const getCommandeById = createAsyncThunk('commande/getCommandeById'
, async(info,{rejectWithValue})=>{
    try {
        const {data} = await axios.get(
           ` http://localhost:5000/api/commande/${info._id}`, {
                headers: { 
                    token: localStorage.getItem('token'),
                },
            }
        );
        return data;
    } catch (errors) {
        console.log(errors.response.data.msg)
        return rejectWithValue(errors.response.data.msg)
    }
});

export const deleteCommandeWithID = createAsyncThunk('commande/deleteCommandeWithID', 
async(info,{rejectWithValue, dispatch})=>{
    try {
        const {data} = await axios.delete(
            `http://localhost:5000/api/commande/${info._id}`,
            {headers: { 
                token: localStorage.getItem('token'),
            }},);
            return dispatch(getCommandes())
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

export const updateCommandeModePayWithID = createAsyncThunk('commande/updateCommandeModePayWithID', 
async(info,{rejectWithValue, dispatch})=>{
    try {
        const {data} = await axios.put(
            `http://localhost:5000/api/commande/${info._id}`,
            {headers: { 
                token: localStorage.getItem('token'),
            }},);
            return dispatch(getCommandeById(info))
    } catch (errors) {
        return rejectWithValue(errors.response.data.msg)
    }
});

export const updateProdCard = createAsyncThunk('commande/updateProdCard'
, async(info,{rejectWithValue, dispatch})=>{
    try {
        await axios.put(
           ` http://localhost:5000/api/commande/upProduitsCard/${info._id}`,
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

const commandeSlice = createSlice({
    name:'commande',
    initialState:{
        loading: false,
        commandeList: [],
        commandeInfo:{},
        errors: null,
    },
    extraReducers:{
        [registerCommande.fulfilled]:(state, action)=>{
            state.msg = action.payload.msg
        }, // state.userList = action.payload 
        [registerCommande.rejected]:(state, action)=>{
            state.errors = action.payload
        },
        [getCommandes.pending]:(state)=>{
            state.loading= true
        },   
        [getCommandes.fulfilled]:(state, action)=>{
            state.commandeList= action.payload
            state.errors= null
            state.loading= false
        }, 
        [getCommandes.rejected]:(state, action)=>{
            state.errors = action.payload
            state.loading= false
        },
        [getCommandeById.fulfilled]:(state,action)=>{
            state.commandeInfo = action.payload
        },
        [getCommandeById.rejected]:(state, action)=>{
            state.errors = action.payload
        },
        [getCommandesWithID.pending]:(state)=>{
            state.loading= true
        },   
        [getCommandesWithID.fulfilled]:(state, action)=>{
            state.commandeList= action.payload
            state.errors= null
            state.loading= false
        }, 
        [getCommandesWithID.rejected]:(state, action)=>{
            state.errors = action.payload
            state.loading= false
        },
    }
});
export default commandeSlice.reducer;