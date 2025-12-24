
function EmptyState({ filter, onFilterChange, totalTasks }) {
  const getEmptyStateContent = () => {
    switch(filter) {
      case 'completed':
        return {
          icon: (
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "No Completed Tasks",
          message: "You haven't completed any tasks yet.",
          suggestion: "Mark some tasks as complete to see them here.",
          primaryAction: {
            label: `View All Tasks (${totalTasks})`,
            filter: 'all'
          },
          secondaryAction: {
            label: "View Pending Tasks",
            filter: 'pending'
          }
        };

      case 'pending':
        return {
          icon: (
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "All Tasks Completed!",
          message: "Great job! All your tasks are marked as complete.",
          suggestion: "Add new tasks or switch to view completed tasks.",
          primaryAction: {
            label: `View All Tasks (${totalTasks})`,
            filter: 'all'
          },
          secondaryAction: {
            label: "View Completed Tasks",
            filter: 'completed'
          }
        };

      default:
        return {
          icon: (
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          ),
          title: "No Tasks Yet",
          message: "You don't have any tasks in your list.",
          suggestion: "Start by adding your first task using the form above.",
          primaryAction: {
            label: "Add First Task",
            action: () => document.querySelector('input[name="text"]')?.focus()
          }
        };
    }
  };

  const content = getEmptyStateContent();

  return (
    <div className="card text-center py-12">
      <div className="text-gray-400 mb-4">
        {content.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-600 mb-2">{content.title}</h3>
      <p className="text-gray-500 mb-2">{content.message}</p>
      <p className="text-gray-400 text-sm mb-6">{content.suggestion}</p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {content.primaryAction && (
          content.primaryAction.filter ? (
            <button
              onClick={() => onFilterChange(content.primaryAction.filter)}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {content.primaryAction.label}
            </button>
          ) : (
            <button
              onClick={content.primaryAction.action}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {content.primaryAction.label}
            </button>
          )
        )}

        {content.secondaryAction && (
          <button
            onClick={() => onFilterChange(content.secondaryAction.filter)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            {content.secondaryAction.label}
          </button>
        )}
      </div>
    </div>
  );
}

export default EmptyState;