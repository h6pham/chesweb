const profile = {
    name: "Bintang Naufal Syarief",
    nim: "2311501361",
    university: "Universitas Budi Luhur",
    major: "Teknik Informatika",
    email: "binaufals09@gmail.com",

    bio: "bikin web untuk matakuliah Cyberpreneurship.",

    photo: "assets/pasfoto.jpg"
};

const course = {
    name: "Cyberpreneurship",
    lecturer: "Materi Perkuliahan"
};


// =====================================
// 3. DATA ARSIP RANGKUMAN
// =====================================

// TAMBAHKAN RANGKUMAN BARU DI BAGIAN INI.
//
// Contoh:
// {
//     id: 3,
//     title: "Pertemuan 3 - Judul Materi",
//     description: "Deskripsi singkat materi",
//     date: "11 November 2026",
//     content: `
//     Isi rangkuman materi di sini.
//
//     Bisa membuat paragraf baru dengan Enter.
//
//     Bisa menambahkan poin-poin:
//     - Poin pertama
//     - Poin kedua
//     `,
//     file: "assets/dokumen/materi-3.pdf"
// }
//
// Jika tidak ada dokumen, gunakan:
// file: ""
//
// =====================================

const materials = [

    {
        id: 1,
        title: "Pertemuan 1 - Pengenalan Cyberpreneurship",

        description: "Pengenalan konsep dasar Cyberpreneurship.",

        date: "Pertemuan 1",

        content: `
Tuliskan rangkuman materi pertemuan pertama di sini.

Ganti teks ini dengan rangkuman asli dari materi perkuliahan Cyberpreneurship.

Kamu bisa membuat beberapa paragraf untuk menjelaskan materi.

Poin-poin penting:
- Poin pertama
- Poin kedua
- Poin ketiga
        `,

        file: ""
    },

    {
        id: 2,
        title: "Pertemuan 2 - Materi Cyberpreneurship",

        description: "Rangkuman materi perkuliahan pertemuan kedua.",

        date: "Pertemuan 2",

        content: `
Tuliskan rangkuman materi pertemuan kedua di sini.

Ganti teks ini dengan rangkuman asli dari materi perkuliahan Cyberpreneurship.

Poin-poin penting:
- Poin pertama
- Poin kedua
- Poin ketiga
        `,

        file: ""
    }

];

const $ = id => document.getElementById(id);

function renderProfile() {

    $("profileDisplayName").textContent = profile.name;
    $("profileName").textContent = profile.name;
    $("profileNim").textContent = profile.nim;
    $("profileUniversity").textContent = profile.university;
    $("profileMajor").textContent = profile.major;
    $("profileEmail").textContent = profile.email;
    $("profileBio").textContent = profile.bio;

    $("profilePhoto").src = profile.photo;

    $("profilePhoto").alt = "Foto " + profile.name;

}

function renderCourse() {

    $("courseTitle").textContent = course.name;

    $("courseLecturer").textContent = course.lecturer;

}

function renderMaterials() {

    const container = $("materialsList");

    container.replaceChildren();

    $("totalMaterials").textContent = materials.length;

    // Jika belum ada rangkuman

    if (materials.length === 0) {

        const empty = document.createElement("div");

        empty.className = "empty-card";

        const icon = document.createElement("div");
        icon.textContent = "📂";

        const title = document.createElement("h3");
        title.textContent = "Belum Ada Rangkuman";

        const description = document.createElement("p");
        description.textContent =
            "Rangkuman materi belum tersedia.";

        empty.append(icon, title, description);

        container.append(empty);

        return;
    }


    // Tampilkan seluruh rangkuman

    materials.forEach(material => {

        const card = document.createElement("article");

        card.className = "material-card";


        // Icon

        const icon = document.createElement("div");

        icon.className = "material-icon";

        icon.textContent = "▤";


        // Informasi materi

        const info = document.createElement("div");

        info.className = "material-info";


        const title = document.createElement("h3");

        title.textContent = material.title;


        const description = document.createElement("p");

        description.textContent = material.description;


        info.append(title, description);


        // Tanggal

        const date = document.createElement("div");

        date.className = "material-date";

        date.textContent = material.date;


        // Tombol baca

        const button = document.createElement("button");

        button.className = "read-button";

        button.textContent = "Baca Rangkuman →";

        button.type = "button";

        button.addEventListener("click", () => {

            viewMaterial(material.id);

        });


        card.append(icon, info, date, button);

        container.append(card);

    });

}

