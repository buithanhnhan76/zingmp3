import LiveTag from "public/icons/live-tag.svg";
import userPhoto from "src/mocks/UserData/userPhoto.jpg";

export const translateEnAndLogIn = {
  authentication: {
    user: {
      name: "Halen",
      src: userPhoto.src,
    },
  },
  locale: {
    translate: {
      head: {
        title: "Zing MP3 | Listen to music on desktop, mobile and TV",
      },
      sidebar: {
        items: [
          { title: "Personal", src: LiveTag.src },
          { title: "Discover", src: LiveTag.src },
          { title: "#zingchart", src: LiveTag.src },
          { title: "Radio", src: LiveTag.src },
          { title: "Follow", src: LiveTag.src },
          { title: "" },
          { title: "New music", src: LiveTag.src },
          { title: "Category", src: LiveTag.src },
          { title: "Top 100", src: LiveTag.src },
          { title: "MV", src: LiveTag.src },
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
    },
  },
};

export const translateEnAndNotLogIn = {
  authentication: {
    user: {},
  },
  locale: {
    translate: {
      head: {
        title: "Zing MP3 | Listen to music on desktop, mobile and TV",
      },
      sidebar: {
        items: [
          { title: "Personal", src: LiveTag.src },
          { title: "Discover", src: LiveTag.src },
          { title: "#zingchart", src: LiveTag.src },
          { title: "Radio", src: LiveTag.src },
          { title: "Follow", src: LiveTag.src },
          { title: "" },
          { title: "New music", src: LiveTag.src },
          { title: "Category", src: LiveTag.src },
          { title: "Top 100", src: LiveTag.src },
          { title: "MV", src: LiveTag.src },
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
    },
  },
};
