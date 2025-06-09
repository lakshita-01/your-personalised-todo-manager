
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    if (text.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: text.trim(),
        completed: false,
        createdAt: new Date(),
      };
      setTodos([newTodo, ...todos]);
      toast({
        title: "Task added!",
        description: "Your new task has been added to the list.",
      });
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
    toast({
      title: "Task deleted",
      description: "Task has been removed from your list.",
    });
  };

  const editTodo = (id: string, newText: string) => {
    if (newText.trim()) {
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      ));
      toast({
        title: "Task updated",
        description: "Your task has been successfully updated.",
      });
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="space-y-6">
      <AddTodo onAdd={addTodo} />
      
      {totalCount > 0 && (
        <div className="rounded-lg p-4 shadow-sm border" style={{ backgroundColor: '#eff0f0' }}>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Progress</span>
            <span>{completedCount} of {totalCount} completed</span>
          </div>
          <div className="mt-2 bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-500 ease-out"
              style={{ 
                width: totalCount > 0 ? `${(completedCount / totalCount) * 100}%` : '0%',
                backgroundColor: '#44bec7'
              }}
            />
          </div>
        </div>
      )}

      <div className="space-y-3">
        {todos.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">No tasks yet</div>
            <div className="text-gray-500 text-sm">Add your first task above to get started!</div>
          </div>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
