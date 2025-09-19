import React from "react";
import { formatDate } from "../utils/index.js";

export default function NoteItem({ note, onDelete, onToggleArchive }) {
  return (
    <div className="rounded-2xl border-1 border-gray-300 p-4 grid gap-2">
      <div className="flex items-start gap-3">
        <h3 className="text-lg font-semibold leading-tight flex-1">
          {note.title}
        </h3>
        <span className="text-xs text-gray-500 whitespace-nowrap">
          {formatDate(note.createdAt)}
        </span>
      </div>
      <p className="text-sm text-gray-700 whitespace-pre-wrap">{note.body}</p>
      <div className="flex gap-2 pt-1">
        <button
          onClick={() => onToggleArchive(note.id)}
          className="rounded-xl border px-3 py-1 text-sm bg-purple-500 text-white hover:bg-purple-600"
        >
          {note.archived ? "Pindahkan" : "Arsipkan"}
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="rounded-xl border px-3 py-1 text-sm bg-red-500 text-white hover:bg-red-600"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}
