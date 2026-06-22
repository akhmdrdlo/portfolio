// Initialize and apply saved theme and language immediately to prevent layout flashing
(function () {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

// Define the global translations dictionary
const translations = {
    id: {
        nav_about: "Tentang",
        nav_skills: "Skills",
        nav_certifications: "Sertifikasi",
        nav_services: "Layanan",
        nav_portfolio: "Portfolio",
        nav_contact: "Kontak",
        hero_greeting: "Yo Halo! 👋 Saya Akhmad Ridlo Rifa'i",
        hero_title: "Saya merancang <span class=\"gradient-text\">sistem terdistribusi</span>, mengelola <span class=\"gradient-text\">operasi IT</span> yang kokoh, & menerjemahkan hal teknis menjadi <span class=\"gradient-text\">pertumbuhan bisnis</span>.",
        hero_subtitle: "Google Certified Associate Cloud Engineer yang berspesialisasi dalam Infrastruktur Cloud, Pengembangan Web Full-Stack, dan Strategi IT.",
        download_cv: "Unduh CV",
        view_portfolio: "Lihat Portfolio",
        about_title: "TENTANG SAYA",
        about_subtitle: "Cloud & IT Operations Specialist | Full-Stack Developer | Strategic Tech Analyst",
        about_desc: "Saya adalah seorang <strong>Google Cloud Certified Associate Cloud Engineer (ACE)</strong>, lulusan berprestasi Teknik Informatika dari UIN Sunan Gunung Djati Bandung, dan alumni Bangkit Academy. Menggabungkan latar belakang pengembangan sistem Full-Stack (Laravel/Next.js/React), arsitektur cloud (GCP/AWS), manajemen database, serta pengalaman operasional bisnis dan media kreatif, saya menghadirkan solusi teknologi terintegrasi yang mendorong pertumbuhan operasional dan efisiensi bisnis secara maksimal.",
        label_fullname: "Nama Lengkap :",
        val_fullname: "Akhmad Ridlo Rifa'i S.T.",
        label_birth: "Tempat/Tanggal Lahir :",
        val_birth: "Kebumen, 10 Desember 2003",
        label_city: "Asal Kota:",
        val_city: "Cileungsi, Kabupaten Bogor",
        label_status: "Status:",
        val_status: "Business Development Officer",
        label_age: "Umur:",
        label_education: "Pendidikan Terakhir:",
        val_education: "Teknik Informatika UIN Sunan Gunung Djati",
        label_email: "Alamat Email:",
        experience_title: "Pengalaman Kerja",
        exp1_role: "Business Development Officer",
        exp1_date: "Nov 2025 - Sekarang",
        exp1_desc: "Operational support kunci di divisi Business Development. Menggabungkan analisis teknis (Spec Analysis) untuk narasi pemasaran, desain presentasi level eksekutif, dan pelaporan berbasis data untuk keputusan strategis.",
        exp2_role: "Programmer (Freelance)",
        exp2_date: "Nov 2025 - Sekarang",
        exp2_desc: "Bekerja secara remote sebagai Programmer untuk klien internasional.",
        exp3_role: "Strategic Transformation Officer (Intern)",
        exp3_date: "Sep 2025 - Nov 2025",
        exp3_desc: "Mengembangkan Dashboard Monitoring Program berbasis Website menggunakan Next.js dan Strapi Headless CMS. Mengonfigurasi automasi data dan filtering database.",
        exp4_role: "Community Builder",
        exp4_date: "Sep 2025 - Sekarang",
        exp4_desc: "Membangun komunitas developer dan memfasilitasi kegiatan belajar.",
        exp5_role: "Ketua Divisi KOMINFO",
        exp5_date: "Mar 2025 - Jan 2026",
        exp5_desc: "Memimpin divisi komunikasi dan informasi, strategi media sosial, dan desain grafis organisasi.",
        exp6_role: "Guru Pemrograman",
        exp6_date: "Feb 2025 - Jun 2025",
        exp6_desc: "Mengajar kelas pemrograman dasar dan berpikir algoritma untuk 15 siswa. Membimbing latihan coding dan proyek.",
        exp7_role: "PIC Produksi Video",
        exp7_date: "Jul 2024 - Jun 2025",
        exp7_desc: "Koordinator Divisi Produksi Video. Mengelola tim, jadwal produksi, dan quality control konten sebelum upload.",
        exp8_role: "Cloud Computing Cohort (Valedictorian)",
        exp8_date: "Sep 2024 - Jan 2025",
        exp8_desc: "Distinction Graduate & Valedictorian Speaker (Top Cohort). Juara 1 Soft Skills Challenge. Mempelajari GCP, Machine Learning API, dan memimpin tim Capstone \"JejakBatik\".",
        exp9_role: "IT Developer & Reporter",
        exp9_date: "Aug 2023 - Jan 2025",
        exp9_desc: "Mengelola website berita (Maintenance & Updates) serta meliput berita lapangan sebagai jurnalis foto.",
        exp10_role: "Videografer Freelance",
        exp10_date: "Sep 2021 - Sekarang",
        exp10_desc: "4 tahun pengalaman. Video Editor & DoP untuk berbagai proyek: Profil Video Jurusan, Wedding, Event Dokumentasi, dan Iklan Komersial.",
        certifications_title: "Sertifikasi & Pencapaian",
        cert_gcp_tag: "Tersertifikasi (Apr 2025)",
        cert_dicoding_gcp_tag: "Tersertifikasi (Nov 2024)",
        cert_dicoding_ml_tag: "Selesai (Des 2024)",
        cert_toefa_tag: "Mahir (Nov 2024)",
        cert_ux_tag: "Selesai (Apr 2025)",
        cert_linux_tag: "Tersertifikasi (Jul 2024)",
        cert_gplay_tag: "Tersertifikasi (Mar 2024)",
        cert_ai_tag: "Selesai (Nov 2024)",
        skills_title: "KEAHLIAN & PENGALAMAN",
        skills_tech: "Teknologi",
        skills_tech_sub: "Pengembangan Web, Komputasi Awan & Database",
        skills_tech_g1: "Pemrograman & Framework",
        skills_tech_g2: "Cloud & Database",
        skills_strat: "Strategis",
        skills_strat_sub: "Manajemen Proyek, Agile & Analisis Bisnis",
        skills_strat_g1: "Manajemen & Kepemimpinan",
        skills_strat_g2: "Bisnis & Analisis",
        skills_creat: "Kreatif",
        skills_creat_sub: "Produksi Multimedia & Desain UI/UX",
        skills_creat_g1: "Video & Fotografi",
        skills_creat_g2: "Desain & UI/UX",
        skills_admin: "Administratif",
        skills_admin_sub: "Alat, Dokumentasi & Dukungan Operasional",
        skills_admin_g1: "Alat Administratif",
        skills_admin_g2: "Operasional & Pelaporan",
        services_title: "LAYANAN YANG SAYA TAWARKAN",
        srv1_desc: "Konfigurasi arsitektur GCP & AWS, manajemen akses IAM terenkripsi, scripting Linux Bash, dan optimasi runtime server.",
        srv2_desc: "Pembuatan aplikasi kustom Next.js & Laravel, perancangan database SQL/NoSQL, RESTful API, dan web design modern.",
        srv3_desc: "Entri data, anotasi data ML/AI, integrasi database, pemantauan performa analitik, dan pelaporan eksekutif.",
        srv3_tag: "Akurasi Terjamin",
        srv4_desc: "Desain logo kreatif, UI/UX mockup Figma, editing video promosi, dan voice acting/voiceover berkualitas tinggi.",
        srv4_tag: "Dukungan Kreatif",
        portfolio_title: "PORTOFOLIO",
        filter_all: "Semua",
        filter_cloud: "Cloud & IT Ops ☁️",
        filter_web: "Web & Sistem Dev 💻",
        filter_strategic: "Strategis & Data 📈",
        filter_creative: "Media Kreatif 🎨",
        proj_flask_title: "Flask Survey (AWS Deploy)",
        proj_flask_subtitle: "Infrastruktur cloud AWS terdistribusi untuk survei berskala besar berkapasitas 25k+ responden simultan.",
        proj_jejakbatik_title: "JejakBatik ML & GCP Infrastructure",
        proj_jejakbatik_subtitle: "Arsitektur GCP hemat biaya dan aman (IAM Least Privilege) untuk API klasifikasi batik bertenaga CNN.",
        proj_swif_title: "SWIF (Smart Warehouse Information Flow)",
        proj_swif_subtitle: "Sistem manajemen gudang virtual berbasis Laravel 11 dengan pelacakan barang bulanan, log histori, dan invoice PDF.",
        proj_selaras_title: "SELARAS (Sistem Laporan Sarana Saintek)",
        proj_selaras_subtitle: "Platform pengaduan sarana prasarana kampus berbasis ticketing dengan kompresi gambar dinamis menggunakan Laravel 11.",
        proj_elibrarie_title: "E-Librarie",
        proj_elibrarie_subtitle: "Sistem manajemen perpustakaan digital dengan database MySQL, PHP Native, dan Excel importer.",
        proj_vwarehouse_title: "V-Warehouse",
        proj_vwarehouse_subtitle: "Sistem inventaris gudang virtual dengan proteksi multi-level dan hak akses bertingkat berbasis Laravel 8.",
        proj_madoka_title: "Madoka Bookshelf",
        proj_madoka_subtitle: "Aplikasi penataan buku web offline dengan penyimpanan browser localStorage menggunakan Vanilla JavaScript.",
        proj_serayu_title: "Serayu Restoran Desktop Apps",
        proj_serayu_subtitle: "Sistem manajemen pemesanan restoran berbasis GUI Java Swing dengan integrasi MySQL database.",
        proj_len_title: "PT Len Industri - BD & IT Support",
        proj_len_subtitle: "Analisis spesifikasi teknis produk, riset pasar taktis, dan dashboard monitoring internal berbasis Next.js/Strapi.",
        proj_sabit_title: "SABIT Coding Community Blueprint",
        proj_sabit_subtitle: "Perancangan kurikulum belajar pemrograman terstruktur dan kepemimpinan tim belajar coding untuk 15+ developer pemula.",
        proj_suaka_title: "LPM Suaka Web Analytics & AdSense",
        proj_suaka_subtitle: "Pengawasan traffic analytics, optimasi penempatan iklan AdSense, dan pemeliharaan keamanan website portal berita.",
        proj_eco_title: "Data-Driven Ecotheology ML Publication",
        proj_eco_subtitle: "Riset empiris implementasi ekoteologi sekolah Islam dengan Machine Learning, terbit di Jurnal ASCI.",
        proj_diab_title: "Diabetes Classification Supervised ML Study",
        proj_diab_subtitle: "Riset komparatif algoritma KNN, Decision Tree, dan SVM untuk screening diabetes, terbit di CoreID Journal.",
        view_details: "Lihat Detail",
        vid1_title: "Event Video Editor",
        vid1_desc: "Menjadi Main Video Editor dalam berbagai event Jurusan, serta diamanahi menjadi Video Editor dalam projek Video Profile Jurusan Teknik Informatika UIN SGD Bandung.",
        vid2_title: "SAKTI Production Animated Bumper",
        vid2_desc: "Hasil video selama menjadi Penanggungjawab Video Editor di SAKTI Production Informatika. Digunakan sebagai Opening dalam tiap video Podcast yang dirilis di Informatika UIN Bandung Channel.",
        vid3_title: "IT Fair Animated Series",
        vid3_desc: "Hasil video selama menjadi Kepala Divisi bagian PDD dalam suatu acara besar di Jurusan yaitu IT FAIR XIII.",
        contact_title: "kontak saya",
        contact_subtitle: "Hubungi Saya",
        contact_desc: "Hubungi saya melalui formulir di samping atau media sosial di bawah. Saya akan membalas pesan Anda secepatnya!",
        contact_loc_label: "Lokasi",
        contact_follow_label: "Ikuti Saya",
        form_name_label: "Nama Lengkap",
        form_name_placeholder: "Masukkan nama Anda",
        form_email_label: "Alamat Email",
        form_email_placeholder: "nama@email.com",
        form_message_label: "Pesan",
        form_message_placeholder: "Tuliskan pesan Anda...",
        form_submit_btn: "Kirim Pesan",
        footer_developed_by: "dikembangkan oleh",
        projects: {
            flask_survey: {
                title: "Flask Survey (AWS Deploy)",
                image: "",
                tech: ["Flask", "AWS EC2", "AWS RDS", "AWS ELB", "Nginx", "Gunicorn"],
                problem: "Sistem survei konvensional tidak sanggup menangani lonjakan traffic hingga 25.000+ responden secara bersamaan, mengakibatkan downtime database.",
                execution: "Mendeploy aplikasi Flask di kluster AWS EC2 di balik Elastic Load Balancer (ELB), dengan replika baca AWS RDS PostgreSQL untuk distribusi query beban database.",
                impact: "Menjamin uptime 99.9% selama periode survei puncak, memproses data dari 25.000+ responden tanpa kehilangan data atau keterlambatan server."
            },
            jejakbatik: {
                title: "JejakBatik ML & GCP Infrastructure",
                image: "",
                tech: ["TensorFlow", "Google Cloud Platform", "App Engine", "Cloud Run", "Cloud Storage"],
                problem: "Aplikasi seluler JejakBatik membutuhkan backend klasifikasi citra batik yang cepat dan hemat biaya dengan batasan kuota API yang ketat.",
                execution: "Merancang arsitektur GCP bertenaga Cloud Run untuk deployment model TensorFlow CNN, mengonfigurasi Cloud Storage untuk caching data, dan menerapkan IAM Least Privilege.",
                impact: "Memangkas biaya operasional cloud sebesar 40% dan mempercepat respons inferensi model menjadi kurang dari 1.5 detik per gambar."
            },
            swif: {
                title: "SWIF (Smart Warehouse Information Flow)",
                image: "img/portofolio/swif-dashboard.png",
                tech: ["Laravel 11", "MySQL", "Bootstrap 5", "DomPDF"],
                problem: "Pencatatan inventaris gudang manual memakan waktu lama dan rentan terhadap kesalahan data barang masuk/keluar serta pelaporan stok bulanan.",
                execution: "Membangun sistem informasi gudang virtual (SWIF) berbasis Laravel dengan modular log transaksi otomatis, generator invoice PDF dinamis, dan dashboard status stok real-time.",
                impact: "Meningkatkan akurasi pelaporan stok hingga 100% dan mengurangi waktu pembuatan laporan bulanan dari jam menjadi hitungan menit.",
                githubLink: "https://github.com/akhmdrdlo/SWIF-Smart-Warehouse"
            },
            selaras: {
                title: "SELARAS (Sistem Laporan Sarana Saintek)",
                image: "img/portofolio/slearas.png",
                tech: ["Laravel 11", "MySQL", "Tailwind CSS", "Intervention Image"],
                problem: "Sistem pengaduan sarana prasarana kampus yang tidak terstruktur membuat waktu penyelesaian keluhan menjadi sangat lambat dan file foto bukti berukuran terlalu besar.",
                execution: "Membangun platform ticketing pengaduan terpadu dengan sistem kompresi gambar otomatis pada sisi server menggunakan Intervention Image untuk menghemat storage.",
                impact: "Mempercepat waktu penanganan keluhan fasilitas kampus sebesar 50% dan menghemat space storage server hingga 70% per upload.",
                githubLink: "https://github.com/akhmdrdlo/selaras-saintek"
            },
            elibrarie: {
                title: "E-Librarie",
                image: "img/portofolio/perpus1.png",
                tech: ["PHP Native", "MySQL", "Bootstrap 4", "PhpSpreadsheet"],
                problem: "Petugas perpustakaan kesulitan memasukkan ratusan data buku baru secara manual satu per satu ke dalam sistem database perpustakaan digital.",
                execution: "Membuat library management system terintegrasi dengan modul importir file Excel menggunakan library PhpSpreadsheet dan validasi skema data otomatis.",
                impact: "Mengurangi waktu input data inventaris perpustakaan secara drastis, memungkinkan import 500+ buku sekaligus dalam waktu kurang dari 10 detik.",
                githubLink: "https://github.com/akhmdrdlo/E-Librarie"
            },
            vwarehouse: {
                title: "V-Warehouse",
                image: "img/portofolio/gudang1.png",
                tech: ["Laravel 8", "MySQL", "Bootstrap 4", "BCrypt"],
                problem: "Adanya potensi manipulasi stok dan kebocoran informasi akibat sistem manajemen gudang lama yang tidak membatasi hak akses operasional.",
                execution: "Mengimplementasikan sistem otorisasi multi-role (Administrator vs Operator) yang ketat dengan middleware Laravel dan hashing password terenkripsi BCrypt.",
                impact: "Menghilangkan risiko akses tidak sah dan manipulasi data inventaris ilegal secara total di gudang penyimpanan virtual.",
                githubLink: "https://github.com/akhmdrdlo/v-warehouse"
            },
            madoka: {
                title: "Madoka Bookshelf",
                image: "img/portofolio/madokabook.png",
                tech: ["HTML5", "CSS3", "Vanilla JavaScript", "localStorage"],
                problem: "Pengguna membutuhkan pengelola daftar buku offline yang ringan tanpa keharusan membuat akun online atau koneksi internet aktif.",
                execution: "Membangun antarmuka web interaktif menggunakan Vanilla JS yang memanfaatkan browser Web Storage API (localStorage) untuk persistensi data penuh secara offline.",
                impact: "Menghadirkan aplikasi manajemen buku 0-latency yang sangat responsif, berjalan 100% pada sisi klien tanpa membebani server backend.",
                githubLink: "https://github.com/akhmdrdlo/Bookshelf-Apps"
            },
            serayu: {
                title: "Serayu Restoran Desktop Apps",
                image: "img/portofolio/serayu-apps.png",
                tech: ["Java Swing GUI", "MySQL", "JDBC", "JasperReports"],
                problem: "Pencatatan pesanan restoran Serayu yang masih menggunakan kertas sering menyebabkan salah saji menu, antrean kasir panjang, dan pelaporan keuangan tidak akurat.",
                execution: "Mengembangkan aplikasi desktop berbasis Java Swing GUI yang terintegrasi database MySQL melalui JDBC serta modul cetak struk otomatis dengan JasperReports.",
                impact: "Mempercepat alur antrean pemesanan kasir hingga 40% dan mengotomatisasi pembuatan laporan omzet harian secara presisi.",
                githubLink: "https://github.com/akhmdrdlo/Serayu-Resto-Desktop"
            },
            pt_len_bd: {
                title: "PT Len Industri - BD & IT Support",
                image: "",
                tech: ["Next.js", "Strapi CMS", "PostgreSQL", "Tailwind CSS"],
                problem: "Manajemen dan monitoring program strategis divisi Business Development yang tersebar dalam banyak spreadsheet menyulitkan monitoring progres program.",
                execution: "Mendevelolp dashboard monitoring internal Next.js terintegrasi dengan Strapi CMS untuk automasi input progres dan relasi data antar program strategis.",
                impact: "Memusatkan monitoring data program strategis ke dalam satu dashboard interaktif, menghemat waktu evaluasi mingguan divisi sebesar 30%."
            },
            sabit_blueprint: {
                title: "SABIT Coding Community Blueprint",
                image: "",
                tech: ["Curriculum Design", "Mentoring", "Git/GitHub", "Visual Studio Code"],
                problem: "Minimnya kurikulum belajar pemrograman terstruktur bagi pemula membuat anggota komunitas SABIT kesulitan memulai belajar pemrograman.",
                execution: "Merancang blueprint kurikulum coding dasar mencakup HTML/CSS, Git version control, dasar-dasar logika pemrograman, dan mengadakan sesi mentoring mingguan.",
                impact: "Membimbing 15+ pemula hingga berhasil membangun landing page portofolio pribadi mereka sendiri secara mandiri menggunakan Git."
            },
            suaka_analytics: {
                title: "LPM Suaka Web Analytics & AdSense",
                image: "",
                tech: ["Google Analytics 4", "Google AdSense", "WordPress", "Search Console"],
                problem: "Kurang optimalnya penempatan iklan Google AdSense dan nihilnya insight data audiens pada website portal berita LPM Suaka menurunkan pendapatan iklan.",
                execution: "Mengintegrasikan GA4 untuk pelacakan demografi pembaca, menganalisis bounce rate artikel, dan menerapkan layout penempatan iklan AdSense yang responsif.",
                impact: "Meningkatkan rasio klik iklan (CTR) AdSense sebesar 25% serta membantu redaksi menentukan topik berita terpopuler berbasis data riil pembaca."
            },
            ecotheology_ml: {
                title: "Data-Driven Ecotheology ML Publication",
                image: "",
                tech: ["Python", "Pandas", "Scikit-Learn", "Machine Learning", "Research Publication"],
                problem: "Kebutuhan analisis empiris berskala besar untuk membuktikan hubungan implementasi konsep ekoteologi terhadap efisiensi energi di sekolah-sekolah Islam.",
                execution: "Melakukan survei data empiris, prapemrosesan dataset dengan Python Pandas, dan menerapkan model klasifikasi machine learning terawasi untuk analisis prediktif.",
                impact: "Berhasil mempublikasikan jurnal ilmiah bertaraf nasional di ASCI Journal, memberikan landasan kebijakan berbasis data untuk kampanye go-green sekolah."
            },
            diabetes_study: {
                title: "Diabetes Classification Supervised ML Study",
                image: "",
                tech: ["Python", "KNN", "Decision Tree", "Support Vector Machine", "Supervised Learning"],
                problem: "Akurasi diagnosa awal diabetes yang rendah akibat analisis gejala klinis manual tanpa model prediksi prediktif berbantuan komputer.",
                execution: "Melakukan analisis komparatif performa model supervised learning KNN, Decision Tree, dan SVM dengan metrik evaluasi Confusion Matrix (Precision & Recall).",
                impact: "Menemukan model klasifikasi terbaik dengan akurasi 92.4% untuk screening dini, diterbitkan secara ilmiah di CoreID Journal."
            }
        }
    },
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_certifications: "Certifications",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        hero_greeting: "Yo Hello! 👋 I am Akhmad Ridlo Rifa'i",
        hero_title: "I architect <span class=\"gradient-text\">scalable systems</span>, manage robust <span class=\"gradient-text\">IT operations</span>, & translate complex technicalities into <span class=\"gradient-text\">business growth</span>.",
        hero_subtitle: "Google Certified Associate Cloud Engineer specializing in Cloud Infrastructure, Full-Stack Web Development, and IT Strategy.",
        download_cv: "Download CV",
        view_portfolio: "View Portfolio",
        about_title: "ABOUT ME",
        about_subtitle: "Cloud & IT Operations Specialist | Full-Stack Developer | Strategic Tech Analyst",
        about_desc: "I am a <strong>Google Cloud Certified Associate Cloud Engineer (ACE)</strong>, an Informatics Engineering honors graduate from UIN Sunan Gunung Djati Bandung, and a Bangkit Academy alumnus. Combining a technical background in Full-Stack development (Laravel/Next.js/React), cloud architecture (GCP/AWS), database management, along with business operations and creative media experience, I deliver integrated technology solutions that drive operational growth and maximize business efficiency.",
        label_fullname: "Full Name:",
        val_fullname: "Akhmad Ridlo Rifa'i S.T.",
        label_birth: "Place/Date of Birth:",
        val_birth: "Kebumen, December 10, 2003",
        label_city: "Location:",
        val_city: "Cileungsi, Bogor, Indonesia",
        label_status: "Status:",
        val_status: "Business Development Officer",
        label_age: "Age:",
        label_education: "Education:",
        val_education: "Informatics Engineering UIN Sunan Gunung Djati",
        label_email: "Email Address:",
        experience_title: "Work Experience",
        exp1_role: "Business Development Officer",
        exp1_date: "Nov 2025 - Present",
        exp1_desc: "Key operational support in the Business Development division. Combines technical analysis (Spec Analysis) for marketing narratives, executive-level presentation design, and data-driven reporting for strategic decisions.",
        exp2_role: "Programmer (Freelance)",
        exp2_date: "Nov 2025 - Present",
        exp2_desc: "Working remotely as a Programmer for international clients.",
        exp3_role: "Strategic Transformation Officer (Intern)",
        exp3_date: "Sep 2025 - Nov 2025",
        exp3_desc: "Developed a Website-based Program Monitoring Dashboard using Next.js and Strapi Headless CMS. Configured data automation and database filtering.",
        exp4_role: "Community Builder",
        exp4_date: "Sep 2025 - Present",
        exp4_desc: "Building developer community and facilitating learning activities.",
        exp5_role: "Lead of KOMINFO Division",
        exp5_date: "Mar 2025 - Jan 2026",
        exp5_desc: "Led the communication and information division, social media strategy, and organizational graphic design.",
        exp6_role: "Programming Teacher",
        exp6_date: "Feb 2025 - Jun 2025",
        exp6_desc: "Taught basic programming and algorithmic thinking classes for 15 students. Guided coding exercises and projects.",
        exp7_role: "PIC Video Production",
        exp7_date: "Jul 2024 - Jun 2025",
        exp7_desc: "Video Production Division Coordinator. Managed team, production schedule, and content quality control prior to upload.",
        exp8_role: "Cloud Computing Cohort (Valedictorian)",
        exp8_date: "Sep 2024 - Jan 2025",
        exp8_desc: "Distinction Graduate & Valedictorian Speaker (Top Cohort). 1st Winner of Soft Skills Challenge. Studied GCP, Machine Learning APIs, and led the Capstone team \"JejakBatik\".",
        exp9_role: "IT Developer & Reporter",
        exp9_date: "Aug 2023 - Jan 2025",
        exp9_desc: "Managed the news website (Maintenance & Updates) and covered field news as a photojournalist.",
        exp10_role: "Freelance Videographer",
        exp10_date: "Sep 2021 - Present",
        exp10_desc: "4 years of experience. Video Editor & DoP for various projects: Department Video Profiles, Weddings, Event Documentations, and Commercial Ads.",
        certifications_title: "Certifications & Achievements",
        cert_gcp_tag: "Certified (Apr 2025)",
        cert_dicoding_gcp_tag: "Certified (Nov 2024)",
        cert_dicoding_ml_tag: "Completed (Dec 2024)",
        cert_toefa_tag: "Proficient (Nov 2024)",
        cert_ux_tag: "Completed (Apr 2025)",
        cert_linux_tag: "Certified (Jul 2024)",
        cert_gplay_tag: "Certified (Mar 2024)",
        cert_ai_tag: "Completed (Nov 2024)",
        skills_title: "SKILLS & EXPERTISE",
        skills_tech: "Technology",
        skills_tech_sub: "Web Development, Cloud Computing & Databases",
        skills_tech_g1: "Programming & Frameworks",
        skills_tech_g2: "Cloud & Databases",
        skills_strat: "Strategic",
        skills_strat_sub: "Project Management, Agile & Business Analysis",
        skills_strat_g1: "Management & Leadership",
        skills_strat_g2: "Business & Analysis",
        skills_creat: "Creative",
        skills_creat_sub: "Multimedia Production & UI/UX Design",
        skills_creat_g1: "Video & Photography",
        skills_creat_g2: "Design & UI/UX",
        skills_admin: "Administrative",
        skills_admin_sub: "Tools, Documentation & Operational Support",
        skills_admin_g1: "Administrative Tools",
        skills_admin_g2: "Operations & Reporting",
        services_title: "SERVICES I OFFER",
        srv1_desc: "Configuring GCP & AWS architectures, encrypted IAM access management, Linux Bash scripting, and server runtime optimization.",
        srv2_desc: "Creating custom Next.js & Laravel applications, SQL/NoSQL database design, RESTful APIs, and modern web design.",
        srv3_desc: "Data entry, ML/AI data annotation, database integration, analytics performance monitoring, and executive reporting.",
        srv3_tag: "Accuracy Guaranteed",
        srv4_desc: "Creative logo design, Figma UI/UX mockups, promotional video editing, and high-quality voice acting/voiceover.",
        srv4_tag: "Creative Support",
        portfolio_title: "PORTFOLIO",
        filter_all: "All",
        filter_cloud: "Cloud & IT Ops ☁️",
        filter_web: "Web & System Dev 💻",
        filter_strategic: "Strategic & Data 📈",
        filter_creative: "Creative Media 🎨",
        proj_flask_title: "Flask Survey (AWS Deploy)",
        proj_flask_subtitle: "Distributed AWS cloud infrastructure for large-scale surveys handling 25k+ simultaneous respondents.",
        proj_jejakbatik_title: "JejakBatik ML & GCP Infrastructure",
        proj_jejakbatik_subtitle: "Cost-efficient and secure (IAM Least Privilege) GCP architecture for a CNN-powered batik classification API.",
        proj_swif_title: "SWIF (Smart Warehouse Information Flow)",
        proj_swif_subtitle: "Laravel 11-based smart warehouse management system featuring monthly item tracking, transaction logs, and PDF invoices.",
        proj_selaras_title: "SELARAS (Sistem Laporan Sarana Saintek)",
        proj_selaras_subtitle: "Ticketing platform for campus facility complaints with dynamic image compression using Laravel 11.",
        proj_elibrarie_title: "E-Librarie",
        proj_elibrarie_subtitle: "Digital library management system using MySQL database, PHP Native, and Excel data importer.",
        proj_vwarehouse_title: "V-Warehouse",
        proj_vwarehouse_subtitle: "Virtual inventory system with multi-level role protection and access control using Laravel 8.",
        proj_madoka_title: "Madoka Bookshelf",
        proj_madoka_subtitle: "Offline bookshelf management web app utilizing browser localStorage with Vanilla JavaScript.",
        proj_serayu_title: "Serayu Restoran Desktop Apps",
        proj_serayu_subtitle: "Java Swing GUI-based restaurant booking management system integrated with MySQL database.",
        proj_len_title: "PT Len Industri - BD & IT Support",
        proj_len_subtitle: "Technical product specifications analysis, strategic market research, and custom Next.js/Strapi monitoring dashboard.",
        proj_sabit_title: "SABIT Coding Community Blueprint",
        proj_sabit_subtitle: "Structured programming curriculum design and team leadership mentoring for 15+ beginner developers.",
        proj_suaka_title: "LPM Suaka Web Analytics & AdSense",
        proj_suaka_subtitle: "Web traffic analytics monitoring, AdSense placement optimization, and news portal security maintenance.",
        proj_eco_title: "Data-Driven Ecotheology ML Publication",
        proj_eco_subtitle: "Empirical research on Islamic school ecotheology using Machine Learning models, published in ASCI Journal.",
        proj_diab_title: "Diabetes Classification Supervised ML Study",
        proj_diab_subtitle: "Comparative study of KNN, Decision Tree, and SVM supervised models for diabetes screening, published in CoreID Journal.",
        view_details: "View Details",
        vid1_title: "Event Video Editor",
        vid1_desc: "Acted as the Main Video Editor for various campus events and appointed as the Video Editor for the Informatics Engineering Department Video Profile project at UIN SGD Bandung.",
        vid2_title: "SAKTI Production Animated Bumper",
        vid2_desc: "Video outputs produced while serving as the PIC Video Editor at SAKTI Production. Used as the intro theme for all podcast videos released on the Informatics UIN Bandung YouTube channel.",
        vid3_title: "IT Fair Animated Series",
        vid3_desc: "Animation and video promos created while leading the design, publication, and documentation division for the IT FAIR XIII department event.",
        contact_title: "contact me",
        contact_subtitle: "Contact Me",
        contact_desc: "Reach out to me via the form on the right or through my social media channels. I will respond to your message as soon as possible!",
        contact_loc_label: "Location",
        contact_follow_label: "Follow Me",
        form_name_label: "Full Name",
        form_name_placeholder: "Enter your name",
        form_email_label: "Email Address",
        form_email_placeholder: "name@email.com",
        form_message_label: "Message",
        form_message_placeholder: "Write your message here...",
        form_submit_btn: "Send Message",
        footer_developed_by: "developed by",
        projects: {
            flask_survey: {
                title: "Flask Survey (AWS Deploy)",
                image: "",
                tech: ["Flask", "AWS EC2", "AWS RDS", "AWS ELB", "Nginx", "Gunicorn"],
                problem: "Conventional survey systems failed to handle traffic spikes of up to 25,000+ simultaneous respondents, resulting in database downtime.",
                execution: "Deployed Flask application on AWS EC2 clusters behind an Elastic Load Balancer (ELB), with AWS RDS PostgreSQL read replicas to distribute database query load.",
                impact: "Guaranteed 99.9% uptime during peak survey periods, processing data from 25,000+ respondents without data loss or server latency."
            },
            jejakbatik: {
                title: "JejakBatik ML & GCP Infrastructure",
                image: "",
                tech: ["TensorFlow", "Google Cloud Platform", "App Engine", "Cloud Run", "Cloud Storage"],
                problem: "The JejakBatik mobile application required a fast and cost-effective batik image classification backend with strict API quota limitations.",
                execution: "Designed a GCP architecture powered by Cloud Run for TensorFlow CNN model deployment, configured Cloud Storage for data caching, and implemented IAM Least Privilege.",
                impact: "Cut cloud operational costs by 40% and accelerated model inference response to less than 1.5 seconds per image."
            },
            swif: {
                title: "SWIF (Smart Warehouse Information Flow)",
                image: "img/portofolio/swif-dashboard.png",
                tech: ["Laravel 11", "MySQL", "Bootstrap 5", "DomPDF"],
                problem: "Manual warehouse inventory tracking was time-consuming and highly prone to data errors regarding incoming/outgoing goods and monthly stock reporting.",
                execution: "Built a virtual warehouse information system (SWIF) using Laravel featuring automatic transaction logging modules, dynamic PDF invoice generators, and a real-time stock dashboard.",
                impact: "Increased stock reporting accuracy to 100% and reduced monthly report generation time from hours to a few clicks.",
                githubLink: "https://github.com/akhmdrdlo/SWIF-Smart-Warehouse"
            },
            selaras: {
                title: "SELARAS (Sistem Laporan Sarana Saintek)",
                image: "img/portofolio/slearas.png",
                tech: ["Laravel 11", "MySQL", "Tailwind CSS", "Intervention Image"],
                problem: "Unstructured campus facility complaint systems led to slow issue resolution times, and evidence upload photos were excessively large.",
                execution: "Developed an integrated ticketing complaint platform featuring server-side image compression using Intervention Image to optimize disk storage.",
                impact: "Accelerated campus facility issue resolution time by 50% and saved server storage space by up to 70% per image upload.",
                githubLink: "https://github.com/akhmdrdlo/selaras-saintek"
            },
            elibrarie: {
                title: "E-Librarie",
                image: "img/portofolio/perpus1.png",
                tech: ["PHP Native", "MySQL", "Bootstrap 4", "PhpSpreadsheet"],
                problem: "Librarians struggled with manually entering hundreds of new book records one by one into the digital library database system.",
                execution: "Developed a library management system integrated with an Excel file importer module using the PhpSpreadsheet library and automatic schema validation.",
                impact: "Drastically reduced library inventory data entry times, allowing 500+ books to be imported simultaneously in under 10 seconds.",
                githubLink: "https://github.com/akhmdrdlo/E-Librarie"
            },
            vwarehouse: {
                title: "V-Warehouse",
                image: "img/portofolio/gudang1.png",
                tech: ["Laravel 8", "MySQL", "Bootstrap 4", "BCrypt"],
                problem: "Potential stock manipulation and information leakage due to legacy warehouse systems lacking operational access role limitations.",
                execution: "Implemented strict multi-role authorization (Administrator vs Operator) utilizing Laravel middleware and BCrypt encrypted password hashing.",
                impact: "Totally eliminated unauthorized access risks and illegal inventory data manipulation within the virtual storage warehouse.",
                githubLink: "https://github.com/akhmdrdlo/v-warehouse"
            },
            madoka: {
                title: "Madoka Bookshelf",
                image: "img/portofolio/madokabook.png",
                tech: ["HTML5", "CSS3", "Vanilla JavaScript", "localStorage"],
                problem: "Users needed a lightweight, offline book list organizer without requiring account creation or an active internet connection.",
                execution: "Built an interactive web interface using Vanilla JS utilizing the browser's Web Storage API (localStorage) for complete offline data persistence.",
                impact: "Delivered a highly responsive, zero-latency book management application running 100% client-side without loading any backend server.",
                githubLink: "https://github.com/akhmdrdlo/Bookshelf-Apps"
            },
            serayu: {
                title: "Serayu Restoran Desktop Apps",
                image: "img/portofolio/serayu-apps.png",
                tech: ["Java Swing GUI", "MySQL", "JDBC", "JasperReports"],
                problem: "Paper-based order taking at Serayu Restaurant frequently caused menu mix-ups, long cashier queues, and inaccurate financial reporting.",
                execution: "Developed a Java Swing GUI desktop application integrated with MySQL database via JDBC and automated receipt printing modules using JasperReports.",
                impact: "Sped up cashier order queuing by up to 40% and automated daily revenue report generation with absolute precision.",
                githubLink: "https://github.com/akhmdrdlo/Serayu-Resto-Desktop"
            },
            pt_len_bd: {
                title: "PT Len Industri - BD & IT Support",
                image: "",
                tech: ["Next.js", "Strapi CMS", "PostgreSQL", "Tailwind CSS"],
                problem: "Managing and monitoring Strategic Business Development programs across multiple disjointed spreadsheets hindered tracking program progress.",
                execution: "Developed an internal Next.js monitoring dashboard integrated with Strapi CMS to automate progress input and map relationships between strategic programs.",
                impact: "Centralized strategic program tracking into a single interactive dashboard, saving 30% of weekly divisional evaluation time."
            },
            sabit_blueprint: {
                title: "SABIT Coding Community Blueprint",
                image: "",
                tech: ["Curriculum Design", "Mentoring", "Git/GitHub", "Visual Studio Code"],
                problem: "The lack of a structured programming learning curriculum for beginners made it difficult for SABIT community members to start learning coding.",
                execution: "Designed a fundamental coding curriculum blueprint covering HTML/CSS, Git version control, basic programming logic, and conducted weekly mentoring sessions.",
                impact: "Guided 15+ beginners to successfully build and deploy their own personal portfolio landing pages independently using Git."
            },
            suaka_analytics: {
                title: "LPM Suaka Web Analytics & AdSense",
                image: "",
                tech: ["Google Analytics 4", "Google AdSense", "WordPress", "Search Console"],
                problem: "Suboptimal Google AdSense ad placements and a lack of audience insights on the LPM Suaka news portal website decreased ad revenue.",
                execution: "Integrated GA4 for tracking reader demographics, analyzed article bounce rates, and implemented responsive AdSense ad layouts.",
                impact: "Boosted AdSense click-through rate (CTR) by 25% and helped the editorial team identify popular news topics based on real reader data."
            },
            ecotheology_ml: {
                title: "Data-Driven Ecotheology ML Publication",
                image: "",
                tech: ["Python", "Pandas", "Scikit-Learn", "Machine Learning", "Research Publication"],
                problem: "The need for large-scale empirical analysis to prove the relationship between ecotheology implementation and energy efficiency in Islamic schools.",
                execution: "Conducted empirical data surveys, preprocessed datasets using Python Pandas, and applied supervised machine learning classification models for predictive analysis.",
                impact: "Successfully published a national-level scientific paper in the ASCI Journal, providing a data-driven policy foundation for school go-green campaigns."
            },
            diabetes_study: {
                title: "Diabetes Classification Supervised ML Study",
                image: "",
                tech: ["Python", "KNN", "Decision Tree", "Support Vector Machine", "Supervised Learning"],
                problem: "Low accuracy in early diabetes screening due to manual clinical symptoms analysis without computer-aided predictive models.",
                execution: "Conducted a comparative performance analysis of KNN, Decision Tree, and SVM supervised models using Confusion Matrix evaluation metrics (Precision & Recall).",
                impact: "Identified the optimal classification model achieving 92.4% accuracy for early screening, published in the CoreID Journal."
            }
        }
    }
};

// Initialize AOS (Animate On Scroll) and Theme/Contact/Localization handlers
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
        easing: 'ease-in-out'
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    function updateThemeIcon(theme) {
        if (!themeIcon) return;
        if (theme === 'light') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    updateThemeIcon(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = activeTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.glass-nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Scroll Fade-out Hero Indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.style.transition = 'opacity 0.3s ease';
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }

    // Contact Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalContent = submitBtn.innerHTML;

            const lang = localStorage.getItem('lang') || 'id';
            const sendingText = lang === 'en' ? '<i class="fas fa-spinner fa-spin me-2"></i>Sending...' : '<i class="fas fa-spinner fa-spin me-2"></i>Mengirim...';
            const successText = lang === 'en' ? 'Your message has been sent successfully! Thank you for contacting me. I will respond as soon as possible.' : 'Pesan Anda berhasil dikirim! Terima kasih telah menghubungi saya. Saya akan merespons secepatnya.';

            // Show sending state
            submitBtn.disabled = true;
            submitBtn.innerHTML = sendingText;

            setTimeout(() => {
                // Restore button state
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalContent;

                // Show success feedback
                showToast(successText, 'success');
                contactForm.reset();
            }, 1200);
        });
    }

    // Setup localization features
    setupLocalization();
});

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.cloud-ops, .web-dev, .strategic-tech, .creative-media');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter items with animation
        portfolioItems.forEach((item, index) => {
            item.style.animation = 'none';

            setTimeout(() => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    item.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.05}s`;
                } else {
                    item.style.display = 'none';
                }
            }, 10);
        });
    });
});

// Dynamic Project loading by Key (XYZ Case Study Format)
function showProjectByKey(key) {
    const lang = localStorage.getItem('lang') || 'id';
    const project = translations[lang] && translations[lang].projects && translations[lang].projects[key];
    if (!project) return;

    const hasImage = !!project.image;

    // Get DOM references
    const projectModalImg = document.getElementById('projectModalImg');
    const mediaContainer = document.querySelector('.project-modal-media');
    const gridContainer = document.querySelector('.project-modal-grid');

    if (projectModalImg && mediaContainer && gridContainer) {
        if (hasImage) {
            projectModalImg.src = project.image;
            mediaContainer.style.display = 'flex';
            gridContainer.style.gridTemplateColumns = '1.2fr 1fr';
        } else {
            projectModalImg.src = '';
            mediaContainer.style.display = 'none';
            gridContainer.style.gridTemplateColumns = '1fr';
        }
    }

    const projectModalTitle = document.getElementById('projectModalTitle');
    if (projectModalTitle) {
        projectModalTitle.textContent = project.title || 'Project Details';
    }

    const projectModalDesc = document.getElementById('projectModalDesc');
    if (projectModalDesc) {
        const probLabel = lang === 'en' ? 'Problem' : 'Masalah';
        const execLabel = lang === 'en' ? 'Technical Execution' : 'Eksekusi Teknis';
        const impLabel = lang === 'en' ? 'Business Impact' : 'Dampak Bisnis';

        projectModalDesc.innerHTML = `
            <div class="mb-3">
                <strong class="text-white d-block mb-1" style="font-size: 1rem;"><i class="fas fa-exclamation-circle text-primary me-2"></i>${probLabel}</strong>
                <p class="mb-0 text-white-50" style="text-align: justify;">${project.problem || ''}</p>
            </div>
            <div class="mb-3">
                <strong class="text-white d-block mb-1" style="font-size: 1rem;"><i class="fas fa-cogs text-primary me-2"></i>${execLabel}</strong>
                <p class="mb-0 text-white-50" style="text-align: justify;">${project.execution || ''}</p>
            </div>
            <div class="mb-0">
                <strong class="text-white d-block mb-1" style="font-size: 1rem;"><i class="fas fa-chart-line text-primary me-2"></i>${impLabel}</strong>
                <p class="mb-0 text-white-50" style="text-align: justify;">${project.impact || ''}</p>
            </div>
        `;
    }

    const techList = document.getElementById('projectModalTechList');
    if (techList) {
        techList.innerHTML = '';
        const techArray = project.tech || [];
        if (techArray.length > 0) {
            techArray.forEach(tech => {
                const badge = document.createElement('span');
                badge.className = 'badge glass-badge';
                badge.textContent = tech;
                techList.appendChild(badge);
            });
            const techSection = document.getElementById('projectModalTechSection');
            if (techSection) techSection.style.display = 'block';
        } else {
            const techSection = document.getElementById('projectModalTechSection');
            if (techSection) techSection.style.display = 'none';
        }
    }

    const demoBtn = document.getElementById('projectModalDemoLink');
    const codeBtn = document.getElementById('projectModalCodeLink');
    const actionsContainer = document.getElementById('projectModalActions');

    if (demoBtn) {
        if (project.demoLink) {
            demoBtn.href = project.demoLink;
            demoBtn.style.display = 'inline-flex';
        } else {
            demoBtn.style.display = 'none';
        }
    }

    if (codeBtn) {
        if (project.githubLink) {
            codeBtn.href = project.githubLink;
            codeBtn.style.display = 'inline-flex';
        } else {
            codeBtn.style.display = 'none';
        }
    }

    if (actionsContainer) {
        if (!project.demoLink && !project.githubLink) {
            actionsContainer.style.display = 'none';
        } else {
            actionsContainer.style.display = 'flex';
        }
    }
}

// Photography image viewing modal details
function showImage(src, title, description) {
    const projectModalImg = document.getElementById('projectModalImg');
    const mediaContainer = document.querySelector('.project-modal-media');
    const gridContainer = document.querySelector('.project-modal-grid');

    if (projectModalImg && mediaContainer && gridContainer) {
        projectModalImg.src = src;
        mediaContainer.style.display = 'flex';
        gridContainer.style.gridTemplateColumns = '1.2fr 1fr';
    }

    const projectModalTitle = document.getElementById('projectModalTitle');
    if (projectModalTitle) {
        projectModalTitle.textContent = title || '';
    }

    const projectModalDesc = document.getElementById('projectModalDesc');
    if (projectModalDesc) {
        projectModalDesc.textContent = description || '';
    }

    const techSection = document.getElementById('projectModalTechSection');
    if (techSection) techSection.style.display = 'none';

    const actionsContainer = document.getElementById('projectModalActions');
    if (actionsContainer) actionsContainer.style.display = 'none';
}

// Toast Notification Helper
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `custom-toast custom-toast-${type}`;

    const iconClass = type === 'success' ? 'fas fa-check' : 'fas fa-exclamation-triangle';

    toast.innerHTML = `
        <div class="custom-toast-icon">
            <i class="${iconClass}"></i>
        </div>
        <div class="custom-toast-message">${message}</div>
    `;

    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // Remove toast after duration
    setTimeout(() => {
        toast.classList.remove('show');
        const handleTransitionEnd = () => {
            toast.remove();
            toast.removeEventListener('transitionend', handleTransitionEnd);
        };
        toast.addEventListener('transitionend', handleTransitionEnd);
    }, 4000);
}

// Calculate and display age dynamically based on language
function hitungUmur() {
    const tanggalLahir = new Date(2003, 11, 10); // December 10, 2003
    const sekarang = new Date();

    let umur = sekarang.getFullYear() - tanggalLahir.getFullYear();
    const bulanSekarang = sekarang.getMonth();
    const bulanLahir = tanggalLahir.getMonth();
    const tanggalSekarang = sekarang.getDate();
    const tanggalLahirSekarang = tanggalLahir.getDate();

    if (bulanSekarang < bulanLahir || (bulanSekarang === bulanLahir && tanggalSekarang < tanggalLahirSekarang)) {
        umur--;
    }

    const umurElement = document.getElementById("umur");
    if (umurElement) {
        const lang = localStorage.getItem('lang') || 'id';
        const suffix = lang === 'en' ? ' years old' : ' tahun';
        umurElement.textContent = umur + suffix;
    }
}

// Typing animation for hero section
const initialLang = localStorage.getItem('lang') || 'id';
const phrases = initialLang === 'en' ? [
    "Cloud & IT Operations Specialist ",
    "Full-Stack Web & Systems Developer ",
    "Strategic Tech Analyst & BD Officer "
] : [
    "Spesialis Cloud & IT Operations ",
    "Pengembang Web & Sistem Full-Stack ",
    "Analisis Teknologi Strategis & BD "
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const ridloElement = document.querySelector(".ridlo");

    if (!ridloElement) return;

    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && charIndex <= currentPhrase.length) {
        ridloElement.innerHTML = currentPhrase.substring(0, charIndex) + '<span class="cursor">|</span>';
        charIndex++;
        typingSpeed = 100;
    } else if (isDeleting && charIndex >= 0) {
        ridloElement.innerHTML = currentPhrase.substring(0, charIndex) + '<span class="cursor">|</span>';
        charIndex--;
        typingSpeed = 50;
    }

    if (charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end of phrase
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before next phrase
    }

    setTimeout(typeWriter, typingSpeed);
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Localization system toggle and apply logic
function setupLocalization() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;

    let currentLang = localStorage.getItem('lang') || 'id';

    function applyTranslations(lang) {
        // Toggle the button text to show the option to switch to
        langToggle.textContent = lang === 'id' ? 'EN' : 'ID';
        document.documentElement.setAttribute('lang', lang);

        // Update all elements with data-translate
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update placeholders
        const placeholders = document.querySelectorAll('[data-translate-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-translate-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });

        // Re-run age calculation for proper localized suffix
        hitungUmur();
    }

    // Apply translation on load
    applyTranslations(currentLang);

    // Event listener for switcher click
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        localStorage.setItem('lang', currentLang);
        applyTranslations(currentLang);

        // Reset typing animation stats
        phraseIndex = 0;
        charIndex = 0;
        isDeleting = false;

        // Mutate phrases list according to language
        if (currentLang === 'en') {
            phrases[0] = "Cloud & IT Operations Specialist ";
            phrases[1] = "Full-Stack Web & Systems Developer ";
            phrases[2] = "Strategic Tech Analyst & BD Officer ";
        } else {
            phrases[0] = "Spesialis Cloud & IT Operations ";
            phrases[1] = "Pengembang Web & Sistem Full-Stack ";
            phrases[2] = "Analisis Teknologi Strategis & BD ";
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navbarHeight = document.querySelector('.glass-nav').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Add fade in animation keyframes dynamically
const styleElement = document.createElement('style');
styleElement.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .cursor {
        animation: blink 0.7s infinite;
    }
    
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
`;
document.head.appendChild(styleElement);

// Scroll Progress Bar update on scroll
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledPercent = winScroll / height;

    const scrollBar = document.getElementById("scrollBar");
    if (scrollBar) {
        scrollBar.style.width = (scrolledPercent * 100) + "%";
    }
});

