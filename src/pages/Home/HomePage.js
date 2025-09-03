// src/pages/HomePage.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Ambil data pengguna dari penyimpanan browser (localStorage)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      // Jika ada, simpan ke dalam state
      setUser(JSON.parse(storedUser));
    }
  }, []); // Array kosong berarti efek ini hanya berjalan sekali

  // Fungsi untuk menangani proses logout
  const handleLogout = () => {
    // Hapus token dan data pengguna dari penyimpanan
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Arahkan pengguna kembali ke halaman login
    navigate("/login");
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#282c34",
    color: "white",
    fontFamily: "sans-serif",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1.2em",
    marginTop: "20px",
    backgroundColor: "#61dafb",
    color: "#282c34",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <h1>Selamat Datang di Aplikasi Todo List</h1>

      {/* Tampilkan sapaan jika data pengguna sudah ada */}
      {user && <h2>Selamat Datang, {user.name || user.email}!</h2>}

      <p>Kelola semua tugas Anda dengan mudah dan efisien.</p>

      <button onClick={() => navigate('/todos')} style={buttonStyle}>
        Lihat Daftar Todo
      </button>

      <button onClick={() => navigate('/register')} style={buttonStyle}>
        Register
      </button>

      {/* Tombol Logout baru yang memanggil fungsi handleLogout */}
      <button onClick={handleLogout} style={buttonStyle}>
        Logout
      </button>
    </div>
  );
};

export default HomePage;