function viewMaterial(id) {

    const material = materials.find(item => item.id === id);

    if (!material) return;


    $("detailTitle").textContent = material.title;


    const container = $("detailContent");

    container.replaceChildren();


    // Informasi tanggal

    const meta = document.createElement("div");

    meta.className = "detail-meta";

    meta.textContent = material.date;


    // Deskripsi

    const description = document.createElement("div");

    description.className = "detail-description";

    description.textContent = material.description;


    // Heading rangkuman

    const heading = document.createElement("h3");

    heading.textContent = "Rangkuman Materi";


    // Isi rangkuman

    const summary = document.createElement("div");

    summary.className = "summary-content";


    // Pisahkan teks berdasarkan baris kosong

    const paragraphs = material.content
        .trim()
        .split(/\n\s*\n/);


    paragraphs.forEach(text => {

        const paragraph = document.createElement("p");

        paragraph.textContent = text.trim();

        if (paragraph.textContent) {

            summary.append(paragraph);

        }

    });


    container.append(
        meta,
        description,
        heading,
        summary
    );


    // Dokumen lampiran (opsional)

    if (material.file) {

        const fileHeading = document.createElement("h3");

        fileHeading.textContent = "Dokumen Lampiran";


        const fileLink = document.createElement("a");

        fileLink.className = "detail-file";

        fileLink.href = material.file;

        fileLink.target = "_blank";

        fileLink.rel = "noopener noreferrer";

        fileLink.textContent = "📎 Buka Dokumen";


        container.append(fileHeading, fileLink);

    }


    openModal("detailModal");

}

function openModal(id) {

    const modal = $(id);

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeModal(id) {

    const modal = $(id);

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


// Tombol tutup modal

$("closeDetail").addEventListener("click", () => {

    closeModal("detailModal");

});


// Tutup modal ketika klik di luar konten

$("detailModal").addEventListener("click", event => {

    if (event.target === $("detailModal")) {

        closeModal("detailModal");

    }

});


// Tutup modal menggunakan tombol ESC

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal("detailModal");

        closeSidebar();

    }

});

function showPage(page) {

    const target = $(page);

    if (!target) return;


    // Nonaktifkan seluruh halaman

    document.querySelectorAll(".page").forEach(item => {

        item.classList.remove("active");

    });


    // Aktifkan halaman tujuan

    target.classList.add("active");


    // Update menu aktif

    document.querySelectorAll(".nav-link").forEach(link => {

        link.classList.toggle(
            "active",
            link.dataset.page === page
        );

    });


    // Update breadcrumb

    $("breadcrumb").textContent =
        page === "profile" ? "Profil" : "Arsip Rangkuman";


    // Tutup sidebar mobile

    closeSidebar();


    // Kembali ke bagian atas

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// Event navigasi

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        showPage(link.dataset.page);

    });

});

const sidebar = $("sidebar");

const menuToggle = $("menuToggle");

const sidebarOverlay = $("sidebarOverlay");


function toggleSidebar() {

    const isOpen = sidebar.classList.toggle("open");

    sidebarOverlay.classList.toggle("show", isOpen);

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

    document.body.style.overflow =
        isOpen ? "hidden" : "";

}


function closeSidebar() {

    sidebar.classList.remove("open");

    sidebarOverlay.classList.remove("show");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.textContent = "☰";

    document.body.style.overflow = "";

}


menuToggle.addEventListener("click", toggleSidebar);


sidebarOverlay.addEventListener("click", closeSidebar);

function init() {

    renderProfile();

    renderCourse();

    renderMaterials();

    showPage("profile");

}


init();
