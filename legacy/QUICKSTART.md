# 🚀 Quick Start Guide

## Langkah Cepat Deploy Portfolio

### 1️⃣ Test Lokal (5 menit)

Buka file `index.html` langsung di browser, atau jalankan local server:

**Opsi A - Langsung buka file:**
```
Double click index.html
```

**Opsi B - Python server:**
```bash
python -m http.server 8000
# Buka: http://localhost:8000
```

**Opsi C - Node.js:**
```bash
npx serve .
# Buka URL yang muncul
```

### 2️⃣ Deploy ke Vercel (10 menit)

**Cara Termudah - Drag & Drop:**

1. Buka https://vercel.com/new
2. Login dengan GitHub
3. Drag & drop folder portfolio ini
4. Tunggu deploy selesai
5. ✅ Done! Portfolio sudah online

**Cara Profesional - Via GitHub:**

```bash
# 1. Init git (jika belum)
git init

# 2. Add semua file
git add .

# 3. Commit
git commit -m "Portfolio modern dengan gradien dan animasi"

# 4. Create repo di GitHub (via web)
# Lalu connect:
git remote add origin https://github.com/USERNAME/portfolio.git
git branch -M main
git push -u origin main

# 5. Di Vercel:
# - Import repository
# - Click Deploy
# - Selesai!
```

### 3️⃣ Customize (Opsional)

**Update Info Pribadi:**
Edit `index.html` bagian:
- Nama
- Bio
- Email
- Social media links
- Portfolio items

**Ganti Warna:**
Edit `style.css` di bagian `:root`:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Ganti dengan warna favorit */
}
```

**Tambah Project:**
Copy-paste struktur card di section portfolio, update info project.

## 📋 Checklist

Sebelum deploy, pastikan:

- [ ] Foto profil sudah diganti (muka.jpg, muka1.png)
- [ ] Info pribadi sudah update
- [ ] Email dan social media links benar
- [ ] Portfolio items sudah sesuai
- [ ] Test di mobile view (F12 > Toggle device)
- [ ] Semua link berfungsi

## 🎨 Fitur Utama

✨ **Hero Section** - Animasi typing dan gradient background
🎓 **Certifications** - Section khusus untuk sertifikasi
💼 **Portfolio** - Filter untuk fotografi, videografi, dan software
📱 **Responsive** - Tampil sempurna di semua device
🚀 **Fast** - Optimized untuk loading cepat

## 🆘 Butuh Bantuan?

**Error saat deploy?**
- Check file `vercel.json` ada
- Pastikan semua path file benar
- Lihat Vercel deployment logs

**Animasi tidak jalan?**
- Check browser console (F12)
- Pastikan internet connect (untuk load AOS dari CDN)

**Gambar tidak muncul?**
- Check path di HTML
- Pastikan file ada di folder `img/`

## 📞 Support

Email: akhmadd432@gmail.com
GitHub: [@akhmdrdlo](https://github.com/akhmdrdlo)

---

**Selamat! Portfolio modern Anda siap online! 🎉**
