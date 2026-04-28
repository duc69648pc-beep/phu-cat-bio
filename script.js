/* ============================================================
   NÔNG NGHIỆP SỐ PHÙ CÁT — Multi-page SPA + Chatbot
   ============================================================ */

/* ============================================================
   CHATBOT KNOWLEDGE BASES (3 trang)
   ============================================================ */
const CHATBOT_CONFIG = {

  /* ---------- Trang 02: Dòng máu quý tộc ---------- */
  "dong-mau": {
    name: "Bác sĩ Heo",
    avatar: "🐷",
    status: "Chuyên gia chăn nuôi · 12A6",
    greeting:
      "Xin chào! Mình là <strong>Bác sĩ Heo</strong> — trợ lý tư vấn về " +
      "phép lai 3 dòng máu và chăn nuôi heo tại Phù Cát. Bạn muốn hỏi gì nào? 🐷",
    suggestions: [
      "Ưu thế lai là gì?",
      "Vì sao chọn 3 giống heo?",
      "Heo Duroc có gì đặc biệt?",
      "Trang trại Cát Trinh ở đâu?",
      "F1 nghĩa là gì?",
      "Sao gọi đực cuối?"
    ],
    topicKeywords: [
      "heo", "lon", "lai", "giong", "duroc", "landrace", "yorkshire",
      "di truyen", "phu cat", "cat trinh", "thit", "trang trai",
      "chan nuoi", "f1", "thuong pham", "uu the", "nac", "de", "sinh san",
      "sua", "tang trong", "binh dinh", "ban tin", "to 2"
    ],
    knowledge: [
      {
        keywords: ["uu the lai", "heterosis", "lai vuot troi", "tot hon bo me"],
        answer:
          "<strong>Ưu thế lai (heterosis)</strong> là hiện tượng con lai F1 vượt trội " +
          "hơn cả bố lẫn mẹ về các đặc tính kinh tế. Heo lai 3 dòng máu Landrace × " +
          "Yorkshire × Duroc cho con cháu <em>đẻ sai</em> (như mẹ Landrace), " +
          "<em>lớn nhanh</em> (như bố Yorkshire), <em>thịt ngon nạc nhiều</em> (như Duroc). 🌟"
      },
      {
        keywords: ["vi sao", "tai sao", "ly do", "sao chon", "chon 3 giong", "ba giong"],
        answer:
          "Mỗi giống heo có một <em>thế mạnh riêng</em>: Landrace giỏi sinh sản, " +
          "Yorkshire lớn nhanh, Duroc cho thịt nạc. Khi lai 3 dòng máu, ta tận dụng " +
          "được ưu điểm của <strong>cả ba giống</strong> trong cùng một con heo lai — " +
          "đó chính là sự khôn ngoan của người chăn nuôi Phù Cát! 🧬"
      },
      {
        keywords: ["landrace", "dan mach", "me", "sinh san"],
        answer:
          "<strong>Landrace</strong> đến từ Đan Mạch 🇩🇰, là <em>chuyên gia sinh sản</em>: " +
          "đẻ <strong>10–14 con/lứa</strong>, tiết sữa dồi dào, nuôi con khéo. " +
          "Đặc điểm dễ nhận: thân dài, có 16–17 đôi xương sườn (thường heo chỉ có 14), " +
          "tai to rủ che mặt."
      },
      {
        keywords: ["yorkshire", "anh quoc", "bo", "lon nhanh", "tang trong"],
        answer:
          "<strong>Yorkshire</strong> đến từ Anh Quốc 🇬🇧, là <em>chuyên gia tăng trọng</em>: " +
          "tăng <strong>800–900g/ngày</strong>, đạt 100kg sau 5–6 tháng. " +
          "Đặc điểm: lông trắng tuyền, tai dựng đứng, thích nghi tốt với khí hậu Việt Nam. 🐖"
      },
      {
        keywords: ["duroc", "hoa ky", "my", "duc cuoi", "thit nac", "chat luong thit"],
        answer:
          "<strong>Duroc</strong> đến từ Hoa Kỳ 🇺🇸, là <em>chuyên gia thịt nạc</em>: " +
          "tỷ lệ nạc đạt <strong>58–62%</strong>, thịt vân mỡ đẹp như bò Wagyu. " +
          "Lông màu nâu đỏ đặc trưng, sức đề kháng vượt trội. Vì để cuối phép lai " +
          "nên gọi là <em>'đực cuối'</em>."
      },
      {
        keywords: ["duc cuoi", "duc cuoi cung", "terminal sire"],
        answer:
          "<strong>Đực cuối</strong> (terminal sire) là con đực dùng ở <em>bước cuối</em> " +
          "của phép lai 3 dòng. Trong sơ đồ Phù Cát: F1 (Landrace × Yorkshire) cái sẽ " +
          "lai với Duroc đực → thế hệ sau là heo thịt thương phẩm, không dùng để giống nữa."
      },
      {
        keywords: ["f1", "the he f1", "con lai dau"],
        answer:
          "<strong>F1</strong> là <em>thế hệ con lai đầu tiên</em> giữa hai giống thuần " +
          "khác nhau. Trong sơ đồ này, F1 = Landrace ♀ × Yorkshire ♂ → con cái F1 " +
          "vừa khéo nuôi con (từ mẹ) vừa lớn nhanh (từ bố). Sau đó F1 cái lại được lai " +
          "với Duroc để có heo thịt cuối cùng."
      },
      {
        keywords: ["cat trinh", "phu cat", "trang trai", "o dau", "binh dinh"],
        answer:
          "<strong>Cát Trinh</strong> là một xã thuộc huyện Phù Cát, tỉnh Bình Định 🌾 — " +
          "nơi tập trung nhiều trang trại chăn nuôi heo áp dụng phép lai 3 dòng máu. " +
          "Đây cũng là một trong những vùng nuôi heo chất lượng cao nổi tiếng của miền Trung."
      },
      {
        keywords: ["ti le nac", "phan tram nac", "nac bao nhieu"],
        answer:
          "Tỷ lệ nạc của heo lai 3 dòng máu đạt <strong>58–62%</strong> — " +
          "rất cao so với heo thường (chỉ ~50%). Đây là lý do heo lai được giá hơn " +
          "trên thị trường, đặc biệt khi xuất sang siêu thị và hàng quán cao cấp. 🥩"
      },
      {
        keywords: ["nuoi viet nam", "khi hau", "thich nghi", "co nuoi duoc"],
        answer:
          "Cả ba giống đều <em>thích nghi tốt</em> với khí hậu nhiệt đới Việt Nam, " +
          "đặc biệt là Yorkshire. Tuy nhiên cần chuồng trại thoáng mát, đủ nước sạch " +
          "và chế độ dinh dưỡng cân bằng — như tại các trang trại Cát Trinh."
      },
      {
        keywords: ["heo thit", "thuong pham", "ban thit", "san pham"],
        answer:
          "Thế hệ cuối của phép lai (3 dòng máu) là <strong>heo thịt thương phẩm</strong> — " +
          "không dùng để làm giống mà bán lấy thịt. Thịt heo lai có <em>vân mỡ đẹp</em>, " +
          "tỷ lệ nạc cao và mềm, được nhiều nhà hàng cao cấp đặt hàng."
      },
      {
        keywords: ["hoc duoc gi", "y nghia", "hoc sinh", "ich loi"],
        answer:
          "Qua phép lai 3 dòng máu, học sinh hiểu được <em>ứng dụng thực tế</em> của " +
          "<strong>di truyền học</strong>: từ kiến thức trong SGK Sinh học 12, các nông dân " +
          "đã tạo ra giá trị kinh tế lớn ngay tại quê hương Phù Cát! 🎓"
      },
      {
        keywords: ["video", "ban tin", "to 2", "xem video"],
        answer:
          "Video <em>Bản tin Tổ 2</em> bên dưới ghi lại hành trình các bạn 12A6 " +
          "đến tham quan trang trại heo thực tế tại Phù Cát. Bạn cuộn xuống để xem nhé! 🎬"
      }
    ]
  },

  /* ---------- Trang 03: Mai vàng ---------- */
  "mai-vang": {
    name: "Nghệ nhân Mai",
    avatar: "🌼",
    status: "Chuyên gia mai vàng · Phù Cát",
    greeting:
      "Chào bạn! Mình là <strong>Nghệ nhân Mai</strong> — sẵn sàng chia sẻ với bạn " +
      "về kỹ thuật trồng và lai tạo Mai vàng Bình Định. Bạn muốn biết điều gì? 🌼",
    suggestions: [
      "Lai hữu tính là gì?",
      "Mai bao nhiêu cánh là đẹp?",
      "Khác ghép cành thế nào?",
      "Mai có giá bao nhiêu?",
      "Vàng xanh nghĩa là gì?",
      "Bao lâu thì có cây con?"
    ],
    topicKeywords: [
      "mai", "hoa", "canh", "vang", "gieo", "hat", "cay", "trong",
      "ghep", "lai", "huu tinh", "binh dinh", "phu cat", "que",
      "tet", "xuan", "de", "dang", "gia tri", "xanh"
    ],
    knowledge: [
      {
        keywords: ["lai huu tinh", "huu tinh", "gieo hat la gi"],
        answer:
          "<strong>Lai hữu tính</strong> là phương pháp tạo cây con từ <em>hạt giống</em> " +
          "(qua thụ phấn giữa hoa đực và hoa cái). Khác với ghép cành (vô tính, sao chép " +
          "cây mẹ), gieo hạt cho ra cây con <em>có biến dị di truyền</em> — có thể đẹp " +
          "hơn cả cây mẹ! 🌱"
      },
      {
        keywords: ["khac ghep", "ghep canh", "khac biet", "so sanh", "vo tinh"],
        answer:
          "<strong>Ghép cành</strong> (vô tính) cho ra cây con giống hệt cây mẹ — nhanh " +
          "thu hoạch nhưng <em>không có cải thiện di truyền</em>. " +
          "<strong>Gieo hạt</strong> (hữu tính) lâu hơn (3–5 năm mới đẹp) nhưng cây có " +
          "<em>bộ đế vững chãi, sống lâu, dáng tự nhiên</em> — đó là lý do dân Phù Cát chọn cách này. 🌳"
      },
      {
        keywords: ["bao nhieu canh", "so canh", "9 canh", "canh dep", "canh hoa"],
        answer:
          "Mai vàng Phù Cát đẹp nhất khi có <strong>từ 9 đến 36 cánh</strong>: " +
          "9 cánh là chuẩn truyền thống, 12–24 cánh là <em>mai cúc</em>, " +
          "trên 36 cánh là <em>mai giảo</em> đặc biệt hiếm. Cánh càng nhiều, hoa càng dày " +
          "và bền màu — giá trị càng cao! 🌸"
      },
      {
        keywords: ["bo de", "goc", "vung chai", "phan goc"],
        answer:
          "<strong>Bộ đế</strong> là phần gốc cây mai phình to, có nhiều rễ nổi lên " +
          "khỏi mặt đất — <em>'càng xấu xí càng quý'</em>. Bộ đế đẹp giúp cây trông cổ thụ, " +
          "vững chãi, là tiêu chí quan trọng để định giá. Cây gieo từ hạt mới có bộ đế " +
          "đẹp tự nhiên (cây ghép thì không)."
      },
      {
        keywords: ["chon cay me", "cay me", "chon giong"],
        answer:
          "Chọn cây mẹ là bước <em>then chốt</em>! Tiêu chí: hoa <strong>9–36 cánh</strong>, " +
          "màu vàng tươi rực rỡ, thân cây có dáng đẹp, bộ đế vững. Cây mẹ tốt cho ra " +
          "hạt giống chất lượng, từ đó nhân lên hàng trăm gốc mai con đẹp."
      },
      {
        keywords: ["thu phan", "phan hoa", "hoa duc", "hoa cai"],
        answer:
          "Mai vàng có hoa lưỡng tính (cả nhị và nhụy trên cùng 1 hoa), thường " +
          "<em>tự thụ phấn</em>. Tuy nhiên người trồng có thể <strong>thụ phấn chéo</strong> " +
          "có chọn lọc giữa các cây mẹ ưu tú để tạo ra biến dị tốt — giống hệt nguyên lý " +
          "lai hữu tính trong SGK Sinh học 12. 🐝"
      },
      {
        keywords: ["thu hoach hat", "khi nao thu", "thang nao", "mua nao"],
        answer:
          "Hạt mai chín được thu vào <strong>tháng 5–6</strong> hàng năm. Hạt phải chín " +
          "già (vỏ chuyển nâu sậm), được phơi mát rồi gieo ngay khi đất còn ẩm. Gieo muộn " +
          "quá hạt sẽ mất sức nảy mầm. ⏳"
      },
      {
        keywords: ["bao lau", "may nam", "thoi gian", "cay con dep"],
        answer:
          "Sau khi gieo hạt, phải mất <strong>3–5 năm</strong> để cây con đủ lớn và " +
          "có thể chọn lọc. Người nghệ nhân tiếp tục dưỡng dáng thêm <em>5–10 năm nữa</em> " +
          "để có một gốc mai hoàn chỉnh — đây là nghề <strong>đầu tư dài hạn</strong>! ⏰"
      },
      {
        keywords: ["vang xanh", "tai sao goi", "ten goi"],
        answer:
          "Gọi là <strong>'vàng xanh'</strong> vì cây mai vừa cho hoa <em>vàng rực</em> " +
          "(quý như vàng kim loại), vừa là <em>cây xanh</em> mang lại sinh kế bền vững. " +
          "Mỗi gốc mai có thể bán hàng chục triệu, có cây cổ thụ giá lên đến tỷ đồng — " +
          "đúng nghĩa <em>'thoát nghèo nhờ mai'</em>! 💰"
      },
      {
        keywords: ["gia mai", "bao nhieu tien", "ban duoc", "tri gia"],
        answer:
          "Giá mai Phù Cát rất đa dạng: cây nhỏ <em>vài trăm nghìn</em>, cây dáng đẹp " +
          "<em>5–50 triệu</em>, cây cổ thụ độc đáo có thể lên đến <strong>hàng tỷ đồng</strong>. " +
          "Tết mỗi năm, làng mai Phù Cát xuất hàng vạn gốc đi cả nước! 🧧"
      },
      {
        keywords: ["dang long", "rong bay"],
        answer:
          "<strong>Dáng Long</strong> là dáng cây mai uốn lượn như <em>con rồng</em> bay — " +
          "dáng quý nhất trong nghệ thuật mai cảnh, mang ý nghĩa may mắn và thịnh vượng. " +
          "Đây là một trong 3 đặc trưng được nhắc đến trong bài báo của lớp 12A6. 🐲"
      },
      {
        keywords: ["mai cuc"],
        answer:
          "<strong>Mai cúc</strong> là mai nhiều cánh xếp lớp như hoa cúc " +
          "(thường 12–24 cánh), trông sang trọng và quý phái. Đây là loại mai " +
          "được ưa chuộng trong dịp Tết của người Bình Định. 🌼"
      },
      {
        keywords: ["mai giao", "8 canh", "10 canh"],
        answer:
          "<strong>Mai giảo</strong> là loại mai có 8–10 cánh, đúng chuẩn dòng mai " +
          "vàng truyền thống của Bình Định. Cây mai giảo nở đúng dịp Tết và bền hoa, " +
          "rất được người chơi cảnh săn đón. 🎋"
      },
      {
        keywords: ["binh dinh", "que huong", "vung mai", "noi tieng"],
        answer:
          "<strong>Phù Cát · Bình Định</strong> nổi tiếng cả nước về mai vàng, ngang ngửa " +
          "với mai Thủ Đức (TP.HCM). Đặc trưng mai Phù Cát: <em>gieo hạt thay vì ghép cành</em>, " +
          "cho ra những gốc mai có sức sống bền bỉ và bộ đế đặc biệt đẹp. 🏞️"
      }
    ]
  },

  /* ---------- Trang 04: Tạp chí Khuyến Nông (5 trang) ---------- */
  "hoc-tro": {
    name: "Phóng viên 12A6",
    avatar: "📰",
    status: "Tổ biên tập · Nhóm 3 H6K55",
    greeting:
      "Xin chào! Mình là <strong>Phóng viên 12A6</strong> — đại diện Nhóm 3 lớp " +
      "H6K55, tổ biên tập tạp chí <em>Khuyến Nông Bình Định</em> số 02. Bạn muốn " +
      "biết gì về 5 trang báo của tụi mình? 📰",
    suggestions: [
      "Tạp chí có bao nhiêu trang?",
      "Trang 1 nói về điều gì?",
      "Mỗi trang nói gì?",
      "Có bao nhiêu tác giả?",
      "Phát hành khi nào?",
      "Ông Lê Văn Tình là ai?"
    ],
    topicKeywords: [
      "bao", "tap chi", "khuyen nong", "binh dinh", "trang",
      "tac gia", "bien soan", "h6k55", "nhom 3", "12a6",
      "phu cat", "mai", "vang", "le van tinh", "thach thuc",
      "kinh te", "giai phap", "san pham", "lop", "truong",
      "thpt", "so 2", "so 02", "chu nhat", "22 12"
    ],
    knowledge: [
      {
        keywords: ["bao nhieu trang", "may trang", "tong cong"],
        answer:
          "Tạp chí <strong>Khuyến Nông Bình Định</strong> số 02 có <strong>5 trang</strong>: " +
          "Trang 1 (Bìa & dẫn đề), Trang 2 (Đặc điểm), Trang 3 (Hiệu quả kinh tế), " +
          "Trang 4 (Thách thức), Trang 5 (Giải pháp & kết luận). 📚"
      },
      {
        keywords: ["trang 1", "bia", "trang nhat", "trang dau"],
        answer:
          "<strong>Trang 1 — Bìa chính:</strong> giới thiệu chủ đề <em>'Tìm hiểu về " +
          "giống cây mai ở Phù Cát và thành tựu của phương pháp chọn tạo giống hiện đại'</em> " +
          "với bài chính <em>'Giữ hồn mai vàng — nghệ thuật tạo giống mai'</em>. " +
          "Trang bìa cũng dẫn đề cho 4 trang nội dung tiếp theo. 🌼"
      },
      {
        keywords: ["trang 2", "dac diem", "phuong phap"],
        answer:
          "<strong>Trang 2 — Đặc điểm và phương pháp:</strong> phân tích kỹ thuật " +
          "<em>gieo hạt</em> và <em>ghép cành</em> tại Phù Cát. Bài viết nêu rõ thời điểm " +
          "thu hoạch hạt (tháng 5–6), kỹ thuật chăm sóc cây con, và sự khác biệt với " +
          "các vùng trồng mai khác. 🌱"
      },
      {
        keywords: ["trang 3", "hieu qua kinh te", "kinh te"],
        answer:
          "<strong>Trang 3 — Hiệu quả kinh tế:</strong> phân tích vai trò của mai vàng " +
          "trong việc <em>nâng cao thu nhập</em> cho người dân Phù Cát. Trang còn có " +
          "thông tin về Trường THPT Số 1 Phù Cát và kế hoạch thi tốt nghiệp THPTQG 2025. 💰"
      },
      {
        keywords: ["trang 4", "thach thuc", "kho khan", "le van tinh", "ong tinh"],
        answer:
          "<strong>Trang 4 — Những thách thức cần đối mặt:</strong> đề cập đến biến đổi " +
          "khí hậu, lạm dụng hóa chất, biến động giá cả... Trang có <em>phỏng vấn nghệ " +
          "nhân Lê Văn Tình</em> chia sẻ về nghề trồng mai — cần kiên nhẫn và đam mê. 👨‍🌾"
      },
      {
        keywords: ["trang 5", "giai phap", "ket luan", "tong bien tap"],
        answer:
          "<strong>Trang 5 — Giải pháp và kết luận:</strong> đề xuất chiến lược phát " +
          "triển bền vững cho nghề trồng mai. Cuối trang có lời cảm ơn của " +
          "<em>Tổng biên tập: Nhóm 3 — H6K55</em> và danh sách 9 đồng biên soạn. ✨"
      },
      {
        keywords: ["bao nhieu tac gia", "may tac gia", "may nguoi", "danh sach"],
        answer:
          "Tạp chí có <strong>9 đồng biên soạn</strong> trong Nhóm 3 H6K55: Hà Minh Hiếu, " +
          "Cáp Minh Triết, Hà Trần Thanh Thảo, Nguyễn Trường Thọ, Nguyễn Quốc Duy, " +
          "Dương Tuấn Sĩ, Phan Hữu Tài, Trần Nguyễn Đắc Hải, Đặng Hữu Hào. ✍️"
      },
      {
        keywords: ["khuyen nong binh dinh", "ten tap chi", "ten bao"],
        answer:
          "<strong>Khuyến Nông Bình Định</strong> là tên tạp chí do Nhóm 3 lớp H6K55 " +
          "đặt — lấy cảm hứng từ ngành khuyến nông giúp đỡ nông dân địa phương. Đây là " +
          "<em>số 02</em>, năm thứ 55, phát hành Chủ Nhật 22/12/2024. 📅"
      },
      {
        keywords: ["xuat ban", "phat hanh", "khi nao", "ngay nao", "thoi gian"],
        answer:
          "Tạp chí số 02 được phát hành vào <strong>Chủ Nhật, 22/12/2024</strong>, " +
          "năm thứ 55 của tờ báo. Đây là sản phẩm sáng tạo trong môn Sinh học 12 " +
          "thuộc chương trình Chân Trời Sáng Tạo. 🗓️"
      },
      {
        keywords: ["h6k55", "nhom 3", "lop nao", "lop", "k55"],
        answer:
          "<strong>Nhóm 3 — H6K55</strong> là tổ biên soạn gồm 9 bạn lớp 12A6, " +
          "Trường THPT Số 1 Phù Cát, khóa 55. <em>H</em> chỉ hệ chuyên, " +
          "<em>6</em> là lớp 12A6, <em>K55</em> là khóa thứ 55 của trường. 🎓"
      },
      {
        keywords: ["truong", "thpt", "phu cat", "noi hoc"],
        answer:
          "Tất cả 9 đồng biên soạn đều học tại <strong>Trường THPT Số 1 Phù Cát</strong> " +
          "tỉnh Bình Định 🏫 — ngôi trường có truyền thống học tập và sáng tạo, được " +
          "công nhận đạt chuẩn quốc gia mức độ 2 (theo Trang 3 của tạp chí)."
      },
      {
        keywords: ["xem to", "doc bao", "phong to", "click"],
        answer:
          "Bạn có thể <strong>click vào bất kỳ trang báo nào</strong> để mở phóng to " +
          "và đọc rõ nội dung. Trong cửa sổ phóng to, dùng các nút <em>← →</em> " +
          "(hoặc phím mũi tên trên bàn phím) để chuyển giữa các trang. 🔍"
      },
      {
        keywords: ["muc dich", "y nghia", "tai sao lam"],
        answer:
          "Mục đích của tạp chí: <strong>(1)</strong> ứng dụng kiến thức Sinh học 12 " +
          "(di truyền, lai hữu tính) vào thực tiễn, <strong>(2)</strong> quảng bá nghề " +
          "trồng mai vàng quê hương, <strong>(3)</strong> rèn kỹ năng nghiên cứu, " +
          "phỏng vấn, viết báo và thiết kế. ✨"
      }
    ]
  }
};

