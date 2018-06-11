import { render } from 'react-dom'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
// 首先我们需要导入一些组件...
// import About from './containers/'

// 然后我们从应用中删除一堆代码和
// 增加一些 <Link> 元素...
class App extends Component{
  render() {
    return (
        <h1>App</h1>
    )
  }
}


// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
ReactDOM.render((
  <App/>
   
), document.getElementById('root'))