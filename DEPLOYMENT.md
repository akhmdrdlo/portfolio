# 🚀 Panduan Deploy ke Vercel

## Metode 1: Deploy via GitHub (Recommended)

### Step 1: Push ke GitHub
```bash
git init
git add .
git commit -m "Initial commit - Modern portfolio"
git branch -M main
git remote add origin https://github.com/akhmdrdlo/portfolio.git
git push -u origin main
```

### Step 2: Connect ke Vercel
1. Buka [vercel.com](https://vercel.com)
2. Sign in dengan GitHub
3. Click "Add New Project"
4. Import repository portfolio Anda
5. Vercel akan otomatis detect settings
6. Click "Deploy"

### Step 3: Custom Domain (Opsional)
1. Buka project di Vercel dashboard
2. Go to Settings > Domains
3. Add custom domain Anda
4. Follow instruksi DNS configuration

## Metode 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login
```bash
vercel login
```

### Step 3: Deploy
```bash
# Deploy preview
vercel

# Deploy production
vercel --prod
```

## Metode 3: Drag & Drop

1. Buka [vercel.com/new](https://vercel.com/new)
2. Drag & drop folder project Anda
3. Wait for deployment
4. Done! 🎉

## ⚙️ Configuration

File `vercel.json` sudah dikonfigurasi untuk:
- Static file serving
- Proper routing
- Optimal caching

## 🔧 Environment Variables

Tidak ada environment variables yang diperlukan karena ini adalah static website.

## 📊 Performance Tips

1. **Images**: Sudah optimized dengan lazy loading
2. **CSS**: Menggunakan modern CSS dengan minimal overhead
3. **JS**: Vanilla JavaScript tanpa framework berat
4. **CDN**: Bootstrap dan AOS dari CDN untuk caching optimal

## 🌐 Custom Domain Setup

### Vercel Domain
Setelah deploy, Anda akan mendapat URL seperti:
```
https://portfolio-akhmdrdlo.vercel.app
```

### Custom Domain
Untuk menggunakan domain sendiri (misal: akhmdrdlo.com):

1. Beli domain dari provider (Namecheap, GoDaddy, dll)
2. Di Vercel dashboard, add domain
3. Update DNS records di domain provider:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation (5-48 jam)

## 🔄 Auto Deploy

Setelah connect dengan GitHub, setiap push ke branch main akan otomatis trigger deployment baru.

### Branch Preview
- Push ke branch lain akan create preview deployment
- Setiap PR akan punya unique preview URL

## 📱 Testing

Sebelum deploy, test locally:
```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js
npx serve .

# Menggunakan PHP
php -S localhost:8000
```

Buka browser: `http://localhost:8000`

## ✅ Checklist Pre-Deploy

- [ ] Test semua link berfungsi
- [ ] Check responsive di mobile/tablet
- [ ] Verify semua gambar loading
- [ ] Test portfolio filter
- [ ] Check contact links
- [ ] Verify typing animation
- [ ] Test scroll animations

## 🐛 Troubleshooting

### Images tidak muncul
- Check path relatif di HTML
- Pastikan file ada di folder `img/`

### Animasi tidak jalan
- Check console untuk error
- Verify AOS library loaded

### CSS tidak apply
- Clear browser cache
- Check CSS file path

## 📈 Analytics (Opsional)

Tambahkan Google Analytics atau Vercel Analytics:

1. Vercel Analytics (Free):
   - Enable di project settings
   - Automatic tracking

2. Google Analytics:
   - Add tracking code di `<head>` index.html

## 🎉 Selesai!

Portfolio Anda sekarang live dan accessible dari mana saja!

Share link Anda:
- LinkedIn
- GitHub profile
- Resume/CV
- Social media

---

**Need help?** Contact: akhmadd432@gmail.com
