import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';
import { useDispatch } from 'react-redux';
import { addTask } from './store/taskSlice';

function TaskDashboard() {
  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Task Management</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Add Task
          </button>
        </div>

        <SearchBar />
        <TaskFilter />
        <TaskList />

        <Modal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          title="Add New Task"
        >
          <TaskForm
            onSubmit={(data) => {
              dispatch(addTask(data));
              setShowAddModal(false);
            }}
            onCancel={() => setShowAddModal(false)}
          />
        </Modal>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <TaskDashboard />
    </Provider>
  );
}

export default App;