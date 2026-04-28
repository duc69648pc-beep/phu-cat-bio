# 🌊 Nông Nghiệp Số Phù Cát · v4

Multi-page SPA với ảnh thật, hover effects, chatbot tư vấn AI rule-based.

## 📁 Cấu trúc

```
phu-cat-bio/
├── index.html · styles.css · script.js · vercel.json
├── bantin-trang-trai-heo.mp4
└── img/
    ├── tap-the-12a6.jpg          ← nền trang chủ
    ├── poster-bantin.jpg         ← thumbnail video
    ├── sodo-lai-heo.jpg          ← sơ đồ lai (Dòng máu)
    ├── heo-landrace.jpg          ← ảnh heo Landrace
    ├── heo-yorkshire.jpg         ← ảnh heo Yorkshire
    ├── heo-duroc.jpg             ← ảnh heo Duroc
    ├── brochure-thong-tin.jpg    ← brochure 1 (Mai vàng)
    ├── brochure-lien-he.jpg      ← brochure 2 (Mai vàng)
    └── bao-trang-1..5.jpg        ← 5 trang tạp chí
```

## ✨ Tính năng v4

| Tính năng | Mô tả |
|---|---|
| Multi-page | 5 trang riêng biệt + hiệu ứng chuyển mượt |
| Hover heo | Rê chuột vào ảnh giống heo → hiện đặc điểm di truyền |
| Brochure | 2 brochure xếp nghiêng nghệ thuật, click xem to |
| Tạp chí 5 trang | Featured + thumbnails grid, lightbox prev/next + phím mũi tên |
| Chatbot | 3 bot riêng: Bác sĩ Heo · Nghệ nhân Mai · Phóng viên 12A6 |

## 🎬 Khắc phục video không phát

Nếu click Play vẫn không chạy (chỉ hiện poster), nguyên nhân là **Vercel Free plan giới hạn Git LFS bandwidth**. Có 2 cách sửa:

### Cách A — Upload YouTube (KHUYẾN NGHỊ)

1. [youtube.com](https://youtube.com) → đăng nhập Gmail
2. Click máy quay → **Upload video** → kéo file MP4 vào
3. Visibility: **Unlisted** (Không liệt kê) → Publish
4. Copy ID video từ URL: `https://youtu.be/`**`abc123XYZ`** → ID = `abc123XYZ`

Mở `index.html`, tìm đoạn comment:

```html
<!-- Phương án dự phòng: YouTube embed (uncomment khi cần)
<iframe src="https://www.youtube.com/embed/VIDEO_ID_O_DAY" ...></iframe>
-->
```

**Đổi thành** (bỏ comment + dán ID):

```html
<iframe
  src="https://www.youtube.com/embed/abc123XYZ"
  title="Bản tin Tổ 2"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen loading="lazy"></iframe>
```

Đồng thời **comment đoạn `<video>...</video>`** phía trên (thêm `<!--` đầu và `-->` cuối).

Push:
```bash
git add index.html
git commit -m "Switch to YouTube embed"
git push
```

### Cách B — Untrack khỏi LFS

```bash
git lfs untrack "*.mp4"
git rm --cached bantin-trang-trai-heo.mp4
git add .gitattributes bantin-trang-trai-heo.mp4
git commit -m "Remove video from LFS"
git push --force
```

## 🚀 Deploy update

```bash
git add .
git commit -m "v4: photo hovers + magazine + brochures"
git push
```

Vercel tự deploy ~1-2 phút.

## 📞 Liên hệ

Email: lamda388@gmail.com  
Lớp 12A6 · Trường THPT Số 1 Phù Cát · Bình Định
