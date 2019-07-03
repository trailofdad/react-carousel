// https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
import React, { createContext, useContext, useReducer } from "react";

export const CarouselContext = createContext();

export const CAROUSEL_ACTIONS = {
  LAST_ITEM_VISIBILITY: "LAST_ITEM_VISIBILITY",
  CAROUSEL_ITEM_SIZE: "CAROUSEL_ITEM_SIZE"
};

const initialState = {
  lastItemVisible: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case CAROUSEL_ACTIONS.LAST_ITEM_VISIBILITY:
      return {
        ...state,
        lastItemVisible: action.lastItemVisible
      };

    case CAROUSEL_ACTIONS.CAROUSEL_ITEM_SIZE:
      return {
        ...state,
        carouselItemSize: action.carouselItemSize
      };

    default:
      return state;
  }
};

export const CarouselProvider = ({ children }) => (
  <CarouselContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </CarouselContext.Provider>
);

export const useCarouselValue = () => useContext(CarouselContext);
