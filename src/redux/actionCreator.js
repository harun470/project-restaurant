import DISHES from '../Data/Dishes'
import * as actionTypes from './actionTypes'


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
    setTimeout(()=>{
        dispatch(loadDishes(DISHES))
    }
    ,2000)
    
    
}