import React from "react";
import NoteItem from "./NoteItem";

export default function NotesSection({
  title,
  notes,
  emptyText,
  onDelete,
  onToggleArchive,
}) {
  return (
    <section className="grid gap-3">
      <h2 className="text-xl font-bold">{title}</h2>
      {notes.length === 0 ? (
        <div className="text-gray-500 text-sm italic">{emptyText}</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-3">
          {notes.map((n) => (
            <NoteItem
              key={n.id}
              note={n}
              onDelete={onDelete}
              onToggleArchive={onToggleArchive}
            />
          ))}
        </div>
      )}
    </section>
  );
}
