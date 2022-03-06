import { useCallback, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [inputContent, setInputContent] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onInputChange = useCallback((e) => {
    setInputContent(e.target.value);
    }, []
  );
  
  const onAddNewTodo = useCallback(
    () => {
      setTodoList([...todoList, {id: uuidv4(), content: inputContent}]);
      setInputContent("");
    },[inputContent,todoList]
  );

  const onDeleteTodo = useCallback(
    (id) => {
    },[]
  )

  return (
    <div className="App">
      <div className="flex justify-center items-center min-h-screen bg-[#cbd7e3]">
        <div className="h-[460px] w-[460px] bg-white rounded-lg p-4 overflow-auto">
          <p className="text-3xl font-semibold my-2">Todo App</p>
          <div className="flex gap-2 mt-4">
            <div className="w-9/12 h-12">
              <input 
                className="text-sm h-12 w-full pl-4 rounded-[7px] flex justify-start items-center"
                type="text" placeholder="What needs to be done?"
                value={inputContent}
                onChange={onInputChange} 
              />
            </div>
            <button 
              disabled={!inputContent}
              className="
                w-1/4 h-12 add_task text-sm hover:bg-blue-700 cursor-pointer
                disabled:bg-gray-400 disabled:cursor-not-allowed text-white bg-blue-400 rounded-lg
              "
              onClick={onAddNewTodo}
            >
              Add
            </button> 
              <i className="absolute top-[27px] text-gray-600 text-xl left-2 fa fa-pencil-square"></i>
          </div>
          <TodoList todoList = {todoList} onDeleteTodo = {onDeleteTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
