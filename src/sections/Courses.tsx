// components
import SearchPrimary from "../components/SearchPrimary";
import IconCard from "../components/IconCard";

function Courses(): JSX.Element {
  const content = (
    <section className="courses">
      <div className="courses__search">
        <SearchPrimary />
      </div>

      <div className="courses__container">
        <div className="courses__container--buttons"></div>

        <div className="courses__container--cards">
          <ul className="courses__container--cards-list">
            <li>
              <IconCard link="#" title="آناتومی" icon="./images/anatomi.png" />
            </li>

            <li>
              <IconCard
                link="#"
                title="اعمال یداوی"
                icon="./images/sozan.png"
              />
            </li>
            <li>
              <IconCard link="#" title="عنبیه شناسی" icon="./images/eye.png" />
            </li>
            <li>
              <IconCard
                link="#"
                title="مبانی طب سنتی"
                icon="./images/teb sonati.png"
              />
            </li>
            <li>
              <IconCard
                link="#"
                title="فرآورده های آرایشی 
بهداشتی گیاهی "
                icon="./images/behdashti.png"
              />
            </li>
            <li>
              <IconCard link="#" title="ماساژ" icon="./images/massage.png" />
            </li>
            <li>
              <IconCard
                link="#"
                title="گیاهان دارویی"
                icon="./images/anatomi.png"
              />
            </li>
            <li>
              <IconCard
                link="#"
                title="اسانس و عصاره گیری "
                icon="./images/sozan.png"
              />
            </li>
            <li>
              <IconCard link="#" title="کیمیا" icon="./images/eye.png" />
            </li>
            <li>
              <IconCard
                link="#"
                title="کارآفرینی و اشتغال"
                icon="./images/teb sonati.png"
              />
            </li>
            <li>
              <IconCard
                link="#"
                title="زبان و کف شناسی"
                icon="./images/behdashti.png"
              />
            </li>
            <li>
              <IconCard
                link="#"
                title="تربیت مربی طب"
                icon="./images/massage.png"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
  return content;
}

export default Courses;
