# GitHub Pages Deployment

Workflow ini akan otomatis mendeploy aplikasi Anda ke GitHub Pages setiap kali ada push ke branch `main`.

## Setup

1. Pergi ke **Settings** > **Pages** di repository GitHub Anda
2. Di **Source**, pilih **GitHub Actions**
3. Push code Anda ke branch `main`
4. Workflow akan otomatis berjalan dan deploy aplikasi Anda

## Manual Deploy

Anda juga bisa trigger deployment secara manual dari tab **Actions** di GitHub.

## URL

Setelah deploy berhasil, aplikasi Anda akan tersedia di:
- Jika menggunakan custom domain: `https://yourdomain.com`
- Jika user/org page: `https://username.github.io`
- Jika project page: `https://username.github.io/repository-name`

Konfigurasi Vite sudah diset ke base path `/` yang cocok untuk custom domain atau user/org GitHub Pages.
