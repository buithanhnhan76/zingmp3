import LiveTag from "../icons/live-tag.svg";

export default {
  head: {
    title: "Zing MP3 | Nghe tải nhạc chất lượng cao trên desktop, mobile và TV",
  },
  sidebar: {
    items: [
      { title: "Cá Nhân", iconSrc: LiveTag.src },
      { title: "Khám Phá", iconSrc: LiveTag.src },
      { title: "#zingchart", iconSrc: LiveTag.src },
      { title: "Radio", iconSrc: LiveTag.src },
      { title: "Theo Dõi", iconSrc: LiveTag.src },
      { title: "" },
      { title: "Nhạc Mới", iconSrc: LiveTag.src },
      { title: "Thể Loại", iconSrc: LiveTag.src },
      { title: "Top 100", iconSrc: LiveTag.src },
      { title: "MV", iconSrc: LiveTag.src },
    ],
    "banner-items": [
      {
        title: "Đăng nhập để khám phá playlist dành riêng cho bạn",
        label: "ĐĂNG NHẬP",
        type: "login-banner",
      },
      {
        title: "Nghe nhạc không quảng cáo cùng kho nhạc VIP",
        label: "NÂNG CẤP VIP",
        type: "vip-banner",
      },
    ],
    button: {
      label: "Tạo playlist mới",
    },
  },
};
