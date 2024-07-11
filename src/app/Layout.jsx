import { Button } from "antd";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Layout = () => {
  return (
    <>
      <Head />
      <main className="main">
        <Outlet />
      </main>
      <Foot />
    </>
  );
};
const Head = () => {
  return (
    <section className="head">
      <div className="logo">
        <img src="/logo.png" />
      </div>

      <div className="right">
        <nav className="right-nav">
            <ul>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>About</Link>
                </li>
                <li>
                    <Link>Marketing plan</Link>
                </li>
            </ul>
        </nav>

        <div className="flex gap-1">
            <Button className="cta-btn">
            <FontAwesomeIcon icon={["fal", "coffee"]} />
            <i className="fa-solid fa-user"></i>
                Wallet Infomation
            </Button>
            <Button className="cta-btn">New Contribution</Button>
        </div>
      </div>
    </section>
  );
};
const Foot = () => {
  return <section className="foot">Foot</section>;
};
