import React from 'react'
import { Todo } from './Todo'

export const TodoList = (props) => {
    const mystyle = {
        minHeight: " 70vh",
        margin: "40px auto"
    }
    return (
        <>
            <div className="container" style={mystyle}>
                <h1 style={{ "textAlign": "center", "margintop": "2rem" }}>My Todos</h1><hr />
                {props.todos.length === 0 ? "No todos to display" :
                    props.todos.map((todo) => {
                        return <Todo key={todo.sno} todo={todo} todoDel={props.todoDel} />

                    }
                    )
                }
            </div>
        </>
    )
}
