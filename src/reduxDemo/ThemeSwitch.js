import React,{ Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component{
    static contextTypes={
        store:PropTypes.object
    }
    componentWillMount(){
        const {store}=this.context
        this._updateThemeColor()
        store.subscribe(()=>this._updateThemeColor())
    }
    _updateThemeColor(){
        const {store} =this.context
        const state=store.getState()
        this.setState({themeColor:state.themeColor})
    }
    handleSwitchColor(color){
        const {store}=this.context
        store.dispatch({
            type:'theme-color',
            themeColor:color
        })
    }
    render(){
        return(
             <div>
                 <button onClick={this.handleSwitchColor.bind(this,'red')}
                 style={{color:this.state.themeColor}}>Red</button>
                 <button onClick={this.handleSwitchColor.bind(this,'blue')}
                 style={{color:this.state.themeColor}}>Blue</button>
             </div>
        )
    }
}
export default ThemeSwitch