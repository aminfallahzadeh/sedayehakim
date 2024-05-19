function ContactSection() {
  const content = (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__tel">
          <div className="contact__tel--icon">
            <img src="./images/phone-icon.png" alt="phone" />
          </div>
          <div className="contact__tel--text">
            <h2>
              تلفن پشتیبانی <span>333333333-021</span>
            </h2>
            <p>پاسخگو 8 صبح تا 5 عصر</p>
          </div>
        </div>
        <div className="contact__social">
          <div className="contact__social--insta">
            <p className="contact__social--insta-caption">
              ما را در اینستاگرام دنبال کنید
            </p>
            <img src="./images/insta-icon.png" alt="insta" />
          </div>
          <div className="contact__social--aparat">
            <p className="contact__social--aparat-caption">
              عضویت در کانال آپارات ما
            </p>
            <img src="./images/aparat-icon.png" alt="aparat" />
          </div>
          <div className="contact__social--telegram">
            <img src="./images/telegram-icon.png" alt="telegram" />
          </div>
        </div>
      </div>
    </section>
  );
  return content;
}

export default ContactSection;
