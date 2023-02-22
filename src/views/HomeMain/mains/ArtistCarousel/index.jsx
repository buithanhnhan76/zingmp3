// libs
import { Carousel } from "antd";
import { useRef } from "react";
// mock
import { listArtists } from "src/mocks/ArtistCarousel";
// hook
import { useSlidesNumber } from "src/hooks/useSlidesNumber";
// children
import ArtistCarouselItem from "src/views/HomeMain/components/ArtistCarouselItem";
import LeftButton from "../../components/LeftButton";
import RightButton from "../../components/RightButton";
// styles
import styles from "./ArtistCarousel.module.scss";

const ArtistCarousel = () => {
  const carousel = useRef();
  const numberOfSlidesToShow = useSlidesNumber(7, 5, 3, 1);
  return (
    <section className={styles["artist-carousel"]}>
      <LeftButton carousel={carousel} />
      <Carousel
        autoplay
        dots={false}
        slidesToShow={numberOfSlidesToShow}
        ref={carousel}
      >
        {listArtists.map((item) => <ArtistCarouselItem key={item.id} item={item} />)}
      </Carousel>
      <RightButton carousel={carousel} />
    </section>
  );
};

export default ArtistCarousel;
