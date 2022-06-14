import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const NavBar = () => {
  return (
    <div className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/Calender/about"> About</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
