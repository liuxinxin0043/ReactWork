import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Requset from './Request';
import {Showtime} from './Showtime'
import Todolist from './Todilist/Todolist'
//ReactDOM.render(<Showtime word="react"/>,document.getElementById('root'));
//ReactDOM.render(<Todolist word="react"/>,document.getElementById('root'));

ReactDOM.render(<Requset word="react"/>,document.getElementById('root'));



// // 函数定义组件
// function Todo(props){
//     return (
//         <div>
//             {/* 条件渲染 */}
//             {props.list.length>=6?<h1>todo</h1>:''}
//             {props.list.length>=5&&<h1>todo</h1>}
//             <ul>
//                 {/* 循环渲染 */}
                
//                 {
//                     // props.list.map((item,index)=>{
//                     //     if(index%2===0){
//                     //         return <li key={item}>{item}</li>
//                     //     }
//                     // })
//                     props.list.map(
//                         (item,index)=> index%2 === 0&&<li key={item}>{item}</li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }
// var item = [1,2,3,4,5];
// ReactDOM.render(<Todo list={item}/>,document.getElementById('root'));


// react元素创建后不可改变
// function tick(){
//     var e = <div>
//                 <p>当前时间</p>
//                 <p>当前时间</p>
//                 <h1>{new Date().toLocaleString()}</h1>;
//             </div>
//     ReactDOM.render(e,document.getElementById('root'));
// }
// tick();
// setInterval(tick,1000);

//import { maxHeaderSize } from 'http';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

/*var ele=React.createElement(
    'div',{'id':'box'},'hello',React.createElement('h1',{'id':'h'},'react')
);*/
//var str='hello';
//var ele=<h1>{str}</h1>;
//jsx表达式会被react转成一个对象，类似下面声明

// var ele = React.createElement(
//     'div',
//     {'id':'box'},
//     'hello',
//     React.createElement(
//         'h1',
//         {'id':'h'},
//         'react'
//     )
// );
// var obj={
//     type:'div',
//     props:{
//         id:'box',
//         class:'box',
//         children:['hello',{
//             type:'h1',
//             props:{
//                 id:'h',
//                 class:'h',
//                 children:['react']
//             }
//         }]
//     }
// }


//自己声明rend函数，实现页面渲染
// function render(obj,container){
//     var {type,props}=obj;
//     //文档碎片
//     var fr=document.createDocumentFragment();
//     var ele =document.createDocumentFragment(type);
//     for(var item in props){
//         if(item==='class'){
//             ele.className=props[item];
//         }else if(item==='children'){
//             for(var i=0;i<props[item].length;i++){
//                 if(typeof props[item][i]==='object'){
//                     render(props[item][i],ele);
//                 }else{
//                     var txt=document.createTextNode(props[item][i]);
//                     ele.appendChild(txt);
//                 }   
//             }
//         }else{
//             ele[item]=props[item];
//         }   
//     }
//   //  ele.id=obj.props.id;
//    // ele.innerHTML=obj.props.children[0];
//    fr.appendChild(ele);
//    container.appendChild(fr);
// }

// render(obj,document.getElementById('root'));

//ReactDOM.render(ele, document.getElementById('root'));
//注意以下！
/*加载html文件、浏览器解析html生成DOM树
  link加载css文件，解析css规则、和DOM树结合生成render tree、浏览器引擎渲染render tree
*/
//页面回流（重排）
//页面重绘（把字体颜色、背景颜色等样式改变改一下）
// var root=document.getElementById('root');
// var width=root.offsetWidth;
// setInterval(function(){
//     width+=1;
//     root.style.width=width+'px';
// },100)

//display/width/height/font-size 等会引起页面回流
//node.offsetLeft/node.offsetWidth等慎用
//声明一个css的一个类
// document.body.style.width = '100px';
// document.body.style.height = '100px';
// .change{
//     width:100px;
//     height:100px;
// }
//document.body.className='change';
// console.time('a');
// var str = '';
// for(var i=0;i<1000;i++){
//     str += '<li>'+i+'</li>';
// }
// document.body.innerHTML = str;
// console.timeEnd('a');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
