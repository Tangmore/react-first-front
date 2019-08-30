import React,{Component} from 'react'
import { classDeclaration } from '@babel/types';

class PropschildrenComponent extends Component {
    render() {
      return (
        <div className='comment'>
     ss
      </div>
      )
    }
  }


  class Card extends Component{
      render(){
          return(
              <div>
                  {/* {this.props.children} */}
                  <span>{this.props.children[0]}</span>
                  <span>demo</span>
                  <span>{this.props.children[1]}</span>
              </div>
          )
      }
  }
  
  export default Card 