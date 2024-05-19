// components
import FeatureCard from "../components/FeatureCard";
import Button from "../components/Button";

function WhySection() {
  const content = (
    <section className="why">
      <div className="why__heading">
        <h2 className="heading-secondary">چرا صدای حکیم ؟</h2>
        <p className="why__heading--desc">
          برخی از ویژگی ها و قابلیت های صدای حکیم
        </p>
      </div>

      <div className="why__cards">
        <FeatureCard
          image="./images/why-clock.png"
          title="یادگیری بدون توقف "
          caption="تمامی دوره ها به صورت کامل داخل پنل دانشجویان قرار دارد"
        />
        <FeatureCard
          image="./images/why-done.png"
          title="استادهای ارزیابی شده و معتبر"
          caption="ما صلاحیت آموزشی اساتید  صدای حکیم را با دقت، بررسی و تأیید می‌کنیم"
        />
        <FeatureCard
          image="./images/why-loc.png"
          title="پشتیبانی سریع"
          caption="تیم پشتیبانی ما هر روز هفته، پیگیر مشکلات و سوالات شما هستند"
        />
      </div>

      <div className="why__button">
        <Button type="button" variant="primary">
          <span>همین حالا شروع کن</span>
        </Button>
      </div>
    </section>
  );
  return content;
}

export default WhySection;
