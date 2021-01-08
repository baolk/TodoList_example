import React from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

class App extends React.Component{
///////////状态在哪里，操作状态的方法就在哪里/////////
    state = {todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'打豆豆',done:false},
    ]}
    //用于添加todo对象
    addTodo = (todoObj)=>{
        const {todos} = this.state;
        const newTodos = [todoObj,...todos];
        this.setState({todos:newTodos})
    }
    //用于更新todo
    updateTodo = (id,done)=>{
        const {todos} = this.state;
        //匹配处理数据
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id){
                return {...todoObj,done}
            }else{
                return todoObj
            }
        })
        this.setState({todos:newTodos})
    }
    //用于删除todo
    deleteTodo=(id)=>{
        const {todos} = this.state;
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !==id
        })
        this.setState({todos:newTodos})
    }

    //全选
    checkAllTodo = (done)=>{
        const {todos} = this.state
        const newTodo = todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        this.setState({todos:newTodo})
    }
    
    //清除所有
    clearAllDone = ()=>{
        const {todos} = this.state
        const newTodo = todos.filter((todoObj)=>{
            return todoObj.done === false
        })
        this.setState({todos:newTodo})
    }

    render(){
        const {todos} = this.state;
        return(
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}

export default App;