import React from 'react'
import {Card,CardBody,CardImg,CardTitle,CardText} from 'reactstrap'
import LoadComments from './LoadComments'
import BodyCommentForm from './BodyCommentForm'
import { baseUrl } from '../../redux/baseUrl'

export default function DishDetails(props) {
    return (
        <div>
            <Card style={{margin :'10px'}}>
            <CardImg width='100%' top alt={props.dish.name} src={baseUrl+ props.dish.image}  />
                <CardBody style={{textAlign :'left'}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>{props.dish.price} /-</p>
                        <hr />
                        <LoadComments comments={props.comments} commentsIsLoading={props.commentsIsLoading}/>
                        <hr />
                        <BodyCommentForm  dishId={props.dish.id} addComment={props.addComment} />
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}
