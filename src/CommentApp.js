import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'


class CommentApp extends Component{
    constructor(){
        super()
        this.state={
            comments:[]
        }
    }
    componentWillMount(){
        this._loadContent();
    }
    _saveComment(comments){
        localStorage.setItem('comments',JSON.stringify(comments))
    }
    _loadContent(){
        let comments=localStorage.getItem('comments')
        if(comments){
            comments=JSON.parse(comments)
          this.setState({comments})
        }
      }
    handleSubmitComment=comment=>{
        console.log(comment)
        if(!comment) return
        if(!comment.username) return alert('请输入用户名')
        if(!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        this._saveComment( this.state.comments)
        this.setState({
            comments:this.state.comments
        })
    }
    handleDeleteComment(index){
        console.log('删除：'+index)
        let comments=this.state.comments;
        comments.splice(index,1);//删除评论
        this.setState({
            comments
        })
        console.log(comments)
    }
    render(){ 
        return(
            <div className='wrapper'>
            <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
            <CommentList comments={this.state.comments}
            onDeleteComment={this.handleDeleteComment.bind(this)}/>
          </div>
        )
    }
}
export default CommentApp
