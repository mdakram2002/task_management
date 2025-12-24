import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState({
    text: '',
    description: '',
    priority: 'medium',
    category: 'general'
  });

  const categories = ['general', 'work', 'personal', 'shopping', 'health', 'education'];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.text.trim() === '') {
      alert('Task title is required!');
      return;
    }

    onAddTask(formData);

    setFormData({
      text: '',
      description: '',
      priority: 'medium',
      category: 'general'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">
        Add New Task
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Task Title *
          </label>
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            className="input-field"
            placeholder="Enter task title..."
            maxLength="100"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea-field"
            placeholder="Enter task description (optional)..."
            rows="3"
            maxLength="500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority
            </label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="select-field"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="select-field"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <span>Add New Task</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default TaskForm;