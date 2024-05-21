// components
import Button from "../components/Button";

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
      <div className="courses__header">
        <div className="courses__title">
          <div className="title-tertiary">
            <h3 className="title-tertiary__heding">پرفروش ترین دوره ها</h3>
            <span className="title-tertiary__caption">
              دوره های پرفروش سایت
            </span>
          </div>
        </div>

        <div className="courses__buttons">
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
      </div>

      <div className="courses__cards">
        <div className="courses__container--cards">
          <Card sx={{ maxWidth: 345, borderRadius: 3, cursor: "pointer" }}>
            <CardMedia
              component="img"
              alt="new-course-1"
              height="200"
              image="./images/new-course-1.png"
            />
            <CardContent>
              <span className="card__title">
                کتابخانه جامع طب سنتی - اسلامی
              </span>
            </CardContent>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="card__catption">
                <span className="card__price">700,000</span>
                <span className="card_currency">ریال</span>
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
              <span className="card__title">
                کتابخانه جامع طب سنتی - اسلامی
              </span>
            </CardContent>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="card__catption">
                <span className="card__price">700,000</span>
                <span className="card_currency">ریال</span>
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
              <span className="card__title">
                کتابخانه جامع طب سنتی - اسلامی
              </span>
            </CardContent>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="card__catption">
                <span className="card__price">700,000</span>
                <span className="card_currency">ریال</span>
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
              <span className="card__title">
                کتابخانه جامع طب سنتی - اسلامی
              </span>
            </CardContent>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="card__catption">
                <span className="card__price">700,000</span>
                <span className="card_currency">ریال</span>
              </div>
              <Button type="button" variant="primary">
                <span>خرید دوره</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
  return content;
}

export default BestCoursesSection;
