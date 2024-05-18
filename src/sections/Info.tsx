// components
import Button from "../components/Button";

function Info() {
  return (
    <section className="info">
      <div className="info__container">
        <div className="info__caption">
          <div className="info__title">
            <div className="title-primary">
              <h3 className="title-primary__heding">
                با <span className="title-primary__accent">صدای حکیم</span>
              </h3>

              <span className="title-primary__caption">بیشتر آشنا شوید</span>
            </div>
          </div>

          <p className="info__caption--desc">
            موسسه پژوهشی و آموزشی صدای حکیم با هدف ارتقا سطح علمی و ترویج دانش
            طب سنتی با بهره گیری از برترین اساتید اقدام به برگزاری دوره های ویژه
            مینماید
          </p>
          <div>
            <Button type="button" variant="quinary">
              <span>بیشتر بخوانید</span>
            </Button>
          </div>
        </div>

        <div className="info__video">
          <video autoPlay muted loop>
            <source src="./video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video_overlay"></div>
        </div>
      </div>
    </section>
  );
}

export default Info;
