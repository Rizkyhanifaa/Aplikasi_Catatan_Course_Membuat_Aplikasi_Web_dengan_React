import React, { useMemo, useState } from "react";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NotesSection from "./components/NotesSection";
import { initialNotes } from "./utils/index.js";

export default function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [keyword, setKeyword] = useState("");

  function addNote(newNote) {
    setNotes((prev) => [newNote, ...prev]);
  }

  function deleteNote(id) {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }

  function toggleArchive(id) {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, archived: !n.archived } : n))
    );
  }

  const filtered = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    if (!q) return notes;
    return notes.filter((n) => n.title.toLowerCase().includes(q));
  }, [notes, keyword]);

  const activeNotes = filtered.filter((n) => !n.archived);
  const archivedNotes = filtered.filter((n) => n.archived);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header keyword={keyword} onKeywordChange={setKeyword} />

      <main className="max-w-4xl mx-auto pt-20 px-4 py-6 grid gap-6">
        <NoteForm onAdd={addNote} />

        <NotesSection
          title="Catatan Aktif"
          notes={activeNotes}
          emptyText="Tidak ada catatan."
          onDelete={deleteNote}
          onToggleArchive={toggleArchive}
        />

        <NotesSection
          title="Arsip"
          notes={archivedNotes}
          emptyText="Tidak ada catatan arsip."
          onDelete={deleteNote}
          onToggleArchive={toggleArchive}
        />
      </main>

      <footer className="py-6 text-center text-xs text-gray-500">
        Dibuat oleh Rizky Hanifa Afania
      </footer>
    </div>
  );
}
