import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchModal from "./search-modal";
import MobileNav from "./mobile-nav";
import Sidenav from "./sidenav";

export default function Header() {
  // show hide header on scroll
  const header = useRef(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);

    window.onscroll = () => {
      setScrollTop(window.pageYOffset);
    };
    if (scrollTop > lastScrollTop) {
      header.current.classList.add("scroll_up");
    } else {
      header.current.classList.remove("scroll_up");
    }
    setLastScrollTop(scrollTop);

    return () => setDidMount(false);
  }, [scrollTop]);

  const showSearchModal = (event) => {
    document.querySelector(".search-modal-wrap").classList.add("active");
    document.querySelector(".search-modal").classList.add("active");
    document.body.classList.add("modal-active");

    setTimeout(function () {
      document
        .querySelector('.search-modal form.search input[type="text"]')
        .focus();
    }, 400);
  };

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobileNavOpen(open);
  };

  const [sidenavOpen, setSidenavOpen] = useState(false);
  const toggleSidenav = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSidenavOpen(open);
  };

  return (
    <>
      <header className="header opt_header" ref={header}>
        <div className="page-width">
          <div className="box">
            <div className="header-ctn">
              <ul className="main-menu">
                <li className="opt_menu_bar">
                  <div
                    className="opt_menu_bar_icon"
                    onClick={toggleSidenav(true)}
                  >
                    <span></span>
                    <span></span>
                  </div>
                </li>
                <li>
                  <Link href="/about">
                    <a>আমার সম্পর্কে</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>যোগাযোগ</a>
                  </Link>
                </li>
              </ul>

              <Link href="/">
                <a className="header-logo">
                  <Image
                    src="/img/dr-abu-bakr-zakaria-logo.png"
                    alt=""
                    width={100}
                    height={100}
                    objectFit="contain"
                    objectPosition="left center"
                    loading="eager"
                  />
                </a>
              </Link>

              <ul className="header-icons">
                <li>
                  <a
                    href="https://www.facebook.com/drmonzureelahiofficial"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCbMys3ID_1S8D1mZuYkoG2A"
                    target="_blank"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li className="menu-divider"></li>
                <li
                  className="search-icon"
                  title="search"
                  onClick={showSearchModal}
                >
                  <i className="fas fa-search"></i>
                </li>
              </ul>

              <ul className="mobile-icons">
                <li className="menu-burger" onClick={toggleMobileNav(true)}>
                  <i className="fas fa-bars"></i>
                </li>
                {/*<li*/}
                {/*	className="search-icon"*/}
                {/*	title="search"*/}
                {/*	onClick={showSearchModal}*/}
                {/*>*/}
                {/*	<i className="fas fa-search"></i>*/}
                {/*</li>*/}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <SearchModal />

      <MobileNav navOpen={mobileNavOpen} navControl={toggleMobileNav} />

      <Sidenav navOpen={sidenavOpen} navControl={toggleSidenav} />
    </>
  );
}
