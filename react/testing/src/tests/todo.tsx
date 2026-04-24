import { useState } from 'react'
import './App.css'


type Todo={
  id:number,
  text:string,
  completed:boolean
}
function App() {

  const [inputValue,setInputValue] = useState('')
  const [filter,setFilter]=useState('')
  
  
  const [todos,setTodos] = useState<Todo[]>([])
  const filteredTodos = todos.map(todo=>{
    if(filter=='active')  {
      if(!todo.completed)
        
        return todo
        
      }
      else if(filter=='completed'){
        if(todo.completed)
          return todo
        
        
      } 
      else if(filter=='all') {
      return todo
      //console.log(todo)
    }
  })
  
    //console.log('filteredTodos',filteredTodos)
  //console.log('alltodo',AllTodo)


  const handleAddTodo =()=>{
    if(inputValue.trim() === '')
      return
    
      const newTodo = {
        id:Date.now(),
        text:inputValue,
        completed:false
      }
      setTodos(prev =>[...prev,newTodo])
      setInputValue('')
    
  }

  const handleDelete = (id:number)=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
  }

  const handleCompleted = (id:number)=>{
    setTodos(prev=>prev.map((todo)=> todo.id===id? {...todo,completed:!todo.completed}:todo))
  }


  return (
    <> 
    <div className='flex  gap-3'>
       <input type="text" className='border-2' 
       value={inputValue}
       onChange={(e)=>setInputValue(e.target.value)}
       />
       <button onClick={handleAddTodo} >+</button>
    </div>

    <div>
      <h1>List of all todos</h1>
      {
        todos.map((todo)=>(
          <div key={todo.id}>
            { todo.completed ? <span className='line-through'>{todo.text}</span> : todo.text}
             <button  onClick={()=>handleCompleted(todo.id)}>✅</button> 
            <button onClick={()=>handleDelete(todo.id)}>❌</button>
          </div>
        ))
      }
      
    </div>

      <div>
        {
          filteredTodos.map((fTodo,index)=>(
            <div key={index}>
              {fTodo?.text}
            </div>
          ))
        }

      </div>




<div className='flex gap-3'>

<button onClick={() => setFilter('all')}>All</button>
<button onClick={() => setFilter('active')}>Active</button>
<button onClick={() => setFilter('completed')}>Completed</button>
</div>
    </>
  )
}

export default App
