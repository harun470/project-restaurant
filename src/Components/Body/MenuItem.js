import React from 'react'
import {Card,CardBody,CardImg,CardImgOverlay,CardTitle} from 'reactstrap'
import { baseUrl } from '../../redux/baseUrl'

export default function MenuItem(props) {
    
    return (
        <div>
            <Card style={{margin :'10px'}}>
                <CardBody>
                    <CardImg width='100%' alt={props.dish.name} src={baseUrl+ props.dish.image} style={{opacity :'0.6'}} />
                    <CardImgOverlay>
                        <CardTitle style={{cursor : 'pointer'}} onClick={props.dishSelect}>
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}
