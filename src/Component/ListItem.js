import React, { Component } from "react";

const toDoList = [
  {id:0, name: "đi học" },
  {id:1, name: "đi làm" },
  {id:2, name: "đi chơi" },
  {id:3, name: "lau nhà" },
  {id:4, name: "rửa chén" },
  {id:5, name: "đi chợ" },
  {id:6, name: "đi cf" },
];
export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: toDoList,
    };
  }

delete = (item) =>{
  const toDoList = this.state.toDoList.filter(i => i.id !== item.id)
  this.setState({toDoList})
}
  render() {
    const listItem = this.state.toDoList.map((item) => {
      return (
        <div key = {item.id}>
          <span onClick={this.delete.bind(this, item)}>{item.name}</span>
        </div>
            );
          })  
    return (
      <div>
        {listItem}
      </div>
    );
  }
}




