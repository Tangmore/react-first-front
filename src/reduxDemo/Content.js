import React,{ Component } from 'react'
import ThemeSwitch from './ThemeSwitch'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Content extends Component{
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
    render(){
        return(
             <div>
                 <p style={{color:this.state.themeColor}}>I have a dream</p>
                 <ThemeSwitch/>
             </div>
        )
    }
}
export default Content