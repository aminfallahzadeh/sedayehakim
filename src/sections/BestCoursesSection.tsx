// components
import Button from "../components/Button";
import TitleSecondary from "../components/TitleSecondary";

// mui imports
import {
  Add as AddIcon,
  ArrowBackIos as ArrowLeftIcon,
  ArrowForwardIos as ArrowRightIcon,
} from "@mui/icons-material";
import { Card, CardContent, CardMedia } from "@mui/material";

function BestCoursesSection() {
  const content = (
    <section className="courses">
      <div className="courses__title">
        <TitleSecondary
          title="جدید ترین دوره ها"
          caption="دوره های آپدیت شده و جدید"
        ></TitleSecondary>
      </div>

      <div className="courses__container--cardbuttons">
        <Button type="button" variant="quaternary">
          <div className="flex flex-center">
            <AddIcon />
            <span>مشاهده همه</span>
          </div>
        </Button>

        <div className="flex flex-row">
          <Button type="button" variant="quaternary">
            <div className="flex flex-center">
              <ArrowRightIcon />
            </div>
          </Button>
          <Button type="button" variant="quaternary">
            <div className="flex flex-center">
              <ArrowLeftIcon />
            </div>
          </Button>
        </div>
      </div>
      <div className="courses__container--cards">
        <Card sx={{ maxWidth: 345, borderRadius: 3, cursor: "pointer" }}>
          <CardMedia
            component="img"
            alt="new-course-1"
            height="200"
            image="./images/new-course-1.png"
          />
          <CardContent>
            <span className="courses__container--cards-title">
              کتابخانه جامع طب سنتی - اسلامی
            </span>
          </CardContent>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="courses__container--cards-caption">
              <span className="courses__container--cards-price">700,000</span>
              <span className="courses__container--cards-currency">ریال</span>
            </div>
            <Button type="button" variant="primary">
              <span>خرید دوره</span>
            </Button>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345, borderRadius: 3, cursor: "pointer" }}>
          <CardMedia
            component="img"
            alt="new-course-1"
            height="200"
            image="./images/new-course-2.png"
          />
          <CardContent>
            <span className="courses__container--cards-title">
              کتابخانه جامع طب سنتی - اسلامی
            </span>
          </CardContent>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="courses__container--cards-caption">
              <span className="courses__container--cards-price">700,000</span>
              <span className="courses__container--cards-currency">ریال</span>
            </div>
            <Button type="button" variant="primary">
              <span>خرید دوره</span>
            </Button>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345, borderRadius: 3, cursor: "pointer" }}>
          <CardMedia
            component="img"
            alt="new-course-1"
            height="200"
            image="./images/new-course-3.png"
          />
          <CardContent>
            <span className="courses__container--cards-title">
              کتابخانه جامع طب سنتی - اسلامی
            </span>
          </CardContent>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="courses__container--cards-caption">
              <span className="courses__container--cards-price">700,000</span>
              <span className="courses__container--cards-currency">ریال</span>
            </div>
            <Button type="button" variant="primary">
              <span>خرید دوره</span>
            </Button>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345, borderRadius: 3, cursor: "pointer" }}>
          <CardMedia
            component="img"
            alt="new-course-1"
            height="200"
            image="./images/new-course-4.png"
          />
          <CardContent>
            <span className="courses__container--cards-title">
              کتابخانه جامع طب سنتی - اسلامی
            </span>
          </CardContent>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="courses__container--cards-caption">
              <span className="courses__container--cards-price">700,000</span>
              <span className="courses__container--cards-currency">ریال</span>
            </div>
            <Button type="button" variant="primary">
              <span>خرید دوره</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
  return content;
}

export default BestCoursesSection;