// Add loading animation class to body
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Lazy loading for images using IntersectionObserver
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// Mouse coordinates tracking for spotlight card reflections
document.querySelectorAll('.card, .portfolio-card, .cert-card, .skill-category-card, .timeline-item .content, .glass-panel').forEach(el => {
    el.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Add 3D Tilt Hover effect for cards
document.querySelectorAll('.card, .portfolio-card, .cert-card').forEach(card => {
    card.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((centerY - y) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        this.style.transition = 'transform 0.5s ease';
    });

    card.addEventListener('mouseenter', function () {
        this.style.transition = 'none';
    });
});

console.log('Portfolio loaded successfully! 🚀');

// Back to Top Button Logic (Smooth scroll wrapper)
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Active Navbar Link highlighting on page scroll
const sectionsList = document.querySelectorAll('section, footer');
const navLinksList = document.querySelectorAll('.glass-nav .nav-link');

if (sectionsList.length > 0 && navLinksList.length > 0) {
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const navbarHeight = document.querySelector('.glass-nav').offsetHeight;

        sectionsList.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinksList.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

// Click to Copy Email function with localized toast notifications
function copyEmailToClipboard(element) {
    const emailText = "akhmadd432@gmail.com";
    const lang = localStorage.getItem('lang') || 'id';
    const successMsg = lang === 'en' ? 'Email address successfully copied to clipboard!' : 'Alamat email berhasil disalin ke clipboard!';
    const failMsg = lang === 'en' ? 'Failed to copy email. Please copy it manually.' : 'Gagal menyalin email. Silakan salin secara manual.';

    navigator.clipboard.writeText(emailText).then(() => {
        showToast(successMsg, 'success');
    }).catch(err => {
        showToast(failMsg, 'warning');
    });
}
