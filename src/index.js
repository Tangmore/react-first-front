import React,{Component}from 'react';
// import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import CommentApp from './containers/CommentApp'
// import commentReducer from './reducers/comments'
import Jsdemo from './app/jsdemo'
import Jsdemob from './app/jsdemob'
import  Jsdemoc from './app/jsdemoc'
import  Nav from './app/nav'

// import ReduxHeader from './reduxDemo/Header'
// import ReduxContent from './reduxDemo/Content'
// import StyleComponent from './StyleComponent'
import './index.css';
// function createStore(reducer) {
//    let state=null
//    const listeners=[]
//    const subscribe=(listener)=>listeners.push(listener)
//    const getState=()=>state
//    const dispatch=(action)=>{
//        state=reducer(state,action)
//        listeners.forEach((listener)=>listener())
//    }
//    dispatch({})
//    return{getState,dispatch,subscribe}
// }

// const themeReducer=(state,action)=>{
//     if(!state) return{
//         themeColor:'red'
//     }
//     switch(action.type){
//         case 'theme-color':
//         return{...state,themeColor: action.themeColor}
//         default:
//         return state
//     }
// }

// const store=createStore(commentReducer);


// class Header extends Component{
//     static defaultProps={
//         likedText:'取消'
//     }
//     constructor(){
//         super()
//         this.state={
//             isCao:false,
//             count:1
//         }
//     }

//     handleClickOnIs(word,e){
//         console.log(e.target.innerHTML);
//         console.log(this);//bind(this)后获取当前实例对象
//         console.log(word);//获取函数参数

//         this.setState({
//             isCao:!this.state.isCao,
//             count:2
//         })

//         this.setState((prevState)=>{
//             return{count:prevState.count+1}
//         })

//         if(this.props.onClick){
//             this.props.onClick()
//         }
//     }
    
//     render(){ 
//         const isCao=false;
//         const likedText = this.props.likedText || '取消'
//         const unlikedText = this.props.unlikedText || '点赞'
//         const users = [
//             { username: 'Jerry', age: 21, gender: 'male' },
//             { username: 'Tomy', age: 22, gender: 'male' },
//             { username: 'Lily', age: 19, gender: 'female' },
//             { username: 'Lucy', age: 20, gender: 'female' }
//           ]
//         //   手动构建列表JSX结构
//         //   const arr=[]
//         //   for(var item of users){
//         //       arr.push(
//         //         <div>
//         //             <div>姓名：{item.username}</div>
//         //             <div>年龄：{item.age}</div>
//         //             <div>性别：{item.gender}</div>
//         //             <hr />
//         //         </div>  
//         //       )
//         //   }

//         return(
//             <div className="text">
//             {/* {
//                 isCao?
//                 <h1>first</h1>:
//                 <h2 onClick={this.handleClickOnIs.bind(this,"some params")}>
//                 {this.state.isCao?'取消':'点赞'}{this.state.count}
//                 </h2>
//             } */}

//             {/* <button onClick={this.handleClickOnIs.bind(this,'some params')}>
//                 {this.state.isCao ? likedText : unlikedText} 👍
//             </button> */}
//             {/* {arr} */}

//             {/* {
//                 users.map((item,index)=>{
//                     return(
//                         <div>
//                             <div>姓名：{item.username}</div>
//                             <div>年龄：{item.age}</div>
//                             <div>性别：{item.gender}</div>
//                             <hr/>
//                         </div>    
//                     )
//                 })
//             } */}

//             {
//                 users.map((user,key)=><User key={key} user={user}/>)
//             }
//             </div>
            
//         )
//     }
// }


// class User extends Component{
//     render(){
//         const {user}=this.props;
//         return(
//             <div>
//             <div>姓名：{user.username}</div>
//             <div>年龄：{user.age}</div>
//             <div>性别：{user.gender}</div>
//             <hr/>
//         </div>   
//         )
//     }
// }

// class Index extends Component{
//     static childContextTypes ={           //验证getChildContext返回的对象
//         store:PropTypes.object
//     }
//     getChildContext (){
//         return {store}
//     }
//     render(){
//         return(
//             <div>
//                 {/* <Header likedText='已赞' unlikedText='赞'
//                 onClick={()=>console.log('Click on this button')}/> */}
//                 {/* <Header wordings={{likedText='已赞', unlikedText='赞'}}/> */}
//                 {/* <Header/> */}
//                     {/* <ReduxHeader/>
//                     <ReduxContent/> */}
//             </div>
//         )
//     }
// }



ReactDOM.render(
    // <Header/>,
    // <Lifestyle/>,
    // <PropschildrenComponent>
    //     <h2>小书</h2>
    //     <div>专业、简单</div>
    //     订阅：<input />
    // </PropschildrenComponent>,
    // <CommentApp/>,
    // <div>
    //     <Index/>
    // </div>,

    // <Provider store={store}>
    // <CommentApp/>
    // </Provider>,
    // <Jsdemo/>,

    // 路由
    <Router>    
        <div>
            <Nav/>
            <Route exact path='/' component={Jsdemo}/>
            <Route exact path='/jsdemob' component={Jsdemob}/>
            <Route exact path='/jsdemoc' component={Jsdemoc}/>
        </div>
    </Router>,
    document.getElementById('root')
)
