// photos
import issac from "public/photos/issac.webp";
import nhatKimAnh from "public/photos/nhat-kim-anh.webp";
import tangDuyTan from "public/photos/tang-duy-tan.webp";
import user from "public/photos/user.jpg";
import userTwo from "public/photos/user-two.png";
import userThree from "public/photos/user-three.png";
import userFourth from "public/photos/user-fourth.png";
import userFive from "public/photos/user-five.png";

export const listFollowersOne = [
  {
    id: 1,
    src: userTwo.src,
  },
  {
    id: 2,
    src: user.src,
  },
  {
    id: 3,
    src: userThree.src,
  },
  {
    id: 4,
    src: user.src,
  },
  {
    id: 5,
    src: userFive.src,
  },
  {
    id: 6,
    src: userThree.src,
  },
  {
    id: 7,
    src: userFourth.src,
  },
];

export const listFollowersSecond = [
  {
    id: 1,
    src: user.src,
  },
  {
    id: 2,
    src: userFive.src,
  },
  {
    id: 3,
    src: userFourth.src,
  },
  {
    id: 4,
    src: userTwo.src,
  },
  {
    id: 5,
    src: userThree.src,
  },
  {
    id: 6,
    src: user.src,
  },
  {
    id: 7,
    src: user.src,
  },
  {
    id: 8,
    src: user.src,
  },
  {
    id: 9,
    src: user.src,
  },
  {
    id: 10,
    src: user.src,
  },
  {
    id: 11,
    src: user.src,
  },
];

export const listEvents = [
  {
    id: 1,
    title: "Sinh nhật sao BTN",
    category: "sinh nhật sao",
    date: "20:00 Thứ Tư, 24 tháng 8",
    src: issac.src,
    listFollowers: listFollowersOne,
    buttonLabel: "Tham gia",
    followerTitle: "Lượt quan tâm",
  },
  {
    id: 2,
    title: "Ra măt mv abc",
    category: "phát hành album",
    date: "21:00 Thứ Tư, 24 tháng 8",
    src: nhatKimAnh.src,
    listFollowers: listFollowersSecond,
    buttonLabel: "Quan tâm",
    followerTitle: "Lượt chúc mừng",
  },
  {
    id: 3,
    title: "Ra mắt mv bcd",
    category: "minishow",
    date: "22:00 Thứ Tư, 24 tháng 8",
    src: tangDuyTan.src,
    listFollowers: listFollowersOne,
    buttonLabel: "Tham gia",
    followerTitle: "Lượt quan tâm",
  },
];
