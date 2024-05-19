function StatisticsSection() {
  const content = (
    <section className="statistics">
      <div className="statistics__container">
        <div className="statistics__item">
          <h2 className="statistics__item-number">
            750 <span>+</span>
          </h2>
          <p className="statistics__item-caption">دانشجو شرکت کرده</p>
        </div>

        <div className="statistics__item">
          <h2 className="statistics__item-number">
            40 <span>+</span>
          </h2>
          <p className="statistics__item-caption">دوره در حال برگزاری</p>
        </div>

        <div className="statistics__item">
          <h2 className="statistics__item-number">
            130 <span>+</span>
          </h2>
          <p className="statistics__item-caption">دوره آموزشی</p>
        </div>
      </div>
      <div className="statistics__square"></div>
    </section>
  );
  return content;
}

export default StatisticsSection;
