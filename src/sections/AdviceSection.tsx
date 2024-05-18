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
