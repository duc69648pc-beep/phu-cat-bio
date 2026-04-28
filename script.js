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

  /* ---------- Trang 04: Bài báo / Góc học trò ---------- */
  "hoc-tro": {
    name: "Phóng viên 12A6",
    avatar: "📰",
    status: "Tổ biên soạn · H6K55",
    greeting:
      "Xin chào! Mình là <strong>Phóng viên 12A6</strong> — đại diện tổ biên soạn " +
      "bài báo Mai Vàng Bình Định. Bạn muốn biết gì về sản phẩm sáng tạo của tụi mình? 📰",
    suggestions: [
      "Bài báo nói về điều gì?",
      "Có bao nhiêu tác giả?",
      "H6K55 là lớp nào?",
      "3 đặc trưng nổi bật là gì?",
      "Khi nào xuất bản?",
      "Sao gọi 'Sắc Xuân Bình Định'?"
    ],
    topicKeywords: [
      "bai bao", "tap chi", "khoa hoc", "tre", "tac gia", "bien soan",
      "h6k55", "12a6", "phu cat", "binh dinh", "mai", "vang", "xuan",
      "dang long", "mai cuc", "mai giao", "san pham", "sang tao",
      "lop", "truong", "post"
    ],
    knowledge: [
      {
        keywords: ["bai bao noi gi", "noi dung", "ve gi", "chu de gi"],
        answer:
          "Bài báo có chủ đề <strong>'Sắc Xuân Bình Định — Mai Vàng Bình Định'</strong>, " +
          "giới thiệu vẻ đẹp độc đáo và 3 đặc trưng nổi bật của mai vàng quê hương Phù Cát: " +
          "<em>Dáng Long, Mai Cúc, Mai Giảo</em>. Đây là sản phẩm sáng tạo của tổ biên soạn 12A6! 📰"
      },
      {
        keywords: ["bao nhieu tac gia", "may tac gia", "may nguoi", "danh sach"],
        answer:
          "Bài báo có <strong>9 đồng biên soạn</strong>: Hà Minh Hiếu, Cáp Minh Triết, " +
          "Hà Trần Thanh Thảo, Nguyễn Trường Thọ, Nguyễn Quốc Duy, Dương Tuấn Sĩ, " +
          "Phan Hữu Tài, Trần Nguyễn Đắc Hải, Đặng Hữu Hào — đều là học sinh xuất sắc " +
          "của lớp 12A6 H6K55. ✍️"
      },
      {
        keywords: ["h6k55", "k55", "lop nao", "lop"],
        answer:
          "<strong>H6K55</strong> là mã lớp đặc trưng: <em>H</em> = chuyên Hóa hoặc Hệ, " +
          "<em>6</em> = lớp số 6 (12A6), <em>K55</em> = khóa thứ 55 của trường. " +
          "Đây là lớp 12 tài năng tham gia dự án triển lãm số này! 🎓"
      },
      {
        keywords: ["dac trung", "3 dac trung", "ba dac trung", "noi bat"],
        answer:
          "Bài báo nêu <strong>3 đặc trưng nổi bật</strong> của Mai Vàng Bình Định:<br>" +
          "🐲 <strong>Dáng Long</strong> — dáng cây uốn lượn như rồng bay<br>" +
          "🌼 <strong>Mai Cúc</strong> — hoa nhiều cánh xếp lớp<br>" +
          "🎋 <strong>Mai Giảo</strong> — 8–10 cánh chuẩn truyền thống"
      },
      {
        keywords: ["sac xuan", "xuan binh dinh", "ten goi"],
        answer:
          "<strong>'Sắc Xuân Bình Định'</strong> là tên gọi đầy chất thơ — vì mai vàng " +
          "chính là <em>biểu tượng của mùa xuân</em> miền đất võ Bình Định. " +
          "Mỗi dịp Tết, mai vàng nở rộ khắp các làng nghề Phù Cát, mang đến không khí " +
          "lễ hội rực rỡ. 🌸"
      },
      {
        keywords: ["khi nao", "xuat ban", "thoi gian", "thang", "ngay"],
        answer:
          "Bài báo được đồng biên soạn vào <strong>tháng 4 năm 2026</strong>, " +
          "là số đầu tiên của <em>Tạp chí Khoa học trẻ 12A6</em>. Đây là dự án mở đầu, " +
          "sắp tới tổ biên soạn sẽ tiếp tục ra những số mới về các chủ đề khác! 🗓️"
      },
      {
        keywords: ["lam sao viet", "cach viet", "viet bai bao", "kinh nghiem"],
        answer:
          "Để viết bài báo khoa học trẻ, các bạn 12A6 đã: " +
          "<em>(1) khảo sát thực tế</em> tại làng nghề mai Phù Cát, " +
          "<em>(2) phỏng vấn nghệ nhân</em>, " +
          "<em>(3) tổng hợp & phân loại</em> 3 đặc trưng chính, " +
          "<em>(4) thiết kế poster</em> đẹp mắt. Đây là một trải nghiệm tuyệt vời! 📝"
      },
      {
        keywords: ["doc bai bao", "xem to hon", "xem ro", "phong to"],
        answer:
          "Bạn có thể <strong>click vào ảnh bài báo</strong> ở phía trên để xem phóng to. " +
          "Click một lần nữa để đóng lại. 🔍"
      },
      {
        keywords: ["truong", "thpt", "phu cat", "hoc"],
        answer:
          "Tất cả các bạn đồng biên soạn đều học tại <strong>Trường THPT Phù Cát</strong>, " +
          "tỉnh <em>Bình Định</em> — ngôi trường có truyền thống học tập và sáng tạo. 🏫"
      },
      {
        keywords: ["san pham sang tao", "tai sao lam", "muc dich", "y nghia"],
        answer:
          "Bài báo là <strong>sản phẩm sáng tạo</strong> kết nối kiến thức Sinh học 12 " +
          "(di truyền học, lai hữu tính) với <em>văn hóa địa phương</em> (mai vàng Bình Định). " +
          "Mục đích: vừa học, vừa quảng bá quê hương, vừa rèn kỹ năng nghiên cứu! ✨"
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

  /* Paper lightbox */
  const paperFrame = document.querySelector(".paper__frame");
  if (paperFrame) {
    paperFrame.addEventListener("click", () => {
      const img = paperFrame.querySelector("img");
      if (!img) return;
      const lb = document.createElement("div");
      lb.style.cssText =
        "position:fixed;inset:0;background:rgba(3,4,94,0.92);" +
        "display:grid;place-items:center;z-index:9999;cursor:zoom-out;" +
        "padding:2rem;";
      const big = document.createElement("img");
      big.src = img.src;
      big.style.cssText =
        "max-width:100%;max-height:100%;border-radius:6px;" +
        "box-shadow:0 30px 80px rgba(0,0,0,0.5);";
      lb.appendChild(big);
      lb.addEventListener("click", () => lb.remove());
      document.body.appendChild(lb);
    });
  }
});
