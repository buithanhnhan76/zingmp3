// icons
import LiveTag from "../icons/live-tag.svg";
import EducationGeologyGlobal from "../icons/education-geology-global.svg";

export default {
  head: {
    title: "Zing MP3 | Nghe tải nhạc chất lượng cao trên desktop, mobile và TV",
  },
  sidebar: {
    items: [
      { title: "Cá Nhân", src: EducationGeologyGlobal.src, path: "/personal" },
      { title: "Khám Phá", src: LiveTag.src, path: "/discover" },
      {
        title: "#zingchart",
        src: EducationGeologyGlobal.src,
        path: "/zing-chart",
      },
      { title: "Radio", src: LiveTag.src, path: "/radio" },
      { title: "Theo Dõi", src: EducationGeologyGlobal.src, path: "/follow" },
      { title: "" },
      { title: "Nhạc Mới", src: LiveTag.src, path: "/new-song" },
      { title: "Thể Loại", src: EducationGeologyGlobal.src, path: "/category" },
      { title: "Top 100", src: LiveTag.src, path: "/top-100" },
      { title: "MV", src: EducationGeologyGlobal.src, path: "/mv" },
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
  newRelease: {
    title: "Mới phát hành",
    header: {
      groupButtons: [{ title: "Bài hát" }, { title: "Album" }],
      button: { title: "Tất cả" },
    },
  },
  chillPlaylist: {
    title: "Chờ iu chill",
  },
  favoriteArtist: {
    title: "Nghệ sĩ yêu thích",
  },
  newSongEveryday: {
    title: "Nhạc mới mỗi ngày",
  },
  newSong: {
    title: "Nhạc mới",
    buttonLabel: "Tất cả",
  },
  xOne: {
    title: "Góc Xone",
  },
  featuredRadio: {
    title: "Radio nổi bật",
    buttonLabel: "Tất cả",
  },
  event: {
    title: "Sự kiện",
  },
};
