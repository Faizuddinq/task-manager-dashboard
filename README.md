# Task Management App

A modern and responsive task management application built with **React** and **Redux**. This app allows users to manage tasks effectively by adding, editing, deleting, marking them as completed, and filtering tasks based on their status.

---

## Features

### Core Functionality:
- **Add Task**: Create tasks with a title, description, and due date.
- **Edit Task**: Modify existing task details.
- **Delete Task**: Remove tasks with ease.
- **Mark as Completed**: Toggle task completion status.

### Task Filters:
- View tasks by:
  - **All Tasks**
  - **Completed Tasks**
  - **Pending Tasks**
  - **Overdue Tasks** (tasks with a due date before the current date).

###  Enhanced Features:
- **Search Tasks**: Quickly find tasks by their title.
- **Drag-and-Drop**: Reorder tasks by dragging the title or description.
- **Confirmation Modal**: Prompt users for confirmation before deleting a task.

---

## Drag-and-Drop for Task Reordering

### Usage for Drag-and-Drop:
- Hover on the **title** and **description** of tasks and then grab it and rearrange their order.

---


## Technology Stack
- **React** for the front-end.
- **Redux** (using `@reduxjs/toolkit`) for state management.
- **JavaScript** with modern ES6+ features.
- **CSS/SCSS** or **CSS-in-JS** (e.g., styled-components).
- **React Router** for navigation.

---

## Installation

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your system. If not, download and install them from [Node.js official website](https://nodejs.org/).

### Step-by-Step Guide

1. **Set up a new project using Vite:**
    ```bash
    npm create vite@latest task-manager-app
    cd task-manager-app
    ```
    Follow the prompts to choose React as the framework.

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the development server:**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to the provided `localhost` URL to view the app.

4. **Install additional libraries:**
    ```bash
    npm install @reduxjs/toolkit react-redux react-router-dom
    ```

---


