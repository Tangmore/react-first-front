import React,{Component} from 'react'
import PropTypes from 'prop-types'

class StyleComponent extends Component {
    static propTypes={
        comment:PropTypes.object.isRequired
        // {array | bool | func | number | object |string | node | element}
    }
    constructor(){
        super()
        this.state={
            color:'purple'
        }
    }
    render() {
        const {comment}=this.props;
      return (
        <div className='comment'>
            <div className='comment-user'>
            <span style={{fontSize:'28px',color:this.state.color}}>psp</span>
            <span>{comment.user}</span>:
            <span>{comment.content}</span>
        </div>
      </div>
      )
    }
  }

  class Index extends Component{
      render(){
          return(
             <StyleComponent comment={{user:'tom',content:'hello'}}/>
          )
      }
  }
  
  export default Index 