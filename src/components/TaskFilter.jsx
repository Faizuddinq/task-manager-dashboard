import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/taskSlice';

export default function TaskFilter() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.tasks.filter);

  const filters = [
    { value: 'all', label: 'All Tasks' },
    { value: 'pending', label: 'Pending' },
    { value: 'completed', label: 'Completed' },
    { value: 'overdue', label: 'Overdue' },
  ];

  return (
    <div className="flex space-x-2 mb-4">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => dispatch(setFilter(filter.value))}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            currentFilter === filter.value
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}