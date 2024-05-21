// components
import InfoCard from "../components/infoCard";

function ColleagueSection() {
  const content = (
    <section className="colleagues">
      <h2 className="heading-secondary colleagues__heading">
        دانشگاه های همکار
      </h2>

      <div className="colleagues__cards">
        <div>
          <InfoCard image="./images/uni-1.png" caption="دانشگاه یزد" />
        </div>

        <div>
          <InfoCard
            image="./images/uni-2.png"
            caption="دانشگاه علامه طباطبایی"
          />
        </div>
        <div>
          <InfoCard image="./images/uni-3.png" caption="دانشگاه شیراز" />
        </div>
        <div>
          <InfoCard image="./images/uni-4.png" caption="دانشگاه اصفهان" />
        </div>

        <div>
          <InfoCard image="./images/uni-5.png" caption="دانشگاه تهران" />
        </div>
      </div>
    </section>
  );
  return content;
}

export default ColleagueSection;
