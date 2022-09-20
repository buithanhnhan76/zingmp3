// icons
import LiveTag from "public/icons/live-tag.svg";
import EducationGeologyGlobal from "public/icons/education-geology-global.svg";

export default {
  head: {
    title: "Zing MP3 | Nghe tải nhạc chất lượng cao trên desktop, mobile và TV",
  },
  sidebar: {
    items: [
      { title: "Cá Nhân", src: EducationGeologyGlobal.src },
      { title: "Khám Phá", src: LiveTag.src },
      { title: "#zingchart", src: EducationGeologyGlobal.src },
      { title: "Radio", src: LiveTag.src },
      { title: "Theo Dõi", src: EducationGeologyGlobal.src },
      { title: "" },
      { title: "Nhạc Mới", src: LiveTag.src },
      { title: "Thể Loại", src: EducationGeologyGlobal.src },
      { title: "Top 100", src: LiveTag.src },
      { title: "MV", src: EducationGeologyGlobal.src },
    ],
    bannerItems: [
      {
        title: "Đăng nhập để khám phá playlist dành riêng cho bạn",
        buttonLabel: "ĐĂNG NHẬP",
        type: "login-banner",
      },
      {
        title: "Nghe nhạc không quảng cáo cùng kho nhạc VIP",
        buttonLabel: "NÂNG CẤP VIP",
        type: "vip-banner",
      },
    ],
    button: {
      buttonLabel: "Tạo playlist mới",
    },
  },
  header: {
    searchBar: {
      placeholder: "Tìm kiếm bài hát, nghệ sĩ, lời bài hát...",
    },
  },
  partner: {
    title: "Đối tác âm nhạc",
  },
};