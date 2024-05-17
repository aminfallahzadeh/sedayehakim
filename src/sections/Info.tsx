// components
import TitleSecondary from "../components/TitleSecondary";

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
        </div>

        <div className="info__video">
          <h1>VIDEO</h1>
        </div>
      </div>
    </section>
  );
}

export default Info;
