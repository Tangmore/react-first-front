import React,{Component}from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import ReduxHeader from './reduxDemo/Header'
import ReduxContent from './reduxDemo/Content'
import './index.css';
 

const themeReducer=(state,action)=>{
    if(!state)return{themeColor:'red'}
    switch (action.type) {
        case 'CHANGE_COLOR':
          return { ...state, themeColor: action.themeColor }
        default:
          return state
      }
}
const store=createStore(themeReducer)
class Index extends Component{
    render(){
        return(
            <div>
                    <ReduxHeader/>
                    <ReduxContent/>
            </div>
        )
    }
}
 
ReactDOM.render(
    <div>
        <Index/>
    </div>,
    document.getElementById('root')
)
