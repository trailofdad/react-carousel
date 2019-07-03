import React, { useState, useEffect } from "react";
import styles from "./carousel.module.scss";
import Item from "./Item";
import { useCarouselValue } from "./CarouselContext";

const data = [
  {
    name: "item 1"
  },
  {
    name: "item 2"
  },
  {
    name: "item 3"
  },
  {
    name: "item 4"
  },
  {
    name: "item 5"
  },
  {
    name: "item 6"
  },
  {
    name: "item 7"
  },
  {
    name: "item 8"
  },
  {
    name: "item 9"
  },
  {
    name: "item 10"
  }
];

const Carousel = props => {
  const [scrollPos, setScrollPos] = useState(0);
  const [{ lastItemVisible, carouselItemSize }] = useCarouselValue();
  const [inTransition, setInTransition] = useState(false);

  const previous = () => {
    if (scrollPos !== 0 && !inTransition) {
      setScrollPos(scrollPos + carouselItemSize);
      setInTransition(true);
      setTimeout(() => {
        // inTransition is set to the time of the animation
        setInTransition(false);
      }, 500);
    }
  };

  const next = e => {
    if (!lastItemVisible && !inTransition) {
      setScrollPos(scrollPos - carouselItemSize);
      setInTransition(true);
      setTimeout(() => {
        setInTransition(false);
      }, 500);
    }
  };

  const carouselAnimations = {
    transform: `translate(${scrollPos}px)`,
    transition: "transform .5s ease-in-out"
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <h1>Hello Carousel</h1>
        <div className={styles.carousel}>
          <div style={carouselAnimations}>
            {data.map((d, i) => (
              <Item key={d.name} lastItem={data.length - 1 === i} item={d} />
            ))}
          </div>
        </div>
      </div>
      <button onClick={previous}>Back</button>
      <button onClick={next}>Forward</button>
    </>
  );
};

export default Carousel;
