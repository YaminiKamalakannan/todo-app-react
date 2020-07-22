import React from 'react'
import './ListItems.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'
function ListItems(props){
    const completedStyle={
        fontStyle:'italic',
        color:'#cdcdcd',
        textDecoration:"line-through"
    }
    const items=props.items;
    //const isEmpty=props.isEmptyList? true:false;
    
    const listItems=items.map(item=>{
        return(
            <div className="list" key={item.key}>
                <p>
                    <input 
                        type="checkbox"
                        className="checkbox-container"
                        checked={item.completed}
                        onChange={()=>{props.handleChange(item.key)}}
                    />
                    <input 
                        type="text" 
                        id={item.key} 
                        value={item.text}
                        onChange={(e)=>{
                            props.setUpdate(e.target.value,item.key)
                        }}
                        className="listItems"
                        style={item.completed? completedStyle:null}
                    
                    />
                    <span>
                    <FontAwesomeIcon 
                        className="faicons" 
                        icon="trash" 
                        onClick={() =>props.deleteItem(item.key)}
                    />
                    </span>
                </p>
            </div>
        )
    })
    
    return(
        
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItems} 
            </FlipMove>  
        </div>
    )    
}
export default ListItems
