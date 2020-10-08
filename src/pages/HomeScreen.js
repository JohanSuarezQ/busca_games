import React from "react";
import { SearchInput } from "../components/SearchInput";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselContainer } from "../components/CarouselContainer";

export const HomeScreen = () => {
  return (
    <main className="home__container">
      <h1>Los más populares</h1>
      <CarouselContainer />
      <SearchInput />
    </main>
  );
};
