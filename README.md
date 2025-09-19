# 📒 Aplikasi Catatan - React

Proyek ini merupakan **Proyek Akhir: Membangun Aplikasi Catatan Menggunakan React**.  
Aplikasi ini memungkinkan pengguna untuk **menambahkan, mencari, mengarsipkan, dan menghapus catatan** secara mudah.  

---

## 🚀 Fitur Utama
1. **Menampilkan Daftar Catatan**
   - Daftar catatan dengan data awal (initial data).
   - Memanfaatkan state component dan `array.map()`.

2. **Menambahkan Catatan**
   - Tambah catatan baru melalui form input (controlled component).
   - Struktur data catatan:
     ```js
     {
       id: number | string,
       title: string,
       body: string,
       archived: boolean,
       createdAt: string,
     }
     ```

3. **Menghapus Catatan**
   - Terdapat tombol hapus.
   - Jika tidak ada data, muncul pesan *"Tidak ada catatan"*.

---

## ✨ Fitur Lain
- 🔍 **Pencarian Catatan**  
  Pencarian catatan berdasarkan judul.
- 📝 **Limit Karakter Judul (50 Karakter)**  
  Tampil jumlah karakter tersisa secara dinamis.
- 📂 **Fitur Arsip Catatan**  
  Arsipkan catatan dan tampilkan pada bagian terpisah.

---

## 📂Cara Menjalankan Proyek
1. Clone repository ini
2. Masuk ke folder proyek
3. Install dependencies dengan cara ketik "npm install"
4. Jalankan aplikasi "npm run dev"
5. Buka di browser
