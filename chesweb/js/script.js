const $ = id => document.getElementById(id);

const defaultData = {
    profile: {
        name: "Your Name",
        nim: "",
        university: "Universitas Budi Luhur",
        major: "Teknik Informatika",
        email: "",
        bio: "",
        photo: ""
    },
    course: {
        name: "Nama Mata Kuliah",
        lecturer: "Nama Dosen"
    },
    materials: []
};

let data;

try {
    data = JSON.parse(localStorage.getItem("chesData")) || defaultData;
} catch {
    data = defaultData;
}

data.profile = { ...defaultData.profile, ...data.profile };
data.course = { ...defaultData.course, ...data.course };
data.materials = Array.isArray(data.materials) ? data.materials : [];

function saveData() {
    try {
        localStorage.setItem("chesData", JSON.stringify(data));
        updateDashboard();
        renderMaterials();
        renderProfile();
        renderCourse();
    } catch {
        alert("Penyimpanan penuh. Hapus beberapa file atau gunakan file berukuran lebih kecil.");
    }
}


// =========================
// NAVIGATION WITH TRANSITION
// =========================

let currentPage = "dashboard";
let isNavigating = false;

function showPage(page) {

    // Mencegah perpindahan ketika halaman belum selesai
    if (isNavigating || page === currentPage) return;

    // Cari halaman berdasarkan ID
    const targetPage =
        document.getElementById(page) ||
        document.getElementById("page-" + page) ||
        document.getElementById(page + "Page");

    if (!targetPage) {
        console.error("Halaman tidak ditemukan:", page);
        return;
    }

    const currentActive = document.querySelector(".page.active");

    isNavigating = true;

    // Hapus status navigasi aktif
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
    });

    // Aktifkan menu yang dipilih
    const activeLink = document.querySelector(
        `.nav-link[data-page="${page}"]`
    );

    if (activeLink) {
        activeLink.classList.add("active");
    }

    // Update breadcrumb
    const breadcrumb = document.getElementById("breadcrumb");

    if (breadcrumb) {
        breadcrumb.textContent =
            page === "dashboard" ? "Dashboard" :
            page === "profile" ? "Profile" :
            "Mata Kuliah";
    }

    // Tutup sidebar mobile
    const sidebar = document.getElementById("sidebar");

    if (sidebar) {
        sidebar.classList.remove("open");
    }

    // Animasi keluar halaman sebelumnya
    if (currentActive) {

        currentActive.classList.remove("active");
        currentActive.classList.add("page-exit");

        setTimeout(() => {

            currentActive.classList.remove("page-exit");

            // Tampilkan halaman baru
            targetPage.classList.add("active");

            // Restart animasi masuk
            targetPage.classList.remove("page-enter");
            void targetPage.offsetWidth;
            targetPage.classList.add("page-enter");

            currentPage = page;
            isNavigating = false;

        }, 180);

    } else {

        targetPage.classList.add("active");
        targetPage.classList.remove("page-enter");

        void targetPage.offsetWidth;

        targetPage.classList.add("page-enter");

        currentPage = page;
        isNavigating = false;
    }
}

document.addEventListener("click", function(e) {

    const link = e.target.closest(".nav-link");

    if (!link) return;

    const page = link.dataset.page;

    if (!page) return;

    e.preventDefault();
    showPage(page);

});

// MODAL

function openModal(id) {
    $(id).classList.add("show");
}

function closeModal(id) {
    $(id).classList.remove("show");
}

document.querySelectorAll(".modal-overlay").forEach(modal => {
    modal.addEventListener("click", e => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });
});

// PROFILE

function openProfileModal() {
    const p = data.profile;

    $("inputName").value = p.name;
    $("inputNim").value = p.nim;
    $("inputUniversity").value = p.university;
    $("inputMajor").value = p.major;
    $("inputEmail").value = p.email;
    $("inputBio").value = p.bio;
    $("inputPhoto").value = "";

    openModal("profileModal");
}

$("profileForm").addEventListener("submit", async e => {
    e.preventDefault();

    const file = $("inputPhoto").files[0];

    if (file && !file.type.startsWith("image/")) {
        alert("Silakan pilih file gambar.");
        return;
    }

    if (file && file.size > 1024 * 1024) {
        alert("Ukuran foto maksimal 1 MB.");
        return;
    }

    let photo = data.profile.photo;

    if (file) {
        photo = await readFile(file);
    }

    data.profile = {
        name: $("inputName").value,
        nim: $("inputNim").value,
        university: $("inputUniversity").value,
        major: $("inputMajor").value,
        email: $("inputEmail").value,
        bio: $("inputBio").value,
        photo
    };

    saveData();
    closeModal("profileModal");
});

