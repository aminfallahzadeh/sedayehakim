// components
import InfoCard from "../components/infoCard";

function ColleagueSection() {
  const content = (
    <section className="colleagues">
      <h2 className="heading-secondary">دانشگاه های همکار</h2>

      <div className="colleagues__cards">
        <InfoCard image="./images/uni-1.png" caption="دانشگاه یزد" />
        <InfoCard image="./images/uni-2.png" caption="دانشگاه علامه طباطبایی" />
        <InfoCard image="./images/uni-3.png" caption="دانشگاه شیراز" />
        <InfoCard image="./images/uni-4.png" caption="دانشگاه اصفهان" />
        <InfoCard image="./images/uni-5.png" caption="دانشگاه تهران" />
      </div>
    </section>
  );
  return content;
}

export default ColleagueSection;
