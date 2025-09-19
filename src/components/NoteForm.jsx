import React, { useState } from "react";

export default function NoteForm({ onAdd }) {
  const TITLE_LIMIT = 50;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const remaining = TITLE_LIMIT - title.length;

  function handleTitleChange(e) {
    const value = e.target.value.slice(0, TITLE_LIMIT);
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    onAdd({
      id: +new Date(),
      title: title.trim(),
      body: body.trim(),
      archived: false,
      createdAt: new Date().toISOString(),
    });

    setTitle("");
    setBody("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border-1 border-gray-300 p-4 grid gap-3 shadow-sm"
    >
      <div className="flex items-center justify-between text-sm text-gray-500">
        <label className="font-medium text-gray-700">Judul</label>
        <span>
          Sisa karakter:{" "}
          <span className={remaining === 0 ? "font-semibold" : ""}>
            {remaining}
          </span>
        </span>
      </div>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Tulis judul (maks 50 karakter)"
        className="rounded-xl border-1 border-gray-300  px-3 py-2 outline-none focus:ring"
      />

      <label className="font-medium text-gray-700 text-sm">Isi Catatan</label>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Tulis isi catatan di sini..."
        rows={4}
        className="rounded-xl border-1 border-gray-300  px-3 py-2 outline-none focus:ring"
      />

      <button
        type="submit"
        className="justify-self-start rounded-2xl px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
      >
        Tambahkan Catatan
      </button>
    </form>
  );
}
