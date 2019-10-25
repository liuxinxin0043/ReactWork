import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div className='main'>
                <span>正在运行</span><button>{this.props.todo.length}</button>
                <ul>
                    {
                        this.props.todo.map((item,idx)=><li key={item}><input type="checkbox" checked={false} onChange={()=>this.props.changeTodo(idx,'todo')}></input>{item}--------------------<button onClick={()=>this.props.delitem(idx,'todo')}>删除</button></li>)
                    }
                </ul>
                <span>已完成&nbsp;&nbsp;&nbsp;</span><button>{this.props.done.length}</button>
                <ul>
                    {
                        this.props.done.map((item,idx)=><li key={item}><input type="checkbox" checked={true} onChange={()=>this.props.changeTodo(idx,'done')}></input>{item}---------------------<button onClick={()=>this.props.delitem(idx,'done')}>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }
}