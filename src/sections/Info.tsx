// components
import TitleSecondary from "../components/TitleSecondary";
import Button from "../components/Button";

function Info() {
  return (
    <section className="info">
      <div className="info__container">
        <div className="info__caption">
          <TitleSecondary title="با صدای حکیم" caption="بیشتر آشنا شوید" />
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
          <video autoPlay muted loop controls>
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