/* Greetings shared across all bots */
const GREETING_PATTERNS = [
  { keywords: ["chao", "hello", "hi", "xin chao", "halo"],
    answer: "Chào bạn! Rất vui được trò chuyện. Bạn cứ hỏi mình bất cứ điều gì về chủ đề trang này nhé! 😊" },
  { keywords: ["cam on", "thanks", "thank you"],
    answer: "Không có gì! Nếu còn thắc mắc gì cứ hỏi mình tiếp nhé. 🙌" },
  { keywords: ["tam biet", "bye", "goodbye"],
    answer: "Tạm biệt nhé! Chúc bạn một ngày học tập vui vẻ và tràn đầy năng lượng! 👋✨" },
  { keywords: ["ban la ai", "ten ban la gi", "ten gi"],
    answer: "Mình là chatbox tư vấn của trang này, được lập trình để trả lời các câu hỏi liên quan đến chủ đề. Hãy hỏi mình về nội dung trang nhé! 🤖" }
];

/* ============================================================
   Vietnamese text normalization
   ============================================================ */
function normalize(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findBestMatch(text, knowledgeArray) {
  const norm = normalize(text);
  if (!norm) return null;

  let best = null;
  let bestScore = 0;

  for (const item of knowledgeArray) {
    let score = 0;
    let matched = 0;
    for (const kw of item.keywords) {
      const nkw = normalize(kw);
      if (nkw && norm.includes(nkw)) {
        score += nkw.length;
        matched++;
      }
    }
    if (matched >= 2) score *= 1.5;
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }
  return bestScore >= 4 ? best : null;
}

function isOnTopic(text, topicKeywords) {
  const norm = normalize(text);
  return topicKeywords.some(kw => norm.includes(normalize(kw)));
}

/* ============================================================
   Chatbot UI Controller
   ============================================================ */
const Chatbot = (() => {
  const el = document.getElementById("chatbot");
  const toggleBtn = document.getElementById("chatbotToggle");
  const panel = document.getElementById("chatbotPanel");
  const closeBtn = document.getElementById("chatbotClose");
  const body = document.getElementById("chatbotBody");
  const chips = document.getElementById("chatbotChips");
  const form = document.getElementById("chatbotForm");
  const input = document.getElementById("chatbotInput");
  const avatarEl = document.getElementById("chatbotAvatar");
  const headAvatarEl = document.getElementById("chatbotHeadAvatar");
  const nameEl = document.getElementById("chatbotName");
  const statusEl = document.getElementById("chatbotStatus");
  const hintEl = document.getElementById("chatbotHint");

  let currentConfig = null;
  let isOpen = false;
  let hasGreeted = false;

  function activate(pageId) {
    const config = CHATBOT_CONFIG[pageId];
    if (!config) {
      el.hidden = true;
      close();
      return;
    }

    currentConfig = config;
    el.hidden = false;

    avatarEl.textContent = config.avatar;
    headAvatarEl.textContent = config.avatar;
    nameEl.textContent = config.name;
    statusEl.textContent = config.status;
    hintEl.textContent = `Tôi là ${config.name} — hỏi mình nhé!`;

    body.innerHTML = "";
    hasGreeted = false;
    if (isOpen) showGreeting();
  }

  function open() {
    if (!currentConfig) return;
    el.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    isOpen = true;
    if (!hasGreeted) showGreeting();
    setTimeout(() => input.focus(), 350);
  }

  function close() {
    el.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
    isOpen = false;
  }

  function showGreeting() {
    addBotMessage(currentConfig.greeting);
    showSuggestions();
    hasGreeted = true;
  }

  function showSuggestions() {
    chips.innerHTML = "";
    const shuffled = [...currentConfig.suggestions].sort(() => Math.random() - 0.5);
    shuffled.slice(0, 4).forEach(s => {
      const chip = document.createElement("button");
      chip.className = "chip";
      chip.type = "button";
      chip.textContent = s;
      chip.addEventListener("click", () => handleUserMessage(s));
      chips.appendChild(chip);
    });
  }

  function hideSuggestions() {
    chips.innerHTML = "";
  }

  function addBotMessage(html) {
    const m = document.createElement("div");
    m.className = "msg msg--bot";
    m.innerHTML = html;
    body.appendChild(m);
    scrollToBottom();
  }

  function addUserMessage(text) {
    const m = document.createElement("div");
    m.className = "msg msg--user";
    m.textContent = text;
    body.appendChild(m);
    scrollToBottom();
  }

  function showTyping() {
    const t = document.createElement("div");
    t.className = "msg--typing";
    t.id = "typingIndicator";
    t.innerHTML = "<span></span><span></span><span></span>";
    body.appendChild(t);
    scrollToBottom();
  }

  function hideTyping() {
    const t = document.getElementById("typingIndicator");
    if (t) t.remove();
  }

  function scrollToBottom() {
    setTimeout(() => { body.scrollTop = body.scrollHeight; }, 50);
  }

  function pageTopicLabel() {
    if (!currentConfig) return "trang này";
    const map = {
      "Bác sĩ Heo": "phép lai 3 dòng máu và chăn nuôi heo",
      "Nghệ nhân Mai": "Mai Vàng Bình Định và kỹ thuật trồng",
      "Phóng viên 12A6": "bài báo và sản phẩm sáng tạo của lớp"
    };
    return map[currentConfig.name] || "trang này";
  }

  function handleUserMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    addUserMessage(trimmed);
    input.value = "";
    hideSuggestions();

    let answer;

    const greetingMatch = findBestMatch(trimmed, GREETING_PATTERNS);
    if (greetingMatch) {
      answer = greetingMatch.answer;
    } else {
      const match = findBestMatch(trimmed, currentConfig.knowledge);
      if (match) {
        answer = match.answer;
      } else if (isOnTopic(trimmed, currentConfig.topicKeywords)) {
        answer =
          "Câu hỏi của bạn liên quan đến chủ đề này nhưng mình chưa có thông tin cụ thể. " +
          "Bạn có thể thử hỏi một trong các câu gợi ý phía dưới, hoặc hỏi cụ thể hơn nhé! 🤔";
      } else {
        answer =
          `Xin lỗi, mình chỉ chuyên tư vấn về <strong>${pageTopicLabel()}</strong>. ` +
          `Bạn vui lòng đặt câu hỏi liên quan đến trang này nhé! 🙏 ` +
          `Thử các câu gợi ý phía dưới xem!`;
      }
    }

    showTyping();
    const delay = 600 + Math.min(answer.length * 6, 1000);
    setTimeout(() => {
      hideTyping();
      addBotMessage(answer);
      setTimeout(() => showSuggestions(), 300);
    }, delay);
  }

  toggleBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleUserMessage(input.value);
  });

  return { activate, open, close };
})();

