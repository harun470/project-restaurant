import { baseUrl } from './baseUrl'
import * as actionTypes from './actionTypes'
import axios from 'axios'


export const addComment=(dishId,author,rating,comment)=>({
    
            
        type : actionTypes.ADD_COMMENT,
        payload:{
            dishId:dishId,
            author:author,
            rating: rating,
            comment:comment
        }
        
})

export const loadDishes=(dishes)=>({
    type : actionTypes.LOAD_DISHES,
    payload:dishes
    
})

export const dishLoading=()=>({
    type: actionTypes.DISH_LOADING
})

export const fetchDishes=()=>dispatch=>{
    dispatch(dishLoading())
    axios.get(baseUrl+"dishes")
    .then(response=>response.data)
    .then(dishes=>dispatch(loadDishes(dishes)))
    
    
}