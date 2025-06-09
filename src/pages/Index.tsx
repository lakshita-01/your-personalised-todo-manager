
import TodoList from "@/components/TodoList";

const Index = () => {
  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: '#131a22' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Tasks</h1>
          <p className="text-gray-300">Stay organized and get things done</p>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default Index;
