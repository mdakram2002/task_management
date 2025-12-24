/** @format */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      text: task.text,
      description: task.description,
      completed: false,
      priority: task.priority || "medium",
      createdAt: new Date().toISOString(),
      category: task.category || "general",
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case "pending":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.filter((task) => !task.completed).length;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <TaskForm onAddTask={addTask} />

              {/* Stats Card */}
              <div className="card mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Task Statistics
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Tasks</span>
                    <span className="font-semibold text-gray-800">
                      {tasks.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Pending</span>
                    <span className="font-semibold text-yellow-600">
                      {pendingCount}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Completed</span>
                    <span className="font-semibold text-green-600">
                      {completedCount}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Completion Rate</span>
                      <span className="font-semibold text-primary-600">
                        {tasks.length > 0
                          ? Math.round((completedCount / tasks.length) * 100)
                          : 0}
                        %
                      </span>
                    </div>
                  </div>
                </div>

                {completedCount > 0 && (
                  <button
                    onClick={clearCompleted}
                    className="btn-danger w-full mt-6 py-2"
                  >
                    Clear Completed Tasks
                  </button>
                )}
              </div>
            </div>

            <div className="lg:col-span-2">
              <TaskList
                tasks={getFilteredTasks()}
                onDeleteTask={deleteTask}
                onToggleTask={toggleTask}
                onEditTask={editTask}
                filter={filter}
                onFilterChange={setFilter}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer totalTasks={tasks.length} />
    </div>
  );
}

export default App;
