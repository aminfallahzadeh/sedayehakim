function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <div className="footer__contact--container">
          <div className="footer__contact--tel">
            <div className="footer__contact--tel-icon">
              <img src="./images/phone-icon.png" alt="phone" />
            </div>
            <div className="footer__contact--tel-txt">
              <h2>
                تلفن پشتیبانی <span>333333333-021</span>
              </h2>
              <p>پاسخگو 8 صبح تا 5 عصر</p>
            </div>
          </div>
          <div className="footer__contact--social">
            <div className="footer__contact--social-insta">
              <p>ما را در اینستاگرام دنبال کنید</p>
              <img src="./images/insta-icon.png" alt="insta" />
            </div>
            <div className="footer__contact--social-aparat">
              <p>عضویت در کانال آپارات ما</p>
              <img src="./images/aparat-icon.png" alt="aparat" />
            </div>
            <div className="footer__contact--social-telegram">
              <img src="./images/telegram-icon.png" alt="telegram" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer__address">
        <div className="footer__address--address">
          <h2 className="footer__address--title">نشانی دفتر مرکزی</h2>

          <div>
            <p> تهران ستارخان نبش نیایش - پلاک ۳۲۱ واحد ۵ </p>
            <p>
              شماره تماس: <span>021-11111111</span>
            </p>
          </div>
        </div>

        <div className="footer__address--links">
          <h2 className="footer__address--title">لینک های کاربردی</h2>

          <ul className="footer__address--links-list">
            <li>
              <a href="#">درباره ما</a>
            </li>

            <li>
              <a href="#">تماس با ما</a>
            </li>

            <li>
              <a href="#">سیاست حریم خصوصی</a>
            </li>

            <li>
              <a href="#">همکاری با ما</a>
            </li>

            <li>
              <a href="#">سوالات متداول</a>
            </li>
          </ul>
        </div>

        <div className="footer__address--cards">
          <div className="footer__address--cards-card">
            <img src="./images/footer-1.png" alt="footer-1" />
          </div>

          <div className="footer__address--cards-card">
            <img src="./images/footer-2.png" alt="footer-2" />
          </div>
        </div>
      </div>

      <div className="footer__desc">
        <img src="./logo.png" alt="لوگو" className="footer__logo" />
        <p className="footer__text">
          تعدادی از پژوهشگران و متخصین دغدغه‌‌مند در حوزه‌ سبک زندگی برای نیل به
          هدف آگاهی عموم جامعه از گنجینه منابع سبک زندگی سالم و ایرانی-اسلامی
          اقدام به تشکیل اندیشکده سبک زندگی و خانواده صدای حکیم کردند. این
          اندیشکده بر خود فرض میداند تا آموزش های سبک زندگی را در حوزه‌های
          خانوداه، سلامت روان، مهارت های زندگی و طب سنتی به آسان ترین و با کیفیت
          ترین شکل ممکن به علاقمندان این حوزه و عموم مردم عزیز ایران تقدیم کند.
          اندیشکده سبک زندگی و خانواده صدای حکیم با بهره گیری از اساتید مجرب و
          بنام ترین اساتید دانشگاهی از پیشگامان برگزاری دوره های آموزشی سبک
          زندگی به صورت مجازی و حضوری با ارائه مدرک معتبر از مراکز آموزش عالی
          بوده است.
        </p>
      </div>
      <div className="footer__license flex-row flex-center">
        <div className="footer__lines"></div>
        <p className="footer__text">
          کلیه حقوق مادی و معنوی این سایت متعلق به اندیشکده سبک زندگی و خانواده
          صدای حکیم میباشد.
        </p>
        <div className="footer__lines"></div>
      </div>
    </footer>
  );
}

export default Footer;
