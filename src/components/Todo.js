import React from 'react';


const Todo = ({text,todo,setTodos,todos})=>{
    const deleteHandler = ()=>{
        setTodos(todos.filter(el=> el.id!== todo.id))
    }
    const completehandler = () =>{
        setTodos(todos.map((element)=>{
            console.log(todo.id);
            if(element.id === todo.id){
                return {
                    ...element ,completed : !element.completed
                }
            }
            return element;
        }))
    }
    return (
        <div className = "todo">
            <li className= {`todo-item ${todo.completed ? "completed": ""}` }>{text}</li>
            <button onClick = {completehandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick= {deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;
