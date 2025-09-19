import React from "react";

export default function Header({ keyword, onKeywordChange }) {
  return (
    <header className="fixed top-0 left-0 w-full  z-10 ">
    <div className="w-full px-4 py-4 flex items-center gap-3 
                    bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
        <h1 className="text-2xl font-bold">Aplikasi Catatan</h1>
        <div className="ml-auto w-full max-w-xs text-white">
        <input
            type="text"
            value={keyword}
            onChange={(e) => onKeywordChange(e.target.value)}
            placeholder="Cari judul catatan..."
            className="w-full rounded-xl border px-3 py-2 outline-none focus:ring text-white"
        />
        </div>
    </div>
    </header>

  );
}
