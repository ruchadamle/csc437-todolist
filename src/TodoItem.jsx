import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TodoItem({
  id,
  name,
  isComplete,
  onToggleComplete,
  onDelete,
}) {
  return (
    <li className="flex items-center">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isComplete}
          onChange={() => onToggleComplete(id)}
          className="h-4 w-4 accent-sky-600"
        />
        <span className="text-lg">{name}</span>
      </label>

      <button
        type="button"
        onClick={() => onDelete(id)}
        className="ml-2 rounded p-2 text-slate-500 hover:text-slate-700 active:text-slate-900"
        aria-label={`Delete ${name}`}
      >
        <FontAwesomeIcon
          icon={faTrash}
          className="h-5 w-5"
        />
      </button>
    </li>
  );
}
