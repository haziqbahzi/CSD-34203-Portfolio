// ==========================================
// JAVASCRIPT: LOGIK INTERAKTIF DARK MODE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Cari navbar di dalam halaman
    const navbar = document.querySelector(".top-navbar");
    
    if (navbar) {
        // 2. Cipta butang Dark Mode secara dinamik
        const toggleBtn = document.createElement("button");
        toggleBtn.id = "dark-mode-toggle";
        toggleBtn.innerHTML = "🌙"; // Simbol bulan untuk mod gelap
        toggleBtn.setAttribute("aria-label", "Toggle Dark Mode");
        
        // 3. Masukkan butang ke dalam navbar
        navbar.appendChild(toggleBtn);

        // 4. Semak jika pengguna pernah aktifkan dark mode sebelum ini (Local Storage)
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-theme");
            toggleBtn.innerHTML = "☀️"; // Tukar kepada simbol matahari
        }

        // 5. Fungsi apabila butang diklik
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            
            // Semak jika kelas dark-theme wujud pada body
            if (document.body.classList.contains("dark-theme")) {
                localStorage.setItem("theme", "dark"); // Simpan pilihan dalam browser
                toggleBtn.innerHTML = "☀️"; // Mod gelap aktif, tunjuk matahari
            } else {
                localStorage.setItem("theme", "light"); // Simpan pilihan dalam browser
                toggleBtn.innerHTML = "🌙"; // Mod cerah aktif, tunjuk bulan
            }
        });
    }
});