
// =====================================
// CHES - READ ONLY WEBSITE
// =====================================


// =====================================
// 1. DATA PROFIL
// =====================================

const profile = {
    name: "Bintang Naufal Syarief",
    nim: "2311501361",
    university: "Universitas Budi Luhur",
    major: "Teknik Informatika",
    email: "binaufals09@gmail.com",

    bio: "bikin web untuk matakuliah Cyberpreneurship.",

    photo: "assets/pasfoto.jpg"
};


// =====================================
// 2. DATA MATA KULIAH
// =====================================

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
Belum ada rangkuman untuk pertemuan ini.
        `,
        file: ""
    },

    {
        id: 2,
        title: "Pertemuan 2 - Memulai Cyberpreneurship",
        description: "Rangkuman materi tentang konsep dan model bisnis Cyberpreneurship.",
        date: "Pertemuan 2",
        content: `
1. Pengertian Cyberpreneurship
Cyberpreneurship adalah kegiatan menjalankan bisnis secara online dengan memanfaatkan internet untuk memperoleh penghasilan. Seorang cyberpreneur biasanya menggunakan website, media sosial, dan berbagai tools digital untuk memasarkan produk atau jasa.

Googlepreneur adalah orang yang memanfaatkan layanan Google untuk menghasilkan uang, seperti Google AdSense, YouTube, Blogger, Google Ads, dan Google Analytics.

2. Rumus Sukses CTPM
CTPM merupakan empat tahapan penting dalam membangun bisnis online:
1. Content: Membuat konten yang menarik dan bermanfaat.
2. Traffic: Mendatangkan pengunjung ke website atau media sosial.
3. Presell: Memberikan ulasan atau rekomendasi produk agar calon pembeli tertarik.
4. Monetize: Menghasilkan uang melalui penjualan, iklan, atau afiliasi.

3. Langkah Menjadi Cyberpreneur
- Memiliki pola pikir bisnis dan motivasi yang kuat.
- Fokus pada satu atau dua jenis bisnis online.
- Memilih niche sesuai minat dan kebutuhan pasar.
- Menyusun rencana bisnis, mulai dari analisis pesaing hingga strategi pemasaran.
- Menerapkan tahapan CTPM secara konsisten.

4. Lima Model Bisnis Online
1. Menjual Produk Sendiri: Menjual barang, produk digital, atau layanan melalui internet.
2. Menjual Keahlian: Menawarkan jasa seperti desain grafis, penulisan, dan pembuatan website.
3. Affiliate Marketing: Mempromosikan produk orang lain dan memperoleh komisi dari hasilnya.
4. Contextual Advertising: Mendapatkan penghasilan dari iklan yang dipasang di website.
5. Site Flipping: Membeli, mengembangkan, atau menjual website dan aset digital yang memiliki nilai.

Kesimpulan
Cyberpreneurship merupakan peluang bisnis yang memanfaatkan teknologi internet untuk memperoleh penghasilan. Keberhasilannya membutuhkan strategi yang tepat, konsistensi, pemilihan model bisnis, serta penerapan rumus CTPM.
        `,
        file: ""
    },

    {
        id: 3,
        title: "Pertemuan 3 - Domain dan Hosting",
        description: "Rangkuman materi tentang domain, hosting, cPanel, dan Softaculous.",
        date: "Pertemuan 3",
        content: `
1. Domain
Domain adalah alamat website yang memudahkan pengguna mengakses situs, contohnya google.com. Domain terhubung dengan IP Address melalui DNS.

Jenis domain:
- TLD: .com, .org, .net, .edu.
- ccTLD: .id, .sg, .my, .jp.

Pemilihan domain sebaiknya singkat, mudah diingat, sesuai brand, dan tidak melanggar hak cipta.

2. Hosting
Hosting adalah tempat menyimpan file, gambar, video, dan database website agar dapat diakses melalui internet.

Jenis hosting:
- Shared Hosting: digunakan bersama banyak pengguna, cocok untuk pemula.
- VPS/Dedicated: memiliki sumber daya lebih besar untuk website dengan traffic tinggi.

3. Memilih Hosting
Hal yang perlu diperhatikan adalah kapasitas penyimpanan, bandwidth, lokasi server, fasilitas, dan aturan penggunaan hosting.

4. cPanel dan Softaculous
- cPanel: alat untuk mengelola hosting, seperti file, email, subdomain, backup, dan traffic.
- Softaculous: fitur untuk memasang CMS seperti WordPress dan Joomla secara otomatis.

