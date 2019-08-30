import React,{Component} from 'react'
import PropTypes from 'prop-types'
class CommentInput extends Component {
  static propTypes={
    onSubmit:PropTypes.func
  }
    constructor(){
        super()
        this.state={
            username:'',
            content:''
        }
    }
    componentWillMount(){
      this._loadUsername();//组件私有方法可用_  事件监听用on开头  render里面的方法分支可同render*
    }
    _loadUsername(){
      const username=localStorage.getItem('username')
      if(username){
        this.setState({username})
      }
    }

    componentDidMount(){
      this.textarea.focus()
    }
    handleUsernameChange(e){
        this.setState({
            username:e.target.value
        })
    }
    handleUsernameBlur(e){
      localStorage.setItem('username',e.target.value)
    }
    handleContentChange(e){
        this.setState({
            content:e.target.value
        }) 
    }

    handleSubmit(){
         if(this.props.onSubmit){
             const {username,content}=this.state;
             this.props.onSubmit({
               username,
               content,
              createdTime:+new Date()});//等同于new Date().getTime()
         }
         this.setState({content:''})
    }
    render() {
        return (
            <div className='comment-input'>
              <div className='comment-field'>
                <span className='comment-field-name'>用户名：</span>
                <div className='comment-field-input'>
                  <input value={this.state.username}
                  onBlur={this.handleUsernameBlur.bind(this)}
                   onChange={this.handleUsernameChange.bind(this)}/>
                </div>
              </div>
              <div className='comment-field'>
                <span className='comment-field-name'>评论内容：</span>
                <div className='comment-field-input'>
                  <textarea value={this.state.content}
                  ref={(textarea)=>this.textarea=textarea} 
                  onChange={this.handleContentChange.bind(this)}/>
                </div>
              </div>
              <div className='comment-field-button'>
                <button onClick={this.handleSubmit.bind(this)}>
                  发布
                </button>
              </div>
            </div>
          )
    }
  }
  
  export default CommentInput 