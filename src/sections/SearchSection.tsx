// components
import Button from "../components/Button";
import SearchPrimary from "../components/SearchPrimary";
import IconCard from "../components/IconCard";

// mui imports
import { Add as AddIcon } from "@mui/icons-material";

function SearchSection() {
  const content = (
    <section className="searchSection">
      <div className="searchSection__search">
        <SearchPrimary />
      </div>

      <div className="searchSection__buttons">
        <div className="flex-row">
          <Button type="button" variant="quaternary">
            <span>دوره های آموزشی سلامت جسم</span>
          </Button>
          <Button type="button" variant="quaternary">
            <span>دوره های آموزشی سلامت جسم</span>
          </Button>
        </div>
        <Button type="button" variant="quaternary">
          <div className="flex flex-center">
            <AddIcon />
            <span>مشاهده همه</span>
          </div>
        </Button>
      </div>

      <div className="searchSection__iconCards">
        <ul className="searchSection__iconCards--list">
          <li>
            <IconCard link="#" title="آناتومی" icon="./images/anatomi.png" />
          </li>

          <li>
            <IconCard link="#" title="اعمال یداوی" icon="./images/sozan.png" />
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
    </section>
  );
  return content;
}

export default SearchSection;
