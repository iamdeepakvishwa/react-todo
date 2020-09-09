import React, { useState ,useEffect} from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] =useState("");
  const [todos , setTodos]  = useState([]);
  const [status, setstatus] = useState("all");
  const [fileredTodos ,setfilteredTodos] = useState([]);

  useEffect(()=>{
    getLocalTodos()
  },[]);

  useEffect(()=>{
    const filteredHandler = ()=>{
      switch(status) {
        case 'completed' :
          setfilteredTodos(todos.filter(todo=>todo.completed === true));
          break;
        case 'uncomplete': 
          setfilteredTodos(todos.filter(todo=>todo.completed === false));
          break;
        default: 
          setfilteredTodos(todos);
          break;
      }
    }
    filteredHandler();
    saveLocal();
  },[todos,status]);



  const saveLocal = ()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  const getLocalTodos = ()=>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let store = JSON.parse(localStorage.getItem('todos',JSON.stringify(todos)));
      setTodos(store);
    }
  }


  return (
    <div className="App">
      <header>
        <h1>TODO APP</h1>
      </header>
      <Form 
        inputText = {inputText}
        todos= {todos} 
        setTodos={setTodos} 
        setInputText = {setInputText}
        setstatus = {setstatus}
        
      />
      <TodoList todos= {todos} setTodos={setTodos} fileredTodos = {fileredTodos}/>
    </div>
  );
}

export default App;
