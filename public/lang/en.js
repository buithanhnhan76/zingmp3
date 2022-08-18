import LiveTag from "../icons/live-tag.svg";

export default {
  head: {
    title: "Zing MP3 | Listen to music on desktop, mobile and TV",
  },
  sidebar: {
    items: [
      { title: "Personal", iconSrc: LiveTag.src },
      { title: "Discover", iconSrc: LiveTag.src },
      { title: "#zingchart", iconSrc: LiveTag.src },
      { title: "Radio", iconSrc: LiveTag.src },
      { title: "Follow", iconSrc: LiveTag.src },
      { title: "" },
      { title: "New music", iconSrc: LiveTag.src },
      { title: "Category", iconSrc: LiveTag.src },
      { title: "Top 100", iconSrc: LiveTag.src },
      { title: "MV", iconSrc: LiveTag.src },
    ],
    "banner-items": [
      {
        title: "Login to discover more playlist for you",
        label: "LOGIN",
        type: "login-banner",
      },
      {
        title: "Listen to music with out ads with vip",
        label: "UPGRADE VIP",
        type: "vip-banner",
      },
    ],
    button: {
      label: "Create new playlist",
    },
  },
};
