import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../store/taskSlice';

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
  );
}