import React, { Component } from 'react'
export default class Todoinput extends Component {

    constructor(){
        super();
        this.state = {
           data:''
        }
    }
    handleInput=(e)=>{
        if(e.keyCode===13){
            this.props.addTodo(e.target.value);
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className='top'>
            <span>TodoList</span><input name='data' onChange={(e)=>this.handleChange(e)} value={this.state.data} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
            </div>
        )
    }
}
