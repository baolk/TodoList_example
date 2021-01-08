import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class index extends Component {
    //对props进行限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp = (event)=>{
        //解构赋值
        const {keyCode,target} = event;
        //判断回车按键
        if(keyCode !==13)return
        //添加的todo名字不能为空
        if (target.value.trim() === ''){
            alert('输入不能为空')
            return
        }
        //准备好一个对象
        const todoObj = {id:nanoid(),name:target.value,done:false};
        //将todoObj传递给App
        this.props.addTodo(todoObj) 
        //清空输入
        target.value = '';
    }
    render() {
        return (
            <div>
                <div className="todo-header">
                    <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp} />
                </div>
            </div>
        )
    }
}
