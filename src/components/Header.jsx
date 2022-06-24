import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
const navMenu = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
  { name: "Cart", path: "/cart" },
];
const Header = () => {
  const [active, setActive] = useState(0);
  const handleClick = (i) => {
    setActive(i);
  };
  return (
    <Fragment>
      <header className="header">
        <div className="wrapper container">
          <nav className="nav-menu">
            <div className="nav-list">
              {navMenu.map((item, i) => (
                <div className={`nav-item nav-item-${i}`} key={i}>
                  <Link
                    to={`${item.path}`}
                    onClick={() => handleClick(i)}
                    className={
                      active === i ? `nav-item__link active` : `nav-item__link`
                    }
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
