
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border shadow-sm p-4">
      <div className="flex gap-3">
        <Input
          type="text"
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow border-none shadow-none text-base placeholder:text-gray-400 focus-visible:ring-0"
        />
        <Button
          type="submit"
          disabled={!text.trim()}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6"
        >
          <Plus size={16} className="mr-1" />
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddTodo;
