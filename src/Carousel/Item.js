import React, { useEffect, useRef } from "react";
import styles from "./carousel.module.scss";
import { useInView } from "react-intersection-observer";
import { useCarouselValue, CAROUSEL_ACTIONS } from "./CarouselContext";

const Item = ({ item, lastItem }) => {
  const [ref, inView, entry] = useInView({ threshold: 1 });
  const [, dispatch] = useCarouselValue();
  const itemRef = useRef(null);

  useEffect(() => {
    dispatchItemSize();
  }, []);

  function dispatchItemSize() {
    if (itemRef && itemRef.current) {
      dispatch({
        carouselItemSize: itemRef.current.clientWidth,
        type: CAROUSEL_ACTIONS.CAROUSEL_ITEM_SIZE
      });
    }
  }

  useEffect(() => {
    if (lastItem && inView) {
      // console.log("Last item is in view");
      // Dispatch that last item is in view
      dispatch({
        lastItemVisible: true,
        type: CAROUSEL_ACTIONS.LAST_ITEM_VISIBILITY
      });
    } else if (lastItem && !inView) {
      // console.log("Last item has left view");
      // Dispatch last item has left view
      dispatch({
        lastItemVisible: false,
        type: CAROUSEL_ACTIONS.LAST_ITEM_VISIBILITY
      });
    }
  }, [inView, entry]);

  return (
    <div ref={itemRef} className={styles.itemContainer}>
      <div ref={ref} className={styles.item}>
        {item.name}
      </div>
    </div>
  );
};

export default Item;