/* ============================================================
   Page navigation
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const links = document.querySelectorAll("[data-link]");
  const overlay = document.querySelector(".page-transition");
  const navLinks = document.querySelectorAll(".nav__menu a");
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");

  function showPage(pageId, updateHistory = true) {
    const target = document.querySelector(`[data-page="${pageId}"]`);
    if (!target) return;

    overlay.classList.add("active");

    setTimeout(() => {
      pages.forEach(p => p.classList.remove("page--active"));
      target.classList.add("page--active");

      navLinks.forEach(link => {
        const href = link.getAttribute("href");
        link.classList.toggle("active", href === `#${pageId}`);
      });

      window.scrollTo({ top: 0, behavior: "instant" });

      if (updateHistory) {
        history.pushState({ page: pageId }, "", `#${pageId}`);
      }

      document.querySelectorAll("video").forEach(v => {
        if (!v.closest(".page--active")) v.pause();
      });

      Chatbot.activate(pageId);

      setTimeout(() => overlay.classList.remove("active"), 50);
    }, 250);
  }

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const pageId = href.substring(1);
        showPage(pageId);
        navToggle.classList.remove("open");
        menu.classList.remove("open");
      }
    });
  });

  window.addEventListener("popstate", () => {
    const pageId = window.location.hash.substring(1) || "trang-chu";
    showPage(pageId, false);
  });

  // Initial page
  const initialPage = window.location.hash.substring(1) || "trang-chu";
  if (initialPage !== "trang-chu") {
    pages.forEach(p => p.classList.remove("page--active"));
    const target = document.querySelector(`[data-page="${initialPage}"]`);
    if (target) {
      target.classList.add("page--active");
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${initialPage}`);
      });
    } else {
      document.querySelector('[data-page="trang-chu"]').classList.add("page--active");
    }
  }
  Chatbot.activate(initialPage || "trang-chu");

  /* Sticky nav */
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    menu.classList.toggle("open");
  });

  /* Multi-image gallery lightbox (magazine, brochures) */
  initGalleryLightbox();
});

