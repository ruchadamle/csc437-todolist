import { useState } from "react";

export default function AddTaskForm({ onNewTask }) {
  const [taskName, setTaskName] = useState("");

  function handleButtonClicked() {
    onNewTask(taskName);
    setTaskName("");
  }

  return (
    <div className="flex items-center gap-3">
      <input
        placeholder="New task name"
        aria-label="New task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="w-80 rounded-md border border-black px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm outline-none focus:border-black focus:ring-2 focus:ring-black"
      />
      <button
        type="button"
        onClick={handleButtonClicked}
        className="whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-blue-700 active:bg-blue-800"
      >
        Add task
      </button>
    </div>
  );
}
