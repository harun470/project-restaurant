import React from 'react'
import dateFormat from 'dateformat'
import Bodyloading from './Bodyloading'

export default function LoadComments(props) {
    if(props.commentsIsLoading){
        return <Bodyloading />
    }else{
        return (
            props.comments.map(item => {
                return(
                    <div>
                        <p>{item.author}</p>
                        <p>{item.comment}</p>
                        <p>{item.rating}</p>
                        <p>{dateFormat(item.date ,"dddd,mmmm dS,yyyy,h:MM:ss TT")}</p>
                    </div>
                )
            })
        )
    }
    
}

