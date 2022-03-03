import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import postReducer from './slices/postSlice'
import commandeReducer from './slices/commandeSlice'


export default configureStore({reducer:{user:userReducer, post:postReducer, commande:commandeReducer}})
