import Image from "next/image";
import { Carousel } from "antd";
// mock
import { listArtistCarousel } from "src/mocks/ArtistCarousel";
// style
import styles from "./ArtistCarousel.module.scss";


const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};
const ArtistCarousel = () => (
  <Carousel
    autoplay
    dots={false}
    slidesToShow={7}
    className={styles["carousel-container"]}
  >
    {listArtistCarousel.map((item) => (
      <div key={item.id} className={styles["carousel-item"]}>
        <Image src={item.src} layout="fill" style={contentStyle}/>
      </div>
    ))}
  </Carousel>
);

export default ArtistCarousel;
