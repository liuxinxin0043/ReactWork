import React, { Component } from 'react'
import Todo from './Todo'
import Todoinput from './Todoinput'
export default class Todolist extends Component {
    constructor(props){
        super(props);
        var todo=JSON.parse(localStorage.getItem('todo')) ||[] ;
        var done=JSON.parse(localStorage.getItem('done'))||[] ;
        this.state = {
            todo:todo,
            done:done
        }
        // var a= {a:100,b:200};
        // Object.keys(a).forEach((item)=>{
        //     console.log(item);
        //     console.log(a[item]);
        // })
    }
    addItem=(msg)=>{
        this.setState({
            todo:[...this.state.todo,msg]
        },()=>{
            localStorage.setItem('todo', JSON.stringify(this.state.todo));
        })
        console.log(msg);
    }
    finishItem=(idtag,type)=>{
        if(type==='todo'){
            let todo=[...this.state.todo];
            let change=todo.splice(idtag,1)[0];
            let done =[...this.state.done,change];
            this.setState({
                done: done,
                todo: todo
            }, () => {
                localStorage.setItem('done', JSON.stringify(this.state.done));
                localStorage.setItem('todo', JSON.stringify(this.state.todo));
            })
        }else if(type==='done'){
            let done=[...this.state.done];
            let change1=done.splice(idtag,1)[0];
            let todo=[...this.state.todo,change1];
            this.setState({
                todo:todo,
                done:done
            },()=>{
                localStorage.setItem('done', JSON.stringify(this.state.done));
                localStorage.setItem('todo', JSON.stringify(this.state.todo));
            })
        }
    }
    delItem=(idtag,type)=>{
        if(type==='todo'){
            var todo=[...this.state.todo]
            todo.splice(idtag,1);
            this.setState({
                todo:todo
            },()=>{
                localStorage.setItem('todo', JSON.stringify(todo));
            })
            console.log(idtag);
        }else if(type==='done'){
            var done=[...this.state.done]
            done.splice(idtag,1);
            this.setState({
                done:done
            },()=>{
                localStorage.setItem('done', JSON.stringify(done));
            })
            console.log(idtag);
        }
       
    }

    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}></Todoinput>
                <Todo delitem={this.delItem} todo={this.state.todo} done={this.state.done} changeTodo={this.finishItem}></Todo>   
            </div>
        )
    }
}