// COURSE

function openCourseModal() {
    $("inputCourse").value = data.course.name;
    $("inputLecturer").value = data.course.lecturer;
    openModal("courseModal");
}

$("courseForm").addEventListener("submit", e => {
    e.preventDefault();

    data.course.name = $("inputCourse").value;
    data.course.lecturer = $("inputLecturer").value;

    saveData();
    closeModal("courseModal");
});

// MATERIAL

function openMaterialModal(id = null) {
    $("materialForm").reset();
    $("editMaterialId").value = id || "";
    $("existingFile").innerHTML = "";

    if (id) {
        const material = data.materials.find(m => m.id === id);

        if (!material) return;

        $("materialModalTitle").textContent = "Edit Materi";
        $("inputMaterialTitle").value = material.title;
        $("inputMaterialDescription").value = material.description;
        $("inputMaterialContent").value = material.content;

        if (material.file) {
            $("existingFile").textContent =
                "File saat ini: " + material.file.name;
        }
    } else {
        $("materialModalTitle").textContent = "Tambah Materi";
    }

    openModal("materialModal");
}

function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

$("materialForm").addEventListener("submit", async e => {
    e.preventDefault();

    const id = $("editMaterialId").value;
    const existing = data.materials.find(m => m.id === id);
    const file = $("inputMaterialFile").files[0];

    if (file && file.size > 2 * 1024 * 1024) {
        alert("Ukuran dokumen maksimal 2 MB.");
        return;
    }

    let attachment = existing?.file || null;

    if (file) {
        attachment = {
            name: file.name,
            type: file.type || "application/octet-stream",
            data: await readFile(file)
        };
    }

    const material = {
        id: existing?.id || String(Date.now()),
        title: $("inputMaterialTitle").value.trim(),
        description: $("inputMaterialDescription").value.trim(),
        content: $("inputMaterialContent").value,
        file: attachment,
        date: existing?.date || new Date().toLocaleDateString("id-ID"),
        updated: new Date().toLocaleString("id-ID")
    };

    if (!material.title) return;

    if (existing) {
        data.materials = data.materials.map(m =>
            m.id === id ? material : m
        );
    } else {
        data.materials.unshift(material);
    }

    saveData();
    closeModal("materialModal");
});

// DELETE MATERIAL

function deleteMaterial(id) {
    const material = data.materials.find(m => m.id === id);

    if (!material) return;

    if (confirm(`Yakin ingin menghapus "${material.title}"?`)) {
        data.materials = data.materials.filter(m => m.id !== id);
        saveData();
    }
}

// VIEW MATERIAL

function viewMaterial(id) {
    const material = data.materials.find(m => m.id === id);

    if (!material) return;

    $("detailTitle").textContent = material.title;

    const content = $("detailContent");
    content.replaceChildren();

    const meta = document.createElement("div");
    meta.className = "detail-meta";
    meta.textContent = "Ditambahkan: " + material.date;

    const description = document.createElement("p");
    description.textContent = material.description || "Tidak ada deskripsi.";

    const heading = document.createElement("h4");
    heading.textContent = "Rangkuman Materi";

    const summary = document.createElement("div");
    summary.className = "summary";
    summary.textContent = material.content || "Belum ada rangkuman.";

    content.append(meta, description, heading, summary);

    if (material.file) {
        const fileHeading = document.createElement("h4");
        fileHeading.textContent = "Dokumen Lampiran";

        const fileLink = document.createElement("a");
        fileLink.className = "detail-file";
        fileLink.href = material.file.data;
        fileLink.download = material.file.name;
        fileLink.textContent = "📎 " + material.file.name;

        content.append(fileHeading, fileLink);
    }

    openModal("detailModal");
}

// RENDER MATERIALS

