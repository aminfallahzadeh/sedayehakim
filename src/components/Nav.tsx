// components
import Button from "./Button";
import { CartIcon, UserIcon } from "./SVGs";

export default function Nav(): JSX.Element {
  const content: JSX.Element = (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <img src="./logo.png" alt="لوگو" className="nav__logo--img" />
        </div>

        <div className="nav__container-menu">
          <ul className="nav__container--menu-list">
            <li className="nav__container--menu-item">صفحه اصلی</li>
            <li className="nav__container--menu-item">آکادمی</li>
            <li className="nav__container--menu-item">مشاوره تخصصی</li>
            <li className="nav__container--menu-item">فروشگاه</li>
            <li className="nav__container--menu-item">مجله</li>
            <li className="nav__container--menu-item">همکاری با ما</li>
            <li className="nav__container--menu-item">پژوهشکده </li>
          </ul>
        </div>

        <div className="nav__container--buttons">
          <Button type="button" variant="secondary">
            <CartIcon />
          </Button>
          <Button type="button" variant="secondary">
            <div className="flex-row">
              <UserIcon />
              <span>ورود / عضویت</span>
            </div>
          </Button>
        </div>
      </div>
    </nav>
  );

  return content;
}
