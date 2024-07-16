import { Button, Drawer } from "antd";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ModalConnect } from "./ModalConnect";
export const Layout = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };
  const onOpenModal = () => {
    setOpenModal(true);
  }

  const onConnect = () => {};

  return (
    <>
      <Head showDrawer={showDrawer} onOpenConnect={onOpenModal} />
      <main className="main">
        <Outlet />
      </main>
      <Foot />
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        key="left"
        width={"100%"}
        className="nav-mobile"
      >
        <div className="close-icon" onClick={onClose}>
          <i className="fa-solid fa-xmark fa-lg"></i>
        </div>
        <NavItems onOpenConnect={onOpenModal} />
      </Drawer>
      <ModalConnect open={openModal} onClose={onCloseModal} onConnect={onConnect} />
    </>
  );
};
const Head = ({ showDrawer, onOpenConnect }) => {
  return (
    <section className="head">
      <div className="logo">
        <img src="/logo.png" />
      </div>
      <div className="nav-desktop">
        <NavItems onOpenConnect={onOpenConnect} />
      </div>
      <div className="right-mobile" onClick={showDrawer}>
        <i className="fa-solid fa-bars fa-lg"></i>
      </div>
    </section>
  );
};
const Foot = () => {
  return <section className="foot">Foot</section>;
};
const NavItems = ({onOpenConnect}) => {
  return (
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

      <div className="right-btn-group">
        <Button className="cta-btn" onClick={onOpenConnect}>
          <i className="fa-solid fa-credit-card"></i>
          Wallet Infomation
        </Button>
        <Button className="cta-btn">
          <i className="fa-solid fa-credit-card"></i>
          New Contribution
        </Button>
      </div>
    </div>
  );
};
