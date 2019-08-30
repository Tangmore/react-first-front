import React, { Component } from 'react'
import Comment from './Comment'
class CommentList extends Component {
    handleDeleteComment(index){//index为接收子传的
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }
    render() {
        const comments = [
            { username: 'Jerry', content: 'hello1111111111' },
            { username: 'Jey', content: 'hello2222222222222222222' },
            { username: 'lUCY', content: 'hello33333333333333333333333' },
        ]
        return (
            <div>
                {/* {comments.map((item,key)=>
                    // <div key={key}>{item.username}:{item.content}</div>
                    <Comment key={key} comment={item}/>)
            } */}
                <div>
                    {/* {comments.map((comment, i) => <Comment comment={comment} key={i} />)} */}
                    {this.props.comments.map((comment,i)=><Comment 
                    comment={comment}  key={i} index={i}
                    onDeleteComment={this.handleDeleteComment.bind(this)} 
                   />)}
                </div>
            </div>
        )
    } 
}

export default CommentList 