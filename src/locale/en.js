// icons
import LiveTag from "public/icons/live-tag.svg";
import EducationGeologyGlobal from "public/icons/education-geology-global.svg";

export default {
  head: {
    title: "Zing MP3 | Listen to music on desktop, mobile and TV",
  },
  sidebar: {
    items: [
      { title: "Personal", src: EducationGeologyGlobal.src },
      { title: "Discover", src: LiveTag.src },
      { title: "#zingchart", src: EducationGeologyGlobal.src },
      { title: "Radio", src: LiveTag.src },
      { title: "Follow", src: EducationGeologyGlobal.src },
      { title: "" },
      { title: "New music", src: LiveTag.src },
      { title: "Category", src: EducationGeologyGlobal.src },
      { title: "Top 100", src: LiveTag.src },
      { title: "MV", src: EducationGeologyGlobal.src },
    ],
    bannerItems: [
      {
        title: "Login to discover more playlist for you",
        buttonLabel: "LOGIN",
        type: "login-banner",
      },
      {
        title: "Listen to music with out ads with vip",
        buttonLabel: "UPGRADE VIP",
        type: "vip-banner",
      },
    ],
    button: {
      buttonLabel: "Create new playlist",
    },
  },
  header: {
    searchBar: {
      placeholder: "Search songs, artists, lyrics...",
    },
  },
  partner: {
    title: "Music partner",
  },
};
