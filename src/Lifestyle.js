import React,{Component} from 'react'

class Lifestyle extends Component {
    constructor(){
        super()
        console.log('constructor')
    }
    componentWillMount(){
        console.log('component will mount')
    }
    componentDidMount(){
        console.log('component did mount')
    }
    componentWillUnmount(){
        console.log('component unmount')
    }
    render() {
        console.log('render')
      return (
        <div className='comment'>
        react Lifestyle
      </div>
      )
    }
  }

  class Index extends Component{
      constructor(){
          super()
          this.state={
              isShowHeader:true
          }
      }
      handeleShoworHide(){
          this.setState({
              isShowHeader:!this.state.isShowHeader
          })
      }

      render(){
          return(
              <div>
                  {/* {this.state.isShowHeader?<Lifestyle/>:null} */}
                  {this.state.isShowHeader?<Clock/>:null}
                  <button onClick={this.handeleShoworHide.bind(this)}>设置</button>
              </div>
          )
      }
  }


  class Clock extends Component{
      constructor(){
          super()
          this.state={
              date:new Date()
          }
      }
      componentWillMount(){
          this.timer=setInterval(()=>{
              this.setState({date:new Date()})
          },1000)
      }
      render(){
          return(
              <div>
                  <p>现在时间：</p>
                  {this.state.date.toLocaleTimeString()}
              </div>
          )
      }
      componentWillUnmount(){
          clearInterval(this.timer)
      }
  }
  
  export default Index 