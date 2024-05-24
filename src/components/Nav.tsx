// components
import Button from "./Button";
import { CartIcon, UserIcon } from "./SVGs";

// mui imports
import { DragHandle as BurgerIcon } from "@mui/icons-material";

export default function Nav(): JSX.Element {
  const content: JSX.Element = (
    <>
      <nav className="nav-lg">
        <div className="nav-lg__container">
          <div className="nav-lg__logo">
            <img src="./logo.png" alt="لوگو" className="nav-lg__logo--img" />
          </div>

          <div className="nav-lg__container-menu">
            <ul className="nav-lg__container--menu-list">
              <li className="nav-lg__container--menu-item">صفحه اصلی</li>
              <li className="nav-lg__container--menu-item">آکادمی</li>
              <li className="nav-lg__container--menu-item">مشاوره تخصصی</li>
              <li className="nav-lg__container--menu-item">فروشگاه</li>
              <li className="nav-lg__container--menu-item">مجله</li>
              <li className="nav-lg__container--menu-item">همکاری با ما</li>
              <li className="nav-lg__container--menu-item">پژوهشکده </li>
            </ul>
          </div>

          <div className="nav-lg__container--buttons">
            <Button type="button" variant="secondary">
              <CartIcon />
            </Button>
            <Button type="button" variant="secondary">
              <div className="flex-row">
                <UserIcon />
                <span className="nav-lg__container--buttons--text">
                  ورود / عضویت
                </span>
              </div>
            </Button>
          </div>
        </div>
      </nav>

      <nav className="nav-sm">
        <div className="nav-sm__container">
          <div className="nav-sm__container--burger">
            <BurgerIcon />
          </div>

          <div className="nav-sm__logo">
            <img src="./logo.png" alt="لوگو" className="nav-sm__logo--img" />
          </div>
        </div>
      </nav>
    </>
  );

  return content;
}
