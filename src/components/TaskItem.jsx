import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskComplete, deleteTask, editTask } from '../store/taskSlice';
import Modal from './Modal';
import TaskForm from './TaskForm';
import { format } from 'date-fns';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleToggleComplete = () => {
    dispatch(toggleTaskComplete(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    setShowDeleteModal(false);
  };

  const handleEdit = (data) => {
    dispatch(editTask({
      ...data,
      id: task.id,
      completed: task.completed
    }));
    setShowEditModal(false);
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        className="border rounded-lg p-4 flex items-center justify-between bg-white shadow-sm cursor-move"
      >
        <div className="flex items-center space-x-4" {...listeners}>
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleToggleComplete}
              className="h-4 w-4 text-indigo-600"
              onClick={(e) => e.stopPropagation()}
            />
            <div>
              <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.title}
              </h3>
              <p className="text-sm text-gray-500">{task.description}</p>
              <p className="text-xs text-gray-400">
                Due: {format(new Date(task.dueDate), 'MMM d, yyyy')}
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowEditModal(true)}
            className="px-3 py-1 text-sm text-indigo-600 hover:bg-indigo-50 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
          >
            Delete
          </button>
        </div>
      </div>

      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Edit Task"
      >
        <TaskForm
          initialData={task}
          onSubmit={handleEdit}
          onCancel={() => setShowEditModal(false)}
        />
      </Modal>

      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete Task"
      >
        <div className="p-6">
          <p className="mb-4">Are you sure you want to delete this task?</p>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              No
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}