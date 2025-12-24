import TaskItem from './TaskItem';
import FilterControls from './FilterControls';
import EmptyState from './EmptyState';

function TaskList({ tasks, onDeleteTask, onToggleTask, onEditTask, filter, onFilterChange }) {
  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  const stats = {
    total: tasks.length,
    pending: pendingTasks.length,
    completed: completedTasks.length
  };

  // If no tasks at all
  if (tasks.length === 0) {
    return (
      <div className="space-y-6">
        <FilterControls
          filter={filter}
          onFilterChange={onFilterChange}
          stats={stats}
        />
        <EmptyState
          filter={filter}
          onFilterChange={onFilterChange}
          totalTasks={tasks.length}
        />
      </div>
    );
  }

  const filteredTasks = filter === 'completed' ? completedTasks :
                       filter === 'pending' ? pendingTasks :
                       tasks;

  if (filteredTasks.length === 0) {
    return (
      <div className="space-y-6">
        <FilterControls
          filter={filter}
          onFilterChange={onFilterChange}
          stats={stats}
        />
        <EmptyState
          filter={filter}
          onFilterChange={onFilterChange}
          totalTasks={tasks.length}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <FilterControls
        filter={filter}
        onFilterChange={onFilterChange}
        stats={stats}
      />

      {/* Task Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
          <div className="text-blue-600 font-semibold">Total</div>
          <div className="text-2xl font-bold text-blue-700">{tasks.length}</div>
        </div>
        <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
          <div className="text-yellow-600 font-semibold">Pending</div>
          <div className="text-2xl font-bold text-yellow-700">{pendingTasks.length}</div>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-lg p-4">
          <div className="text-green-600 font-semibold">Completed</div>
          <div className="text-2xl font-bold text-green-700">{completedTasks.length}</div>
        </div>
      </div>

      {/* Show tasks based on current filter */}
      {filter !== 'completed' && pendingTasks.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            Pending Tasks ({pendingTasks.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pendingTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={onDeleteTask}
                onToggle={onToggleTask}
                onEdit={onEditTask}
              />
            ))}
          </div>
        </div>
      )}

      {filter !== 'pending' && completedTasks.length > 0 && (
        <div className="space-y-4 mt-8">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            Completed Tasks ({completedTasks.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-80">
            {completedTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={onDeleteTask}
                onToggle={onToggleTask}
                onEdit={onEditTask}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskList;