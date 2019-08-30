import React,{Component} from 'react'

class RefComponent extends Component {
    render() {
      return (
        <div className='comment'>
 aa
           
      </div>
      )
    }
  }


  class AutoFocusInput extends Component{
      componentDidMount(){
        this.input.focus()
      }
      render(){
          return(
              <input ref={(input)=>this.input=input}/>
          )
      }
  }
  
  export default AutoFocusInput