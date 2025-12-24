
function FilterControls({ filter, onFilterChange, stats }) {
  const filterButtons = [
    { id: 'all', label: 'All', count: stats.total },
    { id: 'pending', label: 'Pending', count: stats.pending },
    { id: 'completed', label: 'Completed', count: stats.completed }
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Task List</h2>
        <div className="flex items-center space-x-4 mt-1">
          <span className="text-gray-600">
            {filter === 'all' && `${stats.total} task${stats.total !== 1 ? 's' : ''}`}
            {filter === 'pending' && `${stats.pending} pending`}
            {filter === 'completed' && `${stats.completed} completed`}
          </span>
          {filter !== 'all' && (
            <button
              onClick={() => onFilterChange('all')}
              className="text-primary-600 hover:text-primary-800 text-sm font-medium flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All
            </button>
          )}
        </div>
      </div>

      <div className="flex space-x-2 bg-white p-1 rounded-lg shadow-inner">
        {filterButtons.map(({ id, label, count }) => (
          <button
            key={id}
            onClick={() => onFilterChange(id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center ${
              filter === id
                ? 'bg-primary-600 text-white shadow'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {label}
            <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
              filter === id
                ? 'bg-white text-primary-600'
                : 'bg-gray-200 text-gray-700'
            }`}>
              {count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterControls;