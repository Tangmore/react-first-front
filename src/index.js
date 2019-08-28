import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
class Header extends Component{
    render(){
        const isCao=false;
        return(
            <div>
            <h1>React Demo</h1>
          </div>
        )
    }
}
ReactDOM.render(
    <Header/>,
    document.getElementById('root')
)