Kesimpulan
Domain adalah alamat website, sedangkan hosting merupakan tempat penyimpanan datanya. Keduanya diperlukan agar website dapat berjalan dan diakses melalui internet.
        `,
        file: ""
    },

    {
        id: 4,
        title: "Pertemuan 4 - Membuat Content di Blog",
        description: "Rangkuman materi tentang pembuatan konten dan penggunaan Blogger.",
        date: "Pertemuan 4",
        content: `
1. Memilih Channel
Channel adalah media untuk membagikan content, seperti Instagram, Facebook, YouTube, dan blog. Pilih 2–3 channel yang sesuai dengan target pasar, digunakan pesaing, dan mampu dikelola dengan baik.

2. Teori Pembuatan Content
Ide content bisa diperoleh dari pertanyaan follower, topik yang dikuasai, forum diskusi, dan content kompetitor.

Ciri-ciri content yang baik:
- Orisinal dan memiliki judul menarik.
- Informatif, akurat, dan mudah dipahami.
- Menyertakan gambar atau video.
- Diperbarui secara rutin.
- Mencantumkan sumber jika mengambil informasi dari pihak lain.

Etika membuat content: harus jujur, tidak menyebarkan hoax, fitnah, diskriminasi, maupun informasi yang merugikan orang lain.

3. Menambahkan Content di Blog
Blog adalah website yang berisi artikel, foto, video, dan informasi lainnya. Salah satu layanan blog gratis adalah Blogger.com milik Google.

Kelebihan Blogger:
- Gratis dan terhubung dengan akun Google.
- Tidak perlu membeli hosting.
- Dapat membuat banyak blog dalam satu akun.

Langkah membuat blog:
1. Login ke blogger.com menggunakan akun Google.
2. Klik New Blog.
3. Isi nama, alamat, dan pilih tema.
4. Blog siap digunakan.

Cara membuat postingan:
1. Klik New Post pada dashboard.
2. Isi judul dan artikel.
3. Tambahkan label sesuai topik.
4. Klik Publish untuk menerbitkan artikel.

Kesimpulan
Content merupakan bagian penting dalam bisnis online karena dapat menarik pengunjung. Oleh karena itu, content harus menarik, bermanfaat, dan diperbarui secara rutin. Blogger dapat digunakan sebagai media pembuatan blog secara gratis.
        `,
        file: ""
    },

    {
        id: 5,
        title: "Pertemuan 5 - Traffic Website",
        description: "Rangkuman materi tentang traffic dan strategi mendatangkan pengunjung website.",
        date: "Pertemuan 5",
        content: `
1. Pengertian Traffic
Traffic adalah jumlah pengunjung yang datang ke sebuah website. Traffic penting dalam bisnis online karena dapat meningkatkan peluang penjualan dan klik iklan.

2. Istilah dalam Traffic
- Visitors: Jumlah kunjungan ke website.
- Page Views: Jumlah halaman yang dilihat pengunjung.
- Unique Visitors: Jumlah pengunjung baru.
- Bounce Rate: Persentase pengunjung yang langsung meninggalkan website.
- Avg. Time on Site: Rata-rata waktu pengunjung berada di website.
- Pages per Visit: Rata-rata halaman yang dibuka setiap pengunjung.

3. Strategi Mendatangkan Traffic
1. Search Engine: Mendatangkan pengunjung melalui mesin pencari, baik gratis menggunakan SEO maupun berbayar melalui Google Ads.
2. Website Lain: Mendatangkan pengunjung melalui link atau iklan di media sosial, forum, YouTube, dan website lain.
3. Direct Traffic: Pengunjung yang langsung mengetik alamat website di browser.

4. Jenis Traffic
- Targeted Traffic: Pengunjung yang sesuai dengan target pasar.
- Free Traffic: Pengunjung yang diperoleh secara gratis melalui SEO dan media sosial.
- Paid Traffic: Pengunjung yang diperoleh melalui iklan berbayar seperti Google Ads dan Facebook Ads.

5. Tools untuk Memantau Traffic
- Awstats: Melihat jumlah pengunjung dan aktivitas website melalui cPanel.
- Jetpack: Memantau traffic dan postingan populer di WordPress.
- Google Analytics: Menampilkan jumlah pengunjung, sumber traffic, dan halaman populer.
- Histats: Memantau jumlah pengunjung, lokasi, browser, dan kata kunci.

Kesimpulan
Traffic merupakan faktor penting dalam bisnis online karena dapat meningkatkan peluang terjadinya transaksi. Pengunjung bisa didatangkan melalui mesin pencari, website lain, dan direct traffic. Jumlah serta sumber pengunjung dapat dipantau menggunakan tools analisis traffic.
        `,
        file: ""
    },

    {
        id: 6,
        title: "Pertemuan 6 - Search Engine Optimization",
        description: "Rangkuman materi tentang search engine dan teknik SEO.",
        date: "Pertemuan 6",
        content: `
