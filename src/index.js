import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './CommentApp'
// import StyleComponent from './StyleComponent'
import './index.css';
 
class Header extends Component{
    static defaultProps={
        likedText:'取消'
    }
    constructor(){
        super()
        this.state={
            isCao:false,
            count:1
        }
    }
    handleClickOnIs(word,e){
        console.log(e.target.innerHTML);
        console.log(this);//bind(this)后获取当前实例对象
        console.log(word);//获取函数参数

        this.setState({
            isCao:!this.state.isCao,
            count:2
        })

        this.setState((prevState)=>{
            return{count:prevState.count+1}
        })

        if(this.props.onClick){
            this.props.onClick()
        }
    }
    
    render(){ 
        const isCao=false;
        const likedText = this.props.likedText || '取消'
        const unlikedText = this.props.unlikedText || '点赞'
        const users = [
            { username: 'Jerry', age: 21, gender: 'male' },
            { username: 'Tomy', age: 22, gender: 'male' },
            { username: 'Lily', age: 19, gender: 'female' },
            { username: 'Lucy', age: 20, gender: 'female' }
          ]
        //   手动构建列表JSX结构
        //   const arr=[]
        //   for(var item of users){
        //       arr.push(
        //         <div>
        //             <div>姓名：{item.username}</div>
        //             <div>年龄：{item.age}</div>
        //             <div>性别：{item.gender}</div>
        //             <hr />
        //         </div>  
        //       )
        //   }

        return(
            <div className="text">
            {/* {
                isCao?
                <h1>first</h1>:
                <h2 onClick={this.handleClickOnIs.bind(this,"some params")}>
                {this.state.isCao?'取消':'点赞'}{this.state.count}
                </h2>
            } */}

            {/* <button onClick={this.handleClickOnIs.bind(this,'some params')}>
                {this.state.isCao ? likedText : unlikedText} 👍
            </button> */}
            {/* {arr} */}

            {/* {
                users.map((item,index)=>{
                    return(
                        <div>
                            <div>姓名：{item.username}</div>
                            <div>年龄：{item.age}</div>
                            <div>性别：{item.gender}</div>
                            <hr/>
                        </div>    
                    )
                })
            } */}

            {
                users.map((user,key)=><User key={key} user={user}/>)
            }
            </div>
            
        )
    }
}


class User extends Component{
    render(){
        const {user}=this.props;
        return(
            <div>
            <div>姓名：{user.username}</div>
            <div>年龄：{user.age}</div>
            <div>性别：{user.gender}</div>
            <hr/>
        </div>   
        )
    }
}

class Index extends Component{
    render(){
        return(
            <div>
                {/* <Header likedText='已赞' unlikedText='赞'
                onClick={()=>console.log('Click on this button')}/> */}
                {/* <Header wordings={{likedText='已赞', unlikedText='赞'}}/> */}
                <Header/>
            </div>
        )
    }
}



ReactDOM.render(
    // <Header/>,
    // <Lifestyle/>,
    // <PropschildrenComponent>
    //     <h2>小书</h2>
    //     <div>专业、简单</div>
    //     订阅：<input />
    // </PropschildrenComponent>,
    <CommentApp/>,
    document.getElementById('root')
)