function renderMaterials() {
    const container = $("materialsList");

    container.replaceChildren();

    if (!data.materials.length) {
        const empty = document.createElement("div");
        empty.className = "empty-card";

        const icon = document.createElement("div");
        icon.textContent = "📂";

        const heading = document.createElement("h3");
        heading.textContent = "Belum ada materi";

        const paragraph = document.createElement("p");
        paragraph.textContent = "Mulai tambahkan rangkuman materi perkuliahanmu.";

        const button = document.createElement("button");
        button.className = "primary-button";
        button.textContent = "+ Tambah Materi Pertama";
        button.onclick = () => openMaterialModal();

        empty.append(icon, heading, paragraph, button);
        container.append(empty);
        return;
    }

    data.materials.forEach(material => {
        const card = document.createElement("div");
        card.className = "material-card";

        const top = document.createElement("div");
        top.className = "material-top";

        const icon = document.createElement("div");
        icon.className = "material-icon";
        icon.textContent = "▤";

        const info = document.createElement("div");
        info.className = "material-info";

        const title = document.createElement("h3");
        title.textContent = material.title;

        const description = document.createElement("p");
        description.textContent =
            material.description || "Tidak ada deskripsi.";

        info.append(title, description);
        top.append(icon, info);

        const date = document.createElement("div");
        date.className = "material-date";
        date.textContent = "Ditambahkan: " + material.date +
            (material.file ? " • 📎 " + material.file.name : "");

        const actions = document.createElement("div");
        actions.className = "material-actions";

        [
            ["Lihat", () => viewMaterial(material.id), ""],
            ["Edit", () => openMaterialModal(material.id), ""],
            ["Hapus", () => deleteMaterial(material.id), "delete"]
        ].forEach(([label, callback, extraClass]) => {
            const button = document.createElement("button");
            button.className = "action-button " + extraClass;
            button.textContent = label;
            button.onclick = callback;
            actions.append(button);
        });

        card.append(top, date, actions);
        container.append(card);
    });
}

// PROFILE RENDER

function renderProfile() {
    const p = data.profile;

    // Update nama pengguna
    $("welcomeName").textContent = p.name || "Student";
    $("topName").textContent = p.name || "User";

    // Update informasi profil
    $("profileDisplayName").textContent = p.name || "-";
    $("profileName").textContent = p.name || "-";
    $("profileNim").textContent = p.nim || "-";
    $("profileUniversity").textContent = p.university || "-";
    $("profileMajor").textContent = p.major || "-";
    $("profileEmail").textContent = p.email || "-";
    $("profileBio").textContent = p.bio || "Belum ada deskripsi.";

    // Inisial nama pengguna
    const initial = (p.name || "U").charAt(0).toUpperCase();

    // Update avatar navbar dan halaman profile
    ["topAvatar", "profileAvatar"].forEach(id => {

        const avatar = $(id);

        if (p.photo && p.photo.trim() !== "") {

            // Jika foto tersedia, tampilkan foto
            avatar.style.backgroundImage = `url("${p.photo}")`;

            // Hilangkan inisial agar tidak menimpa foto
            avatar.textContent = "";

        } else {

            // Jika belum ada foto, tampilkan inisial
            avatar.style.backgroundImage = "none";
            avatar.textContent = initial;

        }

    });
}

// COURSE RENDER

function renderCourse() {
    $("courseTitle").textContent = data.course.name;
    $("dashboardCourse").textContent = data.course.name;

    $("courseLecturer").textContent = data.course.lecturer || "Belum diisi";
    $("dashboardLecturer").textContent = data.course.lecturer || "Belum diisi";
}

// DASHBOARD

function updateDashboard() {
    $("totalMaterials").textContent = data.materials.length;

    $("totalFiles").textContent = data.materials.filter(m => m.file).length;

    $("dashboardCount").textContent =
        data.materials.length + " materi tersedia";

    const activities = $("recentActivities");
    activities.replaceChildren();

    if (!data.materials.length) {
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.textContent = "Belum ada aktivitas.";
        activities.append(empty);
        return;
    }

    data.materials.slice(0, 4).forEach(material => {
        const item = document.createElement("div");
        item.className = "activity-item";

        const icon = document.createElement("div");
        icon.className = "activity-icon";
        icon.textContent = "▤";

        const info = document.createElement("div");

        const title = document.createElement("strong");
        title.textContent = material.title;

        const date = document.createElement("small");
        date.textContent = "Materi ditambahkan • " + material.date;

        info.append(title, date);
        item.append(icon, info);
        activities.append(item);
    });
}

// INITIALIZATION

function init() {
    renderProfile();
    renderCourse();
    renderMaterials();
    updateDashboard();
}

init();
