import React,{Component} from 'react'
import PropTypes from 'prop-types'
class Comment extends Component {
  static propTypes={
    comment:PropTypes.object.isRequired,
    index:PropTypes.number.isRequired
  }
  constructor(){
    super()
    this.state={
      timeString:''
    }
  }
  componentWillMount(){
    this._updateTime();
    this._timer=setInterval(()=>{//每隔五秒刷新时间
      this._updateTime();
    },5000)
  }
  componentWillUnmount(){
    clearInterval(this._timer)
  }

  _updateTime(){
    const comment=this.props.comment;
    const duration=(+Date.now()-comment.createdTime)/1000
    this.setState({
      timeString:duration>60?
      `${Math.round(duration/60)}分钟前`:`${Math.round(Math.max(duration,1))}秒前`
    })
  }

  handleDeleteComment(){
    if(this.props.onDeleteComment){
        this.props.onDeleteComment(this.props.index)//传递给父
    }
  }
    render() {
      return (
        <div className='comment'> 
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
        <span>{this.state.timeString}</span>
        <button onClick={this.handleDeleteComment.bind(this)}>删除</button>
      </div>
      )
    }
  }
  
  export default Comment 