1. Pengertian Search Engine
Search engine adalah mesin pencari untuk menemukan informasi di internet, seperti Google, Bing, dan Yahoo.

Cara kerjanya terdiri dari dua proses:
- Pengumpulan data: Crawler mengunjungi website dan menyimpan informasi ke database.
- Pencarian data: Mesin pencari mencocokkan kata kunci dan menampilkan hasil paling relevan.

2. Hasil Pencarian Google
Hasil pencarian Google terbagi menjadi:
- PPC: Iklan berbayar melalui Google Ads.
- Organic Results: Hasil pencarian gratis melalui optimasi SEO.

3. Pengertian SEO
SEO (Search Engine Optimization) adalah teknik untuk meningkatkan posisi website di mesin pencari agar lebih mudah ditemukan pengguna.

SEO terbagi menjadi:
- On-page SEO: Optimasi dari dalam website.
- Off-page SEO: Optimasi melalui backlink dan aktivitas dari luar website.

4. Jenis Teknik SEO
- Black Hat SEO: Teknik curang untuk menaikkan peringkat secara cepat, tetapi berisiko terkena penalti atau banned.
- White Hat SEO: Teknik optimasi yang mengikuti aturan mesin pencari, seperti membuat konten berkualitas dan menggunakan kata kunci secara wajar.

5. Pemilihan Keyword
Keyword adalah kata kunci yang digunakan pengguna saat mencari informasi. Pemilihannya perlu memperhatikan jumlah persaingan dan volume pencarian. Tools yang bisa digunakan antara lain Google Keyword Planner dan Ubersuggest.

6. On-Page dan Off-Page SEO
On-Page SEO dilakukan dengan:
- Mengoptimalkan judul dan deskripsi halaman.
- Membuat konten berkualitas dan original.
- Menggunakan heading serta kata kunci yang sesuai.
- Membuat website responsif dan mudah diakses.
- Mengatur URL, gambar, dan navigasi website.

Off-Page SEO dilakukan dengan:
- Mendapatkan backlink dari website berkualitas.
- Bertukar link dengan website relevan.
- Membagikan artikel ke media sosial.
- Mempromosikan website melalui blog dan direktori.

Kesimpulan
SEO merupakan teknik untuk meningkatkan peringkat website di mesin pencari. Keberhasilannya membutuhkan pemilihan keyword yang tepat serta optimasi on-page dan off-page agar website lebih mudah ditemukan pengunjung.
        `,
        file: ""
    },

    {
        id: 7,
        title: "Pertemuan 7 - Payment Per Click",
        description: "Rangkuman materi tentang PPC dan Google AdSense.",
        date: "Pertemuan 7",
        content: `
1. Pengertian PPC
PPC (Pay Per Click) adalah sistem periklanan yang pembayarannya dihitung berdasarkan jumlah klik iklan. Dalam PPC terdapat:
- Advertiser: Pihak yang memasang iklan dan membayar setiap klik.
- Publisher: Pemilik website yang menampilkan iklan untuk memperoleh penghasilan.
- Ad Network: Perantara antara advertiser dan publisher.

2. Istilah dalam PPC
- Ad Format: Bentuk tampilan iklan.
- Ad Impression: Jumlah iklan ditampilkan.
- CTR: Persentase jumlah klik dibandingkan tayangan iklan.
- Ad RPM: Perkiraan pendapatan setiap 1.000 tayangan.
- CPC: Penghasilan publisher dari setiap klik iklan.
- Conversion: Tindakan yang dilakukan pengunjung setelah mengklik iklan, seperti membeli produk.

3. Google AdSense
Google AdSense adalah layanan iklan dari Google yang memungkinkan pemilik website atau YouTube memperoleh penghasilan melalui iklan.

Kelebihannya:
- Gratis digunakan.
- Iklan sesuai dengan konten.
- Tampilan dan posisi iklan bisa diatur.
- Tidak perlu mencari advertiser sendiri.

Cara kerjanya: Advertiser membayar Google untuk memasang iklan, kemudian iklan ditampilkan di website publisher dan publisher memperoleh bagian dari pendapatan tersebut.

4. Kebijakan AdSense
Publisher dilarang mengklik iklan sendiri, meminta orang lain mengklik, menggunakan traffic palsu, atau memasang iklan pada konten yang melanggar aturan Google. Pelanggaran dapat menyebabkan akun ditangguhkan atau ditutup.

