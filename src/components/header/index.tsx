import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { enterpriseInfo } from "../../constants/enterpriseInfo";
import { navigation } from "../../constants/navigation";

import Button from "../button";
import "./style.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <div className="header__brand">
            <a href="/" className="header__logo">
              {enterpriseInfo.name}
            </a>
          </div>
          <ul className={`header__menu ${open ? "open" : ""}`}>
            {Object.entries(navigation).map(([key, value]) => (
              <li className="header__item" key={key}>
                <a
                  href={value}
                  className="header__link"
                  onClick={() => setOpen(false)}
                >
                  {key}
                </a>
              </li>
            ))}

            <li className="header__item header__cta-mobile">
              <Button
                href="/contact"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Entre em contato
              </Button>
            </li>
          </ul>
        </nav>
        <div className="cta__button">
          <Button
            href="/contact"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Entre em contato
          </Button>
        </div>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="header__toggle"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <IoClose size={22} /> : <IoMenu size={22} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
