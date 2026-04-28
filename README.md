# 🌾 Nông Nghiệp Số Phù Cát · Sinh học 12A6

Website triển lãm số kết nối kiến thức Sinh học 12 (Di truyền học – Lai hữu tính) với thực tiễn nông nghiệp tại Phù Cát, Bình Định.

## 📁 Cấu trúc thư mục

```
phu-cat-bio/
├── index.html                    ← Trang chính (HTML)
├── styles.css                    ← Toàn bộ CSS
├── script.js                     ← JavaScript (menu, hiệu ứng, QR code)
├── bantin-trang-trai-heo.mp4     ← Video bản tin Tổ 2 (480p, ~40MB)
├── vercel.json                   ← Cấu hình deploy Vercel
└── README.md                     ← File hướng dẫn này
```

Toàn bộ là **website tĩnh** — không cần build, không cần Node.js, mở trực tiếp `index.html` cũng chạy được.

## 🖥️ Mở trong VS Code

1. Tải/sao chép thư mục `phu-cat-bio/` về máy.
2. Mở VS Code → **File** → **Open Folder** → chọn thư mục `phu-cat-bio`.
3. Cài extension **Live Server** (của Ritwick Dey) để xem trước trang web.
4. Click chuột phải vào `index.html` → chọn **Open with Live Server**.
5. Trang web sẽ tự động mở trong trình duyệt tại `http://localhost:5500`.

## 🚀 Deploy lên Vercel

### Cách 1 — Drag & Drop (đơn giản nhất, không cần Git)

1. Truy cập [vercel.com](https://vercel.com) và đăng nhập (có thể dùng Google/GitHub).
2. Click **Add New** → **Project**.
3. Kéo thả nguyên thư mục `phu-cat-bio/` vào trang web.
4. Đặt tên project (ví dụ `nong-nghiep-phu-cat`) → **Deploy**.
5. Sau ~30 giây, Vercel sẽ cấp cho bạn URL kiểu `https://nong-nghiep-phu-cat.vercel.app`.

### Cách 2 — Qua GitHub (chuyên nghiệp hơn)

```bash
# Trong thư mục phu-cat-bio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/phu-cat-bio.git
git push -u origin main
```

Sau đó:
1. Vào [vercel.com](https://vercel.com) → **Add New** → **Project**.
2. Chọn **Import Git Repository** → chọn repo vừa push.
3. Click **Deploy**. Xong!

Mỗi lần `git push` sau này, Vercel sẽ tự động deploy lại bản mới nhất.

### Cách 3 — Vercel CLI (cho người thích dòng lệnh)

```bash
npm i -g vercel
cd phu-cat-bio
vercel
```

Làm theo hướng dẫn trên màn hình → site sẽ live trong vài giây.

## ✏️ Tùy chỉnh nội dung

| Muốn sửa gì | Mở file | Tìm |
|---|---|---|
| Tiêu đề trang | `index.html` | `<title>` |
| Lời chào trang chủ | `index.html` | `class="hero__lede"` |
| Thông tin 3 giống heo | `index.html` | `class="breed"` |
| Link YouTube | `index.html` | `youtube.com/embed/` |
| Video bản tin | thay file `bantin-trang-trai-heo.mp4` | giữ nguyên tên file |
| Các bước trồng mai | `index.html` | `class="process"` |
| Danh sách học sinh | `index.html` | `class="authors"` |
| Email liên hệ | `index.html` | `lamda388@gmail.com` |
| Màu chủ đạo | `styles.css` | `:root` (đầu file) |

### Ví dụ — Đổi email liên hệ

Trong `index.html` tìm dòng:
```html
<a href="mailto:lamda388@gmail.com" class="contact__mail">
```
Đổi cả `mailto:lamda388@gmail.com` và phần `<span class="contact__mail-addr">lamda388@gmail.com</span>` bên dưới.

### Ví dụ — Đổi màu chủ đạo

Trong `styles.css`, phần `:root` ở đầu file:
```css
--green-800: #1b4332;   /* xanh đậm chủ đạo */
--gold-500:  #d4a017;   /* vàng mai chủ đạo */
```
Đổi mã hex theo ý bạn.

## 🎨 Tính năng nổi bật

- **Responsive** — chạy mượt trên cả máy tính, máy tính bảng, điện thoại.
- **Hover trên ảnh giống heo** — hiển thị đặc điểm di truyền (theo đúng mô tả).
- **Video YouTube nhúng** — phóng viên trang trại heo Phù Cát.
- **QR Code tự sinh** — quét sẽ dẫn đến chính URL của trang (cập nhật tự động sau khi deploy).
- **Hiệu ứng cuộn** — các phần xuất hiện mượt khi cuộn xuống.
- **Menu mobile** — nút hamburger thân thiện trên điện thoại.

## 📝 Ghi chú về QR Code

QR code được sinh tự động từ URL hiện tại của trang nhờ API miễn phí `api.qrserver.com`.
Sau khi deploy lên Vercel, mã QR sẽ tự động trỏ đến URL Vercel của bạn — không cần làm gì thêm!

## 📞 Hỗ trợ

Nếu gặp vấn đề khi deploy, hãy kiểm tra:
1. Đã đẩy đúng thư mục chứa `index.html` (không phải thư mục cha).
2. Tên file là `index.html` chữ thường (không phải `Index.html`).
3. Mở Console trình duyệt (F12) xem có lỗi mạng nào không.

Chúc thầy/cô và các em 12A6 có một dự án thành công rực rỡ! 🌟