5. Cara Mendaftar AdSense
1. Memiliki akun Google dan website atau channel YouTube.
2. Mendaftar melalui Google AdSense.
3. Menghubungkan website dengan AdSense.
4. Mengisi informasi pembayaran dan alamat.
5. Melakukan verifikasi nomor telepon jika diminta.
6. Menunggu proses peninjauan dan persetujuan Google.

6. Memasang Iklan AdSense
Iklan dapat dipasang secara otomatis melalui kode di bagian head website atau secara manual dengan menempatkan kode iklan pada bagian yang diinginkan.

7. Tips Meningkatkan Penghasilan
- Membuat artikel original dan berkualitas.
- Meningkatkan jumlah pengunjung website.
- Memilih posisi iklan yang strategis.
- Menggunakan ukuran iklan yang sesuai.

Kesimpulan
PPC merupakan sistem iklan yang menghasilkan uang berdasarkan klik. Google AdSense menjadi salah satu layanan PPC yang dapat dimanfaatkan pemilik website dan YouTube untuk memperoleh penghasilan dari iklan.
        `,
        file: ""
    },

    {
        id: 9,
        title: "Pertemuan 9 - Affiliate Marketing",
        description: "Rangkuman materi tentang affiliate marketing dan sistem komisi.",
        date: "Pertemuan 9",
        content: `
1. Pengertian Affiliate Marketing
Affiliate marketing adalah bisnis online dengan cara mempromosikan produk milik orang lain untuk mendapatkan komisi dari setiap penjualan atau tindakan melalui link afiliasi.

Cara kerjanya: Affiliate mendaftar ke merchant, mendapatkan link khusus, lalu mempromosikannya. Jika terjadi transaksi melalui link tersebut, affiliate memperoleh komisi.

2. Perbedaan Affiliate dan Reseller
- Affiliate: Tidak perlu stok barang dan mendapatkan komisi dari merchant.
- Reseller: Harus membeli atau menyimpan stok barang dan mendapat keuntungan dari selisih harga jual.

3. Kelebihan dan Kekurangan
Kelebihan:
- Modal awal kecil dan tidak perlu stok barang.
- Tidak perlu mengurus pengiriman produk.
- Bisa dikerjakan dari mana saja.
- Dapat mempromosikan berbagai produk.

Kekurangan:
- Tidak memiliki data pelanggan.
- Komisi bergantung pada ketentuan merchant.
- Persaingan cukup tinggi.

4. Jenis Komisi Affiliate
- PPS (Pay Per Sale): Komisi setiap terjadi penjualan.
- PPL (Pay Per Lead): Komisi ketika pengunjung melakukan tindakan tertentu, seperti mendaftar.
- PPC (Pay Per Click): Komisi berdasarkan jumlah klik pada link afiliasi.

5. Cara Menjadi Affiliate
1. Mencari merchant atau program afiliasi terpercaya.
2. Mempelajari produk dan aturan komisinya.
3. Mendaftar sebagai affiliate.
4. Mendapatkan dan mempromosikan link afiliasi melalui website, media sosial, atau email.

6. Tips Sukses Affiliate Marketing
- Pilih produk yang diminati dan sesuai target pasar.
- Pelajari produk sebelum mempromosikannya.
- Buat review dan perbandingan produk.
- Tingkatkan jumlah pengunjung dan follower.
- Fokus pada beberapa program afiliasi yang terpercaya.

Kesimpulan
Affiliate marketing adalah bisnis online dengan mempromosikan produk orang lain untuk mendapatkan komisi. Bisnis ini memiliki modal kecil karena tidak membutuhkan stok barang maupun pengiriman produk.
        `,
        file: ""
    }
];

// =====================================
// 4. ELEMENT SELECTOR
// =====================================

const $ = id => document.getElementById(id);


// =====================================
// 5. PROFILE RENDER
// =====================================

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


// =====================================
// 6. COURSE RENDER
// =====================================

function renderCourse() {

    $("courseTitle").textContent = course.name;

    $("courseLecturer").textContent = course.lecturer;

}


// =====================================
// 7. MATERIAL RENDER
// =====================================

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


// =====================================
// 8. VIEW MATERIAL
// =====================================

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


// =====================================
// 9. MODAL
// =====================================

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


// =====================================
// 10. NAVIGATION
// =====================================

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


// =====================================
// 11. MOBILE SIDEBAR
// =====================================

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


// =====================================
// 12. INITIALIZATION
// =====================================

function init() {

    renderProfile();

    renderCourse();

    renderMaterials();

    showPage("profile");

}


init();
