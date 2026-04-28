# 🌊 Nông Nghiệp Số Phù Cát · Sinh học 12A6 · v2

Website triển lãm số nhiều trang (multi-page SPA) với tông màu xanh dương tươi mát.

## 📁 Cấu trúc thư mục

```
phu-cat-bio/
├── index.html                    ← Trang chính (SPA 5 trang)
├── styles.css                    ← CSS với tông xanh ocean fresh
├── script.js                     ← Logic chuyển trang + QR
├── bantin-trang-trai-heo.mp4     ← Video bản tin Tổ 2 (~40MB)
├── img/
│   ├── tap-the-12a6.jpg          ← Ảnh nền trang chủ (tập thể lớp)
│   ├── sodo-lai-heo.jpg          ← Sơ đồ lai heo (Pig Breeding Scheme)
│   └── bai-bao-mai-vang.jpg      ← Bài báo Mai Vàng Bình Định
├── vercel.json
└── README.md
```

## ✨ Thay đổi so với v1

| Thay đổi | Mô tả |
|---|---|
| **Multi-page SPA** | Mỗi mục trong nav giờ là 1 trang riêng, click sẽ chuyển trang (không scroll) |
| **Tông màu** | Đổi từ xanh lá rừng → **xanh dương ocean** tươi mát |
| **Trang chủ** | Bỏ phần "3 mục tiêu của dự án" + dùng ảnh tập thể 12A6 làm nền |
| **Trang Dòng máu quý tộc** | Thay 3 SVG heo → **sơ đồ lai thật** (Pig Breeding Scheme) |
| **Trang Góc học trò** | Thay danh sách → **bài báo Mai Vàng** (poster) + danh sách tác giả |
| **URL routing** | Mỗi trang có hash riêng: `#trang-chu`, `#dong-mau`, `#mai-vang`, `#hoc-tro`, `#lien-he` |

## 🚀 Cách deploy

Đã có repo GitHub `duc69648pc-beep/phu-cat-bio` kết nối với Vercel.

```bash
# Trong thư mục phu-cat-bio
git add .
git commit -m "v2: multi-page SPA + ocean palette + new images"
git push
```

Vercel sẽ tự động deploy lại trong ~1-2 phút.

## 🎨 Bảng màu

```css
--blue-950: #03045e;   /* xanh navy đậm nhất */
--blue-900: #023e8a;
--blue-800: #0077b6;   /* màu chính */
--blue-700: #0096c7;
--blue-600: #00b4d8;   /* xanh sáng */
--blue-500: #48cae4;
--blue-400: #90e0ef;
--blue-300: #ade8f4;
--blue-200: #caf0f8;   /* xanh nhạt */
--blue-100: #e8f7fb;   /* nền */

--gold-500: #f9c74f;   /* vàng accent (giữ lại từ mai) */
```

## ✏️ Tùy chỉnh

| Muốn sửa | Mở file | Tìm |
|---|---|---|
| Đổi ảnh nền trang chủ | thay file `img/tap-the-12a6.jpg` | giữ nguyên tên |
| Đổi sơ đồ lai heo | thay file `img/sodo-lai-heo.jpg` | giữ nguyên tên |
| Đổi bài báo | thay file `img/bai-bao-mai-vang.jpg` | giữ nguyên tên |
| Đổi tông màu | `styles.css` → block `:root` ở đầu file |
| Đổi nội dung từng trang | `index.html` → tìm `data-page="..."` |
| Đổi email | `index.html` → `lamda388@gmail.com` |

## 🔗 Tính năng

- ✅ Multi-page navigation với hiệu ứng chuyển mượt
- ✅ Hash URL routing (chia sẻ link đến từng trang)
- ✅ Back/Forward trình duyệt hoạt động đúng
- ✅ Click ảnh bài báo → mở lightbox xem to
- ✅ Video tự pause khi chuyển trang (tiết kiệm bandwidth)
- ✅ QR code tự sinh từ URL
- ✅ Responsive mobile + tablet
- ✅ Hiệu ứng Ken Burns trên ảnh nền hero

## 📞 Liên hệ

Email: lamda388@gmail.com  
Lớp 12A6 · Trường THPT Phù Cát · Bình Định
