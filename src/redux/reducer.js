

import {combineReducers} from 'redux'
import * as actionTypes from './actionTypes'
import {initialContactForm} from './Form.js'
import { createForms } from 'react-redux-form'
 


const dishReducer=(dishState={isLoading:false,dishes:[]},action)=>{
    switch(action.type){
        case actionTypes.DISH_LOADING:
            return{
                    ...dishState,
                    isLoading:true,
                    dishes:[]
            }

        case actionTypes.LOAD_DISHES:
            return{
                ...dishState,
                isLoading:false,
                dishes:action.payload
            }
        default:
            return dishState
    }
}

const commentReducer=(commentState={isLoading:false,comments:[]},action)=>{
    switch(action.type){
        case actionTypes.LOAD_COMMENTS:
            return{
                ...commentState,
                isLoading:false,
                comments: action.payload
            }
            case actionTypes.COMMENT_LOADING:
                return{
                    ...commentState,
                    isLoading:true,
                    comments:[]
                }
                
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
    comments:commentReducer,
    ...createForms({
        feedback: initialContactForm
    })
})