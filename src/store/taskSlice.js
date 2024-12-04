import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'all', // all, completed, pending, overdue
  searchQuery: '',
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ ...action.payload, id: Date.now(), completed: false });
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTaskComplete: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    reorderTasks: (state, action) => {
      const { oldIndex, newIndex } = action.payload;
      const task = state.tasks[oldIndex];
      state.tasks.splice(oldIndex, 1);
      state.tasks.splice(newIndex, 0, task);
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  toggleTaskComplete,
  setFilter,
  setSearchQuery,
  reorderTasks,
} = taskSlice.actions;
export default taskSlice.reducer;