/* ============================================================
   Gallery Lightbox with prev/next navigation
   ============================================================ */
function initGalleryLightbox() {
  const triggers = document.querySelectorAll("[data-gallery]");
  if (!triggers.length) return;

  // Group by gallery name
  const galleries = {};
  triggers.forEach(el => {
    const name = el.dataset.gallery;
    if (!galleries[name]) galleries[name] = [];
    galleries[name].push(el);
  });

  triggers.forEach(el => {
    el.addEventListener("click", () => {
      const name = el.dataset.gallery;
      const items = galleries[name];
      const startIdx = items.indexOf(el);
      openLightbox(items, startIdx);
    });
  });
}

function openLightbox(items, startIdx) {
  let idx = startIdx;

  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.style.cssText =
    "position:fixed;inset:0;background:rgba(3,4,94,0.95);" +
    "z-index:9999;display:grid;place-items:center;padding:1rem;" +
    "animation:lbFadeIn 0.3s ease;";

  const img = document.createElement("img");
  img.style.cssText =
    "max-width:95vw;max-height:90vh;border-radius:6px;" +
    "box-shadow:0 30px 80px rgba(0,0,0,0.6);" +
    "transition:opacity 0.25s;cursor:zoom-out;";

  // Counter
  const counter = document.createElement("div");
  counter.style.cssText =
    "position:absolute;top:1.5rem;left:50%;transform:translateX(-50%);" +
    "color:#fff;font-family:'DM Mono',monospace;font-size:0.85rem;" +
    "letter-spacing:0.1em;background:rgba(0,0,0,0.4);padding:0.5rem 1rem;" +
    "border-radius:999px;backdrop-filter:blur(8px);";

  // Close button
  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "✕";
  closeBtn.setAttribute("aria-label", "Đóng");
  closeBtn.style.cssText =
    "position:absolute;top:1.5rem;right:1.5rem;width:44px;height:44px;" +
    "background:rgba(255,255,255,0.15);color:#fff;border:none;" +
    "border-radius:50%;font-size:1.4rem;cursor:pointer;" +
    "backdrop-filter:blur(8px);transition:background 0.2s;";
  closeBtn.addEventListener("mouseenter", () => closeBtn.style.background = "rgba(255,255,255,0.3)");
  closeBtn.addEventListener("mouseleave", () => closeBtn.style.background = "rgba(255,255,255,0.15)");

  // Nav buttons
  const navBtnStyle =
    "position:absolute;top:50%;transform:translateY(-50%);width:54px;height:54px;" +
    "background:rgba(255,255,255,0.15);color:#fff;border:none;border-radius:50%;" +
    "font-size:1.4rem;cursor:pointer;backdrop-filter:blur(8px);" +
    "display:grid;place-items:center;transition:all 0.2s;";

  const prevBtn = document.createElement("button");
  prevBtn.innerHTML = "‹";
  prevBtn.setAttribute("aria-label", "Trước");
  prevBtn.style.cssText = navBtnStyle + "left:1.5rem;font-size:2rem;";

  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = "›";
  nextBtn.setAttribute("aria-label", "Sau");
  nextBtn.style.cssText = navBtnStyle + "right:1.5rem;font-size:2rem;";

  [prevBtn, nextBtn].forEach(b => {
    b.addEventListener("mouseenter", () => {
      b.style.background = "rgba(255,255,255,0.3)";
      b.style.transform = "translateY(-50%) scale(1.08)";
    });
    b.addEventListener("mouseleave", () => {
      b.style.background = "rgba(255,255,255,0.15)";
      b.style.transform = "translateY(-50%) scale(1)";
    });
  });

  function update() {
    const item = items[idx];
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = item.dataset.src || item.querySelector("img").src;
      img.alt = item.querySelector("img").alt;
      counter.textContent = `${idx + 1} / ${items.length}`;
      img.style.opacity = "1";
    }, 150);
    prevBtn.style.visibility = items.length > 1 ? "visible" : "hidden";
    nextBtn.style.visibility = items.length > 1 ? "visible" : "hidden";
  }

  function close() {
    lb.style.animation = "lbFadeOut 0.25s ease forwards";
    setTimeout(() => {
      lb.remove();
      document.removeEventListener("keydown", onKey);
    }, 250);
  }

  function onKey(e) {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") { idx = (idx - 1 + items.length) % items.length; update(); }
    else if (e.key === "ArrowRight") { idx = (idx + 1) % items.length; update(); }
  }

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    idx = (idx - 1 + items.length) % items.length;
    update();
  });
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    idx = (idx + 1) % items.length;
    update();
  });
  closeBtn.addEventListener("click", close);
  img.addEventListener("click", close);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) close();
  });
  document.addEventListener("keydown", onKey);

  // Inject animations
  if (!document.getElementById("lbAnimStyle")) {
    const style = document.createElement("style");
    style.id = "lbAnimStyle";
    style.textContent =
      "@keyframes lbFadeIn { from { opacity: 0; } to { opacity: 1; } }" +
      "@keyframes lbFadeOut { from { opacity: 1; } to { opacity: 0; } }";
    document.head.appendChild(style);
  }

  lb.appendChild(img);
  lb.appendChild(counter);
  lb.appendChild(closeBtn);
  lb.appendChild(prevBtn);
  lb.appendChild(nextBtn);
  document.body.appendChild(lb);
  update();
}
