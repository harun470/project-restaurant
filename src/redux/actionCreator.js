import { baseUrl } from './baseUrl'
import * as actionTypes from './actionTypes'
import axios from 'axios'


export const addComment=(dishId,author,rating,comment)=>dispatch=>{
    
        const newComment={
            dishId:dishId,
            author:author,
            rating: rating,
            comment:comment
        }
        newComment.date=new Date().toISOString();
        axios.post(baseUrl+'comments',newComment)
        .then(response=>response.data)
        .then(comment=>dispatch(commentConcat(comment)))
        
}

export const commentConcat=(comment)=>({
    type:actionTypes.ADD_COMMENT,
    payload:comment
})

export const commentLoading=()=>{
    return{
        type:actionTypes.COMMENT_LOADING
    }
    
}

export const loadComment=(comments)=>({
    type:actionTypes.LOAD_COMMENTS,
    payload:comments
})

export const fetchComments=()=>dispatch=>{
    dispatch(commentLoading())
    axios.get(baseUrl+"comments")
    .then(response=>response.data)
    .then(comments=>dispatch(loadComment(comments)))
}

export const loadDishes=(dishes)=>({
    type : actionTypes.LOAD_DISHES,
    payload:dishes
    
})

export const dishLoading=()=>({
    type: actionTypes.DISH_LOADING
})

export const dishesFailed=(errMess)=>({
    type:actionTypes.DISHES_FAILED,
    payload:errMess
})

export const fetchDishes=()=>dispatch=>{
    dispatch(dishLoading())
    axios.get(baseUrl+"dishes")
    .then(response=>response.data)
    .then(dishes=>dispatch(loadDishes(dishes)))
    .catch(error=>dispatch(dishesFailed(error.message)))
    
    
}