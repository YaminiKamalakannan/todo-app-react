import React from 'react'
import './App.css'
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:'',
        completed:false
      }
    }
    this.handleEvent=this.handleEvent.bind(this)
    this.addItem=this.addItem.bind(this)
    this.deleteItem=this.deleteItem.bind(this)
    this.setUpdate=this.setUpdate.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }
  handleEvent(event){
    this.setState({
      currentItem:{
        text:event.target.value,
        key:Date.now(),
        completed:false
      }
    })
  }
  addItem(event){
    event.preventDefault()
    const newItem=this.state.currentItem;
    //console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items,newItem]
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:'',
          completed:false,
        }
      })

    }
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })
  }
  setUpdate(text,key){
    const items=this.state.items;
    items.map(item=>{
      if(item.key===key){
        item.text=text ;
      }
      return item
    })
    this.setState({
      items:items
    })
  }
  handleChange(key){
    this.setState(prevState =>{
      const updatedTodos= prevState.items.map(item=>{
          if(item.key===key){
              item.completed=!item.completed;
            }
            return item;
          
        })
        return {
          items: updatedTodos
      }
       
  })
  }    
  render(){
    return(
      <div>
          <h1 className="title">ToDO App - Manage your TASKS</h1>
          <div className="App">
              <header>
                <form id="to-do-form" onSubmit={this.addItem}>
                  <input 
                      type="text"
                      placeholder="What's your task?"
                      value={this.state.currentItem.text}
                      onChange={this.handleEvent}
                  />
                  <button>Add</button>
                </form>
              </header>
              <ListItems 
                  items={this.state.items} 
                  deleteItem={this.deleteItem} 
                  setUpdate={this.setUpdate} 
                  handleChange={this.handleChange} 
              />
        </div>
      </div>
    )
  }
}
export default App
