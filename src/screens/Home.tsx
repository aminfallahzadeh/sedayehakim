// components
import Hero from "../sections/Hero";
import SearchSection from "../sections/SearchSection";
import CoursesSection from "../sections/CoursesSection";
import Info from "../sections/Info";
import BestCoursesSection from "../sections/BestCoursesSection";
import AdviceSection from "../sections/AdviceSection";
import NewProductsSection from "../sections/NewProductsSection";
import WhySection from "../sections/WhySection";
import FreeCoursesSection from "../sections/FreeCoursesSection";
import StatisticsSection from "../sections/StatisticsSection";
import ColleagueSection from "../sections/ColleagueSection";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function App(): JSX.Element {
  const content: JSX.Element = (
    <>
      <Hero />
      <SearchSection />
      <CoursesSection />
      <Info />
      <BestCoursesSection />
      <AdviceSection />
      <NewProductsSection />
      <WhySection />
      <FreeCoursesSection />
      <StatisticsSection />
      <ColleagueSection />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );

  return content;
}
