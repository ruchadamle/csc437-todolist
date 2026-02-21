import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export default function Modal(props) {
  const dialogRef = useRef(null);

  if (!props.isOpen) return null;

  function handleOverlayClick(event) {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      props.onCloseRequested();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleOverlayClick}
    >
      <div
        ref={dialogRef}
        className="inline-block rounded-lg bg-white p-3 shadow-lg"
      >
        <header className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold">{props.headerLabel}</h2>

          <button
            type="button"
            aria-label="Close"
            onClick={props.onCloseRequested}
            className="rounded p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200"
          >
            <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
          </button>
        </header>

        {props.children}
      </div>
    </div>
  );
}
