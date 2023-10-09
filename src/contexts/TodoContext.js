 import { createContext, useContext } from "react";

 export const TodoContext = createContext({
    todo : [{
        id: 1,
        todo: "Todo msg",
        completed: false
    }],
    addTodo: () => {},
    updatedTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}
 });

 export const useTodo = () => {
     return useContext(TodoContext);
 }

  export const TodoProvider = TodoContext.Provider