import { Component } from 'react'

class Test extends Component{
  render(){
    let name = '张三'
    let age = 20
    let sex = '男'
    return (<h1>姓名: {name}, 年龄: {age}, 性别: {sex}</h1>)
  }
}

setTimeout(() => {
  return new Test()
})
