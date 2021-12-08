import DISHES from '../Data/Dishes'
import Comments from '../Data/Comments'
import {combineReducers} from 'redux'
import * as actionTypes from './actionTypes'
 


const dishReducer=(dishState=DISHES,action)=>{
    switch(action.type){
        default:
            return dishState
    }
}

const commentReducer=(commentState=Comments,action)=>{
    switch(action.type){
        case actionTypes.ADD_COMMENT:
            let comment= action.payload
            comment.id=commentState.length
            comment.date=new Date().toDateString()
            return commentState.concat(comment)
    
        default: 
        return commentState
    }
}

export const Reducer=combineReducers({
    dishes:dishReducer,
    comments:commentReducer
})