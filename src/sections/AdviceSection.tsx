// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function AdviceSection() {
  const content = (
    <section className="advice">
      <div className="advice__container">
        <div className="advice__caption">
          <div className="advice__title">
            <div className="title-primary">
              <h3 className="title-primary__heding">توصیه های پزشک</h3>
              <span className="title-primary__accent">صدای حکیم</span>
            </div>
          </div>
          <div className="advice__swiper">
            <Swiper
              navigation={true}
              pagination={true}
              modules={[Navigation, Pagination]}
            >
              <SwiperSlide>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                است{" "}
              </SwiperSlide>
              <SwiperSlide>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                است{" "}
              </SwiperSlide>
              <SwiperSlide>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                است{" "}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="advice__cover">
          <img
            src="./images/dr.png"
            alt="توصیه ها"
            className="advice__cover--dr"
          />
          <img src="./images/dr-bg.png" className="advice__cover--bg" />
        </div>
      </div>
    </section>
  );
  return content;
}

export default AdviceSection;
