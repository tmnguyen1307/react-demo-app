import React from 'react';
import './App.css';
import TodoList from './TodoList'

class App extends React.Component {
  state = {
    newItem: "", 
    items: []
  }
 
  addItem = (event) => {
   if (this.state.newItem !== ""){
     this.setState(prevState => {
       return {items: prevState.items.concat(this.state.newItem)}
      })
   }
   this.setState({newItem: ""})
   event.preventDefault() 
 }

 changeHandler = (event) => {
   this.setState({newItem: event.target.value})
 }

  render(){
    return (
      <div className="App">
        <h1>To do list</h1>
        <form onSubmit={this.addItem}>
          <input 
            placeholder="enter task" 
            value={this.state.newItem}
            onChange = {this.changeHandler}
          />
          <button type="submit">add</button>
        </form>
        <TodoList items={this.state.items}/>
      </div>
    )
  }
}

export default App;
