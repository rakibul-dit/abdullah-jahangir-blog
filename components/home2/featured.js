import Link from "next/link";
import Image from "next/image";

export default function HomeFeatured() {
  return (
    <div className="h-sec opt_home_featured">
      <div className="page-width">
        <div className="box">
          <div className="card-r opt_home_featured_card">
            <div className="opt_home_featured_wrap">
              <div className="opt_home_featured_left">
                <Link href="/">
                  <a className="cat-r">কুরআন</a>
                </Link>
                <Link href="/">
                  <a className="title">
                    পিতা-মাতার অন্যায় আচরণে সন্তানের করণীয়
                  </a>
                </Link>
                <p>
                  পবিত্র হাদিসে বর্ণিত আছে, ‘মা-বাবার পায়ের নিচে সন্তানের
                  জান্নাত।’ এর মর্ম হলো, মা-বাবার সঙ্গে সদাচরণ ও তাদের সন্তুষ্ট
                  করার মাধ্যমেই সন্তানরা জান্নাতের উপযুক্ত হবে। এ ক্ষেত্রে বিধান
                  হলো, মা-বাবা সৎকর্মশীল হোক বা পাপী ও হত্যাকারী হোক, এমনকি
                  কাফিরই হোক
                </p>
              </div>

              <div className="opt_home_featured_right">
                <div className="opt_home_featured_image">
                  <Image
                    src="/img/rsz_20210407_211234.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
