import { useState } from "react";
import { nanoid } from "nanoid";
import AddTaskForm from "./AddTaskForm";
import TodoItem from "./TodoItem";
import Modal from "./Modal";

const MY_INITIAL_TASK_LIST = [
  { id: "todo-0", name: "Eat", isComplete: true },
  { id: "todo-1", name: "Sleep", isComplete: false },
  { id: "todo-2", name: "Repeat", isComplete: false },
];

function App() {
  const [taskList, setTaskList] = useState(MY_INITIAL_TASK_LIST);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addTask(taskName) {
    const trimmed = taskName.trim();
    if (trimmed === "") return;

    const newTask = { id: nanoid(), name: trimmed, isComplete: false };
    setTaskList([...taskList, newTask]);

    setIsModalOpen(false);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = taskList.map((task) => {
      if (id === task.id) return { ...task, isComplete: !task.isComplete };
      return task;
    });
    setTaskList(updatedTasks);
  }

  function deleteTask(id) {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  return (
    <main className="m-6">
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-blue-700 active:bg-blue-800"
      >
        Add Task
      </button>

      <Modal
        headerLabel="Add task"
        isOpen={isModalOpen}
        onCloseRequested={() => setIsModalOpen(false)}
      >
        <AddTaskForm onNewTask={addTask} />
      </Modal>

      <section className="mt-6">
        <h1 className="text-2xl font-bold">To do</h1>

        <ul className="mt-4 space-y-3">
          {taskList.map((task) => (
            <TodoItem
              key={task.id}
              id={task.id}
              name={task.name}
              isComplete={task.isComplete}
              onToggleComplete={toggleTaskCompleted}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
