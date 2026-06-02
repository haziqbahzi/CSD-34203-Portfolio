// ==========================================
// JAVASCRIPT: LOGIK INTERAKTIF DARK MODE (INLINE MENU)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Cari kontena senarai menu (ul) dan bukannya navbar luaran
    const navLinks = document.querySelector(".nav-links");
    
    if (navLinks) {
        // 2. Cipta elemen 'li' (list item) supaya dia mengikut susunan menu sedia ada
        const toggleLi = document.createElement("li");
        
        // 3. Cipta butang Dark Mode
        const toggleBtn = document.createElement("button");
        toggleBtn.id = "dark-mode-toggle";
        toggleBtn.innerHTML = "🌙"; // Simbol bulan asal
        toggleBtn.setAttribute("aria-label", "Toggle Dark Mode");
        
        // 4. Masukkan butang ke dalam 'li', kemudian masukkan 'li' ke dalam 'ul' (.nav-links)
        toggleLi.appendChild(toggleBtn);
        navLinks.appendChild(toggleLi);

        // 5. Semak jika pengguna pernah aktifkan dark mode sebelum ini
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-theme");
            toggleBtn.innerHTML = "☀️"; // Tukar kepada matahari
        }

        // 6. Fungsi apabila butang diklik
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            
            if (document.body.classList.contains("dark-theme")) {
                localStorage.setItem("theme", "dark");
                toggleBtn.innerHTML = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                toggleBtn.innerHTML = "🌙";
            }
        });
    }
});