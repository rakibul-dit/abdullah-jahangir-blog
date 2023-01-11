import { youtube } from "../lib/config";
import Link from "next/link";

export default function Sidenav({ navOpen, navControl }) {
  const handleSidenavClose = (e) => {
    navControl(false)(e);
  };

  return (
    <>
      <div className={navOpen ? "opt_sidenav opt_open" : "opt_sidenav"}>
        <div className="opt_close" onClick={navControl(false)}></div>

        <div className="opt_sidenav_inner">
          <ul className="opt_sidenav_menu">
            <li>
              <Link href={`/lectures/${youtube.uploadPlaylistID}`}>
                <a>লেকচার</a>
              </Link>
            </li>
            <li>
              <Link href="/books/">
                <a>বই সমূহ</a>
              </Link>
            </li>
            <li>
              <Link href="/research-papers/">
                <a>রিসার্স পেপারস</a>
              </Link>
            </li>
            <li>
              <Link href="/articles/">
                <a>আর্টিকেলস</a>
              </Link>
            </li>
            <li>
              <Link href="/organizations/">
                <a>অর্গানাইজেশন</a>
              </Link>
            </li>
          </ul>

          <div className="opt_sidenav_social">
            <h2>সামাজিক</h2>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/drmonzureelahiofficial"
                  target="_blank"
                >
                  ফেসবুক
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCbMys3ID_1S8D1mZuYkoG2A"
                  target="_blank"
                >
                  ইউটিউব
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={
          navOpen ? "opt_sidenav_backdrop opt_open" : "opt_sidenav_backdrop"
        }
        onClick={handleSidenavClose}
      ></div>
    </>
  );
}
