// react imports
import { useEffect } from "react";

// redux imports
import { useTestApiQuery } from "../slices/testApiSlice";

function Hero(): JSX.Element {
  const { data: data, isLoading, isSuccess } = useTestApiQuery({});

  useEffect(() => {
    if (isLoading) {
      console.log("Loading ...");
    }

    if (isSuccess) {
      console.log(data);
    }
  }, [data, isLoading, isSuccess]);

  const content: JSX.Element = (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title heading-primary">
          <img src="./images/paint-brush-storkes.png" />
          معتبرترین سایت <span>طب سنتی</span> ایران
        </h1>
        <p className="hero__desc">
          موسسه پژوهشی و آموزشی صدای حکیم با هدف ارتقا سطح علمی و ترویج دانش{" "}
          <br />
          طب سنتی با بهره گیری از برترین اساتید اقدام به برگزاری دوره های ویژه
          مینماید
        </p>
      </div>
    </section>
  );
  return content;
}

export default Hero;
