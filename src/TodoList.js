import React from 'react'
import ListItem from './ListItem'

const TodoList = (props) => {
    return props.items.map(item => {
        return <ListItem key={item} content={item}/>
    })
}

export default TodoList