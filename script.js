function handleScroll() {
    var about = document.querySelector('.about-me');
    var aboutPosition = window.pageYOffset;
    var windowHeight = window.innerHeight;

    if (aboutPosition > (about.offsetTop - windowHeight + 100)) {
      about.classList.add('show');
    } else {
      about.classList.remove('show');
    }

    var skill = document.querySelector('.skill');
    var skillPosition = window.pageYOffset;
    var windowHeight = window.innerHeight;

    if (skillPosition > (skill.offsetTop - windowHeight + 100)) {
      skill.classList.add('show');
    } else {
      skill.classList.remove('show');
    }

    var portfolio = document.querySelector('.portfolio');
    var portfolioPosition = window.pageYOffset;
    var windowHeight = window.innerHeight;

    if (portfolioPosition > (portfolio.offsetTop - windowHeight + 100)) {
      portfolio.classList.add('show');
    } else {
      portfolio.classList.remove('show');
    }

    var kontak = document.querySelector('.kontak');
    var kontakPosition = window.pageYOffset;
    var windowHeight = window.innerHeight;

    if (kontakPosition > (kontak.offsetTop - windowHeight + 100)) {
      kontak.classList.add('show');
    } else {
      kontak.classList.remove('show');
    }
  }

  window.addEventListener('scroll', handleScroll);

  //Bagian Portofolio
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');

      filterButtons.forEach(btn => {
        btn.classList.remove('active');
      });
      button.classList.add('active');

      const portfolioItems = document.querySelectorAll('.portfolio .col');
      portfolioItems.forEach(item => {
        item.style.display = 'none';
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
        }
      });
    });
  });

window.addEventListener('scroll', handleScroll);

function showImage(src) {
  const largeImage = document.getElementById('largeImage');
  largeImage.src = src;
}

function hitungUmur() {
  // Tanggal lahir (ganti dengan tanggal lahir Anda)
  const tanggalLahir = new Date(2003, 11, 10); // Bulan dimulai dari 0 (Januari = 0, Desember = 11)

  // Tanggal saat ini
  const sekarang = new Date();

  // Menghitung selisih tahun
  let umur = sekarang.getFullYear() - tanggalLahir.getFullYear();

  // Mengurangi 1 jika belum ulang tahun di tahun ini
  const bulanSekarang = sekarang.getMonth();
  const bulanLahir = tanggalLahir.getMonth();
  const tanggalSekarang = sekarang.getDate();
  const tanggalLahirSekarang = tanggalLahir.getDate();
  if (bulanSekarang < bulanLahir || (bulanSekarang === bulanLahir && tanggalSekarang < tanggalLahirSekarang)) {
    umur--;
  }

  // Menampilkan hasil dalam elemen HTML dengan id "umur"
  document.getElementById("umur").textContent = umur + " tahun";
}

// Memanggil fungsi untuk menghitung dan menampilkan umur
hitungUmur();


