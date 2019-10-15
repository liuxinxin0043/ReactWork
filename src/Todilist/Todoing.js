import React, { Component } from 'react'

export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1>正在运行</h1>
                <ul>
                    {
                        this.props.todo.map((item,idx)=><li key={item}>{item}----<button onClick={()=>this.props.delitem(idx)}>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }
}
